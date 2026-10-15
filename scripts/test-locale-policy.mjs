import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { localizedPath, logicalPath, languageAlternates, publicLocaleCodes } from '../src/i18n/locale-policy.mjs';
import { parity, hasErrors } from './locale-coverage.mjs';

assert.equal(localizedPath('/', 'en'), '/');
assert.equal(localizedPath('/', 'ru'), '/ru/');
assert.equal(localizedPath('/catalog/', 'ru'), '/catalog/');
assert.equal(localizedPath('/catalog/', 'en'), '/en/catalog/');
for (const lang of ['he', 'hi']) {
  assert.equal(localizedPath('/', lang), `/${lang}/`);
  assert.equal(localizedPath('/catalog/', lang), `/${lang}/catalog/`);
}
assert.throws(() => localizedPath('/catalog/', 'unknown'), /Unknown locale/);
for (const path of ['/', '/ru/', '/ko/']) assert.equal(logicalPath(path), '/');
assert.equal(logicalPath('/en/catalog/'), '/catalog/');
for (const path of ['/', '/catalog/']) {
  const links = languageAlternates(path, 'https://teranovagroup.com');
  assert.equal(links.length, publicLocaleCodes.length + 1);
  assert.equal(new Set(links.map((link) => link.lang)).size, links.length);
  assert.equal(links.at(-1).lang, 'x-default');
  assert.equal(links.at(-1).url, `https://teranovagroup.com${path}`);
}
const reference = { title: 'Request {n}', rows: [{ text: 'Row', quantity: 2 }], empty: [] };
const translated = { title: 'בקשה {n}', rows: [{ text: 'שורה', quantity: 2 }], empty: [] };
assert.equal(hasErrors(parity(reference, translated)), false);
const dropped = structuredClone(translated);
delete dropped.rows[0].text;
assert.deepEqual(parity(reference, dropped).missing, ['rows[0].text']);
assert.equal(hasErrors(parity(reference, { ...translated, title: 'בקשה' })), true);
assert.equal(hasErrors(parity(reference, { ...translated, title: ' ' })), true);
assert.equal(hasErrors(parity(reference, { ...translated, rows: [] })), true);
assert.equal(hasErrors(parity(reference, { ...translated, extra: 'unexpected' })), true);

const output = await build({ entryPoints: ['src/i18n/strict-content.ts'], bundle: true, write: false, platform: 'node', format: 'esm' });
const { localizedContent } = await import(`data:text/javascript;base64,${Buffer.from(output.outputFiles[0].text).toString('base64')}`);
assert.equal(localizedContent({ ru: 'source' }, 'ko', '/example/'), 'source');
assert.equal(localizedContent({ he: 'עברית' }, 'he', '/example/'), 'עברית');
for (const lang of ['he', 'hi']) assert.throws(() => localizedContent({ ru: 'source', en: 'English' }, lang, '/example/'), new RegExp(`Missing ${lang} translation`));
assert.throws(() => localizedContent({}, 'ru', '/example/'), /Missing source content/);
const integration = await build({
  stdin: { contents: `export { suppliers, supplierContent, linePages, linePageContent } from './src/data/suppliers'; export { posts, postContent } from './src/data/blog';`, resolveDir: process.cwd(), loader: 'ts' },
  bundle: true, write: false, platform: 'node', format: 'esm',
});
const api = await import(`data:text/javascript;base64,${Buffer.from(integration.outputFiles[0].text).toString('base64')}`);
for (const [entry, getter] of [[api.suppliers[0], api.supplierContent], [api.linePages[0], api.linePageContent], [api.posts[0], api.postContent]]) {
  assert.deepEqual(getter(entry, 'ru'), entry.i18n.ru);
  const syntheticMissing = { ...entry, i18n: { ru: entry.i18n.ru } };
  for (const lang of ['he', 'hi']) assert.throws(() => getter(syntheticMissing, lang), new RegExp(`Missing ${lang} translation`));
}
console.log('Locale URL policy, parity negative controls and actual supplier/line/blog fallback: PASS');
