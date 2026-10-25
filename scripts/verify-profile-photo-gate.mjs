#!/usr/bin/env node
/* A supplier profile is not deliverable when its product catalogue is visual
 * only in name. DREAMCOS is the approved reference; AGAFAR must carry at
 * least 60% as many photographed product cards in every delivered locale. */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(process.argv[2] ?? 'dist');
const locales = ['', 'en', 'ko'];
const page = (locale, slug) => resolve(root, locale, 'catalog', slug, 'index.html');
const photographedProducts = (html) =>
  [...html.matchAll(/<button\b[^>]*class="[^"]*\bsp-prod\b[^"]*"[^>]*>([\s\S]*?)<\/button>/g)]
    .filter(([, card]) => /<img\b[^>]*\bsrc="[^"]+"/i.test(card)).length;

const reference = Object.fromEntries(locales.map((locale) => [locale || 'ru', photographedProducts(readFileSync(page(locale, 'dreamcos'), 'utf8'))]));
const required = Object.fromEntries(Object.entries(reference).map(([locale, count]) => [locale, Math.max(1, Math.ceil(count * 0.6))]));
const actual = Object.fromEntries(locales.map((locale) => [locale || 'ru', photographedProducts(readFileSync(page(locale, 'agafar'), 'utf8'))]));
const failures = Object.keys(actual).filter((locale) => actual[locale] < required[locale]);

for (const locale of Object.keys(actual)) console.log(`${locale}: AGAFAR ${actual[locale]} / DREAMCOS ${reference[locale]}; required >= ${required[locale]}`);
if (failures.length) {
  console.error(`Profile photo gate failed: ${failures.join(', ')}`);
  process.exitCode = 1;
}
