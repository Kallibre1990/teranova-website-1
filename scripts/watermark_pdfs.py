#!/usr/bin/env python3
"""Водяной знак Teranova на PDF поставщиков — СТРОГО ПОД ТЕКСТОМ.

Знак рисуется отдельным потоком содержимого, вставленным ПЕРЕД основным
(overlay=False), поэтому текст и цены остаются полностью читаемыми. Прежние
знаки (в том числе старые, набитые поверх текста и выедавшие цифры) снимаются
перед наложением, поэтому скрипт идемпотентен — повторный прогон не двоит знак.

Подвал локализован: кириллица и CJK требуют Unicode-шрифта (Arial Unicode),
в Helvetica они выпадают в точки — именно так сломался прежний вариант.

    python3 scripts/watermark_pdfs.py                 # все PDF в public/docs
    python3 scripts/watermark_pdfs.py licorne sante   # только эти slug'и
"""
import sys, os, glob, re

import fitz  # PyMuPDF

DOCS = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'public', 'docs')
FONT = '/System/Library/Fonts/Supplemental/Arial Unicode.ttf'

CENTER = 'TERANOVA GROUP'
CENTER_SIZE = 34
CENTER_GRAY = (0.86, 0.88, 0.91)
FOOT_SIZE = 7
FOOT_GRAY = (0.62, 0.65, 0.70)

ORIGINAL = {
    'ru': 'оригинал документа', 'en': 'original document', 'ko': '원본 문서',
    'zh': '原始文件', 'ja': '原本書類', 'it': 'documento originale',
    'de': 'Originaldokument', 'fr': 'document original', 'tr': 'orijinal belge',
    'es': 'documento original', 'pt': 'documento original',
}


def lang_of(path):
    m = re.search(r'-([a-z]{2})\.pdf$', os.path.basename(path))
    return m.group(1) if m and m.group(1) in ORIGINAL else 'en'


def strip_old(doc):
    """Обнулить потоки прежних знаков/подвалов.

    Штамп всегда крошечный поток с одним блоком BT…ET. Основное содержимое
    страницы из Chrome — десятки килобайт, под порог не попадает."""
    removed = 0
    for page in doc:
        for xref in page.get_contents():
            raw = doc.xref_stream(xref)
            if len(raw) < 600 and b'Tf' in raw and b'TJ' in raw:
                doc.update_stream(xref, b' ')
                removed += 1
    return removed


def stamp(doc, lang):
    """Знак и подвал — под содержимым страницы.

    Центральный знак чисто латинский, поэтому рисуем базовым шрифтом Helvetica:
    он не вшивается в файл. Подвал локализован (кириллица, CJK) и требует
    Unicode-шрифта; чтобы файл не раздувался на десятки мегабайт, вшитый шрифт
    затем урезается до реально использованных символов (subset_fonts)."""
    foot = f'© Teranova Group · teranovagroup.com · {ORIGINAL[lang]}'
    for page in doc:
        r = page.rect
        page.insert_textbox(
            fitz.Rect(r.x0, r.y0 + r.height * 0.44, r.x1, r.y0 + r.height * 0.56),
            CENTER, fontsize=CENTER_SIZE, fontname='helv',
            color=CENTER_GRAY, align=fitz.TEXT_ALIGN_CENTER, overlay=False,
        )
        page.insert_textbox(
            fitz.Rect(r.x0, r.y1 - 26, r.x1, r.y1 - 8),
            foot, fontsize=FOOT_SIZE, fontfile=FONT, fontname='AUni',
            color=FOOT_GRAY, align=fitz.TEXT_ALIGN_CENTER, overlay=False,
        )
    try:
        doc.subset_fonts(verbose=False)
    except Exception:
        pass  # старые сборки PyMuPDF — файл просто останется крупнее


def words(doc):
    return sorted(w for p in doc for w in p.get_text().split())


# Слова, принадлежащие самому знаку: им и положено исчезнуть при снятии.
OWN = {'©', '·', 'Teranova', 'Group', 'teranovagroup.com', 'TERANOVA', 'GROUP'}
for _v in ORIGINAL.values():
    OWN.update(_v.split())


def process(path):
    doc = fitz.open(path)
    before = words(doc)
    strip_old(doc)
    after_strip = words(doc)
    # Защита: снятие знака не должно уносить содержимое страницы.
    lost = [w for w in before if w not in after_strip and w not in OWN and not set(w) <= {'·', '\xb7'}]
    if lost:
        doc.close()
        return f'ПРОПУЩЕН (снятие задело текст: {lost[:5]})'
    stamp(doc, lang_of(path))
    # Полное пересохранение со сборкой мусора и сжатием: после урезания шрифтов
    # инкрементальная запись только добавила бы объём.
    doc.save(path + '.tmp', garbage=4, deflate=True, clean=True)
    doc.close()
    os.replace(path + '.tmp', path)
    return 'ok'


def main():
    slugs = sys.argv[1:]
    files = sorted(glob.glob(os.path.join(DOCS, '*.pdf')))
    if slugs:
        files = [f for f in files if any(os.path.basename(f).startswith(s + '-') for s in slugs)]
    ok = 0
    for f in files:
        res = process(f)
        if res == 'ok':
            ok += 1
        else:
            print(f'  {os.path.basename(f)}: {res}')
    print(f'Готово: знак под текстом на {ok}/{len(files)} PDF')


if __name__ == '__main__':
    main()
