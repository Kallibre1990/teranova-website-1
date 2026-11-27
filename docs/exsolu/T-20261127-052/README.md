# T-20261127-052 — local correction, release pending

Base: origin/main 112311ea. Branch: codex/T-20261127-052.

Seven official 155×140 PNGs restored via an empty rejectedProductImages set;
ExsoluPage JSON-LD automatically includes their images again. Original image
bytes and all product/article content are unchanged. Photo frames reduced:
hero 400→256 (mobile 280→208), range 320→224 (mobile 260→192), preview
220→168, product 240→172, article 200→160 CSS px. Border-box includes padding.
Images use auto dimensions, max-width and max-height; no enlargement requested.

Checks: npm run build PASS (build.log); check-draft.mjs PASS (content-check.log);
check-storefront.py PASS: 33 pages, 6 negative/control cases (structure.json).
Seven independent deletion mutations are detected. Product content (17+5) and
three article sources unchanged from base. Git diff --check PASS.
Graphify explain ExsoluDraft.astro returned no node; ordinary source search used.

Browser QA incomplete: both system Chrome and installed Chromium aborted in
this managed sandbox (SIGABRT/EPERM); zero viewport measurements, no screenshots.
See browser/report.json and browser-installed/report.json. Updated browser-qa.mjs
measures natural/rendered image dimensions and adds product/article clicks.
No assertion that visual layout or click path passed.

Next owner: Claude reviewer/HQ. Run local isolated browser QA at 320,390,600,680,
860,940,1280; review screenshots, seven visible images, overlap and click paths.
Merge/push/Cloudflare publish and production QA were NOT performed: current worker
instruction prohibits external/site/publication actions and exact card has only
hq:internal gate. Existing public target (unchanged):
https://teranovagroup.com/catalog/exsolu/
This URL is not evidence of the local correction being deployed. Parent
T-20261127-050 must remain open until release and live QA are actually completed.
