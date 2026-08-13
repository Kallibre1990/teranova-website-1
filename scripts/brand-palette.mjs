#!/usr/bin/env node
/* Read a supplier's brand colours off their own packaging.
 *
 * The palettes in suppliers.ts were picked by eye, and a few came out grey —
 * which makes every surface built from them (covers, profile, deck) look muddy.
 * The packshots are the brand's real colour, so measure them instead of guessing:
 * count saturated pixels by hue, take the dominant one, and report a ready
 * deep / sky / accent / bg set.
 *
 * Reports only — suppliers.ts is edited by hand, deliberately.
 *
 * DO NOT copy the output in blindly. Checked against reality (2026-08-13): for a
 * mixed range the dominant hue is the range's, not the brand's — green LICORNE
 * and lavender KIFT both came back beige, off amber bottles and skin tones. Use
 * this to spot a palette that has gone grey; take the actual colours from the
 * brand's own site.
 *
 *   node scripts/brand-palette.mjs [slug ...]
 */
import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SUP = path.join(ROOT, 'public/img/suppliers');
const BINS = 36; // 10° per hue bin

function rgb2hsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [h * 360, s, l];
}

const hex = (r, g, b) => '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');

function hsl2hex(h, s, l) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  const [r, g, b] =
    h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return hex((r + m) * 255, (g + m) * 255, (b + m) * 255);
}

async function palette(slug) {
  const dir = path.join(SUP, slug, 'products');
  if (!existsSync(dir)) return null;
  const files = (await readdir(dir)).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
  const weight = new Float64Array(BINS);
  const satSum = new Float64Array(BINS);
  const litSum = new Float64Array(BINS);
  let counted = 0;

  for (const f of files) {
    /* Small sample per shot: hue statistics do not need full resolution. */
    const { data, info } = await sharp(path.join(dir, f))
      .resize(64, 64, { fit: 'inside' })
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    for (let i = 0; i < data.length; i += info.channels) {
      const [h, s, l] = rgb2hsl(data[i], data[i + 1], data[i + 2]);
      /* Skip the studio sweep, the shadows and anything washed out — what is
         left is packaging colour. */
      if (s < 0.28 || l < 0.14 || l > 0.9) continue;
      const b = Math.min(BINS - 1, Math.floor(h / (360 / BINS)));
      weight[b] += s;
      satSum[b] += s;
      litSum[b] += l;
      counted++;
    }
  }
  if (!counted) return null;

  const top = [...weight.keys()].sort((a, b) => weight[b] - weight[a]);
  const main = top[0];
  const share = weight[main] / weight.reduce((a, b) => a + b, 0);
  const hue = main * (360 / BINS) + 360 / BINS / 2;
  const sat = Math.min(0.8, Math.max(0.35, satSum[main] / (weight[main] || 1)));

  /* Second hue, if it is a genuinely different colour — that is the accent. */
  const alt = top.find((b) => Math.abs(b - main) > 3 && Math.abs(b - main) < BINS - 3) ?? main;
  const altHue = alt * (360 / BINS) + 360 / BINS / 2;

  return {
    slug,
    share: +(share * 100).toFixed(1),
    hue: Math.round(hue),
    deep: hsl2hex(hue, Math.min(0.72, sat + 0.15), 0.19),
    sky: hsl2hex(hue, sat, 0.55),
    accent: hsl2hex(altHue, Math.min(0.8, sat + 0.2), 0.5),
    bg: hsl2hex(hue, Math.min(0.45, sat), 0.96),
  };
}

const only = process.argv.slice(2);
const slugs = (await readdir(SUP, { withFileTypes: true }))
  .filter((d) => d.isDirectory() && (!only.length || only.includes(d.name)))
  .map((d) => d.name);

for (const slug of slugs) {
  const p = await palette(slug);
  if (!p) {
    console.log(`${slug.padEnd(18)} — цвет не определён`);
    continue;
  }
  console.log(
    `${slug.padEnd(18)} тон ${String(p.hue).padStart(3)}° (${String(p.share).padStart(4)}% пикселей)  ` +
      `deep ${p.deep}  sky ${p.sky}  accent ${p.accent}  bg ${p.bg}`,
  );
}
