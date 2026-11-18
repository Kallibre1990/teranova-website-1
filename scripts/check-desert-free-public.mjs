// Supplier restrictions from the accepted DESERT FREE source manifest.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const data=path.join(root,'src/data/suppliers-i18n');
const langs=['ru','en','ko','zh','ja','it','de','fr','tr','es','pt','he','hi'];
const forbidden=/\b(?:MOQ|RRP|FOB|price|prices|discount|payment|exclusive|exclusivity|retail|wholesale|e-commerce|Korea|Korean|China|Japan|USA|October|conflicting|omitted|prix|paiement|remise|exclusivit\w*|prezzo|prezzi|pagamento|sconto|Preis\w*|Zahlung\w*|Rabatt\w*|precio\w*|descuento\w*|pago\w*|preço\w*|pagamento\w*|fiyat\w*|ödeme\w*)\b|цен[аыу]|скидк|оплат|эксклюзив|октябр|Коре[яиюй]|가격|결제|할인|독점|한국|대한민국|10월|价格|折扣|付款|独家|韩国|韓国|価格|割引|支払|מחיר|הנחה|תשלום|בלעדיות|कीमत|छूट|भुगतान|अक्टूबर/iu;
const fail=[];
const lines=JSON.parse(fs.readFileSync(path.join(data,'desert-free.lines.json'),'utf8'));
for(const lang of langs){
 const d=JSON.parse(fs.readFileSync(path.join(data,`desert-free.${lang}.json`),'utf8')),c=d.content;
 const text=JSON.stringify(d);
 if(forbidden.test(text))fail.push(`${lang}: prohibited text: ${text.match(forbidden)[0]}`);
 if(c.origin||c.channels.length)fail.push(`${lang}: country/channel`);
 if(!/2025/.test(c.lines[3].note)||!c.terms.some(t=>/2025/.test(t.value)))fail.push(`${lang}: launch date absent`);
 if(!c.about.join(' ').includes('30')||!c.about.join(' ').includes('2020'))fail.push(`${lang}: company history absent`);
 for(let i=0;i<4;i++){
  const p=lines[i].i18n[lang];
  if(c.lines[i].note!==c.catalog_notes[i]||p.seoDesc!==c.lines[i].note||p.about[0]!==c.lines[i].note||p.itemNotes[0]!==c.lines[i].note)fail.push(`${lang}/${i}: copy mismatch`);
  if(i===0&&/CPNP|MoCRA/.test(JSON.stringify(p)))fail.push(`${lang}: sunscreen registration`);
 }
 if(!c.exportNote.includes('CPNP')||!c.exportNote.includes('MoCRA')||!c.exportNote.includes('BEAUTYBLVD'))fail.push(`${lang}: registration attribution`);
}
for(const name of ['desert-free.catalog.json','desert-free.lines.json']){
 const text=fs.readFileSync(path.join(data,name),'utf8');
 if(forbidden.test(text))fail.push(`${name}: prohibited text: ${text.match(forbidden)[0]}`);
}
const og=fs.readFileSync(path.join(root,'public/brand/og-desert-free.png'));
if(!og.equals(fs.readFileSync(path.join(root,'src/assets/suppliers/desert-free/logo.png'))))fail.push('OG differs from official logo');
if(process.argv[2])for(const name of fs.readdirSync(process.argv[2]).filter(x=>/^desert-free-.*\.txt$/.test(x))){
 const text=fs.readFileSync(path.join(process.argv[2],name),'utf8');
 if(forbidden.test(text))fail.push(`${name}: prohibited text: ${text.match(forbidden)[0]}`);
 if(!text.includes('2025'))fail.push(`${name}: launch date absent`);
}
// Confirm that the scan rejects the commercial data it is intended to catch.
if(!forbidden.test('MOQ 100')||!forbidden.test('가격')||!forbidden.test('October'))throw new Error('negative controls failed');
if(fail.length){console.error(fail.join('\n'));process.exit(1);}
console.log('DESERT FREE public checks: 13 locales, 52 product copies, official OG and supplied PDF extracts OK.');
