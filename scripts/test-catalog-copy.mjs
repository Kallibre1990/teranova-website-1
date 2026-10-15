import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { catalogCopyIssues } from './catalog-copy-coverage.mjs';

const bundle = await build({
  stdin: { contents: `export { suppliers, supplierContent } from './src/data/suppliers'; export { catalogText } from './src/i18n/strict-content'; export { supplierJsonLd } from './src/data/jsonld';`, resolveDir: process.cwd(), loader: 'ts' },
  bundle: true, write: false, platform: 'node', format: 'esm', logLevel: 'silent',
});
const api = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
const doobom = api.suppliers.find(s => s.slug === 'doobom');
const skinroom = api.suppliers.find(s => s.slug === 'skinroom');
for (const lang of ['he', 'hi']) {
  assert.deepEqual(catalogCopyIssues(api.suppliers, lang), []);
  const source = structuredClone(doobom);
  for (const group of source.catalog) {
    assert.notEqual(api.catalogText(group.line, group.lineI18n, lang), group.line);
    for (const item of group.items) {
      if (item.volumeI18n) assert.notEqual(api.catalogText(item.volume, item.volumeI18n, lang), item.volume);
      else if (item.volume) assert.equal(api.catalogText(item.volume, undefined, lang), item.volume);
    }
  }
  // Mutate both a single locale and the entire map: neither may evade coverage.
  for (const mutate of [
    s => { delete s.catalog[0].lineI18n[lang]; },
    s => { delete s.catalog[0].lineI18n; },
    s => { delete s.catalog[0].items[0].volumeI18n; },
    s => { s.catalog[0].items[0].volumeI18n[lang] = '10 vials'; },
    s => { s.catalog[0].items[0].volumeI18n[lang] = lang === 'he' ? '11 בקבוקונים' : '11 शीशियाँ'; },
  ]) {
    const broken = structuredClone(doobom);
    mutate(broken);
    assert.ok(catalogCopyIssues([broken], lang).length);
  }
  assert.throws(() => api.catalogText('Cleansing', { ru: 'Cleansing' }, lang), /Missing .* translation/);
  assert.throws(() => api.catalogText('Cleansing', { [lang]: ' ' }, lang), /Empty .* catalog label/);
  const schema = api.supplierJsonLd(lang, skinroom);
  const org = schema.find(node => node['@type'] === 'Organization');
  assert.equal(org.name, 'SkinRoom Co., Ltd.');
  assert.equal(org.brand.name, 'SkinRoom');
  assert.equal(org.alternateName, 'SkinRoom');
  assert.ok(org.description.includes(api.supplierContent(skinroom, lang).descriptor));
  assert.ok(!/[\u0400-\u04ff]/.test(JSON.stringify(schema)));
  assert.ok(catalogCopyIssues([{ ...skinroom, brand: 'OBM — разработка марок под ключ' }], lang).length);
}
for (const lang of ['ru', 'en', 'ko', 'de', 'ja', 'zh', 'it', 'fr', 'tr', 'es', 'pt']) {
  for (const group of doobom.catalog) {
    assert.equal(api.catalogText(group.line, group.lineI18n, lang), group.line);
    for (const item of group.items) if (item.volume) assert.equal(api.catalogText(item.volume, item.volumeI18n, lang), item.volume);
  }
}
console.log('Shared catalog copy: he/hi, identity/JSON-LD, quantities, legacy locales and negative controls PASS');
