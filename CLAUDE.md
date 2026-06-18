# CLAUDE.md — teranova-website-1

## What this repo is
Marketing/catalog website for **Teranova Group** — a B2B trust-broker connecting verified Korean suppliers with international buyers. Brand: Teranova Group. Legal entity: AIA Group Ltd. (Busan, Korea). Teranova has no separate legal entity.

## Stack
- Static single-page site: `index.html` (markup + CSS + JS), `data.js` (suppliers, team, cases, FAQ), `assets/team/` (photos). No framework, no build step.
- Routing is **hash-based** (`#/catalog`, `#/tenders`, …).
- Languages: RU / EN / KO.

## Deployment — IMPORTANT
- Hosted on **Netlify** (auto-deploys from `main`). DNS/HTTPS via Cloudflare.
- It is a **static site**: Netlify serves it without any build/deploy config.
- **Do NOT add Railway configs** (railway.json, nixpacks.toml, Dockerfile, Procfile) or package.json "to make it deploy" — not needed here. Railway hosts the separate email-agent repos, NOT this website.

## Working rules
- **Never push to `main`.** Always create a branch and open a Pull Request for review.
- Make **minimal, surgical** edits. Do not regenerate whole files.
- Forms are **Netlify Forms**; do not rewire them without an explicit task.

## Known issues / roadmap (context, do not fix unless tasked)
- Hash routing hurts SEO (planned: real paths `/catalog` + prerender).
- Netlify form submissions not yet wired to notifications/Sheet.
- RU version uses English term "marine" — should be localized.
- Catalog data is DEMO, to be replaced with real suppliers.

## Scope (keep site content correct)
- Categories: marine supply, K-beauty (OEM/ODM), medical goods, industrial equipment.
- Vehicles: commercial / passenger / special vehicles + parts = IN scope; ordinary consumer passenger cars + parts = OUT.
- Teranova "coordinates and supports" deals; never "guarantees". Verification badges = documented fact, not a guarantee.
