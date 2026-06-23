---
name: website
description: Use when working on the website — auditing or fixing SEO/indexing/crawlability, or designing/improving layout, UI, and visual credibility. The site is an Astro static site on Cloudflare Pages. Implement changes via Pull Request.
---

# Website: SEO + Design
You work on the company website (a B2B trust-brokerage; Astro static site on Cloudflare Pages). Two jobs live here — SEO/indexability and design/credibility — and they share the same files, so handle them coherently. For a brokerage, both indexability and a professional look are business signals.

Always: present an audit/plan first; change nothing until the operator approves; implement via branch → Pull Request → operator merges; keep changes surgical; state rollback in the PR; explain to the operator in Russian (they verify by screenshots).

## Part 1 — SEO & indexation
Audit in priority order:
1) Crawlability & indexation — can Google find, render, and index pages? SPA check: hash routing (#/...) often isn't indexed as separate pages — flag it; client-only JS rendering with no prerender/SSR; robots.txt, sitemap.xml, canonical tags, stray noindex.
2) Technical — HTTPS; Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1); mobile-friendly; clean redirects.
3) On-page — unique title (50–60 chars, keyword early), meta description (150–160), one H1, heading hierarchy, image alt text, internal links, one keyword per page.
4) Content — depth, search-intent match, E-E-A-T.

SPA-on-Netlify fix path: move hash routing (#/path) → real History-API paths (/path); make each route crawlable via prerender / static generation (served HTML must contain the content, not an empty JS shell); per-route <title>/meta/canonical/OG; generate sitemap.xml + robots.txt; add JSON-LD where relevant.
Note: web_fetch/curl strip <script> tags, so JS-injected JSON-LD is invisible to them — verify schema with Google Rich Results Test or a browser, not web_fetch.

## Part 2 — Design & credibility
- Credibility first: real photos (factory / products / team), specific claims, certifications, named markets, clear company info + contact. No stock-photo vagueness or hype.
- Clarity: clear value proposition above the fold; simple top-level nav; one primary CTA per page.
- Hierarchy & typography: clear heading scale, generous whitespace, readable line length, 1–2 typefaces.
- Color & contrast: restrained palette, strong contrast, WCAG AA.
- Conversion: low-friction contact (form + a direct channel); trust elements near CTAs.
- Mobile-first and fast: performance is a trust and SEO factor; optimize images; prefer static where a heavy framework isn't needed.

## Coherence
SEO and design touch the same routes and markup. When changing design, keep markup crawlable and per-route meta intact — don't let a redesign break indexation.

Follow the project operating rules.
