// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { publicLocaleCodes, languageAlternates, logicalPath } from './src/i18n/locale-policy.mjs';
import { hiddenSupplierSlugs } from './src/data/site.ts';

const SITE = 'https://teranovagroup.com';

// Only public locales get routes, sitemap and hreflang. Staged he/hi remain
// excluded until their content and browser checks are complete.
const locales = publicLocaleCodes;

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ru',
    locales,
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Sitemap = indexed pages only: drop the noindex /thanks pages and the
      // redirect stubs left behind by hidden supplier profiles (T-20261026-045) —
      // those pages exist in dist/ (meta-refresh redirect) but must not be
      // discoverable via sitemap.
      filter: (page) => {
        const path = new URL(page).pathname;
        const segments = path.split('/').filter(Boolean);
        if (segments.includes('thanks')) return false;
        if (path === '/404/' || path === '/404.html' || path === '/en/') return false;
        const slug = segments[segments.length - 1];
        const parent = segments[segments.length - 2];
        if (parent === 'catalog' && hiddenSupplierSlugs.includes(slug)) return false;
        return true;
      },
      // Use the same URL map as HTML, including the English QR root, Russian
      // unprefixed section URLs, reciprocal alternates and x-default.
      serialize: (item) => {
        const pathname = new URL(item.url).pathname;
        return { ...item, links: languageAlternates(logicalPath(pathname), SITE) };
      },
      i18n: {
        defaultLocale: 'ru',
        locales: Object.fromEntries(locales.map((locale) => [locale, locale])),
      },
    }),
  ],
});
