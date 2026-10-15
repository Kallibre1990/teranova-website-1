import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { publicLocaleCodes } from '../src/i18n/locale-policy.mjs';
import { parity, hasErrors } from './locale-coverage.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const bundle = await build({
  absWorkingDir: root,
  stdin: { contents: `
    export { ru } from './src/i18n/locales/ru';
    export { he } from './src/i18n/locales/he';
    export { hi } from './src/i18n/locales/hi';
    export * from './src/data/suppliers';
    export { posts } from './src/data/blog';
    export { solarCopy } from './src/data/solar-care';`, resolveDir: root, loader: 'ts' },
  bundle: true, write: false, platform: 'node', format: 'esm', logLevel: 'silent',
});
const data = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
const suppliers = data.suppliers;
const lines = data.linePages;
if (!Array.isArray(suppliers) || !Array.isArray(lines)) throw new Error('Supplier exports changed; coverage must be updated');

const report = { publicLocales: publicLocaleCodes, languages: {}, structuralOnly: true };
let failed = false;
for (const lang of ['he', 'hi']) {
  const ui = parity(data.ru, data[lang]);
  const content = [
    ...suppliers.map((entry) => ({ path: `/catalog/${entry.slug}/`, ...parity(entry.i18n.ru, entry.i18n[lang]) })),
    ...lines.map((entry) => ({ path: `/catalog/${entry.supplierSlug}/${entry.slug}/`, ...parity(entry.i18n.ru, entry.i18n[lang]) })),
    ...data.posts.map((entry) => ({ path: `/blog/${entry.slug}/`, ...parity(entry.i18n.ru, entry.i18n[lang]) })),
    { path: '/solar-care/', ...parity(data.solarCopy.ru, data.solarCopy[lang]) },
  ];
  const missingPages = content.filter(hasErrors);
  report.languages[lang] = {
    public: publicLocaleCodes.includes(lang), ui,
    contentPages: content.length, incompletePages: missingPages.length,
    missingLeaves: content.reduce((sum, entry) => sum + entry.missing.length, 0),
    content: missingPages,
  };
  const enforce = !process.argv.includes('--public-only') || publicLocaleCodes.includes(lang);
  if (enforce && (hasErrors(ui) || missingPages.length)) failed = true;
}
if (process.argv.includes('--json')) console.log(JSON.stringify(report, null, 2));
else for (const [lang, value] of Object.entries(report.languages)) {
  console.log(`${lang}: public=${value.public}; UI=${value.ui.leaves} leaves, errors=${hasErrors(value.ui)}; incomplete content=${value.incompletePages}/${value.contentPages}; missing leaves=${value.missingLeaves}`);
}
if (process.argv.includes('--release') && ['he', 'hi'].some((lang) => !publicLocaleCodes.includes(lang))) failed = true;
if (failed) process.exitCode = 1;
