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
import sys, os, glob, re, hashlib

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


KIND = {'terms': 'Terms of cooperation', 'price': 'Price list', 'presentation': 'Presentation'}


def clean_meta(doc, path):
    """Свойства документа: осмысленные и одинаковые от прогона к прогону.

    Что чинит. Первое — вид: Chrome оставлял в заголовке имя своего временного
    файла («spdf-1969458932.html»), в авторе — HeadlessChrome. Покупатель,
    открывший свойства нашего прайса, видел кухню.

    Второе, и это важнее. Chrome ставит дату печати, поэтому две сборки одного
    и того же документа отличались ровно на 73 байта даты — и git считал
    изменившимися все 330 файлов при каждой пересборке, даже когда не менялось
    ничего. Так история репозитория доросла до 12 ГБ. Без дат одинаковый
    документ даёт байт-в-байт одинаковый файл, и в историю попадает только
    то, что действительно изменилось.

    Дата документа здесь ничего не значит: прайсы ориентировочные, срок
    действия оговорён в тексте условий.
    """
    base = os.path.basename(path)[:-4]
    m = re.match(r'^(.+)-(terms|price|presentation)-([a-z]{2})$', base)
    if m:
        supplier = m.group(1).replace('-', ' ').upper()
        title = f'Teranova Group · {supplier} · {KIND[m.group(2)]} ({m.group(3).upper()})'
    else:
        title = 'Teranova Group'
    doc.set_metadata({
        'title': title, 'author': 'Teranova Group', 'subject': '',
        'keywords': '', 'creator': 'Teranova Group', 'producer': 'Teranova Group',
        'creationDate': '', 'modDate': '',
    })


def stable_id(path):
    """Сделать идентификатор файла производным от его содержимого.

    В трейлере PDF лежит /ID[<A><B>]: A — идентификатор документа, B — версии.
    Оба генерируются случайно при каждом сохранении, поэтому даже с убранными
    датами две сборки одного и того же прайса давали разные байты, а git считал
    файл изменившимся. Здесь оба значения заменяются хешем самого документа:
    одинаковый документ — одинаковый идентификатор, изменённый — новый.

    Длина строго сохраняется: /ID стоит после таблицы xref, но сдвиг байтов
    сломал бы смещение startxref, поэтому подставляем ровно столько же символов.
    """
    raw = open(path, 'rb').read()
    m = None
    for m in re.finditer(rb'/ID\s*\[\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*\]', raw):
        pass  # нужен последний — тот, что в трейлере
    if not m:
        return False
    # хеш считаем от документа с обнулённым /ID, иначе он зависел бы сам от себя
    blank = raw[:m.start(1)] + b'0' * len(m.group(1)) + raw[m.end(1):m.start(2)] \
        + b'0' * len(m.group(2)) + raw[m.end(2):]
    digest = hashlib.sha256(blank).hexdigest().upper()
    a = (digest * ((len(m.group(1)) // len(digest)) + 1))[:len(m.group(1))].encode()
    b = (digest * ((len(m.group(2)) // len(digest)) + 1))[:len(m.group(2))].encode()
    fixed = raw[:m.start(1)] + a + raw[m.end(1):m.start(2)] + b + raw[m.end(2):]
    if len(fixed) != len(raw):
        return False
    open(path, 'wb').write(fixed)
    return True


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
    clean_meta(doc, path)
    # Полное пересохранение со сборкой мусора и сжатием: после урезания шрифтов
    # инкрементальная запись только добавила бы объём.
    doc.save(path + '.tmp', garbage=4, deflate=True, clean=True)
    doc.close()
    stable_id(path + '.tmp')
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
