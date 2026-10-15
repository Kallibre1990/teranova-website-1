/* ============================================================
   i18n assembler — 11 public languages plus staged he/hi.
   Source of truth: ru. Full dictionaries: ru, en, ko, pt, he, hi (used directly).
   Machine-translated (merged OVER English): zh, ja, it, de, fr, tr, es.
   All locales are indexed (index/follow) and get hreflang + sitemap
   entries — HQ directive to index every language version.
   Each machine locale is merged OVER English, so any missing key
   falls back to English and can never break the build.
   ============================================================ */
import { ru, type UIDict } from './locales/ru';
import { en } from './locales/en';
import { ko } from './locales/ko';
import { pt } from './locales/pt';
import { he } from './locales/he';
import { hi } from './locales/hi';
import { localeDefinitions, publicLocaleCodes } from './locale-policy.mjs';
import zh from './locales/zh';
import ja from './locales/ja';
import it from './locales/it';
import de from './locales/de';
import fr from './locales/fr';
import tr from './locales/tr';
import es from './locales/es';
import type { DeepPartial } from './deep';

export type { UIDict };

export type Lang = keyof typeof localeDefinitions;
// Staged dictionaries do not create public routes or switcher entries.
export const languages = Object.fromEntries(publicLocaleCodes.map((code) =>
  [code, localeDefinitions[code as Lang].name])) as Partial<Record<Lang, string>>;
export const defaultLang: Lang = 'ru';

/**
 * The printed business-card QR code opens the site root. The root is the
 * English entry point, while established Russian section URLs continue to use
 * `defaultLang` and remain unprefixed. Keep this separate from `defaultLang`:
 * changing that value would silently move every Russian route.
 */
export const homeDefaultLang: Lang = 'en';

/** Locales that are indexed and get hreflang + sitemap entries — all of them
    (HQ directive: index every language version, not just the native-reviewed ones). */
export const verifiedLocales: Lang[] = Object.keys(languages) as Lang[];
export const isVerified = (l: Lang): boolean => verifiedLocales.includes(l);

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** Merge `over` onto `base`. Arrays merge element-wise (base length governs),
    so machine locales can translate the items they have and fall back to
    English for any newly added ones. */
function mergeValue(b: unknown, o: unknown): unknown {
  if (o === undefined || o === null) return b;
  if (Array.isArray(b) && Array.isArray(o)) {
    return b.map((item, i) => (i < o.length ? mergeValue(item, o[i]) : item));
  }
  if (isPlainObject(b) && isPlainObject(o)) {
    const out: Record<string, unknown> = { ...b };
    for (const k of Object.keys(b)) out[k] = mergeValue(b[k], o[k]);
    return out;
  }
  return o;
}

function deepMerge<T>(base: T, over: DeepPartial<T> | undefined): T {
  return mergeValue(base, over) as T;
}

function build(code: Lang, partial: DeepPartial<UIDict>): UIDict {
  const d = deepMerge(en, partial); // English fallback
  d.htmlLang = code;
  d.langShort = code.toUpperCase();
  d.langName = localeDefinitions[code].name;
  return d;
}

export const ui: Record<Lang, UIDict> = {
  ru,
  en,
  ko,
  pt,
  he,
  hi,
  zh: build('zh', zh),
  ja: build('ja', ja),
  it: build('it', it),
  de: build('de', de),
  fr: build('fr', fr),
  tr: build('tr', tr),
  es: build('es', es),
};
