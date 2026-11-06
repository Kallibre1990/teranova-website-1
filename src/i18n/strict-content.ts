import type { Lang } from './ui';

/** Keep stable catalog keys for links/photos; translate only their display text.
 * Once a label is marked descriptive, he/hi must both have a nonempty value.
 * Historical locales keep the original label until explicitly translated.
 */
export function catalogText(source: string, entries: Partial<Record<Lang, string>> | undefined, lang: Lang): string {
  if (!entries) return source;
  const text = localizedContent({ ru: source, ...entries }, lang, `catalog label: ${source}`);
  if (!text.trim()) throw new Error(`Empty ${lang} catalog label: ${source}`);
  return text;
}

/** Same contract as catalogText, for a list of tags (e.g. active ingredients)
 * that must translate as one ordered set, not word by word. */
export function catalogList(source: string[], entries: Partial<Record<Lang, string[]>> | undefined, lang: Lang): string[] {
  if (!entries) return source;
  const list = localizedContent({ ru: source, ...entries }, lang, `catalog list: ${source.join(', ')}`);
  if (list.length !== source.length) throw new Error(`Catalog list length mismatch for ${lang}: ${source.join(', ')}`);
  return list;
}

/** A missing he/hi translation must never silently render Russian content.
 * Preserve historical fallback behaviour for existing locales only.
 */
export function localizedContent<T>(entries: Partial<Record<Lang, T>>, lang: Lang, context: string): T {
  const content = entries[lang];
  if (content !== undefined && content !== null) return content;
  if (lang === 'he' || lang === 'hi') {
    throw new Error(`Missing ${lang} translation: ${context}`);
  }
  if (entries.ru !== undefined && entries.ru !== null) return entries.ru;
  throw new Error(`Missing source content: ${context}`);
}
