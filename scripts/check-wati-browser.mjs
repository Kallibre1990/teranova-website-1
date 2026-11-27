// Local-only QA. Pass an installed Playwright module path as argv[2].
// Serve dist on 127.0.0.1:8740 first. Never submits forms or contacts external hosts.
import fs from 'node:fs';
const { chromium } = await import(process.argv[2]);
const report = { at: new Date().toISOString(), measurements: [], clicks: [], errors: [] };
let browser;
try {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    return url.hostname === '127.0.0.1' && ['GET', 'HEAD'].includes(route.request().method())
      ? route.continue() : route.abort();
  });
  for (const lang of ['ru', 'en', 'ko', 'zh', 'ja', 'it', 'de', 'fr', 'tr', 'es', 'pt', 'he', 'hi']) {
    const page = await context.newPage();
    page.on('pageerror', error => report.errors.push({ lang, error: error.message }));
    const path = (lang === 'ru' ? '' : '/' + lang) + '/catalog/wati-for-skin/';
    await page.goto('http://127.0.0.1:8740' + path, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      for (const img of document.images) img.loading = 'eager';
      await Promise.all([...document.images].map(img => img.decode().catch(() => {})));
      await document.fonts.ready;
    });
    const widths = ['ru', 'de', 'he', 'hi'].includes(lang)
      ? [320, 390, 440, 480, 600, 640, 700, 740, 800, 840, 940, 980, 1280] : [320, 1280];
    for (const width of widths) {
      await page.setViewportSize({ width, height: width === 320 ? 568 : 900 });
      await page.waitForTimeout(100);
      const measurement = await page.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        const overflowing = [...document.querySelectorAll('main *')].filter(el => {
          const r = el.getBoundingClientRect();
          return r.width > 0 && (r.left < -1 || r.right > vw + 1);
        });
        return {
          width: vw, scrollWidth: document.documentElement.scrollWidth,
          overflowing: overflowing.map(el => ({ tag: el.tagName, class: String(el.className), carousel: !!el.closest('.sp-catgrp__grid') })),
          imagesBroken: [...document.images].filter(img => !img.naturalWidth).map(img => img.src),
          cards: document.querySelectorAll('.sp-prod').length,
          firstScreen: [...document.querySelectorAll('.sp-hero h1,.sp-hero p')].map(el => ({ text: el.textContent, bottom: el.getBoundingClientRect().bottom })),
        };
      });
      report.measurements.push({ lang, ...measurement });
    }
    const product = page.locator('.sp-prod').first();
    await product.click();
    report.clicks.push({ lang, action: 'first product', dialogs: await page.locator('[role=dialog]:visible').count() });
    await page.close();
  }
} catch (error) {
  report.errors.push({ browser: String(error) });
  process.exitCode = 1;
} finally {
  if (browser) await browser.close();
  console.log(JSON.stringify(report, null, 2));
}
