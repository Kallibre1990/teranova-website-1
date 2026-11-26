// Internal content checks. This does not substitute for route or browser QA.
import { build } from 'esbuild';
import { transform } from '@astrojs/compiler';
import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const result = await build({ entryPoints: ['src/data/exsolu.ts'], bundle: true, platform: 'node', format: 'esm', write: false });
const { exsoluContent } = await import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64'));
for (const lang of ['en', 'ru', 'ko', 'ja', 'zh', 'de', 'fr', 'it']) {
  const c = exsoluContent(lang);
  assert.equal(c.boosters.length, 17);
  assert.equal(c.skincareProducts.length, 5);
  const products = [...c.boosters, ...c.skincareProducts];
  assert.equal(new Set(products.map(p => p.image)).size, 22);
  for (const p of products) {
    assert.ok(p.description);
    await readFile('public' + p.image);
  }
  assert.doesNotMatch(JSON.stringify(c), /hormonal|pain|tissue rebuilding|гормональ|при боли|восстановление тканей|\bMOQ\b|\bprice\b/i);
  assert.match(c.boosters.find(p => p.id === 'nad-air-shot').caution, { en: /Do not inject/, ru: /не вводить инъекционно/, ko: /주입하지 마십시오/, ja: /注射しないでください/, zh: /禁止注射/, de: /Nicht injizieren/, fr: /ne pas injecter/, it: /non iniettare/ }[lang]);
  if (lang === 'it') {
    for (const p of products) assert.doesNotMatch(p.description + p.ingredients + p.pack, /[А-Яа-яЁё一-龯가-힣ぁ-んァ-ヶ]|\b(?:vials?|box|ea|with|and|care)\b/i);
    assert.match(c.about, /Sviluppiamo/);
    assert.match(c.compositionNote, /INCI completa/);
    assert.doesNotMatch(JSON.stringify(c), /prezzo|ordine minimo|guarisce|allevia il dolore|garantit/i);
  }
  if (lang === 'fr') {
    for (const p of products) assert.doesNotMatch(p.description + p.ingredients + p.pack, /[А-Яа-яЁё一-龯가-힣ぁ-んァ-ヶ]|\b(?:vials?|box|ea|with|and|care)\b/i);
    assert.match(c.about, /Nous développons/);
    assert.match(c.compositionNote, /INCI complète/);
    assert.doesNotMatch(JSON.stringify(c), /prix|commande minimale|guérit|soulage la douleur|garanti/i);
  }
  if (lang === 'de') {
    for (const p of products) {
      assert.doesNotMatch(p.description + p.ingredients + p.pack, /[А-Яа-яЁё一-龯가-힣ぁ-んァ-ヶ]|\b(?:vials?|box|ea|with|and|care)\b/i);
    }
    assert.match(c.about, /Wir entwickeln/);
    assert.match(c.compositionNote, /keine vollständige INCI/);
    assert.doesNotMatch(JSON.stringify(c), /Preis|Mindestbestell|heilt|Schmerzlinderung|Geweberegeneration|garantiert/i);
  }
  if (lang === 'zh') {
    for (const p of products) {
      assert.match(p.description, /[一-龯]/);
      assert.doesNotMatch(p.description + p.ingredients + p.pack, /[А-Яа-яЁё가-힣ぁ-んァ-ヶ]|\b(?:vials?|box|ea|with|and|care)\b/);
    }
    for (const [key, value] of Object.entries(c)) {
      if (typeof value === 'string' && key !== 'company') assert.match(value, /[一-龯]/);
    }
  }
  if (lang === 'ja') {
    for (const p of products) {
      assert.match(p.description, /[ぁ-んァ-ヶ]/);
      assert.doesNotMatch(p.description + p.ingredients + p.pack, /[А-Яа-яЁё가-힣]|\b(?:vials?|box|ea|with|and|care)\b/);
    }
    for (const [key, value] of Object.entries(c)) {
      if (typeof value === 'string' && key !== 'company') assert.match(value, /[ぁ-んァ-ヶ一-龯]/);
    }
  }
  if (lang === 'ko') {
    for (const p of products) {
      assert.match(p.description, /[가-힣]/);
      assert.doesNotMatch(p.description + p.ingredients + p.pack, /[А-Яа-яЁё]|\b(?:vials?|box|ea|with|and|care)\b/);
    }
    for (const [key, value] of Object.entries(c)) {
      if (typeof value === 'string' && key !== 'company') assert.match(value, /[가-힣]/);
    }
  }
  console.log(`${lang}: 22 products, unique existing images, restricted claims absent, NAD prohibition present`);
}
assert.throws(() => exsoluContent('es'), /translation unavailable/);
const compiled = await transform(await readFile('src/components/pages/ExsoluDraft.astro', 'utf8'), { filename: 'ExsoluDraft.astro' });
assert.equal(compiled.diagnostics.filter(d => d.severity === 1).length, 0);
console.log('Astro component compiles; unsupported locale fails closed');
