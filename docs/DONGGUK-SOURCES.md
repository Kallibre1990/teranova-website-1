# Dongguk profile — T-20261116-049

This work is an unpublished local implementation, based on accepted registry
`AI_COORDINATION/Codex/evidence/T-20261116-047/facts.json` and `facts.md`.
No external verification, production update, push or deployment was performed.

## Public copy and claim provenance

| Public content | Accepted registry source |
| --- | --- |
| Name and medical-center identity | ORG-01, ORG-02 |
| Organization and research units | ORG-03…ORG-05 |
| Six research fields | DIR-01…DIR-06; reviewer correction for DIR-06: biological analysis |
| Imaging MS / FACS / HTS | INFRA-01…INFRA-03, brochure pp.4–6 |
| Collaboration sequence | COOP-01…COOP-05, brochure p.7 |
| Technology titles | SMK-01…15, XLSX column B, conservative editorial translations |
| Mechanism summaries | SMK-01…15, XLSX column E |
| Application / registration numbers | SMK-01…15, columns G / H, checked against SMK |
| Descriptive stages | SMK-01…15, column I; no numerical TRL |

All 13 public locales have explicit copy, 15 technology titles and 15 summaries.
No fallback is used in the profile data. Grouping into four research themes is
editorial and does not assert four organizational departments.

No claims of clinical effectiveness, regulatory approval or enforceable patent
rights are made. No numerical study results or market projections are copied.
SMK-06 keeps tyrosinase/p16 only, without resolving CDH1/CDH11.
SMK-15 distinguishes the first registered development from the second application.
An unspecified registration number is not described as absence of a patent.
Researcher names, personal contacts, licensing availability and commercial terms
are excluded. Source brochures and original SMK PDFs are not served publicly.

## Official images

All images are extracted unchanged from supplier-provided attachments. No image
generation, invented laboratory photographs or factory-visit badge is used.

| Public asset | Exact source |
| --- | --- |
| `public/images/dongguk/logo.png` | English PNG in `동국대학교의료원 HI 로고.zip`, SHA-256 `30778414d6652c42f92b0b0e21d85f8b8612f502364cab605b021cc44ce688b9` |
| `imaging-ms.png` | Brochure p.4, embedded image xref 97 |
| `imaging-facs.png` | Brochure p.5, embedded image xref 110 |
| `imaging-hts.png` | Brochure p.6, embedded image xref 123 |

Brochure: `브로슈어_최종본(인쇄용).pdf`, SHA-256
`324f3d36f029db36bf0cfa0eafa865e53f0d5f63decd0c98a312d73cd2659e62`.
The extracted images were visually inspected: equipment only, without QR codes,
personal contact details or licensing information. Images carry an explicit
supplier-brochure attribution on every locale.

## Architecture

The research category links to `/catalog/dongguk/` and its 12 localized variants.
A separate research component avoids presenting the center as a cosmetics maker.
The shared supplier registry, verification badges and cosmetics pipeline are
unchanged. The category's demo badge is rendered only when demo entries exist.
The consultation link opens the existing localized `/contacts/` page; no form
submission or outbound message is performed by this work.

Graphify was queried before edits for catalog, routes and `demoSuppliers.ts`.
It identified CatalogGroup, site.ts, ui.ts, suppliers.ts and localized routes;
connections were also inspected in source. The new files do not yet exist in
that snapshot of the graph.

## Review limits

Visual comparison with DREAMCOS and DONGDONGGURIMOO must be completed by the
independent reviewer: Chromium launch is denied by the worker sandbox
(`MachPortRendezvousServer`, `bootstrap_check_in`, permission denied 1100).
Source comparison alone is not a visual verdict. The reviewer should inspect
hero hierarchy, image quality, spacing, open technology details, all locales
and mobile/RTL layouts. The prepared local browser script blocks external
requests and records geometry, links, screenshots and browser errors.
