'use strict';
// Only the connection-help page and app icons are stored. Content, configuration,
// private Studio links, API responses and normal pages are always fetched online.
const CACHE = 'zee-agri-reader-shell-v1';
const PREFIX = 'zee-agri-reader-shell-';
const appRoot = new URL('./', self.registration.scope);
const OFFLINE = new URL('offline.html', appRoot).href;
const SHELL = ['offline.html','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png'].map(path=>new URL(path,appRoot).href);
self.addEventListener('install', event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL.map(url=>new Request(url,{cache:'reload',credentials:'omit'})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==appRoot.origin||!url.pathname.startsWith(appRoot.pathname))return;
 // Never intercept API, sign-in, the CMS feed, or the private editing app.
 const relative=url.pathname.slice(appRoot.pathname.length);
 if(relative.startsWith('api/')||/^(signin-with-chatgpt|signout-with-chatgpt|callback)(?:\/|$)/.test(relative)||relative==='cms-config.js'||relative==='cms-content.json')return;
 if(request.mode==='navigate'){
  event.respondWith(fetch(request).catch(async()=>await caches.match(OFFLINE)||new Response('You are offline. Reconnect to open Zee Agri.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})));
  return;
 }
 if(SHELL.includes(url.href))event.respondWith(fetch(request).catch(()=>caches.match(url.href)));
});
