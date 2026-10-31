#!/usr/bin/env node
/* AGAFAR's confirmed equipment must not be rendered as text-only cards. */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.argv[2] ?? 'dist');
const negativeControl = process.argv.includes('--negative-control');
const locales = ['', 'en', 'ko'];
const page = (locale) => resolve(root, locale, 'catalog', 'agafar', 'index.html');
const cards = (html) => [...html.matchAll(/<article\b[^>]*class="[^"]*\bsp-tech__item\b[^"]*"[^>]*>([\s\S]*?)<\/article>/g)]
  .map(([, card]) => card);
const imageCount = (techCards) => techCards.filter((card) => /<img\b[^>]*\bsrc="[^"]+"/i.test(card)).length;
const plazionHasOwnImage = (techCards) => techCards.some((card) => /PLAZION/i.test(card) && /scenes\/plazion\.webp/i.test(card));

let failed = false;
for (const locale of locales) {
  const label = locale || 'ru';
  let techCards = cards(readFileSync(page(locale), 'utf8'));
  if (negativeControl) techCards = techCards.map((card, index) => index === 0 ? card.replace(/<img\b[^>]*>/i, '') : card);
  const photos = imageCount(techCards);
  const plazion = plazionHasOwnImage(techCards);
  console.log(`${label}: tech cards=${techCards.length}; pictured=${photos}; PLAZION=${plazion}`);
  if (techCards.length < 9 || photos < 9 || !plazion) failed = true;
}

if (failed) {
  console.error(negativeControl ? 'Negative control correctly failed: a tech image is absent.' : 'AGAFAR tech-photo gate failed.');
  process.exitCode = 1;
}
