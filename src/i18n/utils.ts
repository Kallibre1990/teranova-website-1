import { defaultLang, languages, verifiedLocales, ui, type Lang } from './ui';

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

/**
 * Primary navigation — the SINGLE source for both the header and the footer,
 * so the two can never drift out of sync (the reason they differed before).
 * Labels come from the per-language dictionary (ru is the source of truth);
 * every href points to a real, existing route.
 */
export function mainNav(lang: Lang): { label: string; href: string; primary?: boolean }[] {
  const t = ui[lang];
  return [
    { label: t.nav.catalog, href: localizePath('/catalog', lang), primary: true },
    // Solar Care — отдельное направление со своим разделом на всех локалях.
    // В меню пункт называется на языке версии: английское имя направления среди
    // русских пунктов читалось как чужеродная вставка. Бренд Solar Care остаётся
    // на самой странице раздела, адрес страницы тоже не меняется.
    { label: t.nav.solar, href: localizePath('/solar-care', lang), primary: true },
    { label: t.nav.suppliers, href: localizePath('/suppliers', lang), primary: true },
    { label: t.nav.buyers, href: localizePath('/buyers', lang), primary: true },
    { label: t.nav.tenders, href: localizePath('/tenders', lang) },
    { label: t.nav.verify, href: localizePath('/how-we-verify', lang), primary: true },
    { label: t.nav.faq, href: localizePath('/faq', lang) },
    { label: t.nav.blog, href: localizePath('/blog', lang) },
    { label: t.nav.team, href: localizePath('/about', lang) + '#team' },
    { label: t.nav.contacts, href: localizePath('/contacts', lang), primary: true },
  ];
}

/**
 * Верхняя панель на десктопе — только ключевые разделы. Десять пунктов в один ряд
 * не помещались и наезжали на логотип и переключатель языка; здесь остаются шесть
 * опорных, остальные (Тендеры, Вопросы, Статьи, Команда) доступны в подвале и в
 * мобильном меню, где выводится полный mainNav.
 */
export function primaryNav(lang: Lang) {
  return mainNav(lang).filter((i) => i.primary);
}

/** hreflang alternates — one per indexed locale (all locales are indexed). */
export function getAlternates(path: string) {
  return verifiedLocales.map((l) => ({ hreflang: l, href: localizePath(path, l) }));
}
