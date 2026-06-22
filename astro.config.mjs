// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://teranovagroup.com';

// Indexed locales (get sitemap + hreflang). The other 6 are machine-translated
// and served noindex until a native speaker reviews them.
const verified = ['ru', 'en', 'ko'];
const machine = ['zh', 'ja', 'it', 'de', 'fr', 'tr'];
// noindex "coming soon" placeholder pages — kept out of the sitemap.
const placeholder = ['suppliers', 'about', 'faq', 'how-we-verify'];

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
      // Sitemap = indexed pages only: drop noindex pages (/thanks, "coming soon"
      // placeholders) and all machine locales.
      filter: (page) => {
        const segs = new URL(page).pathname.split('/').filter(Boolean);
        if (segs.includes('thanks')) return false;
        if (segs.some((s) => placeholder.includes(s))) return false;
        return !machine.includes(segs[0]);
      },
      i18n: {
        defaultLocale: 'ru',
        locales: { ru: 'ru', en: 'en', ko: 'ko' },
      },
    }),
  ],
});
