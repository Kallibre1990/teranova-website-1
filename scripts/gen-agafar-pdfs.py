#!/usr/bin/env python3
"""AGAFAR's A4 company presentation and working document, from site data only.

Uses the installed PyMuPDF HTML/shaping engine (no browser, network or fonts
download). Source manifests retain every printed string and original image hash.
Text boxes must fit at their declared size: overflow aborts before publication.
Run through `node scripts/gen-supplier-pdfs.mjs agafar`, or directly with Python.
"""
from __future__ import annotations

import hashlib
import html
import io
import json
import os
import re
from pathlib import Path
import subprocess
import tempfile

import pymupdf as pdf
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'src/data/suppliers-i18n'
OUT = Path(os.environ.get('PDF_OUT', ROOT / 'public/docs'))
SOURCE = ROOT / 'docs/agafar'
INK = '#203249'
MUTED = '#4e5e71'
PAPER = (0.985, 0.982, 0.973)
WIDTH, HEIGHT = pdf.paper_size('a4')


def digest(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def atomic(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp = tempfile.mkstemp(prefix='.' + path.name, dir=path.parent)
    try:
        with os.fdopen(fd, 'wb') as stream:
            os.fchmod(stream.fileno(), 0o644)
            stream.write(data)
            stream.flush()
            os.fsync(stream.fileno())
        os.replace(tmp, path)
        assert path.read_bytes() == data
    finally:
        if os.path.exists(tmp):
            os.unlink(tmp)


def locales():
    result = subprocess.run(
        ['node', '--input-type=module', '-e',
         "import {publicLocaleCodes} from './src/i18n/locale-policy.mjs';"
         'console.log(JSON.stringify(publicLocaleCodes))'],
        cwd=ROOT, check=True, capture_output=True, text=True)
    all_langs = json.loads(result.stdout)
    chosen = os.environ.get('PDF_LANGS', '').split(',') if os.environ.get('PDF_LANGS') else all_langs
    if not chosen or set(chosen) - set(all_langs):
        raise ValueError('PDF_LANGS must contain only public locales')
    return chosen


class Document:
    def __init__(self, lang, kind):
        self.lang, self.kind = lang, kind
        self.doc = pdf.open()
        self.records = []
        self.page = None

    def box(self, text, rect, size=12, color=INK, bold=False, ltr=False):
        if not text:
            return rect[1]
        direction = 'rtl' if self.lang == 'he' and not ltr else 'ltr'
        align = 'right' if direction == 'rtl' else 'left'
        display = text
        if direction == 'rtl':
            # MuPDF's HTML renderer does not isolate nested dir=ltr spans.
            # Explicit bidi embedding keeps Latin model names and paired
            # parentheses together without changing the canonical text.
            display = re.sub(r"[A-Za-z0-9][A-Za-z0-9 .,+/&:()%’'-]*[A-Za-z0-9)+%]",
                             lambda match: '\u202a' + match[0] + '\u202c', display)
        markup = '<div dir="' + direction + '">' + html.escape(display).replace('\n', '<br>') + '</div>'
        css = (f'*{{margin:0;padding:0}} body{{font-family:sans-serif;font-size:{size}pt;'
               f'line-height:1.35;color:{color};text-align:{align};'
               f'font-weight:{"bold" if bold else "normal"};}}')
        archive = None
        if self.lang in {'hi', 'ja', 'he'}:
            # Explicit complete faces cover mixed-script punctuation too:
            # danda beside Latin, Japanese middle dot, and NAD superscript +.
            font = Path(os.environ.get('AGAFAR_HINDI_FONT', '/System/Library/Fonts/Kohinoor.ttc')) if self.lang == 'hi' else Path(
                os.environ.get('AGAFAR_UNICODE_FONT', '/System/Library/Fonts/Supplemental/Arial Unicode.ttf'))
            if not font.is_file():
                raise FileNotFoundError(f'Missing complete font for {self.lang}: {font}')
            archive = pdf.Archive(str(font.parent))
            css += (f'@font-face{{font-family:Complete;src:url("{font.name}");}}'
                    'body{font-family:Complete,sans-serif;}')
        before = set(self.page.get_contents())
        spare, scale = self.page.insert_htmlbox(pdf.Rect(rect), markup, css=css, scale_low=1, archive=archive)
        if spare < 0 or scale != 1:
            raise ValueError(f'Overflow: {self.lang}/{self.kind}/{len(self.doc)}: {text[:100]}')
        if self.lang == 'hi':
            # Devanagari ligatures render correctly, but MuPDF's fallback
            # glyph-to-Unicode mapping loses some conjuncts when copying.
            # Standard PDF ActualText preserves the original accessible text.
            # MuPDF may also add q/Q wrapper streams after marked content.
            added = [xref for xref in self.page.get_contents()
                     if xref not in before and b' Do ' in self.doc.xref_stream(xref)]
            assert len(added) == 1
            xref = added[0]
            original = self.doc.xref_stream(xref)
            actual = b'FEFF' + text.encode('utf-16-be').hex().upper().encode()
            self.doc.update_stream(xref, b'/Span << /ActualText <' + actual + b'> >> BDC\n' + original + b'\nEMC')
        used_bottom = rect[3] - spare
        self.records[-1]['text'].append({'value': text, 'box': list(rect), 'size': size,
                                         'bottom': used_bottom, 'direction': direction})
        return used_bottom

    def new_page(self, title=None):
        self.page = self.doc.new_page(width=WIDTH, height=HEIGHT)
        self.page.draw_rect(self.page.rect, color=None, fill=PAPER, overlay=False)
        self.records.append({'page': len(self.doc), 'text': [], 'images': []})
        self.box('AGAFAR', (42, 27, 285, 47), 9, bold=True, ltr=True)
        self.box('TERANOVA GROUP', (350, 27, WIDTH - 42, 47), 8, ltr=True)
        self.box(f'Teranova Group · {len(self.doc):02d}', (42, HEIGHT - 34, WIDTH - 42, HEIGHT - 17), 8, MUTED, ltr=True)
        if title:
            self.box(title, (42, 65, WIDTH - 42, 137), 23, bold=True)

    def image(self, relative, rect, clip=None):
        path = ROOT / 'public' / relative.lstrip('/')
        if not path.is_file():
            raise FileNotFoundError(path)
        # MuPDF does not decode WebP. Embed a reading-size derivative, leaving
        # the source untouched. Viewport coordinates still refer to the source.
        image = Image.open(path)
        original_size = image.size
        visible = pdf.Rect(clip) if clip else pdf.Rect(0, 0, *image.size)
        factor = min(pdf.Rect(rect).width / visible.width, pdf.Rect(rect).height / visible.height) * 2.5
        image = image.convert('RGB')
        if factor < 1:
            image.thumbnail((round(image.width * factor), round(image.height * factor)), Image.Resampling.LANCZOS)
        stream = io.BytesIO()
        image.save(stream, format='JPEG', quality=94, subsampling=0)
        payload = stream.getvalue()
        if clip:
            # PDF viewport cropping preserves the source image bytes on disk.
            source = pdf.open()
            page = source.new_page(width=original_size[0], height=original_size[1])
            page.insert_image(page.rect, stream=payload)
            self.page.show_pdf_page(pdf.Rect(rect), source, 0, clip=pdf.Rect(clip), keep_proportion=True)
            source.close()
        else:
            self.page.insert_image(pdf.Rect(rect), stream=payload, keep_proportion=True)
        self.records[-1]['images'].append({'path': relative, 'sha256': digest(path), 'box': list(rect), 'clip': clip})

    def save(self):
        self.doc.set_metadata({'title': f'AGAFAR · {self.kind} · {self.lang}',
                               'author': 'Teranova Group', 'creator': 'Teranova Group',
                               'producer': 'Teranova Group'})
        self.doc.subset_fonts()
        data = self.doc.tobytes(garbage=4, deflate=True, no_new_id=True)
        name = f'agafar-{self.kind}-{self.lang}'
        target = OUT / (name + '.pdf')
        atomic(target, data)
        saved = pdf.open(target)
        assert len(saved) == len(self.records)
        assert all(page.get_text().strip() for page in saved)
        source = {'language': self.lang, 'kind': self.kind, 'pages': self.records,
                  'inputs': [{'path': str(p.relative_to(ROOT)), 'sha256': digest(p)} for p in
                             [DATA / f'agafar.{self.lang}.json', DATA / 'agafar.catalog.json',
                              ROOT / 'src/data/agafar.ts', ROOT / 'src/i18n/locale-policy.mjs', Path(__file__)]]}
        atomic(SOURCE / (name + '.json'), (json.dumps(source, ensure_ascii=False, indent=2) + '\n').encode())
        saved.close()
        self.doc.close()
        return {'path': str(target.relative_to(ROOT)) if target.is_relative_to(ROOT) else str(target),
                'sha256': digest(target), 'pages': len(self.records), 'language': self.lang, 'kind': self.kind}


def company(lang, j, catalog, images):
    c, u, e = j['content'], j['ui'], j['editorial']
    d = Document(lang, 'presentation')
    d.new_page()
    d.box(u['profile_sup'], (42, 83, WIDTH - 42, 120), 14)
    d.box('AGAFAR', (42, 144, WIDTH - 42, 215), 44, bold=True, ltr=True)
    d.box(c['tagline'], (42, 232, WIDTH - 42, 319), 24)
    d.box(c['descriptor'], (42, 332, WIDTH - 42, 416), 13)
    d.image('/img/suppliers/agafar/products/agafar-site-07.webp', (42, 433, WIDTH - 42, 772))

    d.new_page(u['about_h'])
    y = 156
    for paragraph in c['about']:
        y = d.box(paragraph, (42, y, WIDTH - 42, 665), 13) + 18
    y += 12
    for fact in c['facts']:
        y = d.box(fact, (42, y, WIDTH - 42, 783), 12, bold=True) + 8

    d.new_page(u['lines_h'])
    brand_groups = [catalog[0], catalog[1], catalog[3]]
    for index, (line, group) in enumerate(zip(c['lines'], brand_groups, strict=True)):
        top = 149 + index * 209
        d.image(group['items'][0]['img'], (42, top, 214, top + 180))
        d.box(line['name'], (238, top, WIDTH - 42, top + 32), 17, bold=True, ltr=True)
        d.box(line['note'], (238, top + 39, WIDTH - 42, top + 197), 11.5)

    items = [item for group in catalog for item in group['items']]
    assert len(items) == len(c['catalog_notes']) == 20
    # The source has one group photo for agapharma, not five individual
    # packshots. Preserve that relationship instead of labelling it five ways.
    for first, end in [(0, 4), (4, 8), (8, 12), (12, 17), (17, 20)]:
        d.new_page(u['catalog_h'])
        grouped = first == 12
        if grouped:
            d.image(items[first]['img'], (42, 143, WIDTH - 42, 365))
            d.box(e['range_caption'], (42, 375, WIDTH - 42, 405), 11, ltr=True)
        for offset, item in enumerate(items[first:end]):
            x = 42 + (offset % 2) * 268
            y = (420 + (offset // 2) * 121) if grouped else (146 + (offset // 2) * 320)
            if not grouped:
                d.image(item['img'], (x, y, x + 243, y + 142))
            title_y = y if grouped else y + 151
            bottom = d.box(item['name'], (x, title_y, x + 243, title_y + 48), 12, bold=True, ltr=True)
            volume = re.sub(r'(\d)ml', r'\1 ml', item.get('volume', '')).replace(' x ', ' × ').replace('ea', '')
            bottom = d.box(volume, (x, bottom + 4, x + 243, bottom + 28), 10.5, MUTED, ltr=True)
            d.box(c['catalog_notes'][first + offset], (x, bottom + 4, x + 243, y + (115 if grouped else 309)), 11.5)

    # Every named device retains its official image. Turn Up has a separate
    # two-frame page; original screenshot UI and black bars stay outside view.
    ordinary = [item for item in c['tech'] if item['name'] != 'Face Fitness Turn Up']
    for first in range(0, len(ordinary), 2):
        d.new_page(u['tech_h'])
        for offset, item in enumerate(ordinary[first:first + 2]):
            y = 155 + offset * 310
            d.image('/img/suppliers/agafar/' + images[item['name']], (42, y, 265, y + 265))
            d.box(item['name'], (292, y + 5, WIDTH - 42, y + 69), 17, bold=True, ltr=True)
            d.box(item['note'], (292, y + 82, WIDTH - 42, y + 265), 12)
    item = next(item for item in c['tech'] if item['name'] == 'Face Fitness Turn Up')
    d.new_page(item['name'])
    d.box(item['note'], (42, 146, WIDTH - 42, 220), 13)
    d.image('/img/suppliers/agafar/tech/face-fitness-turn-up-promo.jpg', (42, 247, 285, 635), [59, 354, 519, 984])
    d.image('/img/suppliers/agafar/tech/face-fitness-turn-up.webp', (310, 247, WIDTH - 42, 635), [0, 247, 737, 1353])
    d.box(e['turn_up_caption'], (42, 653, 285, 708), 11, ltr=True)
    d.box(e['turn_up_heads_caption'], (310, 653, WIDTH - 42, 708), 11, ltr=True)
    d.box(u['tech_note'], (42, 730, WIDTH - 42, 787), 11.5)

    d.new_page(u['export_h'])
    y = d.box(c['exportNote'], (42, 153, WIDTH - 42, 340), 13) + 27
    y = d.box(u['for_whom'], (42, y, WIDTH - 42, y + 56), 18, bold=True) + 16
    for channel in c['channels']:
        y = d.box(channel, (42, y, WIDTH - 42, y + 44), 12) + 8
    y += 20
    y = d.box(u['formats_h'], (42, y, WIDTH - 42, y + 56), 18, bold=True) + 15
    d.box(' · '.join(c['formats']), (42, y, WIDTH - 42, 785), 12)

    d.new_page(u['cta_h'])
    y = d.box(e['additional'], (42, 157, WIDTH - 42, 330), 13) + 30
    y = d.box(u['cta_d'], (42, y, WIDTH - 42, y + 160), 15) + 25
    y = d.box(u['terms_disc'], (42, y, WIDTH - 42, y + 110), 12) + 30
    prefix = '' if lang == 'ru' else '/' + lang
    url = 'https://teranovagroup.com' + prefix + '/catalog/agafar/'
    d.box(url, (42, y, WIDTH - 42, y + 50), 11, ltr=True)
    d.page.insert_link({'kind': pdf.LINK_URI, 'from': pdf.Rect(42, y, WIDTH - 42, y + 50), 'uri': url})
    d.image('/img/suppliers/agafar/scenes/agafar-global-skincare-campaign.webp', (42, y + 72, WIDTH - 42, 750))
    d.box(e['image_caption'], (42, 761, WIDTH - 42, 789), 10, MUTED)
    return d.save()


def terms(lang, j):
    c, u = j['content'], j['ui']
    d = Document(lang, 'terms')
    d.new_page(u['download_btn'].replace('(PDF)', '').strip())
    y = d.box(c['descriptor'], (42, 154, WIDTH - 42, 265), 14) + 26
    y = d.box(u['cta_h'], (42, y, WIDTH - 42, y + 88), 20, bold=True) + 16
    y = d.box(u['cta_d'], (42, y, WIDTH - 42, y + 150), 13) + 24
    y = d.box(u['terms_disc'], (42, y, WIDTH - 42, y + 110), 13) + 24
    y = d.box(c['exportNote'], (42, y, WIDTH - 42, 740), 11.5) + 18
    prefix = '' if lang == 'ru' else '/' + lang
    url = 'https://teranovagroup.com' + prefix + '/catalog/agafar/'
    d.box(url, (42, y, WIDTH - 42, 789), 10, ltr=True)
    d.page.insert_link({'kind': pdf.LINK_URI, 'from': pdf.Rect(42, y, WIDTH - 42, 789), 'uri': url})
    return d.save()


def main():
    import re
    device_source = (ROOT / 'src/data/agafar.ts').read_text()
    block = device_source.split('export const agafarDeviceImages:')[1]
    images = dict(re.findall(r"'([^']+)': '([^']+)'", block))
    assert len(images) == 9
    catalog = json.loads((DATA / 'agafar.catalog.json').read_text())
    manifest = []
    for lang in locales():
        data = json.loads((DATA / f'agafar.{lang}.json').read_text())
        manifest.extend([company(lang, data, catalog, images), terms(lang, data)])
        print(f'{lang}: presentation + terms', flush=True)
    atomic(SOURCE / 'manifest.json', (json.dumps(manifest, ensure_ascii=False, indent=2) + '\n').encode())
    print(f'{len(manifest)} PDFs written and read back')


if __name__ == '__main__':
    main()
