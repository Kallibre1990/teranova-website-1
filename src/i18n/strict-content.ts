import type { Lang } from './ui';

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
