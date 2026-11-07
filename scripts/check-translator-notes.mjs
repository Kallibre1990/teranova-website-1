// Ловит служебные пометки переводчика/исследователя, случайно ушедшие в
// публичный текст: разборчивое название бренда или производителя, сразу за
// которым в скобках стоит исправление вида «X, а не Y» на любом из языков
// витрины.
//
// Зачем. 07.11.2026 на боевом сайте и в презентации Cheon365 обнаружилась
// строка «Korea Kolmar(코스맥스가 아닌 한국콜마)» — внутренняя пометка о
// правильном производителе, которую переводчик забыл убрать перед публикацией.
// Независимая проверка и все гейты это пропустили (T-20261107-036/037).
//
//   node scripts/check-translator-notes.mjs
//
// Код выхода 0 — чисто; 1 — найдена пометка (файл:строка и фрагмент в stderr).

import { readFileSync } from 'node:fs';
import { resolve, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const NEGATION_MARKERS = [
  '가 아닌', '이 아닌', '아니라', // ko
  'ではなく', 'じゃなく', // ja
  '而非', '不是', // zh
  'а не', // ru
  'not ', 'instead of', // en
  'nicht ', 'sondern', // de
  'pas ', 'plutôt que', // fr
];

// Разборчивое латинское название бренда/производителя прямо перед скобкой —
// именно так выглядел утёкший случай: «Korea Kolmar(...)».
const BRAND_BEFORE_PAREN = /([A-Za-z][A-Za-z.&'’-]*(?:\s+[A-Za-z][A-Za-z.&'’-]*){0,3})\(([^()]{1,160})\)/g;

function filesToScan() {
  return [
    ...globSync('src/data/suppliers-i18n/*.json', { cwd: root }),
    ...globSync('src/data/blog-*.ts', { cwd: root }),
  ];
}

function lineOf(text, index) {
  return text.slice(0, index).split('\n').length;
}

function scan(relPath) {
  const abs = resolve(root, relPath);
  const text = readFileSync(abs, 'utf8');
  const findings = [];
  for (const m of text.matchAll(BRAND_BEFORE_PAREN)) {
    const inner = m[2];
    const marker = NEGATION_MARKERS.find((mk) => inner.includes(mk));
    if (!marker) continue;
    findings.push({ line: lineOf(text, m.index), snippet: m[0], marker });
  }
  return findings;
}

let failed = false;
for (const relPath of filesToScan()) {
  for (const f of scan(relPath)) {
    failed = true;
    console.error(`${relative(root, resolve(root, relPath))}:${f.line}: translator note leaked into public text — "${f.snippet}" (marker: "${f.marker}")`);
  }
}

if (failed) {
  console.error('check-translator-notes: нашлись служебные пометки переводчика в публичном тексте. Убрать текст в скобках, сохранив смысл фразы.');
  process.exitCode = 1;
} else {
  console.log('check-translator-notes: чисто.');
}
