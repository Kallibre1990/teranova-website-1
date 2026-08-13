#!/usr/bin/env node
/* Cut supplier product shots out of their white studio background.
 *
 * The photos suppliers send are packshots on plain white. That is fine inside a
 * white catalog card, but useless on a coloured cover: the white square shows.
 * This script makes a transparent copy of each shot so the bottle itself can be
 * composed onto a brand-coloured scene (see BrandCover.astro).
 *
 * Only the white *connected to the frame edge* is removed, so white caps, labels
 * and packaging inside the product survive. Edge pixels keep partial alpha, so
 * the cut-out does not look like scissors work.
 *
 *   node scripts/cutout-products.mjs [slug ...]     # default: every supplier
 *
 * Output: public/img/suppliers/<slug>/cutout/<name>.webp (idempotent — existing
 * files are skipped unless the source is newer).
 */
import { readdir, mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SUP = path.join(ROOT, 'public/img/suppliers');
const OUT_W = 800; // enough for a hero-sized cover, still light as webp

/* Two thresholds. The flood fill uses the strict one so it cannot leak through a
   soft shadow into a white jar; the halo pass then uses the loose one, but only
   on pixels already touching known background. */
const SEED = 0.955; // luminance above this, and neutral → certainly the sweep
const HALO = 0.88; // pale JPEG fringe around the object
const lumOf = (r, g, b) => (r * 0.299 + g * 0.587 + b * 0.114) / 255;
const neutral = (r, g, b) => Math.max(r, g, b) - Math.min(r, g, b) < 22;

/* Trim the empty margin, scale down, save. Shared by both paths below. */
const emit = (input, dest) =>
  sharp(input)
    .trim({ threshold: 1 })
    .resize({ width: OUT_W, height: OUT_W, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 88, alphaQuality: 92, effort: 5 })
    .toFile(dest);

async function cutout(src, dest) {
  const img = sharp(src).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: ch } = info;
  const px = (x, y) => (y * w + x) * ch;

  /* Some suppliers already send packshots with an alpha channel (SANTE does).
     Nothing to cut — just normalise them into the same shape as the rest. */
  const corners = [px(0, 0), px(w - 1, 0), px(0, h - 1), px(w - 1, h - 1)];
  if (corners.every((i) => data[i + 3] < 10)) {
    await emit(src, dest);
    return { ok: true, mode: 'уже с альфой' };
  }

  const lum = new Float32Array(w * h);
  for (let id = 0; id < w * h; id++) {
    const i = id * ch;
    lum[id] = lumOf(data[i], data[i + 1], data[i + 2]);
  }

  /* 1. Flood fill the sweep from the frame edge, strict threshold only. */
  const bg = new Uint8Array(w * h);
  const stack = [];
  for (let x = 0; x < w; x++) stack.push(x, x + (h - 1) * w);
  for (let y = 0; y < h; y++) stack.push(y * w, y * w + w - 1);
  while (stack.length) {
    const id = stack.pop();
    if (bg[id]) continue;
    const i = id * ch;
    if (lum[id] < SEED || !neutral(data[i], data[i + 1], data[i + 2])) continue;
    bg[id] = 1;
    const x = id % w;
    if (x > 0) stack.push(id - 1);
    if (x < w - 1) stack.push(id + 1);
    if (id >= w) stack.push(id - w);
    if (id < w * (h - 1)) stack.push(id + w);
  }

  /* 2. Eat the pale fringe: three passes of "next to background and still pale".
     Bounded, so it trims the JPEG halo without gnawing into the product. */
  for (let pass = 0; pass < 3; pass++) {
    const add = [];
    for (let id = 0; id < w * h; id++) {
      if (bg[id] || lum[id] < HALO) continue;
      const x = id % w;
      if (
        (x > 0 && bg[id - 1]) ||
        (x < w - 1 && bg[id + 1]) ||
        (id >= w && bg[id - w]) ||
        (id < w * (h - 1) && bg[id + w])
      )
        add.push(id);
    }
    if (!add.length) break;
    for (const id of add) bg[id] = 1;
  }

  const kept = bg.reduce((n, v) => n + (v ? 0 : 1), 0);
  const keptShare = kept / (w * h);
  /* A photo shot in a room or on a coloured sweep comes back almost untouched —
     it is a scene, not a packshot, and stays as it is. */
  if (keptShare > 0.96) return { skipped: 'фон не белый (сцена)' };

  /* 3. Keep only substantial objects. Packshots often carry stray captions and
     ruler marks; those survive the fill as small islands and look like dirt on a
     coloured cover. Anything under a tenth of the main object goes. */
  const label = new Int32Array(w * h).fill(-1);
  const sizes = [];
  for (let start = 0; start < w * h; start++) {
    if (bg[start] || label[start] !== -1) continue;
    const id = sizes.length;
    let n = 0;
    const q = [start];
    label[start] = id;
    while (q.length) {
      const p = q.pop();
      n++;
      const x = p % w;
      const nb = [];
      if (x > 0) nb.push(p - 1);
      if (x < w - 1) nb.push(p + 1);
      if (p >= w) nb.push(p - w);
      if (p < w * (h - 1)) nb.push(p + w);
      for (const m of nb)
        if (!bg[m] && label[m] === -1) {
          label[m] = id;
          q.push(m);
        }
    }
    sizes.push(n);
  }
  const biggest = Math.max(...sizes);
  /* Blobs touching the frame edge are usually a caption or a neighbouring object
     the crop cut in half — they need to be clearly substantial to stay. */
  const atEdge = sizes.map(() => false);
  for (let id = 0; id < w * h; id++) {
    if (bg[id]) continue;
    const x = id % w;
    const y = (id / w) | 0;
    if (x === 0 || y === 0 || x === w - 1 || y === h - 1) atEdge[label[id]] = true;
  }
  /* Keep the main object only. Packshots carry stray captions, sticker corners
     and halves of a neighbouring pack; anything short of a genuine second object
     of comparable size is dirt once the white ground is gone. */
  const keepBlob = sizes.map((n, i) => n === biggest || (n >= biggest * 0.6 && !atEdge[i]));

  /* 4. Write alpha, then feather the outline so it does not look cut by scissors. */
  const alpha = Buffer.alloc(w * h);
  for (let id = 0; id < w * h; id++) alpha[id] = !bg[id] && keepBlob[label[id]] ? 255 : 0;
  const soft = await sharp(alpha, { raw: { width: w, height: h, channels: 1 } })
    .blur(0.7)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const sch = soft.info.channels; // sharp may hand back grey+alpha, not plain grey
  for (let id = 0; id < w * h; id++) data[id * ch + 3] = soft.data[id * sch];

  /* How trustworthy is this cut-out? A white jar on a white sweep has no real
     edge to find, so the outline comes out ragged. Measure it instead of hoping:
     walk the outline and see how much of it is still near-white. Covers use only
     the clean ones and fall back to a framed packshot for the rest. */
  let outline = 0;
  let pale = 0;
  for (let id = 0; id < w * h; id++) {
    if (bg[id] || !keepBlob[label[id]]) continue;
    const x = id % w;
    const edge =
      (x > 0 && bg[id - 1]) ||
      (x < w - 1 && bg[id + 1]) ||
      (id >= w && bg[id - w]) ||
      (id < w * (h - 1) && bg[id + w]);
    if (!edge) continue;
    outline++;
    if (lum[id] > 0.9) pale++;
  }
  const paleEdge = outline ? pale / outline : 1;

  /* Leftover crumbs — stray letters or crop remains that survived as separate
     blobs — read as dirt on a coloured cover, so such a shot is not "clean". */
  const kepts = sizes.filter((_, i) => keepBlob[i]);
  const crumbs = kepts.length > 1 ? kepts.reduce((a, b) => a + b, 0) - biggest : 0;
  const tidy = crumbs / biggest < 0.55;

  const png = await sharp(data, { raw: { width: w, height: h, channels: ch } }).png().toBuffer();
  await emit(png, dest);
  return { ok: true, mode: 'вырезан белый', keptShare, clean: paleEdge < 0.3 && tidy, paleEdge };
}

/* Shots the algorithm calls clean but the eye does not: a packshot standing on a
   white plinth that merges with the bottle, a styled room shot, a machine cropped
   at the frame. Checked by eye over the full contact sheet — kept as an explicit
   list rather than by loosening thresholds, which would spoil the good ones. */
const REJECT = new Set([
  'licorne/vegan-cactus-cream.webp', // white plinth + neighbouring caption fused to the jar
  'icelmedi/kerason-prime.webp', // salon machine shot in a room, not a packshot
  'three-days-love/time72-exomere-time-lock-kit.webp', // open presentation case; the lid tears at the frame edge
  'licorne/collagen-snail-serum.webp', // red caption from the next pack fused to the bottle through its shadow
  'licorne/vegan-cactus-lotion.webp', // same — a stray "ST" rides along
  'licorne/salmon-dna-toning-pad.webp', // styled shot: the pink ground only partly washes out
  'licorne/salmon-vita-water-essence.webp', // neighbouring red caption survives above the bottle
  'licorne/salmon-dna-ampoule.webp', // peach ground of the styled shot clings to the bottle
  'licorne/vegan-cactus-mist.webp', // same pink ground, thinner but visible on a coloured cover
]);

const only = process.argv.slice(2);
const slugs = (await readdir(SUP, { withFileTypes: true }))
  .filter((d) => d.isDirectory() && (!only.length || only.includes(d.name)))
  .map((d) => d.name);

let made = 0;
let skipped = 0;
let dirty = 0;
/* Start from what is already on disk: a run for one supplier must not wipe the
   other suppliers out of the manifest. */
const MANIFEST = path.join(SUP, 'cutouts.json');
const manifest = existsSync(MANIFEST) ? JSON.parse(await readFile(MANIFEST, 'utf8')) : {};
for (const slug of slugs) {
  const from = path.join(SUP, slug, 'products');
  if (!existsSync(from)) continue;
  const to = path.join(SUP, slug, 'cutout');
  await mkdir(to, { recursive: true });
  const clean = [];
  const all = [];
  for (const file of await readdir(from)) {
    if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;
    all.push(file);
    const src = path.join(from, file);
    const name = file.replace(/\.[^.]+$/, '.webp');
    const dest = path.join(to, name);
    try {
      const r = await cutout(src, dest);
      if (r.skipped) {
        skipped++;
        continue;
      }
      made++;
      if (process.env.CUT_STATS) {
        console.log(`   ${slug}/${name} keptShare=${r.keptShare?.toFixed(3)} paleEdge=${r.paleEdge?.toFixed(2)} clean=${r.clean !== false}`);
      }
      if (r.clean === false || REJECT.has(`${slug}/${name}`)) dirty++;
      else clean.push(name);
    } catch (e) {
      console.log(`  ! ${slug}/${file}: ${e.message}`);
      skipped++;
    }
  }
  /* clean = safe to float on a coloured set; all = every packshot we have, used
     by the framed-card fallback for suppliers whose shots do not cut out well. */
  manifest[slug] = { clean: clean.sort(), all: all.sort() };
  console.log(`${slug}: чистых вырезов ${clean.length}`);
}
/* Consumed by src/data/cutouts.ts — the covers only ever place a clean cut-out. */
await writeFile(MANIFEST, JSON.stringify(manifest, null, 1) + '\n');
console.log(`\nВырезано: ${made} (из них с рваным контуром — не для обложек: ${dirty}), сцен пропущено: ${skipped}`);
