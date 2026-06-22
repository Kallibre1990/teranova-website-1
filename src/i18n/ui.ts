/* ============================================================
   i18n assembler — 9 languages.
   Verified/indexed: ru (source), en, ko.
   Machine-translated (noindex until native review): zh, ja, it, de, fr, tr.
   Each machine locale is merged OVER English, so any missing key
   falls back to English and can never break the build.
   ============================================================ */
import { ru, type UIDict } from './locales/ru';
import { en } from './locales/en';
import { ko } from './locales/ko';
import zh from './locales/zh';
import ja from './locales/ja';
import it from './locales/it';
import de from './locales/de';
import fr from './locales/fr';
import tr from './locales/tr';
import type { DeepPartial } from './deep';

export type { UIDict };

export const languages = {
  ru: 'Русский',
  en: 'English',
  ko: '한국어',
  zh: '中文',
  ja: '日本語',
  it: 'Italiano',
  de: 'Deutsch',
  fr: 'Français',
  tr: 'Türkçe',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ru';

/** Only these are indexed and get hreflang + sitemap entries. */
export const verifiedLocales: Lang[] = ['ru', 'en', 'ko'];
export const isVerified = (l: Lang): boolean => verifiedLocales.includes(l);

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function deepMerge<T>(base: T, over: DeepPartial<T> | undefined): T {
  if (over === undefined || over === null) return base;
  if (!isPlainObject(base)) return (over as unknown as T) ?? base;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const key of Object.keys(base as Record<string, unknown>)) {
    const b = (base as Record<string, unknown>)[key];
    const o = (over as Record<string, unknown>)[key];
    if (o === undefined) continue;
    out[key] = isPlainObject(b) ? deepMerge(b, o as DeepPartial<typeof b>) : o;
  }
  return out as T;
}

function build(code: Lang, partial: DeepPartial<UIDict>): UIDict {
  const d = deepMerge(en, partial); // English fallback
  d.htmlLang = code;
  d.langShort = code.toUpperCase();
  d.langName = languages[code];
  return d;
}

export const ui: Record<Lang, UIDict> = {
  ru,
  en,
  ko,
  zh: build('zh', zh),
  ja: build('ja', ja),
  it: build('it', it),
  de: build('de', de),
  fr: build('fr', fr),
  tr: build('tr', tr),
};
