// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://teranovagroup.com';

// All 10 locales are indexed (index/follow) and get sitemap + hreflang entries —
// HQ directive to index every language version, including the machine-translated
// ones. (Keep this list in sync with verifiedLocales in src/i18n/ui.ts.)
const locales = ['ru', 'en', 'ko', 'zh', 'ja', 'it', 'de', 'fr', 'tr', 'es'];

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
      // Sitemap = indexed pages only: drop the noindex /thanks pages.
      filter: (page) => !new URL(page).pathname.split('/').filter(Boolean).includes('thanks'),
      i18n: {
        defaultLocale: 'ru',
        locales: {
          ru: 'ru', en: 'en', ko: 'ko', zh: 'zh', ja: 'ja',
          it: 'it', de: 'de', fr: 'fr', tr: 'tr', es: 'es',
        },
      },
    }),
  ],
});
