/** Shared by Astro config, route helpers and offline verification.
 * he/hi are staged until their content, fonts and layout checks are complete.
 * Do not publish a locale merely because its UI dictionary exists.
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

export const stagedLocaleCodes = ['he', 'hi'];
export const publicLocaleCodes = Object.keys(localeDefinitions)
  .filter((code) => !stagedLocaleCodes.includes(code));
export const sectionDefaultLocale = 'ru';
export const homeDefaultLocale = 'en';

export function localizedPath(path, locale) {
  if (!Object.hasOwn(localeDefinitions, locale)) throw new Error(`Unknown locale: ${locale}`);
  const clean = '/' + path.replace(/^\/+|\/+$/g, '');
  if (clean === '/') return locale === homeDefaultLocale ? '/' : `/${locale}/`;
  return `${locale === sectionDefaultLocale ? '' : `/${locale}`}${clean}/`;
}

export function logicalPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  if (publicLocaleCodes.includes(segments[0])) segments.shift();
  return segments.length ? `/${segments.join('/')}/` : '/';
}

export function languageAlternates(path, site) {
  const home = /^\/*$/.test(path);
  return [
    ...publicLocaleCodes.map((lang) => ({ lang, url: new URL(localizedPath(path, lang), site).href })),
    { lang: 'x-default', url: new URL(localizedPath(path, home ? homeDefaultLocale : sectionDefaultLocale), site).href },
  ];
}
