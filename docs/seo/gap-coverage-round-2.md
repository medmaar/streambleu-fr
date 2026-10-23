# Keyword gap pass, round two — 2026-10-23

Re-ran the France keyword sheet (729 keywords) against the built HTML of
every page, checking whether each keyword actually appears (title, H1,
H2/H3 or body) on the page `keyword-map.csv` assigns it to.

**Before:** 417 of 684 mapped keywords (≈ 491 600 searches/month) never
appeared on their assigned page.
**After:** ≈ 118 500 searches/month remain without a literal match. These
are misspellings (« abonement », « smasters »), glued forms (« iptvfrance »,
« smarterspro », « kingiptv ») and word-order variants (« premium iptv » vs
« IPTV premium ») that Google already maps to the right page. They are
deliberately not forced into the copy: that would be keyword stuffing.

## New pages (5)
| URL | Cluster | Keywords moved in |
|---|---|---|
| `/blog/ott-iptv` | OTT vs IPTV, « lecteurs OTT » | ottiptv, ott and iptv, iptv ott service, ott player names |
| `/lecteur-iptv-en-ligne` | Web / browser players | iptv web, iptv online player, lecteur m3u en ligne, iptv chrome, smarters web… |
| `/iptv-jellyfin-plex` | Media-server live TV | jellyfin iptv, stremio iptv |
| `/telecommande-iptv` | Remotes for IPTV boxes | telecommande iptv |
| `/iptv-orange-sfr-bouygues` | Operator boxes and ISP blocking | iptv orange, iptv isp, orange bloque iptv 2021 |

All use the shared `SeoPage` template with BreadcrumbList + FAQPage +
Article JSON-LD, and are linked from their hub, the homepage link hub and
3–6 related pages.

Not built, on purpose:
- **Formuler Z11 Pro Max** page: `/boitier-formuler` already owns that
  keyword in its title; a second page would cannibalise it. The existing
  page got a dedicated Z11 Pro Max section instead.
- **Iron IPTV / Hot IPTV** pages (≈ 7–8k/month each): below the 10k
  threshold set in round one; a page per brand at this size would be a
  near-duplicate doorway. They stay on `/alternatives-iptv`.

## Consolidated
`/blog/meilleur-iptv-france-2026` and `/blog/meilleur-abonnement-iptv-france`
competed with `/meilleur-iptv-france` for the same queries and contained
made-up comparison tables (« Concurrent A : 97 % uptime », a Canal+ row
with invented figures). Both now 301 to `/meilleur-iptv-france`, which was
rebuilt on the shared template as an honest buying guide: no scores, no
« N°1 », no uptime promise, no premium-channel brand claims, price grid
from the official tariffs.

## Claims corrected site-wide
- « 99,9 % uptime garanti » (11 city pages, /tarifs, /blog/iptv-sans-coupure,
  /blog/iptv-stable-france) contradicted the site's own CGU (« ne
  garantissons pas un accès ininterrompu »). Now « objectif de
  disponibilité 99,9 % ». The invented « 99,94 % mesuré » and « 99,97 %
  pendant la finale » figures were removed.
- « 4 €/mois » → « 4,08 €/mois » (49 € / 12) everywhere.
- /tarifs FAQ was about 4K, not prices; replaced with price questions
  built from `src/lib/pricing.ts`, and given FAQPage schema.

## Existing pages deepened
Sections and/or FAQ added to ~45 pages: IPTV Smarters Pro (abonnement vs
app, per-device table), Smarters Player Lite, TiviMate, Smart IPTV
(« ne pas confondre » table), Samsung (Tizen vs Android apps), LG, Smart
TV, Android TV, Apple TV, iOS, PC/Mac, Windows, Kodi, Fire TV (clé vs
boîtier Amazon), MAG (model references), Formuler (Z11 Pro Max),
Enigma2 (satellite hybrids), Freebox, both hubs, qu'est-ce que l'IPTV
(vocabulary table), M3U, Wi-Fi/Ethernet, IPTV à vie, prix, comparatif,
fournisseur, competitor pages, homepage, essai gratuit, abonnement,
tarifs 1 et 12 mois, légal, liste des chaînes (FAQ + schema), comment ça
marche (schema).

## Still worth a look (not changed here)
- Many hand-built pages state that every plan includes beIN Sports, RMC
  Sport and Canal+. Those are rights-holder brands; the claim is the
  business's to verify.
- `/liste-chaines` lists Moroccan (« MA - ») channels, an excluded market
  under the SEO brief.
- `/blog/iptv-france-avis` and the blog index cite « 50 000+ clients /
  avis vérifiés » without a source.
