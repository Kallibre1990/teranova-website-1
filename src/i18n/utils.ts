import { ui, defaultLang, languages, type Lang } from './ui';

export const locales = Object.keys(languages) as Lang[];

/** Detect the active language from a URL pathname (/en/…, /ko/… else ru). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  if (seg === 'en' || seg === 'ko') return seg;
  return defaultLang;
}

/** Return the dictionary for a language. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/**
 * Turn a logical (default-locale) path into a localized, trailing-slashed URL.
 *   localizePath('/catalog', 'en') -> '/en/catalog/'
 *   localizePath('/', 'ko')        -> '/ko/'
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = '/' + path.replace(/^\/+|\/+$/g, '');
  const base = lang === defaultLang ? '' : `/${lang}`;
  if (clean === '/') return base === '' ? '/' : `${base}/`;
  return `${base}${clean}/`;
}

/** Localized home URL plus an in-page anchor: anchorHref('ondemand','en') -> '/en/#ondemand'. */
export function anchorHref(hash: string, lang: Lang): string {
  return localizePath('/', lang) + '#' + hash.replace(/^#/, '');
}

/** hreflang alternates for a logical path, for <link rel="alternate"> tags. */
export function getAlternates(path: string) {
  return locales.map((l) => ({
    hreflang: l,
    href: localizePath(path, l),
  }));
}
