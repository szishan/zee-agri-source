/* Zee Agri public content adapter. Public feed only; no Studio credentials. */
(function () {
  'use strict';
  const sections = ['crops', 'pests', 'ipm', 'products', 'aez', 'pages', 'guides'];
  const localizedFields = ['name', 'description', 'season', 'soil', 'pestDisease', 'ipm', 'usage', 'districts'];
  const repoBase = new URL('.', document.baseURI || window.location.href);
  const localFeed = new URL('cms-content.json', repoBase).href;
  const state = { authoritative: false, revision: '', publishedAt: '', entries: [], routes: new Map(), loading: false, lastAttempt: 0 };
  const filters = new Map();
  const bi = (en, bn) => ({ en, bn });
  const labels = {
    crops: bi('Crops', 'ফসল'), pests: bi('Pest & disease', 'পোকা ও রোগ'), ipm: bi('IPM', 'আইপিএম'),
    products: bi('Products & indoor plants', 'পণ্য ও ইনডোর গাছ'), aez: bi('Agro zones', 'কৃষি অঞ্চল'),
    guides: bi('Growing guides', 'চাষের নির্দেশিকা'), pages: bi('Pages', 'পাতা'),
    description: bi('Details', 'বিস্তারিত'), season: bi('Season', 'মৌসুম'), soil: bi('Soil & growing medium', 'মাটি ও চাষের মাধ্যম'),
    pestDisease: bi('Pests, diseases & symptoms', 'পোকা, রোগ ও লক্ষণ'), usage: bi('Use & care instructions', 'ব্যবহার ও পরিচর্যার নির্দেশনা'),
    districts: bi('Districts & location', 'জেলা ও অবস্থান'), name: bi('Name', 'নাম'),
  };
  const categoryLabels = {
    cereal: bi('Cereals', 'দানাদার ফসল'), vegetable: bi('Vegetables', 'সবজি'), pulse: bi('Pulses', 'ডাল'),
    oilseed: bi('Oilseeds', 'তেলবীজ'), spice: bi('Spices', 'মসলা'), fruit: bi('Fruit', 'ফল'),
    pest: bi('Pests & mites', 'পোকা ও মাকড়'), disease: bi('Diseases & symptoms', 'রোগ ও লক্ষণ'),
    'indoor-plants': bi('Indoor plants', 'ইনডোর গাছ'), 'ipm-principle': bi('IPM principles', 'আইপিএমের ধাপ'),
    'rice-cultivation': bi('Rice cultivation', 'ধান চাষ'), 'rice-varieties': bi('Rice varieties', 'ধানের জাত'),
    'rooftop-gardening': bi('Rooftop gardening', 'ছাদবাগান'), 'biological-management': bi('Biological management', 'জৈব ব্যবস্থাপনা'),
    'site-page': bi('Website pages', 'ওয়েবসাইটের পাতা'),
  };
  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const language = lang => lang === 'bn' ? 'bn' : 'en';
  const text = (value, lang) => typeof value === 'string' ? value : value && (value[language(lang)] || value[language(lang) === 'bn' ? 'en' : 'bn']) || '';
  const localized = value => ({ bn: typeof value?.bn === 'string' ? value.bn.slice(0, 100000) : '', en: typeof value?.en === 'string' ? value.en.slice(0, 100000) : '' });
  const number = (value, lang) => new Intl.NumberFormat(language(lang) === 'bn' ? 'bn-BD' : 'en-GB').format(value);
  const category = (value, lang) => text(categoryLabels[value] || value, lang);
  const slug = value => String(value || '').trim().toLowerCase().replace(/[^\p{L}\p{N}_-]+/gu, '-').replace(/^-+|-+$/g, '').slice(0, 140);
  const routePart = value => encodeURIComponent(String(value));
  const dateText = (value, lang) => { const date = new Date(value); return Number.isFinite(date.getTime()) ? new Intl.DateTimeFormat(language(lang) === 'bn' ? 'bn-BD' : 'en-GB', { dateStyle: 'medium' }).format(date) : ''; };

  function safeURL(value, externalOnly) {
    if (typeof value !== 'string') return '';
    const raw = value.trim();
    if (!raw || raw.length > 4096 || /[\u0000-\u001f\u007f\\]/.test(raw) || raw.startsWith('//')) return '';
    try {
      if (/^https?:\/\//i.test(raw)) {
        const url = new URL(raw);
        return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password ? url.href : '';
      }
      if (externalOnly || /^[a-z][a-z\d+.-]*:/i.test(raw) || raw.startsWith('#') || raw.startsWith('?')) return '';
      // Root-style image paths in the feed are repository-relative on GitHub Pages.
      let relative = raw;
      if (raw.startsWith('/')) relative = raw.startsWith(repoBase.pathname) ? raw.slice(repoBase.pathname.length) : raw.replace(/^\/+/, '');
      const url = new URL(relative, repoBase);
      const decoded = decodeURIComponent(url.pathname);
      const basePath = decodeURIComponent(repoBase.pathname);
      if (url.origin !== repoBase.origin || !decoded.startsWith(basePath) || decoded.split('/').some(p => p === '..' || p === '.')) return '';
      return url.href;
    } catch (_) { return ''; }
  }

  function linkedText(value) {
    const input = String(value || '');
    const pattern = /https?:\/\/[^\s<>"']+/gi;
    let output = '', end = 0;
    for (const match of input.matchAll(pattern)) {
      const raw = match[0].replace(/[.,;!\]।]+$/g, '');
      const url = safeURL(raw, true);
      output += esc(input.slice(end, match.index));
      output += url ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(raw)}</a>` : esc(raw);
      output += esc(match[0].slice(raw.length));
      end = match.index + match[0].length;
    }
    return (output + esc(input.slice(end))).replace(/\r?\n/g, '<br>');
  }
  const richText = value => String(value || '').split(/\r?\n\s*\r?\n/).filter(Boolean).map(p => `<p>${linkedText(p)}</p>`).join('');
  const field = (title, value) => value ? `<section class="card card-pad cms-field"><h2>${esc(title)}</h2><div class="cms-prose">${richText(value)}</div></section>` : '';
  const routeLink = (href, title, className = 'link') => `<a class="${className}" href="#${esc(href)}">${esc(title)}</a>`;
  const placeholder = '<div class="cms-photo-placeholder" aria-hidden="true"><svg viewBox="0 0 48 48" width="54" height="54" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 42V22M24 30C7 31 7 12 7 12s18-2 17 18ZM24 23C23 6 41 5 41 5s2 18-17 18Z"/></svg></div>';

  function routeFor(entry) {
    const key = entry.legacyKey || entry.slug || entry.id;
    if (entry.section === 'crops') return 'crop/' + routePart(key);
    if (entry.section === 'pests') return 'pest/' + routePart(key);
    if (entry.section === 'products') return (entry.isPlant ? 'plant/' : 'category/') + routePart(key);
    if (entry.section === 'aez') return 'aez/' + routePart(entry.zoneNumber || key);
    if (entry.section === 'ipm') return 'ipm/' + routePart(key);
    if (entry.section === 'pages') return ({ 'page-home': 'home', 'page-farmer-help': 'help', 'page-about': 'about', 'page-contact': 'contact' })[entry.id] || 'page/' + routePart(key);
    if (entry.id === 'guide-rice-varieties') return 'rice-varieties';
    if (entry.id === 'guide-rooftop') return 'rooftop';
    if (entry.id === 'guide-biopesticides') return 'biopesticides';
    return 'guide/' + routePart(key);
  }

  function normalize(raw) {
    if (!raw || typeof raw !== 'object' || !sections.includes(raw.section) || typeof raw.id !== 'string' || !/^[\p{L}\p{N}_.-]{1,160}$/u.test(raw.id)) throw new Error('Invalid public entry.');
    const entry = { id: raw.id, section: raw.section, slug: slug(raw.slug || raw.id), category: String(raw.category || 'general').slice(0, 160), updatedAt: String(raw.updatedAt || ''), images: [], zoneNumber: Number(raw.zoneNumber) || null, areaHa: Number(raw.areaHa) || 0 };
    for (const key of localizedFields) entry[key] = localized(raw[key]);
    if (!entry.name.bn && !entry.name.en) throw new Error('Public entry has no name.');
    for (const image of Array.isArray(raw.images) ? raw.images.slice(0, 40) : []) {
      const url = safeURL(image?.url);
      if (url) entry.images.push({ id: String(image.id || ''), url, name: String(image.name || '').slice(0, 240), alt: localized(image.alt), credit: String(image.credit || '').slice(0, 2000) });
    }
    if (entry.section === 'crops' && /^crop-/.test(entry.id)) entry.legacyKey = entry.id.slice(5);
    if (entry.section === 'pests' && /^pest-[pd]\d+$/.test(entry.id)) entry.legacyKey = entry.id.slice(5);
    if (entry.section === 'products' && /^product-/.test(entry.id)) entry.legacyKey = entry.id.slice(8);
    entry.isPlant = entry.section === 'products' && (entry.id.startsWith('plant-') || entry.category === 'indoor-plants');
    if (entry.isPlant && entry.id.startsWith('plant-')) entry.legacyKey = entry.id.slice(6);
    entry.href = routeFor(entry);
    return entry;
  }

  function install(payload) {
    if (!payload || payload.schemaVersion !== 1 || !Array.isArray(payload.entries) || payload.entries.length > 5000) throw new Error('Invalid public feed.');
    const ids = new Set();
    const entries = payload.entries.filter(raw => raw?.status === 'published' && !raw.deletedAt).map(raw => {
      const entry = normalize(raw);
      if (ids.has(entry.id)) throw new Error('Repeated public entry.');
      ids.add(entry.id); return entry;
    });
    const revision = String(payload.revision || payload.publishedAt || JSON.stringify(payload.entries)).slice(0, 20000000);
    if (state.authoritative && revision === state.revision) return false;
    const routes = new Map();
    for (const entry of entries) {
      for (const alias of [entry.href, `${entry.section === 'crops' ? 'crop' : entry.section === 'pests' ? 'pest' : entry.section === 'products' ? entry.isPlant ? 'plant' : 'category' : entry.section === 'guides' ? 'guide' : entry.section === 'pages' ? 'page' : entry.section}/${routePart(entry.slug)}`, `${entry.section === 'crops' ? 'crop' : entry.section === 'pests' ? 'pest' : entry.section === 'products' ? entry.isPlant ? 'plant' : 'category' : entry.section === 'guides' ? 'guide' : entry.section === 'pages' ? 'page' : entry.section}/${routePart(entry.id)}`]) {
        if (!routes.has(alias)) routes.set(alias, entry);
      }
    }
    state.entries = entries; state.routes = routes; state.revision = revision; state.publishedAt = String(payload.publishedAt || ''); state.authoritative = true;
    window.dispatchEvent(new CustomEvent('zeeagri:content', { detail: { revision, publishedAt: state.publishedAt } }));
    return true;
  }

  async function fetchFeed(url) {
    const response = await fetch(url, { cache: 'no-store', credentials: 'omit', mode: 'cors', signal: AbortSignal.timeout(20000) });
    if (!response.ok) throw new Error('Public feed unavailable.');
    const body = await response.text();
    if (body.length > 20000000) throw new Error('Public feed is too large.');
    return JSON.parse(body);
  }
  async function refresh() {
    if (state.loading) return false;
    state.loading = true; state.lastAttempt = Date.now();
    try {
      const configured = safeURL(window.ZEE_AGRI_CONTENT_URL);
      try { return install(await fetchFeed(configured || localFeed)); }
      catch (_) {
        // A temporary outage must never replace a newer, already loaded revision.
        if (!state.authoritative && configured && configured !== localFeed) return install(await fetchFeed(localFeed));
        return false;
      }
    } catch (_) { return false; }
    finally { state.loading = false; }
  }

  const collection = section => state.entries.filter(entry => entry.section === section);
  function unavailable(lang) {
    return `<div class="wrap cms-unavailable"><div class="page-top"><h1>${esc(text(bi('This information is unavailable', 'এই তথ্য এখন পাওয়া যাচ্ছে না'), lang))}</h1><p>${esc(text(bi('Explore the currently published information from the menu.', 'মেনু থেকে বর্তমানে প্রকাশিত তথ্য দেখুন।'), lang))}</p>${routeLink('home', text(bi('Home', 'হোম'), lang), 'btn secondary')}</div></div>`;
  }
  function top(title, subtitle, lang, back) {
    return `<div class="page-top"><div class="breadcrumb">${routeLink('home', text(bi('Home', 'হোম'), lang))}${back ? ` <span aria-hidden="true">›</span> ${routeLink(back, text(labels[back] || back, lang))}` : ''}</div><h1>${esc(title)}</h1>${subtitle ? `<p>${esc(subtitle)}</p>` : ''}</div>`;
  }
  function gallery(entry, lang) {
    if (!entry.images.length) return '';
    return `<section class="cms-gallery ${entry.images.length > 1 ? 'cms-gallery-multiple' : ''}">${entry.images.map((image, index) => `<figure class="card"><a href="${esc(image.url)}" target="_blank" rel="noopener noreferrer"><img src="${esc(image.url)}" alt="${esc(text(image.alt, lang) || text(entry.name, lang))}" loading="${index ? 'lazy' : 'eager'}" decoding="async" width="960" height="640"></a>${image.credit ? `<figcaption class="photo-credit">${linkedText(image.credit)}</figcaption>` : ''}</figure>`).join('')}</section>`;
  }
  function fields(entry, lang, compact, omitDescription) {
    let html = gallery(entry, lang);
    for (const key of ['description', 'season', 'soil', 'pestDisease', 'ipm', 'usage', 'districts']) if (!(omitDescription && key === 'description')) html += field(text(labels[key], lang), text(entry[key], lang));
    if (entry.section === 'aez') html += field(text(bi('AEZ & mapped area', 'এইজেড ও মানচিত্রের আয়তন'), lang), `${text(bi('AEZ', 'এইজেড'), lang)} ${number(entry.zoneNumber, lang)} · ${number(entry.areaHa, lang)} ${text(bi('ha', 'হেক্টর'), lang)}`);
    if (!compact && entry.updatedAt) html += `<p class="guide-note cms-updated">${esc(text(bi('Last updated', 'সর্বশেষ সম্পাদনা'), lang))}: ${esc(dateText(entry.updatedAt, lang))}</p>`;
    return html;
  }
  function card(entry, lang) {
    const photo = entry.images[0];
    const summary = text(entry.description, lang).split(/\n\s*\n/)[0].replace(/\s+/g, ' ').slice(0, 230);
    return `<a class="card cms-card" href="#${esc(entry.href)}">${photo ? `<div class="cms-card-photo"><img src="${esc(photo.url)}" alt="${esc(text(photo.alt, lang) || text(entry.name, lang))}" loading="lazy" decoding="async" width="960" height="640"></div>` : placeholder}<div class="card-pad"><span class="mini-label">${esc(category(entry.category, lang))}</span><h3>${esc(text(entry.name, lang))}</h3>${summary ? `<p>${esc(summary)}</p>` : ''}${text(entry.season, lang) ? `<p class="cms-card-season">${esc(text(entry.season, lang))}</p>` : ''}<span class="link">${esc(text(bi('Open details', 'বিস্তারিত দেখুন'), lang))} <span aria-hidden="true">↗</span></span></div></a>`;
  }
  function sorted(entries, mode, lang) {
    const collator = new Intl.Collator(language(lang) === 'bn' ? 'bn' : 'en', { numeric: true });
    return [...entries].sort((a, b) => {
      if (a.section === 'aez' && b.section === 'aez') return (a.zoneNumber || 0) - (b.zoneNumber || 0);
      if (a.section === 'ipm' && b.section === 'ipm' && mode !== 'name') return collator.compare(a.legacyKey || a.slug, b.legacyKey || b.slug);
      if (mode === 'updated') return (Date.parse(b.updatedAt) || 0) - (Date.parse(a.updatedAt) || 0);
      if (mode === 'category') { const order = collator.compare(category(a.category, lang), category(b.category, lang)); if (order) return order; }
      return collator.compare(text(a.name, lang), text(b.name, lang));
    });
  }
  function cards(section, options = {}, lang = 'en') {
    if (!state.authoritative) return null;
    let entries = collection(section);
    if (options.category) entries = entries.filter(e => e.category === options.category);
    if (Array.isArray(options.ids)) {
      entries = options.ids.flatMap(id => entries.find(e => [e.id, e.slug, e.legacyKey].includes(id)) || []);
    } else entries = sorted(entries, options.sort || 'category', lang);
    if (Number.isFinite(options.limit)) entries = entries.slice(0, Math.max(0, options.limit));
    return entries.length ? `<div class="grid three cms-grid">${entries.map(e => card(e, lang)).join('')}</div>` : '';
  }
  function detail(entry, lang) {
    const back = entry.section === 'pages' ? 'home' : entry.section;
    const related = entry.section === 'products' && entry.legacyKey === 'indoor' ? collection('products').filter(e => e.isPlant) : [];
    return `<div class="wrap cms-detail">${top(text(entry.name, lang), category(entry.category, lang), lang, back)}<div class="page-content detail-layout"><div class="stack">${fields(entry, lang)}${related.length ? `<section class="section"><h2>${esc(text(bi('Indoor plant collection', 'ইনডোর গাছের সংগ্রহ'), lang))}</h2><div class="grid three cms-grid">${sorted(related, 'name', lang).map(e => card(e, lang)).join('')}</div></section>` : ''}</div><aside class="stack"><section class="card card-pad"><h2>${esc(text(bi('Explore more', 'আরও জানুন'), lang))}</h2>${['guides', 'crops', 'pests', 'ipm', 'products', 'aez'].map(s => routeLink(s, text(labels[s], lang))).join('')}${routeLink('help', text(bi('Get farmer help', 'কৃষি সহায়তা নিন'), lang), 'btn full')}</section></aside></div></div>`;
  }
  function listResults(section, lang) {
    const filter = filters.get(section) || { query: '', category: '', sort: 'category' };
    const query = filter.query.trim().toLocaleLowerCase();
    const entries = sorted(collection(section).filter(e => (!filter.category || e.category === filter.category) && (!query || JSON.stringify([e.name, e.description, e.category, e.season, e.soil, e.pestDisease, e.districts]).toLocaleLowerCase().includes(query))), filter.sort, lang);
    return { count: entries.length, html: entries.length ? `<div class="grid three cms-grid">${entries.map(e => card(e, lang)).join('')}</div>` : `<div class="empty">${esc(text(bi('No results. Try another search or category.', 'কিছু পাওয়া যায়নি। অন্য নামে বা ধরনে খুঁজুন।'), lang))}</div>` };
  }
  function listPage(section, lang) {
    const filter = filters.get(section) || { query: '', category: '', sort: 'category' };
    filters.set(section, filter);
    const categories = [...new Set(collection(section).map(e => e.category))].sort((a, b) => category(a, lang).localeCompare(category(b, lang)));
    const results = listResults(section, lang);
    return `<div class="wrap cms-list" data-cms-list="${section}" data-cms-language="${language(lang)}">${top(text(labels[section], lang), text(bi('Explore the published information and open a card for the complete guide.', 'প্রকাশিত তথ্য খুঁজুন এবং পুরো নির্দেশিকা পড়তে কার্ড খুলুন।'), lang), lang)}<div class="page-content"><div class="toolbar cms-toolbar"><label class="sr-only" for="cms-list-search">${esc(text(bi('Search information', 'তথ্য খুঁজুন'), lang))}</label><input id="cms-list-search" type="search" data-cms-search value="${esc(filter.query)}" placeholder="${esc(text(bi('Search in Bangla or English', 'বাংলা বা ইংরেজিতে খুঁজুন'), lang))}"><label class="sr-only" for="cms-list-category">${esc(text(bi('Category', 'ধরন'), lang))}</label><select id="cms-list-category" data-cms-category><option value="">${esc(text(bi('All categories', 'সব ধরন'), lang))}</option>${categories.map(c => `<option value="${esc(c)}"${filter.category === c ? ' selected' : ''}>${esc(category(c, lang))}</option>`).join('')}</select><label class="sr-only" for="cms-list-sort">${esc(text(bi('Sort', 'সাজান'), lang))}</label><select id="cms-list-sort" data-cms-sort>${[['category', bi('By category', 'ধরন অনুযায়ী')], ['name', bi('By name', 'নাম অনুযায়ী')], ['updated', bi('Recently updated', 'সর্বশেষ সম্পাদনা')]].map(([key, label]) => `<option value="${key}"${filter.sort === key ? ' selected' : ''}>${esc(text(label, lang))}</option>`).join('')}</select></div><p class="results-count" data-cms-count role="status">${number(results.count, lang)} ${esc(text(bi('results', 'টি ফলাফল'), lang))}</p><div data-cms-results>${results.html}</div></div></div>`;
  }

  function page(key) {
    if (!state.authoritative) return null;
    const ids = { home: 'page-home', help: 'page-farmer-help', 'farmer-help': 'page-farmer-help', about: 'page-about', contact: 'page-contact' };
    return state.entries.find(e => e.id === ids[key] || e.section === 'pages' && e.slug === key) || null;
  }
  function pageBlock(key, lang = 'en', options = {}) {
    if (!state.authoritative) return null;
    const entry = page(key);
    const displayEntry = entry && options.skipImages ? { ...entry, images: entry.images.slice(Math.max(0, Number(options.skipImages) || 0)) } : entry;
    return entry ? `<section class="section cms-page-block" data-cms-page="${esc(key)}">${options.omitHeading ? '' : `<div class="section-head"><h2>${esc(text(entry.name, lang))}</h2></div>`}<div class="stack">${fields(displayEntry, lang, false, options.omitDescription)}</div></section>` : '';
  }
  function renderZone(zoneNumber, lang = 'en') {
    if (!state.authoritative) return null;
    const entry = collection('aez').find(e => e.zoneNumber === Number(zoneNumber));
    return entry ? `<div class="cms-zone"><span class="tag">${esc(text(bi('AEZ', 'এইজেড'), lang))} ${number(entry.zoneNumber, lang)}</span><h2>${esc(text(entry.name, lang))}</h2>${fields(entry, lang, true)}${routeLink(entry.href, text(bi('Open full zone information', 'অঞ্চলের বিস্তারিত খুলুন'), lang))}</div>` : unavailable(lang);
  }
  function zones() {
    if (!state.authoritative) return null;
    return collection('aez').sort((a, b) => a.zoneNumber - b.zoneNumber).map(entry => ({ id: entry.zoneNumber, name: entry.name, districts: entry.districts, soil: entry.soil, area: entry.areaHa, type: entry.category, entry }));
  }
  function renderRoute(currentRoute, lang = 'en') {
    if (!state.authoritative) return null;
    const route = String(currentRoute || 'home').replace(/^#\/?/, '').replace(/\/+$/, '') || 'home';
    const [head, key] = route.split('/');
    if (['home', 'help', 'about', 'contact'].includes(head)) return page(head) ? null : unavailable(lang);
    if (head === 'aez' && !key) return null;
    if (sections.includes(head) && !key) return listPage(head, lang);
    if (head === 'rice-variety') return state.entries.some(e => e.id === 'guide-rice-varieties') ? null : unavailable(lang);
    if (head === 'biopesticide') return state.entries.some(e => e.id === 'guide-biopesticides') ? null : unavailable(lang);
    const entry = state.routes.get(route);
    if (entry) return detail(entry, lang);
    if (['crop', 'pest', 'category', 'plant', 'guide', 'page', 'ipm', 'aez', 'rice-varieties', 'rooftop', 'biopesticides'].includes(head)) return unavailable(lang);
    return null;
  }
  function search(query = '', lang = 'en') {
    if (!state.authoritative) return null;
    const needle = String(query).trim().toLocaleLowerCase();
    const results = sorted(state.entries.filter(e => !needle || JSON.stringify([e.name, e.description, e.season, e.soil, e.pestDisease, e.category, e.districts]).toLocaleLowerCase().includes(needle)), 'name', lang);
    return `<div class="mini-label cms-search-count">${number(results.length, lang)} ${esc(text(bi('results', 'টি ফলাফল'), lang))}</div>${results.length ? results.slice(0, 60).map(e => `<a class="search-result" href="#${esc(e.href)}" data-action="search-result"${e.section === 'aez' ? ` data-zone="${number(e.zoneNumber, 'en').replace(/,/g, '')}"` : ''}><strong>${esc(text(e.name, lang))}</strong><small>${esc(text(labels[e.section], lang))}</small></a>`).join('') : `<div class="empty">${esc(text(bi('No results. Try another term in Bangla or English.', 'কিছু পাওয়া যায়নি। বাংলা বা ইংরেজিতে অন্য শব্দ লিখুন।'), lang))}</div>`}`;
  }

  function filterEvent(event) {
    const target = event.target;
    if (!target?.matches?.('[data-cms-search],[data-cms-category],[data-cms-sort]')) return;
    const root = target.closest('[data-cms-list]');
    if (!root) return;
    const section = root.dataset.cmsList, lang = root.dataset.cmsLanguage;
    const filter = filters.get(section) || { query: '', category: '', sort: 'category' };
    if (target.hasAttribute('data-cms-search')) filter.query = target.value;
    if (target.hasAttribute('data-cms-category')) filter.category = target.value;
    if (target.hasAttribute('data-cms-sort')) filter.sort = target.value;
    filters.set(section, filter);
    const results = listResults(section, lang);
    root.querySelector('[data-cms-results]').innerHTML = results.html;
    root.querySelector('[data-cms-count]').textContent = `${number(results.count, lang)} ${text(bi('results', 'টি ফলাফল'), lang)}`;
  }
  window.ZeeAgriPublicCMS = Object.freeze({
    isAuthoritative: () => state.authoritative, refresh, renderRoute, renderZone, cards, search, page, pageBlock, zones,
    counts: () => state.authoritative ? Object.fromEntries(sections.map(s => [s, collection(s).length])) : null,
    revision: () => state.revision,
  });
  document.addEventListener('input', filterEvent);
  document.addEventListener('change', filterEvent);
  window.addEventListener('focus', () => { if (Date.now() - state.lastAttempt > 5000) refresh(); });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && Date.now() - state.lastAttempt > 5000) refresh(); });
  window.setInterval(() => { if (document.visibilityState !== 'hidden') refresh(); }, 60000);
  refresh();
}());
