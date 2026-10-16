import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { publicLocaleCodes } from '../src/i18n/locale-policy.mjs';

const dist = resolve(process.argv[2] ?? 'dist');
const site = 'https://teranovagroup.com';
const locales = publicLocaleCodes;

function fail(message) {
  console.error(`home-locale check failed: ${message}`);
  process.exitCode = 1;
}

function read(relativePath) {
  const file = resolve(dist, relativePath);
  if (!existsSync(file)) {
    fail(`missing ${relativePath}`);
    return '';
  }
  return readFileSync(file, 'utf8');
}

function includes(text, expected, context) {
  if (!text.includes(expected)) fail(`${context}: expected ${expected}`);
}

function homeLinks() {
  return [...locales
    .map((locale) => `${locale}=${site}${locale === 'en' ? '/' : `/${locale}/`}`), `x-default=${site}/`]
    .sort();
}

const root = read('index.html');
const russian = read('ru/index.html');
const redirects = read('_redirects');
const sitemap = read('sitemap-0.xml');

includes(root, '<html lang="en"', 'index.html: root language');
includes(root, `<link rel="canonical" href="${site}/"`, 'index.html: root canonical');
includes(root, `hreflang="ru" href="${site}/ru/"`, 'index.html: root Russian alternate');
includes(root, `hreflang="en" href="${site}/"`, 'index.html: root English alternate');
includes(root, `hreflang="x-default" href="${site}/"`, 'index.html: root x-default alternate');

includes(russian, '<html lang="ru"', 'ru/index.html: Russian home language');
includes(russian, `<link rel="canonical" href="${site}/ru/"`, 'ru/index.html: Russian home canonical');

includes(redirects, '/en/ / 301', 'legacy English redirect');
includes(redirects, '/en / 301', 'legacy English redirect');

if (existsSync(resolve(dist, 'en/index.html'))) fail('a duplicate static /en/ homepage was built');

const blocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1]);
const homeBlocks = blocks.filter((block) => /<loc>https:\/\/teranovagroup\.com\/(?:ru\/)?<\/loc>/.test(block));
const expectedLinks = homeLinks();
if (homeBlocks.length !== 2) {
  fail(`expected two homepage sitemap entries, received ${homeBlocks.length}`);
} else {
  for (const block of homeBlocks) {
    const links = [...block.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)]
      .map((match) => `${match[1]}=${match[2]}`)
      .sort();
    if (JSON.stringify(links) !== JSON.stringify(expectedLinks)) {
      fail('homepage sitemap alternates do not match the public languages plus x-default');
    }
  }
}

if (sitemap.includes(`<loc>${site}/en/</loc>`)) fail('legacy /en/ homepage remains in the sitemap');

if (!process.exitCode) console.log('home-locale check: OK');
