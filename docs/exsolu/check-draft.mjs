// Internal content checks. This does not substitute for route or browser QA.
import { build } from 'esbuild';
import { transform } from '@astrojs/compiler';
import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const result = await build({ entryPoints: ['src/data/exsolu.ts'], bundle: true, platform: 'node', format: 'esm', write: false });
const { exsoluContent } = await import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64'));
for (const lang of ['en', 'ru']) {
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
  assert.match(c.boosters.find(p => p.id === 'nad-air-shot').caution, lang === 'en' ? /Do not inject/ : /не вводить инъекционно/);
  console.log(`${lang}: 22 products, unique existing images, restricted claims absent, NAD prohibition present`);
}
assert.throws(() => exsoluContent('ko'), /translation unavailable/);
const compiled = await transform(await readFile('src/components/pages/ExsoluDraft.astro', 'utf8'), { filename: 'ExsoluDraft.astro' });
assert.equal(compiled.diagnostics.filter(d => d.severity === 1).length, 0);
console.log('Astro component compiles; unsupported locale fails closed');
