# Geo expansion — 13 regions × 68 cities

Added 2026-09-26, in response to a supplied list of 13 French regions and
their main cities.

## What existed before
17 hand-written city pages (`src/app/iptv-{city}/page.tsx`), flat, no region
grouping, no dedicated hub page. All 17 are on the supplied list — none
were dropped or rebuilt.

## What was added
- **51 new city pages** for every remaining city on the list, via the
  shared `SeoPage` template + `src/content/seo/pages/cities.ts`
  (`group: "cities"`).
- **13 region hub pages** (`group: "regions"`, e.g. `/iptv-ile-de-france`),
  each listing every city in that region — old hand-written ones and new
  ones alike — with `ItemList` schema.
- **1 master hub**, `/iptv-villes-france`, listing all 13 regions.
- Breadcrumb on every city page is now Home → Region → City (previously
  flat Home → City on the legacy 17; those pages keep their original
  breadcrumb, unchanged).

## Content approach
Given the volume (51 pages), per-city content uses a shared structure
(benefit cards, 4-step install guide, 4-question FAQ — this repeats
by design, same as the brief's own Type E template) with facts that
are genuinely unique per city and checked, not invented:
- department (with grammatically correct article — `le/la/les/l'`,
  looked up per department, not guessed from spelling)
- region
- 2–3 real same-region neighbouring cities, cross-linked
- one well-established, safe local fact (e.g. "chef-lieu de la Vendée",
  "point de départ du Tour de France", "cité corsaire fortifiée") —
  no invented statistics, league standings, or ISP-dominance claims

This is a smaller per-city word count (~450–550 words) than the 17
flagship legacy pages (600–1000+ words) — a deliberate trade-off given
51 pages had to be produced in one pass. Revisit and expand the ones
that start getting real traffic.

## Registry / generator
`src/content/seo/pages/cities.ts` is generated from a Python script
(not committed — it lived in a scratch temp dir for this session) that
holds the per-city facts table. If more cities are added later, rebuild
from that table rather than hand-editing `cities.ts`, to keep the
department-article logic and length-fitting (title 40–62 chars,
description 115–162 chars) consistent.

## Verified
- 199 sitemap URLs (134 before + 65 new), all 200-status pages only.
- All 108 SEO-template pages (43 pre-existing + 65 new): single H1,
  correct canonical, title/description length in range, FAQPage schema
  matches visible questions 1:1, no broken or redirect-target internal
  links, no duplicate titles.
- Breadcrumb chains spot-checked: master hub → region → city, including
  the Corse edge case (1 city only).
- Département articles spot-checked in built HTML (`dans les
  Hauts-de-Seine`, `dans les Bouches-du-Rhône`, `dans l'Eure`).
