#!/usr/bin/env python3
"""Регрессия для watermark_pdfs.py (D-9644).

Не трогает public/docs: строит свой supplier 'testsup' из двух синтетических
'Chrome-style' PDF (en, de) в одноразовом temp-дереве scripts/+public/docs/,
копией настоящего watermark_pdfs.py, и гоняет его subprocess'ом — так же,
как его вызывает gen-supplier-pdfs.mjs.

    python3 scripts/test-watermark-pdfs.py

Проверяет оба пункта карточки T-20261128-007:
1. PDF_LANGS сужает набор файлов по языку — подпись одного языка не трогает
   (ни байта, ни mtime) уже существующие PDF других языков того же slug'а.
2. Повторная пересборка (без PDF_LANGS, как раньше делал gen-supplier-pdfs.mjs
   по slug'у) не стирает подвал — идемпотентность, которую скрипт обещает
   в своём докстринге, но ломал на деле (корень — переиспользование уже
   урезанного subset_fonts() шрифта 'AUni' при повторном stamp()).
"""
import os
import shutil
import subprocess
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REAL_SCRIPT = os.path.join(ROOT, 'scripts', 'watermark_pdfs.py')

import fitz  # PyMuPDF — тот же движок, что и у самого watermark_pdfs.py

SENTENCES = {
    'en': 'This is the original terms document for the test supplier.',
    'de': 'Dies ist das ursprüngliche Bedingungsdokument für den Testlieferanten.',
}


def make_source_pdf(path, sentence):
    """'Chrome-style' PDF без знака — вход watermark_pdfs.py.

    strip_old() находит прежний знак по размеру потока (< 600 байт с Tf/TJ):
    абзац должен быть заведомо больше этого порога, иначе сам тест-контент
    принимается за старый знак и обнуляется, как на реальных Chrome-страницах
    с их десятками килобайт контента."""
    doc = fitz.open()
    page = doc.new_page()
    body = (sentence + ' ') * 40
    page.insert_textbox(fitz.Rect(50, 50, 500, 700), body, fontsize=11, fontname='helv')
    doc.save(path)
    doc.close()


def run_watermark(proj, args, env_extra=None):
    env = dict(os.environ)
    env.pop('PDF_LANGS', None)
    if env_extra:
        env.update(env_extra)
    return subprocess.run(
        [sys.executable, 'scripts/watermark_pdfs.py', *args],
        cwd=proj, env=env, capture_output=True, text=True, timeout=120,
    )


def footer_present(path):
    out = subprocess.run(['pdftotext', '-layout', path, '-'], capture_output=True, text=True, timeout=30)
    return '© Teranova Group · teranovagroup.com' in out.stdout


def main():
    proj = tempfile.mkdtemp(prefix='teranova-watermark-test-')
    try:
        os.makedirs(os.path.join(proj, 'scripts'))
        os.makedirs(os.path.join(proj, 'public', 'docs'))
        shutil.copy(REAL_SCRIPT, os.path.join(proj, 'scripts', 'watermark_pdfs.py'))

        en_path = os.path.join(proj, 'public', 'docs', 'testsup-terms-en.pdf')
        de_path = os.path.join(proj, 'public', 'docs', 'testsup-terms-de.pdf')
        make_source_pdf(en_path, SENTENCES['en'])
        make_source_pdf(de_path, SENTENCES['de'])

        # Первая полная пересборка (как в обычном пайплайне): оба языка.
        res = run_watermark(proj, ['testsup'])
        assert res.returncode == 0, f'первый прогон упал: {res.stdout}\n{res.stderr}'
        assert footer_present(en_path), 'подвал отсутствует после первой подписи (en)'
        assert footer_present(de_path), 'подвал отсутствует после первой подписи (de)'
        print('OK: первая подпись — оба языка с подвалом')

        # --- Проверка 1: PDF_LANGS не трогает чужой язык ---
        de_bytes_before = open(de_path, 'rb').read()
        de_mtime_before = os.path.getmtime(de_path)

        res = run_watermark(proj, ['testsup'], env_extra={'PDF_LANGS': 'en'})
        assert res.returncode == 0, f'точечный прогон (PDF_LANGS=en) упал: {res.stdout}\n{res.stderr}'

        de_bytes_after = open(de_path, 'rb').read()
        de_mtime_after = os.path.getmtime(de_path)
        assert de_bytes_after == de_bytes_before, 'PDF_LANGS=en изменил байты de-файла — сужение по языку не работает'
        assert de_mtime_after == de_mtime_before, 'PDF_LANGS=en тронул mtime de-файла, хотя байты не менялись'
        assert footer_present(de_path), 'подвал de-файла пропал после точечного прогона по en'
        print('OK: PDF_LANGS=en не тронул ни байта, ни mtime de-файла того же поставщика')

        # --- Проверка 2: повторный прогон по slug'у (старое поведение) не рвёт подвал ---
        for i in range(3):
            res = run_watermark(proj, ['testsup'])
            assert res.returncode == 0, f'повторный прогон #{i + 1} упал: {res.stdout}\n{res.stderr}'
            assert 'ОШИБКА' not in res.stdout, f'повторный прогон #{i + 1} сообщил об ошибке: {res.stdout}'
            assert footer_present(en_path), f'подвал en пропал на повторном прогоне #{i + 1} (D-9644)'
            assert footer_present(de_path), f'подвал de пропал на повторном прогоне #{i + 1} (D-9644)'
        print('OK: 3 повторных прогона по slug\'у подряд — подвал цел на обоих языках (идемпотентность)')

        print('Все проверки watermark_pdfs.py пройдены.')
    finally:
        shutil.rmtree(proj, ignore_errors=True)


if __name__ == '__main__':
    main()
