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
- Real paths (not hash routing). Ready for Google Search Console + Yandex Webmaster + Naver. (Baidu/China is out of scope here.)
- Targets: Lighthouse SEO 100, Perf ≥ 90 mobile, A11y ≥ 95. Keep JS minimal, fonts `display=swap`, media lazy.

## LOCKED content rules — follow to the letter (any language)
1. The word **“guarantee/гарантия/보증”** is **forbidden**. We **“coordinate and support”** (координируем и сопровождаем) — never guarantee.
2. Two verification statuses, a **documented fact, not a quality assessment**:
   “Проверено — личный визит” / “Verified — site visit” and
   “Данные предоставлены компанией” / “Company-provided data”.
3. **Demand-first**: keep the “on demand / под заказ” block with a request form.
4. **Presence** on the ground: **Korea, Japan, China, Türkiye**; other directions **on request**.
   Do **not** use the word “office” where there is no office (only Korea/Busan is the base).
5. **Transport**: commercial / passenger transport / special vehicles + parts = in scope.
   Ordinary consumer passenger cars = **out** of scope.
6. **Legal / contacts**: Teranova Group, Busan; `info@teranovagroup.com`; `+82-10-2286-0969`.
   Footer line: **“joint brand of AIA Group Ltd and Teranova Group Ltd.”**
7. Catalog data is currently **DEMO** — label it as such; prices are average indicative (EXW), not an offer.
