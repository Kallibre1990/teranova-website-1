/* Which supplier photos a cover can use, and how.
 *
 * Produced by scripts/cutout-products.mjs (see its header):
 *   clean — outline came out crisp, safe to float on a coloured set
 *   all   — every packshot we have from that supplier
 * White-jar-on-white-sweep shots are kept out of `clean` on purpose, so a cover
 * never shows a ragged edge; those suppliers get the framed-card staging instead. */
import manifest from '../../public/img/suppliers/cutouts.json';

const shots = manifest as Record<string, { clean: string[]; all: string[] }>;

/** Deterministic hash, so a given article always gets the same arrangement. */
function hash(s: string): number {
  let h = 0;
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

const cutPath = (slug: string, file: string) => `/img/suppliers/${slug}/cutout/${file}`;
const shotPath = (slug: string, file: string) => `/img/suppliers/${slug}/products/${file}`;

/* File names are slugified product names ("super-bubble-mask-all-in-one"), and
   articles name their products in Latin script in every language. So counting
   how many of a file's words appear in the text tells us, cheaply and without
   extra data, which bottles the article is actually about. */
const STOP = new Set(['the', 'and', 'for', 'set', 'ml', 'g', 'ea', 'x', 'no', 'pack', 'kit', 'refill']);
function relevance(file: string, text: string): number {
  const words = file
    .replace(/\.[^.]+$/, '')
    .split('-')
    .filter((w) => w.length > 2 && !STOP.has(w) && !/^\d+$/.test(w));
  if (!words.length) return 0;
  return words.filter((w) => text.includes(w)).length / words.length;
}

/** Order a list of file names: the ones the article names first, then the rest of
 *  the shelf walked from a per-article offset (same article → same order). */
function arrange(files: string[], seed: string, text: string): string[] {
  const lower = text.toLowerCase();
  const named = files
    .map((f) => ({ f, r: lower ? relevance(f, lower) : 0 }))
    .filter((x) => x.r >= 0.5)
    .sort((a, b) => b.r - a.r)
    .map((x) => x.f);

  const h = hash(seed);
  const step = files.length > 1 ? 1 + (h % (files.length - 1)) : 1;
  let i = h % Math.max(1, files.length);
  const filler: string[] = [];
  for (let n = 0; n < files.length; n++) {
    filler.push(files[i % files.length]);
    i += step;
  }
  return [...new Set([...named, ...filler])];
}

/** The article's own hero photo, as its cut-out twin, when there is a clean one. */
function heroCutout(supplier: string, hero?: string): string | undefined {
  if (!hero) return undefined;
  const m = hero.match(/\/img\/suppliers\/([^/]+)\/products\/(.+)\.[^.]+$/);
  if (!m || m[1] !== supplier) return undefined;
  const file = `${m[2]}.webp`;
  return shots[supplier]?.clean.includes(file) ? cutPath(supplier, file) : undefined;
}

export type CoverPlan =
  /* products stand on a brand-coloured set, cut out of their background */
  | { mode: 'float'; products: string[] }
  /* packshots sit in framed cards over a brand-coloured field — used where the
     shots do not cut out cleanly (white jars, styled scenes) */
  | { mode: 'cards'; products: string[] }
  | { mode: 'none'; products: [] };

/**
 * Decide how to build a cover for one article: which staging, and which of the
 * supplier's own photos to put in it — the ones the article is about first.
 */
export function coverPlan(supplier: string, seed: string, hero?: string, text = '', count = 3): CoverPlan {
  const s = shots[supplier];
  if (!s || !s.all.length) return { mode: 'none', products: [] };

  /* One lonely cut-out cannot carry a scene — it needs company on the shelf. */
  if (s.clean.length >= 2) {
    const own = heroCutout(supplier, hero);
    const picked = own ? [own] : [];
    for (const f of arrange(s.clean, seed, text)) {
      if (picked.length >= count) break;
      const p = cutPath(supplier, f);
      if (!picked.includes(p)) picked.push(p);
    }
    return { mode: 'float', products: picked };
  }

  const picked: string[] = [];
  const ownShot = hero?.startsWith(`/img/suppliers/${supplier}/products/`) ? hero : undefined;
  if (ownShot) picked.push(ownShot);
  for (const f of arrange(s.all, seed, text)) {
    if (picked.length >= count) break;
    const p = shotPath(supplier, f);
    if (!picked.includes(p)) picked.push(p);
  }
  return { mode: 'cards', products: picked };
}

/** A few clean cut-outs for the supplier page header shelf. Empty when that
 *  supplier's packshots do not cut out cleanly — better nothing than a ragged
 *  edge right under the company name. */
export function coverProductsForShelf(supplier: string, count = 4): string[] {
  const s = shots[supplier];
  if (!s || s.clean.length < 3) return [];
  return arrange(s.clean, supplier, '').slice(0, count).map((f) => cutPath(supplier, f));
}
