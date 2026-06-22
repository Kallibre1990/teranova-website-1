---
name: seo
description: SEO + locked content rules for the Teranova site (titles/meta, Open Graph, JSON-LD, sitemap, robots, headings, alt) and the wording that must never change (no “guarantee”, two verification statuses, presence, transport scope, legal). Use on any page/content change.
---

# Teranova — SEO & content rules

## Per-page technical SEO
- **Unique** `<title>` + meta description for every page **and** language (in `ui.ts` `meta`).
- `BaseHead.astro` emits: canonical, hreflang (ru/en/ko + x-default), Open Graph, Twitter card, theme-color, favicon. Pass `noindex` for utility pages (thanks, 404).
- OG image: `/public/brand/og-default.png` (1200×630). Regenerate via `node scripts/make-og.mjs`.
- Semantic HTML: exactly one `<h1>` per page, then `h2`→`h3` in order. Decorative SVGs `aria-hidden`. Every real `<img>` needs meaningful `alt`.

## Structured data (JSON-LD)
- Home: `Organization` (+ `ContactPoint`, `Brand` ×2) and `WebSite` — see `src/data/jsonld.ts`.
- Catalog/category/supplier pages (later): add `BreadcrumbList`; `Product` on supplier cards where appropriate.

## Crawlability
- `@astrojs/sitemap` → `sitemap-index.xml`. `public/robots.txt` allows all + links the sitemap.
- **9 languages, but only ru/en/ko are indexed.** hreflang alternates and sitemap entries
  cover ru/en/ko only. The 6 machine-translated locales (zh/ja/it/de/fr/tr) are served with
  `noindex` and excluded from the sitemap until a native speaker proofreads them.
- Real paths (not hash routing). Ready for Google Search Console + Yandex Webmaster + Naver.
- Targets: Lighthouse SEO 100, Perf ≥ 85 mobile, A11y ≥ 95. Keep JS minimal, fonts `display=swap`.

## LOCKED content rules — the binding source is `docs/CONTENT-RULES.md`
1. The word **“guarantee / гарантия”** (and equivalents in any language) is **forbidden**.
   We **“coordinate and support”** — verification is a documented fact, not a guarantee.
2. Two verification statuses (fixed wording): «Проверено — личный визит» /
   «Данные предоставлены компанией». A documented fact, not a promise of outcome.
3. **RU = Russian only** — no English words, especially in category names.
4. **Never mention “Busan”** — just “Korea”. Presence on the ground: Korea · Japan · China ·
   Türkiye; other regions on request. Buyer markets: CIS · Europe · Türkiye · USA · Asia.
5. **Transport**: commercial / passenger / special vehicles + parts = yes; consumer cars = never.
6. **Honesty**: no invented numbers (clients/years/awards), company names, prices, laws, certs.
7. **Legal / contacts**: `info@teranovagroup.com`, `+82-10-2286-0969`.
   Footer: **“Teranova Group — joint brand of AIA Group Ltd and Teranova Group Ltd.”**
8. **Demand-first**: keep the “На заказ / On demand” block with a working form.
9. No sanctions / export-control / compliance topics on the public site.
