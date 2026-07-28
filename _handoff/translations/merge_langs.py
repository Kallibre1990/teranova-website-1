#!/usr/bin/env python3
"""Влить переводы zh/it/tr в src/data/blog.json для 6 новых статей.
Запускать из корня репозитория: python3 _handoff/translations/merge_langs.py
"""
import json, sys, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BLOG = os.path.join(ROOT, "src/data/blog.json")
TR = os.path.join(ROOT, "_handoff/translations")

LANGS = ["zh", "it", "tr"]
LANG_ORDER = ["ru", "en", "ko", "zh", "ja", "it", "de", "fr", "tr", "es", "pt"]
NEW_SLUGS = [
    "korean-sheet-masks-wholesale", "korean-scalp-care-category",
    "korean-makeup-suncare-wholesale", "wnt-cxxc5-scalp-science",
    "heribon-four-step-routine", "professional-scalp-boosters",
]
GUARANTEE = ["гаранти", "guarantee", "garanzia", "garanti"]

blog = json.load(open(BLOG))
ru_src = json.load(open(os.path.join(TR, "new-articles-ru.json")))

def shape(v):
    return (len(v["sections"]), tuple(len(s.get("p", [])) for s in v["sections"]),
            tuple("h" in s for s in v["sections"]))

errors = []
for lang in LANGS:
    art = json.load(open(os.path.join(TR, f"new-art-{lang}.json")))
    if set(art.keys()) != set(NEW_SLUGS):
        errors.append(f"{lang}: slug mismatch {set(art.keys()) ^ set(NEW_SLUGS)}")
        continue
    for slug in NEW_SLUGS:
        v = art[slug]
        if shape(v) != shape(ru_src[slug]):
            errors.append(f"{lang}/{slug}: shape != ru {shape(v)} vs {shape(ru_src[slug])}")
        blob = json.dumps(v, ensure_ascii=False).lower()
        for g in GUARANTEE:
            if g in blob:
                errors.append(f"{lang}/{slug}: содержит '{g}'")
        st = v.get("seoTitle", "")
        if not st.endswith(" · Teranova"):
            errors.append(f"{lang}/{slug}: seoTitle не оканчивается ' · Teranova'")
        if len(st) > 60:
            errors.append(f"{lang}/{slug}: seoTitle {len(st)}>60")

if errors:
    print("ВАЛИДАЦИЯ НЕ ПРОШЛА:")
    for e in errors:
        print("  -", e)
    sys.exit(1)

# merge
posts = {p["slug"]: p for p in blog}
for lang in LANGS:
    art = json.load(open(os.path.join(TR, f"new-art-{lang}.json")))
    for slug in NEW_SLUGS:
        i18n = posts[slug]["i18n"]
        i18n[lang] = art[slug]
        # переупорядочить ключи по LANG_ORDER
        posts[slug]["i18n"] = {k: i18n[k] for k in LANG_ORDER if k in i18n}

json.dump(blog, open(BLOG, "w"), ensure_ascii=False, indent=2)
print("OK: влиты zh/it/tr в", len(NEW_SLUGS), "статей.")
for slug in NEW_SLUGS:
    print("  ", slug, "->", list(posts[slug]["i18n"].keys()))
