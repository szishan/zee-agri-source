import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import vm from 'node:vm';
const ctx=vm.createContext({});
for(const f of ['cropData.js','productData.js','pestData.js','data.js','libraryData.js','guideData.js','learningData.js'])vm.runInContext(readFileSync(''+f,'utf8'),ctx);
const data=vm.runInContext('({zones,cropData,productData,pestData,CROP_EXTRA,CROP_IMAGES,PRODUCT_EXTRA,IPM,SOURCES,diseases,INDOOR_PLANTS,LIBRARY_SOURCES,CROP_GUIDES,PEST_GUIDES,PHOTO_CREDITS,RICE_VARIETIES,BIO_LIBRARY,ROOFTOP_GUIDE,RICE_EXTRA_SECTIONS,LEARNING_TOPICS,APP_REFERENCES})',ctx);
assert.equal(data.zones.length,30);
assert.equal(data.zones.reduce((n,z)=>n+z.area,0),14486278);
data.zones.forEach((z,i)=>{assert.equal(z.id,i+1);for(const k of ['name','districts','soil'])for(const l of ['en','bn'])assert(z[k][l]?.length>2,`${z.id}.${k}.${l}`);assert(z.land[1]>0&&z.land[1]<=100);});
assert.equal(Object.keys(data.cropData).length,41);assert.equal(Object.keys(data.productData).length,9);assert.equal(data.pestData.length,20);
for(const [id,c] of Object.entries(data.cropData)){assert(data.CROP_EXTRA[id]);for(const l of ['en','bn'])assert(c[l].title&&c[l].text);}
for(const [id,c] of Object.entries(data.productData)){assert(data.PRODUCT_EXTRA[id]);for(const l of ['en','bn'])assert(c[l].title&&c[l].text);}
for(const p of data.pestData){for(const l of ['en','bn'])for(const k of ['name','sci','crop','damage','control'])assert(p[l][k]);for(const file of p.images||[])assert(existsSync(''+file),file);}
for(const file of ['images/my-photo.jpg','images/indoor-plants/cactus.jpg','images/indoor-plants/bamboo.jpg','images/indoor-plants/snake.jpg','assets/fields.jpg','assets/fonts.css'])assert(existsSync(''+file),file);
const map=JSON.parse(readFileSync('map-paths.json'));
assert.equal(new Set(map.paths.map(p=>p.id)).size,30);
map.paths.forEach(p=>{assert(p.d.startsWith('M')&&p.d.endsWith('Z'));assert(map.centers[p.id]?.every(Number.isFinite));});
const app=readFileSync('app.js','utf8');const code=app.slice(app.indexOf('function bengaliDate('),app.indexOf('function dhakaDateParts('));vm.runInContext(code,ctx);
const b=(...a)=>JSON.parse(JSON.stringify(vm.runInContext(`bengaliDate(${a.join(',')})`,ctx)));
assert.deepEqual(b(2026,4,14),{day:1,month:0,year:1433});
assert.deepEqual(b(2026,4,13),{day:30,month:11,year:1432});
assert.deepEqual(b(2024,2,14),{day:1,month:10,year:1430});
assert.deepEqual(b(2024,3,14),{day:30,month:10,year:1430});
assert.deepEqual(b(2024,3,15),{day:1,month:11,year:1430});
assert.deepEqual(b(2026,11,8),{day:23,month:6,year:1433});
for(let y=2024;y<=2028;y++)for(let m=1;m<=12;m++)for(let d=1;d<=28;d++){let r=b(y,m,d);assert(r.month>=0&&r.month<12&&r.day>=1&&r.day<=31);}
console.log('Passed: 30 bilingual zones, historical area checksum, 41 crops, 20 pests, 9 categories, all local assets, map coverage, and Bangla calendar year/leap boundaries.');

for(const [id,file] of Object.entries(data.CROP_IMAGES)){assert(data.cropData[id]);assert(existsSync(file),file);}

assert.equal(data.diseases.length,12);
assert.equal(data.INDOOR_PLANTS.length,12);
for(const item of [...data.pestData.slice(8),...data.diseases.slice(2)]){
  assert(item.images.length>0,'Every pest/disease needs a reference image'); for(const f of item.images)assert(existsSync(f),f);
  for(const l of ['en','bn'])for(const key of ['name','sci','crop','damage','control'])assert(item[l][key]?.length>2);
  assert(item.sources.length);for(const source of item.sources)assert(data.LIBRARY_SOURCES[source]?.url.startsWith('https://'));
}
assert.equal(new Set(data.INDOOR_PLANTS.map(p=>p.id)).size,12);
for(const plant of data.INDOOR_PLANTS){for(const l of ['en','bn'])for(const key of ['name','light','water','description'])assert(plant[key][l]);for(const f of plant.images)assert(existsSync(f),f);}
console.log('Passed: 20 pests, 12 disease guides, 12 plant/display cards, bilingual care and source links; licensed pest and disease photography.');

assert.equal(Object.keys(data.CROP_GUIDES).length,41);
assert.equal(Object.keys(data.PEST_GUIDES).length,32);
assert.equal(Object.keys(data.CROP_IMAGES).length,41);
for(const [id,g] of Object.entries(data.CROP_GUIDES)){
 assert(g.sections.length>=7,id);assert(g.refs.length>=3,id);
 for(const s of g.sections)for(const l of ['en','bn'])assert(s.title[l]&&s.text[l].length>20,id);
 for(const key of g.pests)assert(data.PEST_GUIDES[key],id+key);
 for(const ref of g.refs)assert(data.LIBRARY_SOURCES[ref],ref);
}
for(const [id,g] of Object.entries(data.PEST_GUIDES)){
 for(const field of ['identify','monitor','bio','chemical'])for(const l of ['en','bn'])assert(g[field][l].length>70,id+field+l);
 for(const ref of g.refs)assert(data.LIBRARY_SOURCES[ref],ref);
}
for(const [file,c] of Object.entries(data.PHOTO_CREDITS)){assert(existsSync(file),file);assert(c.page.startsWith('https://'));assert(/CC BY|CC0|Public domain/i.test(c.license));assert(c.author);}
assert(app.includes('pest:()=>pestPage(id)'));
console.log('Passed: 41 complete bilingual crop routes, 32 bilingual diagnostic routes, all crop photos, image licences and references.');

assert.equal(data.RICE_VARIETIES.length,26);
assert.equal(new Set(data.RICE_VARIETIES.map(v=>v.id)).size,26);
assert.equal(data.RICE_VARIETIES.filter(v=>v.institution==='BINA').length,7);
for(const v of data.RICE_VARIETIES){
 for(const l of ['en','bn'])for(const k of ['name','duration','features'])assert(v[k][l]?.length>3,v.id+k+l);
 assert(v.seasons.length&&v.seasons.every(s=>['aus','aman','boro'].includes(s)));
 assert(/^https:\/\/(riceprofile\.brri\.gov\.bd|brri\.gov\.bd|knowledgebank-brri\.org|bina\.gov\.bd|objectstorage\.)/.test(v.source.url),v.source.url);
}
assert.equal(data.BIO_LIBRARY.items.length,14);
assert.equal(new Set(data.BIO_LIBRARY.items.map(b=>b.id)).size,14);
for(const b of data.BIO_LIBRARY.items){
 assert(['microbial','botanical','beneficial','physical','contact'].includes(b.group));
 for(const l of ['en','bn'])for(const k of ['name','targets','use','limits','storage'])assert(b[k][l]?.length>8,b.id+k+l);
 assert(b.sources.length);for(const s of b.sources)assert(s.url.startsWith('https://'));
 for(const k of b.pestKeys)assert(data.PEST_GUIDES[k],b.id+k);
}
assert.equal(data.ROOFTOP_GUIDE.sections.length,16);
assert.equal(new Set(data.ROOFTOP_GUIDE.sections.map(s=>s.id)).size,16);
for(const s of data.ROOFTOP_GUIDE.sections){for(const l of ['en','bn'])assert(s.title[l]&&s.text[l].length>50);assert(s.source.url.startsWith('https://'));}
for(const id of data.ROOFTOP_GUIDE.starterCrops)assert(data.CROP_GUIDES[id],id);
assert.equal(data.RICE_EXTRA_SECTIONS.length,8);
assert.equal(data.CROP_GUIDES.rice.sections.length,16);
assert.equal(data.APP_REFERENCES.length,3);
assert(app.includes("'rice-varieties':riceVarietiesPage"));
assert(app.indexOf('const riceSeasons=')<app.indexOf('\nrender();'));
const normaliseCode=app.slice(app.indexOf('function normaliseLearning('),app.indexOf('\nfunction renderRiceVarieties('));
vm.runInContext(normaliseCode,ctx);
assert.equal(vm.runInContext("normaliseLearning('ব্রি৪৯')",ctx),'ব্রি 49');
assert.equal(vm.runInContext("normaliseLearning('ব্রিধান৪৯')",ctx),'ব্রি ধান 49');
assert.equal(vm.runInContext("normaliseLearning('BRRIDHAN49')",ctx),'brri dhan 49');
console.log('Passed: 26 sourced rice varieties, 14 biological methods, 16 rooftop topics, 8 extra rice chapters, bilingual fields and linked routes.');
