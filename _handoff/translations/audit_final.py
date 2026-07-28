#!/usr/bin/env python3
"""Финальный аудит dist после сборки. Запускать из корня репо после `npm run build`.
python3 _handoff/translations/audit_final.py
"""
import os, re, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DIST = os.path.join(ROOT, "dist")

problems = []
notes = []

# 1. Перечёт страниц
htmls = glob.glob(os.path.join(DIST, "**/*.html"), recursive=True)
notes.append(f"HTML-страниц в dist: {len(htmls)}")

# 2. «Гарантия» и эквиваленты в видимом тексте (грубо — по всему HTML)
GUARANTEE = [r"\bгаранти", r"\bguarantee", r"\bgaranzia", r"\bgaranti\b", r"\bgarantie",
             r"\bgarantía", r"\bgarantia", r"\b保証", r"\b保证", r"\b보장"]
# CK Regeon — регуляторные запреты (латиница/общие)
REG_FORBIDDEN = [r"FDA[- ]approved", r"clinically proven", r"mesotherap", r"\binjectable",
                 r"cure (?:for )?(?:hair loss|alopecia)", r"treats? (?:hair loss|alopecia)"]

# страницы CK Regeon (профиль + бренды + статьи)
ck_slugs = ["ck-regeon", "wnt-cxxc5-scalp-science", "heribon-four-step-routine", "professional-scalp-boosters"]

g_hits = []
reg_hits = []
for f in htmls:
    rel = os.path.relpath(f, DIST)
    txt = open(f, encoding="utf-8", errors="ignore").read()
    # видимый текст — грубо срежем скрипты/стили
    body = re.sub(r"<script.*?</script>", " ", txt, flags=re.S | re.I)
    body = re.sub(r"<style.*?</style>", " ", body, flags=re.S | re.I)
    for pat in GUARANTEE:
        if re.search(pat, body, re.I):
            g_hits.append((rel, pat))
    if any(s in rel for s in ck_slugs):
        for pat in REG_FORBIDDEN:
            for m in re.finditer(pat, body, re.I):
                # контекст ±80 симв — защитные разделы упоминают запрещённое как пример
                s = max(0, m.start() - 80)
                reg_hits.append((rel, pat, body[s:m.end() + 40].replace("\n", " ")))

if g_hits:
    for rel, pat in g_hits[:40]:
        problems.append(f"ГАРАНТИЯ: {rel} :: {pat}")
else:
    notes.append("«Гарантия» и эквиваленты: 0 совпадений во всём dist")

if reg_hits:
    notes.append(f"CK Regeon регуляторные упоминания: {len(reg_hits)} (проверить контекст — защитные разделы допустимы):")
    for rel, pat, ctx in reg_hits[:30]:
        notes.append(f"    {rel} :: {pat} :: …{ctx}…")
else:
    notes.append("CK Regeon: регуляторных запретных формулировок не найдено")

# 3. zh/it/tr статьи больше не fallback: заголовок отличается от ru
newslugs = ["korean-sheet-masks-wholesale", "korean-scalp-care-category",
            "korean-makeup-suncare-wholesale", "wnt-cxxc5-scalp-science",
            "heribon-four-step-routine", "professional-scalp-boosters"]

def find_html(lang, slug):
    cands = [os.path.join(DIST, lang, "blog", slug, "index.html"),
             os.path.join(DIST, lang, "blog", slug + ".html")]
    for c in cands:
        if os.path.exists(c):
            return c
    hits = glob.glob(os.path.join(DIST, lang, "**", slug, "index.html"), recursive=True)
    return hits[0] if hits else None

def title_of(path):
    if not path:
        return None
    t = open(path, encoding="utf-8", errors="ignore").read()
    m = re.search(r"<title>(.*?)</title>", t, re.S | re.I)
    return m.group(1).strip() if m else None

ru_titles = {s: title_of(find_html("ru", s)) for s in newslugs}
for lang in ["zh", "it", "tr"]:
    for s in newslugs:
        p = find_html(lang, s)
        if not p:
            problems.append(f"НЕТ СТРАНИЦЫ: {lang}/blog/{s}")
            continue
        t = title_of(p)
        if t and ru_titles.get(s) and t == ru_titles[s]:
            problems.append(f"FALLBACK на ru: {lang}/blog/{s} (title == ru)")

# итог
print("=" * 60)
print("ФИНАЛЬНЫЙ АУДИТ")
print("=" * 60)
for n in notes:
    print("· " + n)
print("-" * 60)
if problems:
    print(f"ПРОБЛЕМЫ ({len(problems)}):")
    for p in problems:
        print("  ✗ " + p)
    sys.exit(1)
else:
    print("✓ Блокирующих проблем не найдено.")
