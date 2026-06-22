import { defaultLang, languages, verifiedLocales, type Lang } from './ui';

export const locales = Object.keys(languages) as Lang[];

/** Detect the active language from a URL pathname (/en/…, /zh/… else default ru). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean)[0] as Lang | undefined;
  if (seg && seg !== defaultLang && locales.includes(seg)) return seg;
  return defaultLang;
}

/**
 * Logical (default-locale) path -> localized, trailing-slashed URL.
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

/** hreflang alternates — VERIFIED locales only (machine locales are noindex). */
export function getAlternates(path: string) {
  return verifiedLocales.map((l) => ({ hreflang: l, href: localizePath(path, l) }));
}
