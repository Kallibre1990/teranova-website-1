// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://teranovagroup.com';

// All 11 locales are indexed (index/follow) and get sitemap + hreflang entries —
// HQ directive to index every language version, including the machine-translated
// ones. (Keep this list in sync with verifiedLocales in src/i18n/ui.ts.)
const locales = ['ru', 'en', 'ko', 'zh', 'ja', 'it', 'de', 'fr', 'tr', 'es', 'pt'];
const homeLocales = locales.map((locale) => ({
  // The physical QR-code address is the canonical English homepage. Russian
  // is deliberately /ru/ only for the homepage; existing Russian inner URLs
  // remain unprefixed (see src/i18n/utils.ts).
  url: new URL(locale === 'en' ? '/' : `/${locale}/`, SITE).href,
  lang: locale,
}));

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
      // Astro's global default locale remains Russian to preserve all existing
      // Russian inner URLs. Override only the two homepage sitemap entries so
      // the root is declared English and /ru/ is declared Russian.
      serialize: (item) => {
        const pathname = new URL(item.url).pathname;
        if (pathname === '/' || pathname === '/ru/') return { ...item, links: homeLocales };
        return item;
      },
      i18n: {
        defaultLocale: 'ru',
        locales: {
          ru: 'ru', en: 'en', ko: 'ko', zh: 'zh', ja: 'ja',
          it: 'it', de: 'de', fr: 'fr', tr: 'tr', es: 'es', pt: 'pt',
        },
      },
    }),
  ],
});
