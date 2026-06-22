// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical production domain. Deploy previews still build fine; canonical
// URLs intentionally point to production so previews are not indexed.
const SITE = 'https://teranovagroup.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'ko'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Keep noindex utility pages (thank-you) out of the sitemap.
      filter: (page) => !page.includes('/thanks'),
      i18n: {
        defaultLocale: 'ru',
        locales: {
          ru: 'ru',
          en: 'en',
          ko: 'ko',
        },
      },
    }),
  ],
});
