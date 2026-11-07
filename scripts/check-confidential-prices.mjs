/* Fails the build if a supplier whose price list was shared as confidential
   gets a price or MOQ back into its public catalog data. 07.11.2026 the
   CELLAHEAL catalog shipped "MOQ N" taken from the confidential price list
   (T-20261107-084); this check keeps that from happening again.
   Add a slug here whenever a supplier sends its price list as confidential. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const CONFIDENTIAL = ['cellaheal', 'cheon365'];
const DATA = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src/data/suppliers-i18n');
const bad = [];
for (const slug of CONFIDENTIAL) {
  const file = path.join(DATA, `${slug}.catalog.json`);
  if (!fs.existsSync(file)) continue;
  for (const group of JSON.parse(fs.readFileSync(file, 'utf8'))) {
    for (const item of group.items || []) {
      for (const key of ['price', 'moq']) if (key in item) bad.push(`${slug}: «${item.name}» has ${key}`);
    }
  }
}
if (bad.length) {
  console.error('check-confidential-prices: confidential price data in public catalog:\n  ' + bad.join('\n  '));
  process.exit(1);
}
console.log(`check-confidential-prices: чисто (${CONFIDENTIAL.join(', ')}).`);
