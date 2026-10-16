import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { publicLocaleCodes, localeDefinitions, logicalPath, languageAlternates, localizedPath, isRootEnglishPath } from '../src/i18n/locale-policy.mjs';

const root = resolve(process.argv.find((arg, index) => index > 1 && !arg.startsWith('--')) ?? 'dist');
const site = 'https://teranovagroup.com';
const failures = [];
const pages = new Map();
const fail = (context, message) => failures.push(`${context}: ${message}`);
const read = (path) => readFileSync(resolve(root, path), 'utf8');
const decode = (value) => value?.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (_, entity) => {
  if (entity.startsWith('#')) return String.fromCodePoint(entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10));
  return { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" }[entity.toLowerCase()];
});
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1], decode(match[2])]));
const tags = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map((match) => attrs(match[0]));
const equalLinks = (actual, expected) => JSON.stringify(actual.map((item) => `${item.lang}=${item.url}`).sort()) ===
  JSON.stringify(expected.map((item) => `${item.lang}=${item.url}`).sort());

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name === 'index.html') {
      const urlPath = '/' + relative(root, path).replace(/index\.html$/, '').split('\\').join('/');
      const html = readFileSync(path, 'utf8');
      const links = tags(html, 'link');
      const metas = tags(html, 'meta');
      const noindex = metas.some((tag) => tag.name === 'robots' && /\bnoindex\b/.test(tag.content));
      pages.set(site + urlPath, { html, links, metas, urlPath, noindex });
    }
  }
}
walk(root);
if (!pages.size) throw new Error(`No built pages in ${root}`);

for (const [url, page] of pages) {
  const { html, links, metas, urlPath, noindex } = page;
  const canonical = links.filter((link) => link.rel === 'canonical');
  if (canonical.length !== 1 || canonical[0].href !== url) fail(urlPath, 'canonical must point to this exact page once');
  const firstSegment = urlPath.split('/')[1];
  const hasLocalePrefix = publicLocaleCodes.includes(firstSegment);
  const lang = urlPath === '/' ? 'en'
    : hasLocalePrefix ? firstSegment
    : (isRootEnglishPath(urlPath) ? 'en' : 'ru');
  const htmlAttrs = tags(html, 'html')[0] ?? {};
  const htmlLang = localeDefinitions[lang].htmlLang ?? lang;
  if (htmlAttrs.lang !== htmlLang) fail(urlPath, `lang=${htmlAttrs.lang}; expected ${htmlLang}`);
  if (htmlAttrs.dir !== localeDefinitions[lang].direction) fail(urlPath, `dir=${htmlAttrs.dir}; expected ${localeDefinitions[lang].direction}`);
  const expected = languageAlternates(logicalPath(urlPath), site);
  const alternates = links.filter((link) => link.rel === 'alternate' && link.hreflang).map((link) => ({ lang: link.hreflang, url: link.href }));
  if (!equalLinks(alternates, expected)) fail(urlPath, 'incomplete or inconsistent hreflang cluster');
  for (const link of alternates) {
    const target = pages.get(link.url);
    if (!target) { fail(urlPath, `alternate does not exist: ${link.url}`); continue; }
    if (link.lang !== 'x-default' && !target.links.some((item) => item.hreflang === lang && item.href === url)) {
      fail(urlPath, `alternate is not reciprocal: ${link.url}`);
    }
  }
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]);
  const description = metas.find((tag) => tag.name === 'description')?.content;
  if (!title?.trim() || !description?.trim()) fail(urlPath, 'missing title or description');
  for (const [property, value] of [['og:url', url], ['og:locale', localeDefinitions[lang].og], ['og:description', description], ['og:title', title]]) {
    if (metas.find((tag) => tag.property === property)?.content !== value) fail(urlPath, `${property} mismatch`);
  }
  for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const visit = (value) => {
        if (!value || typeof value !== 'object') return;
        if (value.inLanguage && value.inLanguage !== htmlLang) fail(urlPath, `JSON-LD inLanguage=${value.inLanguage}`);
        for (const child of Object.values(value)) visit(child);
      };
      visit(JSON.parse(match[1]));
    } catch { fail(urlPath, 'invalid JSON-LD'); }
  }
  if (noindex && !/\/thanks\/$/.test(urlPath)) fail(urlPath, 'unexpected noindex');
}

const sitemapIndex = read('sitemap-index.xml');
const sitemapFiles = [...sitemapIndex.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (!sitemapFiles.length) fail('sitemap-index.xml', 'empty index');
const locations = new Set();
for (const file of sitemapFiles) {
  const parsed = new URL(file);
  if (parsed.origin !== site) { fail(file, 'foreign sitemap origin'); continue; }
  const xml = read(parsed.pathname.slice(1));
  for (const match of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const url = match[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!url) { fail(file, 'url without loc'); continue; }
    if (locations.has(url)) fail(file, `duplicate URL: ${url}`);
    locations.add(url);
    const page = pages.get(url);
    if (!page || page.noindex) { fail(file, `not an indexable canonical page: ${url}`); continue; }
    const actual = tags(match[1], 'xhtml:link').map((tag) => ({ lang: tag.hreflang, url: tag.href }));
    if (!equalLinks(actual, languageAlternates(logicalPath(page.urlPath), site))) fail(url, 'sitemap alternates differ from HTML');
  }
}
for (const [url, page] of pages) if (!page.noindex && !locations.has(url)) fail(page.urlPath, 'missing from sitemap');
if (!read('robots.txt').includes(`Sitemap: ${site}/sitemap-index.xml`)) fail('robots.txt', 'missing canonical sitemap URL');
const redirects = read('_redirects');
for (const from of ['/en', '/en/']) if (!redirects.split('\n').some((line) => line.trim().split(/\s+/).join(' ') === `${from} / 301`)) fail('_redirects', `missing ${from} redirect`);
if (existsSync(resolve(root, 'en/index.html'))) fail('/en/', 'duplicate homepage');
if (localizedPath('/', 'en') !== '/' || localizedPath('/catalog', 'ru') !== '/catalog/') fail('policy', 'stable QR/root URLs moved');
if (process.argv.includes('--release') && publicLocaleCodes.length !== 13) fail('release', `only ${publicLocaleCodes.length}/13 public locales`);

const report = { pages: pages.size, sitemapUrls: locations.size, publicLocales: publicLocaleCodes, failures };
if (process.argv.includes('--json')) console.log(JSON.stringify(report, null, 2));
else {
  console.log(`${pages.size} pages; ${locations.size} sitemap URLs; ${publicLocaleCodes.length} locales; ${failures.length} failures`);
  failures.slice(0, 30).forEach((error) => console.error(error));
}
if (failures.length) process.exitCode = 1;
