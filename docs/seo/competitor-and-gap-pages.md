# Keyword gap pass — 2026-10-23

Re-ran the France keyword sheet (729 keywords) against the live site and
`keyword-map.csv`. Every keyword was already assigned, but 195 of them
(≈150 000 searches/month, almost all competitor brand names) were piled
onto `/comparatif-iptv`, which also competed with itself for "fournisseur
iptv". Fixes:

## New pages (7)
| URL | Cluster | Monthly volume |
|---|---|---|
| `/alternatives-iptv` | Hub for competitor-name searches (Iron, Hot, Pandar, Mega OTT, Neo TV Pro + long tail) | ≈ 87 000 (long tail) |
| `/alternative-king365` | King365 / King365 TV / box v3 | ≈ 21 500 |
| `/alternative-atlas-pro` | Atlas Pro / Atlas Pro ONTV | ≈ 18 500 |
| `/alternative-pure-iptv` | Pure IPTV (+ "pure iptv légal") | ≈ 10 500 |
| `/fournisseur-iptv` | fournisseur / provider / service / agence IPTV | ≈ 5 600 |
| `/mytvonline` | MyTVOnline / MyTVOnline 3 (was a 301 to Formuler) | ≈ 5 500 |
| `/iptv-smarters-pro-ne-fonctionne-pas` | Smarters troubleshooting (Samsung, Google Play, bloqué) | ≈ 600 |

All use the shared `SeoPage` template (same design as every other cluster
page), with BreadcrumbList + FAQPage + Article/WebPage/CollectionPage
JSON-LD, and are in `sitemap.xml` (206 URLs).

## Rules for the competitor pages
Nominative use of names only, no logos, no ratings, no claim about the
other service that can't be verified. Every factual statement is about
Stream Bleu or about how IPTV works; anything about the other service is
phrased as "what to check". Each page says plainly that Stream Bleu is not
affiliated and has not tested the service. Only brands with ≥ 10 000
searches/month got a dedicated page; the rest share the hub to avoid
near-duplicate doorway pages.

## Existing pages changed
- `/comparatif-iptv`: brand names and "fournisseur" keywords moved out;
  title/H1 now target "comparatif" only; links to the hub and new pages.
- `/boitier-formuler`, `/iptv-smarters-pro`, `/iptv-samsung-tv-france`,
  `/blog/iptv-ne-fonctionne-plus`: keywords moved to the new pages and
  contextual links added.
- Homepage link hub, `/meilleur-iptv-france` "Voir aussi", footer: links
  to the new hubs.
- `_redirects`: `/mytvonline → /boitier-formuler` removed (now a real page);
  variant URLs for each new page added.

## Not built (deliberately)
Same exclusions as before (`keywords-excluded.csv`): excluded markets,
off-language, marketplaces, rights-holder channel names, piracy addons.
