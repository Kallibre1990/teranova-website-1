// Isolated, local-only QA. Requires an installed Playwright module; no download.
// Start: python3 -m http.server 8765 --bind 127.0.0.1 --directory dist
// Run: PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs \
//      node docs/exsolu/browser-qa.mjs /absolute/path/to/output
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const output = process.argv[2];
if (!output || !path.isAbsolute(output)) throw Error('Absolute output directory required');
await mkdir(output, { recursive: true });
const report = { started: new Date().toISOString(), status: 'incomplete', pages: [], clicks: [], errors: [] };
let browser;
const base = 'http://127.0.0.1:8765';
try {
  if (!process.env.PLAYWRIGHT_MODULE || !path.isAbsolute(process.env.PLAYWRIGHT_MODULE)) {
    throw Error('PLAYWRIGHT_MODULE must name an already installed absolute module path');
  }
  const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
  browser = await chromium.launch({ ...(process.env.PLAYWRIGHT_EXECUTABLE ? { executablePath: process.env.PLAYWRIGHT_EXECUTABLE } : {}) }); // Fresh temporary profile; no user's browser/account.
  const context = await browser.newContext();
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    return url.origin === base && ['GET', 'HEAD'].includes(route.request().method())
      ? route.continue() : route.abort();
  });
  const page = await context.newPage();
  const runtime = [];
  page.on('pageerror', error => runtime.push({ type: 'pageerror', text: error.message }));
  page.on('response', response => {
    if (response.url().startsWith(base + '/') && response.status() >= 400)
      runtime.push({ type: 'http', url: response.url(), status: response.status() });
  });
  const langs = ['ru', 'en', 'ko', 'ja', 'zh', 'de', 'fr', 'it', 'es', 'pt', 'tr'];
  const routeFor = (lang, view = '') => `${lang === 'ru' ? '' : '/' + lang}/catalog/exsolu/${view ? view + '/' : ''}`;
  for (const lang of langs) for (const view of ['', 'skin-boosters', 'skincare']) {
    for (const width of [320, 390, 600, 680, 860, 940, 1280]) {
      runtime.length = 0;
      await page.setViewportSize({ width, height: width === 320 ? 568 : 900 });
      const response = await page.goto(base + routeFor(lang, view), { waitUntil: 'load' });
      await page.evaluate(async () => {
        await document.fonts.ready;
        // Trigger lazy images before measuring and return to the first screen.
        for (const img of document.images) img.loading = 'eager';
        await Promise.all([...document.images].map(img => img.decode().catch(() => {})));
        window.scrollTo(0, 0);
      });
      const result = await page.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        const label = el => el.tagName.toLowerCase() + '.' + String(el.className || '').split(' ')[0];
        const visible = el => {
          const css = getComputedStyle(el), r = el.getBoundingClientRect();
          return css.visibility !== 'hidden' && css.display !== 'none' && r.width > 0 && r.height > 0;
        };
        const overflow = [...document.querySelectorAll('*')].filter(visible).filter(el => {
          const r = el.getBoundingClientRect(); return r.left < -1 || r.right > vw + 1;
        }).map(label);
        const products = [...document.querySelectorAll('.product')];
        const overlaps = [], outsideCard = [];
        for (const card of products) {
          const r = card.getBoundingClientRect();
          const items = [...card.querySelectorAll('img, a, button, input, textarea')].filter(visible);
          for (const el of items) {
            const b = el.getBoundingClientRect();
            if (b.left < r.left - 1 || b.right > r.right + 1) outsideCard.push(card.id + ':' + label(el));
          }
          for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
            const a = items[i], b = items[j];
            if (a.contains(b) || b.contains(a)) continue;
            const ar = a.getBoundingClientRect(), br = b.getBoundingClientRect();
            if (Math.min(ar.right, br.right) - Math.max(ar.left, br.left) > 1 &&
                Math.min(ar.bottom, br.bottom) - Math.max(ar.top, br.top) > 1)
              overlaps.push(card.id + ':' + label(a) + ' × ' + label(b));
          }
        }
        return { viewport: vw, scrollWidth: document.documentElement.scrollWidth,
          lang: document.documentElement.lang, h1: document.querySelector('h1')?.textContent.trim(),
          overflow, overlaps, outsideCard,
          imageSizes: [...document.querySelectorAll('.exsolu img')].map(img => ({src: img.getAttribute('src'), natural: [img.naturalWidth, img.naturalHeight], rendered: [img.getBoundingClientRect().width, img.getBoundingClientRect().height]})),
          brokenImages: [...document.images].filter(img => !img.complete || img.naturalWidth === 0).map(img => img.getAttribute('src')) };
      });
      const screenshot = `${lang}-${view || 'company'}-${width}.png`;
      if (lang === 'ru' && [320, 390, 1280].includes(width)) await page.screenshot({ path: path.join(output, screenshot), fullPage: true });
      report.pages.push({ route: routeFor(lang, view), width, http: response.status(), ...result,
        runtime: [...runtime], screenshot });
      // Persist each measurement; interrupted runs never look complete.
      await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
    }
  }
  // Real clicks on local navigation and a language change; no forms submitted.
  for (const target of [routeFor('ru', 'skin-boosters'), routeFor('ru', 'skincare'), routeFor('en')]) {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(base + routeFor('ru'), { waitUntil: 'load' });
    if (target === routeFor('en')) await page.locator('.langswitch summary').first().click();
    const link = page.locator(`a[href="${target}"], a[href="${target.replace(/\/$/, '')}"]`).filter({ visible: true }).first();
    const label = await link.innerText();
    await link.click();
    await page.waitForURL(base + target);
    await page.waitForLoadState('load');
    report.clicks.push({ label, expected: target, actual: new URL(page.url()).pathname,
      h1: await page.locator('h1').innerText(), lang: await page.locator('html').getAttribute('lang') });
  }
  for (const selector of ['.preview', '.article-card']) {
    await page.goto(base + routeFor('ru'), { waitUntil: 'load' });
    const link = page.locator(selector).first();
    const label = await link.innerText();
    const expected = await link.getAttribute('href');
    await link.click();
    await page.waitForURL(base + expected);
    report.clicks.push({label, expected, actual: new URL(page.url()).pathname + new URL(page.url()).hash, h1: await page.locator('h1').innerText()});
  }
  report.status = report.pages.every(p => p.http === 200 && p.h1 && p.scrollWidth <= p.viewport &&
    p.imageSizes.every(i => i.rendered[0] <= i.natural[0] + 1 && i.rendered[1] <= i.natural[1] + 1) && !p.overflow.length && !p.overlaps.length && !p.outsideCard.length && !p.brokenImages.length && !p.runtime.length)
    ? 'automated-pass-manual-review-required' : 'fail';
  // Screenshots, CTA/menu interactions and contrast still need a human/agent browser review.
} catch (error) {
  report.errors.push(error.stack);
  process.exitCode = 1;
} finally {
  if (browser) await browser.close();
  report.finished = new Date().toISOString();
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
}
if (report.status !== 'automated-pass-manual-review-required') process.exitCode = 1;
console.log(JSON.stringify({ status: report.status, measurements: report.pages.length, clicks: report.clicks.length }));
