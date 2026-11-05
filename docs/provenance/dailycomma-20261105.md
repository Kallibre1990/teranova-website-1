# DAILY COMMA (AD International) source and publication record

Status: published under Rachel Lee's (AD International Corp.) written consent of
5 November 2026 and Anton's R-046 command of 5 November 2026 (~16:20 KST, HQ
chat) to publish the profile on all showcase languages and merge after Claude,
Codex and the shell verification — reviewer verdict not awaited for this
release.

## Primary sources

- Permission: Rachel Lee (AD International Corp.) to Irina, 5 November 2026
  15:13 KST — `_MAIL_CRM/_raw/messages/irina-1a1aa57c08e8d3a1.json` (duplicate
  `irina-1a1aa57c171da268.json`). Grants brand and product publication.
  Conditions: (1) the wholesale price list is never published; (2) send the
  live brand page links after publication.
- Our proposal: Irina to Rachel Lee, 2 November 2026 10:38 KST —
  `irina-1a199e8c4cafa3d9.json`. Asked permission to use, translate and
  publish company info, logo, descriptions, photos and materials.
- Catalog (PRODUCT PROPOSAL, 2026), 54 pages, downloaded by HQ 5 November 2026
  before the link expiry (25 November):
  `_MAIL_CRM/contacts/ecojoy-co-kr/files/_download_catalog/dailycomma_catalog_2026.pdf`,
  sha256 `b778f9737acf113e7aba9e19386249aab61faafe943d65a8d17cfbfda10dee90`
  (verified live 5 November 2026, matches the hash recorded in the task
  brief).
- Closed EXW net price list (never read for product claims, only existence
  noted): `_MAIL_CRM/contacts/ecojoy-co-kr/files/★DAILYCOMMA_NET PRICE
  LIST (EXWORK)_2026.xlsx` — not opened for descriptive content; excluded
  entirely from the profile.
- Official site https://www.dailycomma.com — read live by a web-fetch agent
  5 November 2026 (HTTP 200), including the linked Terms page
  `/member/agreement.html` (HTTP 200). Confirmed verbatim footer text: CEO
  "Semin Ahn"; "REGISTRATION NO 214-86-62706"; address "56-14,
  Chukhyeonsandan-ro, Tanhyeon-myeon, Paju-si, Gyeonggi-do, Republic of
  Korea"; phone "+82-31-922-2351"; logo `<img>` src
  `//ecojoy2351.cafe24.com/web/upload/_dj/img/logo_black.png`; Instagram
  `https://www.instagram.com/dailycomma_official`; YouTube
  `https://www.youtube.com/@adinternational6523`. No founding year, factory,
  or export-country claim appears on the official site; none is asserted in
  the profile.
- K-Beauty Expo 2026 KINTEX stand photo (meeting record only, no new product
  facts): `_MAIL_CRM/contacts/ecojoy-co-kr/files/S^UploadTemp^….jpeg`.

## Claim mapping

| Included claim | Source | Boundary |
| --- | --- | --- |
| 14 product lines (Aroma Perfume Mist, Most Eau de Parfum, Eau de Parfum, Most Perfume Hand Cream, Bello de Perfume ×5, Signature Perfume Discovery Set, Most Hair Perfume, Perfume Deodorant Mist, Crystal Edition Diffuser, Aurora Diffuser) | Catalog pp. 1–44, 46–49 | Framed as "according to the catalog"; no claim of availability in a specific market |
| Volumes/weights per item | Catalog item spec blocks | As printed; no MOQ, lead time or Incoterm asserted |
| "OEM/ODM manufacturer of cosmetics and air fresheners" with a research center | Catalog p. 1 company blurb | Framed as "according to the company catalog"; no factory ownership, headcount or capacity claim |
| CEO Semin Ahn; registration no. 214-86-62706; Paju, Gyeonggi-do | Official site footer, read live 5 November 2026 | Independent of the catalog; no founding year or factory location claimed |
| Instagram @dailycomma_official; YouTube (AD International) | Official site header/footer, read live 5 November 2026 | Linked as the brand's own channels, not embedded |

## Conflicts and exclusions

- Исключено: нет документа — Most Perfume Hand Cream: catalog description mentioned
  "three patented ingredients"; no patent number, filing or certificate exists, so the
  claim is removed from all 13 language texts (supplier JSON and catalog.json) rather
  than published as a catalog attribution.
- Исключено: нет документа — Bello de Perfume Hand Cream: catalog description mentioned
  a rating "by a German dermatological testing institute"; no institute name, protocol
  or certificate exists, so the claim is removed from all 13 language texts (supplier
  JSON and `blog-dailycomma.ts`) rather than published as a catalog attribution.
- Catalog pages covering the "Home Fragrance Line" preview (perfume diffusers
  Fantasia/Purple Musk and Blanc Muse/Verdi Floral, plus Room Spray, Pillow
  Mist and Fabric Perfume) carry retail prices (₩5,000 / ₩3,000 / ₩2,000 /
  ₩1,000) — the only ₩ figures in the whole 54-page catalog. These three
  lines and the page image are excluded entirely from the catalog, images and
  text; none of them appears anywhere in the profile, blog posts or
  `dailycomma.catalog.json`.
- Crystal Edition Diffuser and Aurora Diffuser are a separate, unpriced part
  of the catalog (pp. 46–49) and are kept; they are not part of the excluded
  preview section.
- No founding year, own-factory claim, export-country list (beyond the
  catalog's unlabelled general statement) or certification/patent number is
  asserted anywhere; the EXW net price list was not opened for descriptive
  content and contributes nothing to the published text.
- Text is not copied from dailycomma.com (its homepage carries hidden SEO
  text unrelated to the brand); all descriptive language is original,
  written from the catalog and the verified official-site footer facts only.

## Images

All 16 product photos are catalog crops (PRODUCT PROPOSAL, 2026), with the
"Directing Cut" plaque and any price overlay removed; each was visually
checked after cropping. The logo is the brand's own official-site asset,
covered by Rachel Lee's and Irina's permission above.

- `public/img/suppliers/dailycomma/products/*.jpg` (16 files): cropped from
  the catalog PDF above; no price or "Directing Cut" plaque remains (checked
  by reading each file).
- `public/img/suppliers/dailycomma/logo-black.png`:
  `https://ecojoy2351.cafe24.com/web/upload/_dj/img/logo_black.png` (official
  site, read live 5 November 2026). Low resolution (318×24 px) — requesting a
  vector/high-resolution logo is one of the follow-up questions in the draft
  letter to Rachel Lee (task T-20261105-093).

## Hashes

- dailycomma_catalog_2026.pdf: `b778f9737acf113e7aba9e19386249aab61faafe943d65a8d17cfbfda10dee90`
- logo-black.png: `8561cb1876190e1854f223508b40ef1f6e74e378f499668f3a3bf680281a7148`
