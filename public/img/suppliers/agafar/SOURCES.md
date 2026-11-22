# Agafar image sources

Prepared for `T-20261024-091` on 2026-10-24 KST. Every file in this directory
was made from local materials already supplied by Agafar or from the local copy
of public `agafar.com` assets prepared by HQ. No supplier site, Instagram, or
closed Google Drive link was opened during this pass.

## Source files

- `DERMA_MODE_PROGRAM_whatsapp_2026-07-01.pdf` — supplied catalogue received by
  WhatsApp; SHA-256 `b4e5773aa6d6d379b5ef6b46b183272b4d4fcfa6f1e100a255eae4183fe13c8f`.
- `drive_2026-10-20/areiv.zip` — locally supplied a'reiv archive; SHA-256
  `4fb4ac78cb053f79bf2cf8903c12ca9054dde02518ab315fadb5357cc1494fcc`.
- `drive_2026-10-20/agafar dermatology machines.pdf` — locally supplied
  machines catalogue; SHA-256 `337988318c62e9d27e6eb3b00f2d1222bdbbd5e01933fb4fe989dc247d971b33`.
- `whatsapp_2026-10-22/6c775d3d-image.png` — locally supplied WhatsApp
  conversation export; SHA-256 `69e446db65f683757f85a0715fe1931c06a0fbce4af2b73323c0f9f6aecfa47a`.
- `site_agafar.com_2026-10-24/products/` — local copy of 20 public product
  images from `agafar.com`, prepared by HQ; each original URL and product name
  is recorded in `_MATERIALY_POSTAVSHCHIKOV/AGAFAR/site_agafar.com_2026-10-24/SOURCES.md`.

The originals are under
`_MATERIALY_POSTAVSHCHIKOV/AGAFAR/` and the temporary local extraction is under
`scratchpad/T-20261024-091/`.  This directory intentionally contains derived
WebP files only.

## Derived files

| Output | Local source |
| --- | --- |
| `products/derma-mode-01.webp` … `products/derma-mode-20.webp` | Embedded product images `image-002.jpg` … `image-040.jpg` (even numbers) extracted from `DERMA_MODE_PROGRAM_whatsapp_2026-07-01.pdf` |
| `products/exoxen-booster.webp` | `areiv.zip` → `1. EXOXEN Booster (3ml10ea Total 30ml)/1. EXOXEN BOOSTER.jpg` |
| `products/calming-sun-cream.webp` | `areiv.zip` → `2. Calming Sun Cream (50ml)/2. Calming Sun Cream (50ml).jpg` |
| `products/lab-laboratory-mask.webp` | `areiv.zip` → `3. Lab Laboratory Mask (25ml)/3. Lab Laboratory Mask (25ml).jpg` |
| `products/agafar-site-01.webp` … `products/agafar-site-20.webp` | Local public-site copy `site_agafar.com_2026-10-24/products/01-*.jpg` … `20-*.jpg`; the source manifest names the corresponding product and URL for each number |
| `cutout/exoxen-booster.webp` | `areiv.zip` → `1. EXOXEN Booster (3ml10ea Total 30ml)/… 01.png` |
| `cutout/exoxen-booster-set.webp` | `areiv.zip` → `1. EXOXEN Booster (3ml10ea Total 30ml)/… 02.png` |
| `cutout/lab-laboratory-mask.webp` | `areiv.zip` → `3. Lab Laboratory Mask (25ml)/3. Lab Laboratory Mask (25ml) 01.png` |
| `scenes/exoxen-booster-01.webp`, `scenes/exoxen-booster-02.webp` | `areiv.zip` → EXOXEN `0001_01 (1).jpg`, `0001_05 (1).jpg` |
| `scenes/calming-sun-cream-01.webp` | `areiv.zip` → Calming Sun Cream `0001_03.jpg` |
| `scenes/lab-laboratory-mask-01.webp` | `areiv.zip` → Lab Laboratory Mask `0001_01.jpg` |
| `scenes/plazion.webp` | Crop `500x550+45+380` of the locally supplied WhatsApp export `whatsapp_2026-10-22/6c775d3d-image.png`; the crop visibly shows the PLAZION name on the device and artwork. |
| `scenes/agafar-point-plus.webp` | Embedded image `image-003.jpg` extracted from `agafar dermatology machines.pdf` |
| `scenes/agafar-global-skincare-campaign.webp` | Local public-site copy `site_agafar.com_2026-10-24/760b94021e.jpg` (alt: `AGAFAR Global Skincare Campaign`) |

## Processing

All outputs were converted with `cwebp`: product and scene images at quality 78
and a maximum width of 1600 px; transparent cutouts at quality 80 and a maximum
width of 1200 px. The largest derived file is below 201 KB.

## Explicit exclusions

No image from the inaccessible Drive links owned by Irina was used.

## T-20261102-013: device photographs in the closed preview

| Output | Local source | Verification |
| --- | --- | --- |
| `tech/transfer.webp` | Left page of the locally supplied `drive_2026-10-20/agafar dermatology machines.pdf` | The page names and depicts `Transfer`. |
| `tech/face-fitness-turn-up.webp` | `10-Фото-10.jpg`, stored with the accepted internal attachment for T-20261031-026 | The company graphic names and depicts `Face Fitness Turn Up`. |

No Mono JET photo is included: the available materials do not reliably identify one, so no other device is used as a substitute.

## T-20261112-093: two Face Fitness Turn Up frames

`tech/face-fitness-turn-up-promo.jpg` is a byte-identical copy of
`.ai-coordination/shell-attachments/b2365138-07c8-456f-89c4-67629b937062/344b9e87-be79-440f-9f8b-f2f6924f3d2c.bin`
(chat-devices-awards-01-AGAFAR-new-info-1.jpg).
SHA-256: `876523fb889f6e2c3d07f1f87b9c63028fb6aab02df7a9d4d4a53e556fbe0d80`.
The source is a 589×1280 screenshot. The component displays its campaign
frame at x=59, y=354, width=460, height=630 using a clipped viewport;
the original raster is neither edited nor regenerated. The displayed frame
names Face Fitness Turn Up and shows its facial patches.

The separate `tech/face-fitness-turn-up.webp` retains the complete equipment
and four-handpiece graphic (P-POLAR, P-CMS, PLASMA, P-DUAL), with natural
aspect ratio in the new two-frame presentation. Source image 10 also exists
as `f2c84df8-d005-478a-b7dc-51cc4ba639c6.bin` in the same receipt bundle.
The embedded marketing text and KC/CE logos remain original company artwork;
they are not transcribed as certifications or independently verified efficacy.
Both frames still require browser visual inspection before acceptance.

## 18.11.2026: Face Fitness Turn Up — viewport without KC/CE logos

On the profile and in the PDF the `tech/face-fitness-turn-up.webp` viewport now shows
only the four-handpiece strip (source y 990–1350). The KC/CE logos in the company
artwork stay outside the viewport: in the mail of 14.11.2026 AGAFAR states it does not
hold EU registration and compliance documentation for its devices. The raster is not edited.

## T-20261122-016: NADXEN CPNP poster

`scenes/nadxen-cpnp-poster.webp` is a crop of `1-Фото-1.jpg`, a 589×1280 iOS
screenshot received from Irina in the Codex web-local receipt
`e8ed368f-9cfa-46ef-b124-45c476530100` (2026-11-22), stored locally at
`.ai-coordination` receipt time as
`/tmp/codex-remote-attachments/01a201b5-ece5-7fe2-ae00-7915b832cd93/181560C9-96D9-4518-8242-7F3AB429BF60/1-Фото-1.jpg`.
SHA-256 of the original screenshot:
`7c047cecd140a4cef3b433ccd825150b808e18ab9760b595c81ee5f49c1101f6`.

The crop keeps pixel rows 200–1005 (full 589 px width, no horizontal crop):
this removes the iOS status bar and chat header above the poster and the
Messages reaction/reply overlay that permanently covers the bottom-right
corner of the poster's closing tagline bar in this screenshot. No pixel
inside the kept region is edited, inpainted, or regenerated; the excluded
tagline bar is dropped rather than reconstructed, per the no-generative-
retouch rule in `docs/IMAGERY.md`.

The poster is AGAFAR's own marketing artwork. It lists "CPNP Registration"
as one checked item in a "EUROPEAN MARKET READY" group (alongside RP, CPSR,
PIF, EU Label Compliance) for the NADXEN line. Per the same receipt, the
accompanying site text restricts the CPNP-complete claim to NADXEN Ampoule
30 ml and NADXEN Serum 50 ml only, names CPNP as the EU cosmetic-product
notification portal (not a certification, not Korean market access), and
does not transcribe the poster's other claims (clinic counts, awards,
"COMPLIANT. TRUSTED.") as independently verified facts.

Output: `cwebp -q 78` from a plain crop, no upscale (589×805, matching the
source's native resolution). 63.6 KB.

## T-20261122-040: NADXEN Ampoule / Serum catalog cards replaced with official studio photos

Per a direct instruction from Irina (R-046 receipt `75940f58-e815-4f9b-91b9-f56d22edfea5`,
relayed via Codex: "давай заменим верхние две фотографии, найди их в хорошем качестве и
визуально, чтобы это более качественно смотрелось"), the two NADXEN catalog-card images
were replaced:

| Output | Replaces (previous content) | New content | Verification |
| --- | --- | --- | --- |
| `products/nadxen-ampoule.webp` | Unofficial customer/warehouse snapshot of the boxed product on a carpeted floor (330×715, SHA-256 `10de32699817d7161fe1f02962bc9668233f0bb2f249a5a7b5f59947746b2fde`) | Byte-identical copy of `products/agafar-site-01.webp` (1600×1600, SHA-256 `1a93d84389f043ef627c3a2688232f354607a031f1687c26f2a8ca465f8fc8f0`) | Same official agafar.com source as already documented above: local copy `site_agafar.com_2026-10-24/products/01-6a61bbefbaddcfc80bf743eda29fd73d.jpg` (SHA-256 `968c55fa1d40ac4d06fe17f4f11b51911c2acd923c4b5ffec6a549bc96f392f9`), URL `https://agafar.com/web/product/medium/202605/6a61bbefbaddcfc80bf743eda29fd73d.jpg`, catalogue name 나드센 앰플 30ml (NADXEN Ampoule 30 ml), per `_MATERIALY_POSTAVSHCHIKOV/AGAFAR/site_agafar.com_2026-10-24/SOURCES.md` |
| `products/nadxen-serum.webp` | Unofficial customer/warehouse snapshot of the boxed product on a carpeted floor (320×985, SHA-256 `2fa9bd027c73f5e571088d4b7ad303d734b3cb998b093b2af9ccacc694bcb1ba`) | Byte-identical copy of `products/agafar-site-02.webp` (1600×1600, SHA-256 `7e6d19c5377458e20e6ea806c45cbdac5757afcfd82c57d5d41d0b7fc7d71e13`) | Same official agafar.com source: local copy `site_agafar.com_2026-10-24/products/02-e2b6d0ca081981648cb0c25f51330122.jpg` (SHA-256 `0199e224e11a011987d313f10d0335a09198afe12d7af29199a3f8756f5b55cb`), URL `https://agafar.com/web/product/medium/202605/e2b6d0ca081981648cb0c25f51330122.jpg`, catalogue name 나드센 세럼 50ml (NADXEN Serum 50 ml), per the same manifest |

Both outputs now share the exact same canvas (1600×1600) and the same light studio
backdrop as every other catalog card in this directory, replacing a mismatched vertical
phone photo. No inpainting, stretching, or AI processing was applied — these are
unmodified copies of already-accepted derived files, written in place under the same
`nadxen-ampoule.webp` / `nadxen-serum.webp` filenames that
`src/data/suppliers-i18n/agafar.catalog.json` already references, so no JSON change was
needed. Originals remain under
`_MATERIALY_POSTAVSHCHIKOV/AGAFAR/site_agafar.com_2026-10-24/products/`; the two replaced
files remain recoverable from this repository's git history. Product identity, composition,
CPNP status, prices, and MOQ were not touched.
