#!/usr/bin/env python3
"""Offline checks of generated AGAFAR PDFs, source parity, glyphs and links."""
import argparse
from collections import Counter
import hashlib
import importlib.util
import json
from pathlib import Path
import re
import unicodedata

import pymupdf as pdf

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('agafar_generator', ROOT / 'scripts/gen-agafar-pdfs.py')
generator = importlib.util.module_from_spec(spec)
spec.loader.exec_module(generator)


def norm(text):
    text = unicodedata.normalize('NFKC', text)
    return ''.join(char for char in text if not char.isspace() and unicodedata.category(char) != 'Cf')


def check_document(record):
    file = ROOT / record['path']
    assert generator.digest(file) == record['sha256'], f'Stale PDF hash: {file}'
    source = json.loads((ROOT / 'docs/agafar' / (file.stem + '.json')).read_text())
    lang = record['language']
    data = json.loads((ROOT / f'src/data/suppliers-i18n/agafar.{lang}.json').read_text())
    for item in source['inputs']:
        assert generator.digest(ROOT / item['path']) == item['sha256'], f'Stale source: {item["path"]}'
    doc = pdf.open(file)
    assert len(doc) == record['pages'] == len(source['pages'])
    all_text = ''
    font_xrefs = set()
    for page, expected in zip(doc, source['pages'], strict=True):
        actual = norm(page.get_text())
        assert actual, 'Blank page'
        all_text += actual
        for block in expected['text']:
            if lang == 'he':
                # PDF text extraction returns visual bidi run order for mixed
                # Hebrew/Latin punctuation. Compare every character within its
                # own box; word order also requires the visual review.
                # The allowed layout box may extend beyond this paragraph.
                # Clip to its occupied height, excluding later paragraphs.
                occupied = pdf.Rect(block['box'])
                occupied.y1 = block['bottom']
                painted = norm(page.get_text(clip=occupied))
                assert Counter(norm(block['value'])) == Counter(painted), f'Changed RTL text: {block["value"]}'
            else:
                assert norm(block['value']) in actual, f'Missing/corrupt text: {lang} p{page.number+1}: {block["value"]}'
        for image in expected['images']:
            assert generator.digest(ROOT / 'public' / image['path'].lstrip('/')) == image['sha256'], 'Changed source image'
        # Read the painted glyphs separately from ActualText, including Hindi.
        # Marked source text alone is not proof that visible glyphs are present.
        for span in page.get_texttrace():
            for codepoint, glyph, origin, bounds in span['chars']:
                assert glyph != 0, f'Missing glyph {codepoint}: {lang} page {page.number+1}'
                # Hindi shaping has a defective fallback ToUnicode map; the
                # visual glyph ID is valid and ActualText repairs copy/paste.
                if lang != 'hi':
                    assert codepoint != 0xFFFD, f'Replacement glyph: {lang}'
                box = pdf.Rect(bounds)
                assert page.rect.contains(box), f'Painted text outside page: {lang} {box}'
        for font in page.get_fonts():
            font_xrefs.add(font[0])
    for xref in font_xrefs:
        assert doc.extract_font(xref)[3], f'Unembedded font: {lang} xref{xref}'
    assert norm(data['content']['consentNote']) not in all_text, 'Internal consent note exposed'
    assert not re.search(r'\b(?:RPO|USD|Botox)\b|\$', all_text), 'Forbidden legacy content'
    if record['kind'] == 'presentation':
        c = data['content']
        # Verify all public profile prose rather than trusting a page count.
        required = [c['tagline'], c['descriptor'], c['exportNote'], *c['about'],
                    *c['facts'], *c['channels'], *c['formats'], *c['catalog_notes'],
                    data['editorial']['additional']]
        required += [row[key] for rows in [c['lines'], c['tech']] for row in rows for key in ['name', 'note']]
        for value in required:
            if lang == 'he':
                assert Counter(norm(value)) <= Counter(all_text), f'Incomplete RTL profile: {value}'
            else:
                assert norm(value) in all_text, f'Incomplete profile: {lang} {value}'
        image_paths = {image['path'] for page in source['pages'] for image in page['images']}
        cat = json.loads((ROOT / 'src/data/suppliers-i18n/agafar.catalog.json').read_text())
        assert {item['img'] for group in cat for item in group['items']} <= image_paths
        assert '/img/suppliers/agafar/tech/face-fitness-turn-up-promo.jpg' in image_paths
        assert '/img/suppliers/agafar/tech/face-fitness-turn-up.webp' in image_paths
        assert '/img/suppliers/agafar/scenes/agafar-global-skincare-campaign.webp' in image_paths
    size = file.stat().st_size
    assert size < 25 * 1024 * 1024, 'PDF exceeds site asset size budget'
    return {'file': file.name, 'pages': len(doc), 'bytes': size, 'embedded_fonts': len(font_xrefs),
            'text_and_glyphs': 'pass', 'source_and_images': 'pass'}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--report', type=Path)
    parser.add_argument('--dist', action='store_true')
    args = parser.parse_args()
    records = json.loads((ROOT / 'docs/agafar/manifest.json').read_text())
    expected = {(lang, kind) for lang in generator.locales() for kind in ['presentation', 'terms']}
    assert Counter((item['language'], item['kind']) for item in records) == Counter(expected), 'Missing/duplicate locale document'
    results = [check_document(item) for item in records]
    if args.dist:
        for item in records:
            lang = item['language']
            prefix = '' if lang == 'ru' else lang + '/'
            page = (ROOT / 'dist' / (prefix + 'catalog/agafar/index.html')).read_text()
            url = '/' + item['path'].removeprefix('public/')
            assert f'href="{url}"' in page, f'Missing download link: {lang} {url}'
            assert generator.digest(ROOT / 'dist' / url.lstrip('/')) == item['sha256'], 'Stale/missing downloaded file'
    # Negative controls for the bugs this task must prevent.
    d = generator.Document('en', 'test')
    d.new_page()
    try:
        d.box('Cannot fit in this rectangle ' * 20, (40, 50, 70, 60), 16)
    except ValueError as error:
        assert 'Overflow:' in str(error)
    else:
        raise AssertionError('Overflow was silently accepted')
    d.doc.close()
    changed = dict(records[0], sha256='0' * 64)
    try:
        check_document(changed)
    except AssertionError as error:
        assert 'Stale PDF hash' in str(error)
    else:
        raise AssertionError('Changed PDF was silently accepted')
    report = {'files': results, 'locales': len(expected) // 2, 'pages': sum(item['pages'] for item in results),
              'dist_links': args.dist, 'negative_controls': ['overflow rejected', 'changed PDF rejected']}
    if args.report:
        generator.atomic(args.report, (json.dumps(report, ensure_ascii=False, indent=2) + '\n').encode())
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
