// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://teranovagroup.com';

// Indexed locales (get sitemap + hreflang). The other 6 are machine-translated
// and served noindex until a native speaker reviews them.
const verified = ['ru', 'en', 'ko'];
const machine = ['zh', 'ja', 'it', 'de', 'fr', 'tr'];

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ru',
    locales: [...verified, ...machine],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Sitemap = indexed pages only: drop noindex /thanks and all machine locales.
      filter: (page) => {
        if (page.includes('/thanks')) return false;
        const seg = new URL(page).pathname.split('/').filter(Boolean)[0];
        return !machine.includes(seg);
      },
      i18n: {
        defaultLocale: 'ru',
        locales: { ru: 'ru', en: 'en', ko: 'ko' },
      },
    }),
  ],
});
