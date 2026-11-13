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
    'he': 'מסמך מקורי', 'hi': 'मूल दस्तावेज़',
}


def lang_of(path):
    m = re.search(r'-([a-z]{2})\.pdf$', os.path.basename(path))
    return m.group(1) if m and m.group(1) in ORIGINAL else 'en'


# Публичное имя, если оно не совпадает со слагом файла (адрес сохранён, имя сменилось).
DISPLAY = {'veo-biotech': 'WEIYI BIOTECH'}

KIND = {'terms': 'Terms of cooperation', 'price': 'Price list', 'catalog': 'Catalog', 'presentation': 'Presentation'}


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
    m = re.match(r'^(.+)-(terms|price|catalog|presentation)-([a-z]{2})$', base)
    if m:
        supplier = DISPLAY.get(m.group(1), m.group(1).replace('-', ' ').upper())
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


def center_band(page, box_frac=0.12, default_frac=0.5):
    """Вертикальная полоса для центрального знака, свободная от текста строк.

    Знак рисуется под содержимым (overlay=False), но на коротких документах
    (catalog/terms с малым числом строк) фиксированная полоса 44-56% высоты
    страницы всё равно приходится ровно на строку таблицы или подвал — крупные
    буквы знака просвечивают сквозь текст и выглядят как перечёркнутая строка.
    Поэтому полосу подбираем: берём ту же высоту, что и раньше (12% страницы),
    но сканируем от центра страницы наружу и останавливаемся на первой полосе,
    не пересекающей ни одно слово реального содержимого. Не находим — остаёмся
    на прежнем фиксированном месте (не хуже, чем раньше).

    Свобода проверяется не по всей ширине страницы, а только там, где и правда
    лягут буквы знака: сам знак — это одна центрированная строка фиксированной
    ширины (в разы уже страницы), а карточки каталога занимают почти всю высоту
    почти по всей ширине. Проверка по полной ширине находила «свободную» полосу
    только за пределами страницы и скатывалась в зафиксированный запасной
    вариант, который как раз и пересекал текст — отсюда и был дефект."""
    r = page.rect
    h = r.height
    box_h = h * box_frac
    text_w = fitz.get_text_length(CENTER, fontname='helv', fontsize=CENTER_SIZE)
    cx = (r.x0 + r.x1) / 2
    bx0, bx1 = cx - text_w / 2, cx + text_w / 2
    words = page.get_text('words')  # (x0, y0, x1, y1, word, ...)

    def free(y0, y1):
        return not any(w[1] < y1 and w[3] > y0 and w[0] < bx1 and w[2] > bx0 for w in words)

    candidates = [default_frac]
    step = 0.03
    for i in range(1, 13):
        for c in (default_frac - i * step, default_frac + i * step):
            if 0.22 <= c <= 0.80:
                candidates.append(c)
    for c in candidates:
        y0, y1 = r.y0 + h * c - box_h / 2, r.y0 + h * c + box_h / 2
        if free(y0, y1):
            return y0, y1
    return r.y0 + h * (default_frac - box_frac / 2), r.y0 + h * (default_frac + box_frac / 2)


def stamp(doc, lang):
    """Знак и подвал — под содержимым страницы.

    Центральный знак чисто латинский, поэтому рисуем базовым шрифтом Helvetica:
    он не вшивается в файл. Подвал локализован (кириллица, CJK) и требует
    Unicode-шрифта; чтобы файл не раздувался на десятки мегабайт, вшитый шрифт
    затем урезается до реально использованных символов (subset_fonts).

    insert_textbox не делает bidi-переупорядочивание: он кладёт символы строки
    слева направо в их логическом порядке. Для иврита это читается наоборот
    («מסמך מקורי» превращалось в «ירוקמ ךמסמ»), поэтому иврит передаём уже
    отзеркаленным — тогда левый-направо проход даёт верный визуальный порядок."""
    original = ORIGINAL[lang][::-1] if lang == 'he' else ORIGINAL[lang]
    foot = f'© Teranova Group · teranovagroup.com · {original}'
    for page in doc:
        r = page.rect
        band_y0, band_y1 = center_band(page)
        page.insert_textbox(
            fitz.Rect(r.x0, band_y0, r.x1, band_y1),
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
# he рисуется отзеркаленным (см. stamp()), поэтому в текстовом слое PDF лежат
# уже развёрнутые слова — добавляем и их, иначе защитная проверка lost() принимает
# собственный знак за пропавшее содержимое страницы.
OWN = {'©', '·', 'Teranova', 'Group', 'teranovagroup.com', 'TERANOVA', 'GROUP'}
for _lang, _v in ORIGINAL.items():
    OWN.update(_v.split())
    if _lang == 'he':
        OWN.update(_v[::-1].split())


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
    # Защита от повторного штампа: предыдущий doc.save(clean=True) сливает все
    # потоки страницы в один объект, поэтому strip_old() (он ищет маленький
    # отдельный поток < 600 байт) больше не видит старый знак — тот остаётся
    # внутри слитого потока. Повторный прогон тогда рисовал бы второй знак
    # поверх первого, навсегда впаянного в контент (двойная строка подвала и
    # tofu-квадраты битых CID после двойной сборки шрифта, T-20261107-034).
    # '©' встречается в документе только внутри собственного знака (foot),
    # нигде в контенте страниц поставщиков — его присутствие после strip_old()
    # однозначно значит «знак уже стоит и слит с текстом».
    if '©' in after_strip:
        doc.close()
        return 'ПРОПУЩЕН (старый знак слился с текстом — пересобрать PDF из чистого источника)'
    stamp(doc, lang_of(path))
    clean_meta(doc, path)
    # Полное пересохранение со сборкой мусора и сжатием: после урезания шрифтов
    # инкрементальная запись только добавила бы объём.
    # clean=False: иначе PyMuPDF сливает знак и содержимое страницы в один
    # поток, и strip_old на следующем прогоне больше не находит отдельный
    # маленький поток знака — тот же документ удваивал знак при каждом новом
    # прогоне скрипта (T-20261106-097).
    doc.save(path + '.tmp', garbage=4, deflate=True, clean=False)
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
