import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import vm from 'node:vm';
const ctx=vm.createContext({});
for(const f of ['cropData.js','productData.js','pestData.js','data.js'])vm.runInContext(readFileSync(''+f,'utf8'),ctx);
const data=vm.runInContext('({zones,cropData,productData,pestData,CROP_EXTRA,CROP_IMAGES,PRODUCT_EXTRA,IPM,SOURCES})',ctx);
assert.equal(data.zones.length,30);
assert.equal(data.zones.reduce((n,z)=>n+z.area,0),14486278);
data.zones.forEach((z,i)=>{assert.equal(z.id,i+1);for(const k of ['name','districts','soil'])for(const l of ['en','bn'])assert(z[k][l]?.length>2,`${z.id}.${k}.${l}`);assert(z.land[1]>0&&z.land[1]<=100);});
assert.equal(Object.keys(data.cropData).length,41);assert.equal(Object.keys(data.productData).length,9);assert.equal(data.pestData.length,8);
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
console.log('Passed: 30 bilingual zones, historical area checksum, 41 crops, 8 pests, 9 categories, all local assets, map coverage, and Bangla calendar year/leap boundaries.');

for(const [id,file] of Object.entries(data.CROP_IMAGES)){assert(data.cropData[id]);assert(existsSync(file),file);}
