/** Shared by Astro config, route helpers and offline verification.
 * A locale goes into stagedLocaleCodes while its content, fonts and layout
 * checks are incomplete. Do not publish a locale merely because its UI
 * dictionary exists. he/hi were published by T-20261015-019.
 */
export const localeDefinitions = {
  ru: { name: 'Русский', direction: 'ltr', og: 'ru_RU' },
  en: { name: 'English', direction: 'ltr', og: 'en_US' },
  ko: { name: '한국어', direction: 'ltr', og: 'ko_KR' },
  zh: { name: '中文', direction: 'ltr', og: 'zh_CN' },
  ja: { name: '日本語', direction: 'ltr', og: 'ja_JP' },
  it: { name: 'Italiano', direction: 'ltr', og: 'it_IT' },
  de: { name: 'Deutsch', direction: 'ltr', og: 'de_DE' },
  fr: { name: 'Français', direction: 'ltr', og: 'fr_FR' },
  tr: { name: 'Türkçe', direction: 'ltr', og: 'tr_TR' },
  es: { name: 'Español', direction: 'ltr', og: 'es_ES' },
  pt: { name: 'Português', direction: 'ltr', og: 'pt_BR', htmlLang: 'pt-BR' },
  he: { name: 'עברית', direction: 'rtl', og: 'he_IL' },
  hi: { name: 'हिन्दी', direction: 'ltr', og: 'hi_IN' },
};

export const stagedLocaleCodes = [];
export const publicLocaleCodes = Object.keys(localeDefinitions)
  .filter((code) => !stagedLocaleCodes.includes(code));
export const sectionDefaultLocale = 'ru';
export const homeDefaultLocale = 'en';

/** Sections that follow the home page's English-root exception: the printed
 * fix for T-20261016-054 (medical catalog group was serving Russian at its
 * English-looking root with no /ru/ alternate). Keep this list short — it is
 * an exception to sectionDefaultLocale, not a second convention. */
export const rootEnglishPaths = ['/catalog/medical', '/catalog/agingtarget'];

/** Paths published in a locale subset only — a draft supplier profile
 * awaiting the supplier's translation approval (suppliers.ts `localesOnly`).
 * Without this, hreflang/sitemap would advertise alternates for locales the
 * page never builds, pointing search engines at 404s. Keep the locale list
 * here in sync with the matching `localesOnly` entry in suppliers.ts. */
export const localesOnlyPaths = {
  '/catalog/agafar': ['ru', 'en', 'ko'],
};

function cleanPath(path) {
  return '/' + path.replace(/^\/+|\/+$/g, '');
}

export function isRootEnglishPath(path) {
  return rootEnglishPaths.includes(cleanPath(path));
}

export function localizedPath(path, locale) {
  if (!Object.hasOwn(localeDefinitions, locale)) throw new Error(`Unknown locale: ${locale}`);
  const clean = cleanPath(path);
  if (clean === '/') return locale === homeDefaultLocale ? '/' : `/${locale}/`;
  if (rootEnglishPaths.includes(clean)) return locale === homeDefaultLocale ? `${clean}/` : `/${locale}${clean}/`;
  return `${locale === sectionDefaultLocale ? '' : `/${locale}`}${clean}/`;
}

export function logicalPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  if (publicLocaleCodes.includes(segments[0])) segments.shift();
  return segments.length ? `/${segments.join('/')}/` : '/';
}

export function languageAlternates(path, site) {
  const clean = cleanPath(path);
  const xDefaultLocale = (clean === '/' || rootEnglishPaths.includes(clean)) ? homeDefaultLocale : sectionDefaultLocale;
  const allowedLocales = localesOnlyPaths[clean] ?? publicLocaleCodes;
  return [
    ...allowedLocales.map((lang) => ({ lang, url: new URL(localizedPath(path, lang), site).href })),
    { lang: 'x-default', url: new URL(localizedPath(path, xDefaultLocale), site).href },
  ];
}
