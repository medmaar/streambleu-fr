# Money pages, round three — 2026-10-24

Goal: more purchase-intent pages, and no money page or money keyword cluster
left untouched. Free-trial pages were deliberately left alone.

## Coverage check
All 729 keywords in the France sheet (515 commercial) are already mapped in
`keyword-map.csv` to a live page. The gaps were **buying questions** with no
page of their own, not unmapped keywords. Three keywords moved to a better
page: `abonnement iptv 12 mois smart tv` → `/abonnement-iptv-smart-tv`,
`iptv combien de connexion` → `/abonnement-iptv-multi-ecrans`,
`buy iptv` → `/acheter-abonnement-iptv`.

## New pages (5, group `commercial`)
| URL | Buying question it answers | Distinct from |
|---|---|---|
| `/abonnement-iptv-multi-ecrans` | How many screens, price per screen, bandwidth | `/tarifs` (order grid), `/prix-iptv` (market prices). The 36 `/tarifs/N-mois-X-connexions` pages stay noindex; this is the one indexable page for multi-screen intent. |
| `/abonnement-iptv-smart-tv` | Which plan and total cost (plan + player) per TV brand | `/iptv-smart-tv-france` (install guide) |
| `/acheter-abonnement-iptv` | Order, payment, activation, refund, renewal | `/comment-ca-marche` (what IPTV is, 3 steps) |
| `/iptv-belgique` | Buying from Belgium: EUR prices, cable/VDSL networks, operator decoders | Approved FR-language market (SEO brief 0.2.3); order form already lists Belgique |
| `/iptv-suisse` | Buying from Switzerland: EUR vs CHF payment, networks, Serafe fee | Same |

Facts used come only from the site's own CGU, refund policy, order forms and
`src/lib/pricing.ts`. No ratings, reviews, client counts, uptime figures or
channel-brand claims were added. Belgium/Switzerland pages point to the
existing « Belgique » / « Suisse » sections of `/liste-chaines` without naming
channels. Shingle overlap with any other page ≤ 34 % (Belgique ↔ Suisse,
mostly the shared price grid and trust block).

## Template (`SeoPage`)
- New `prices` block renders the official grid from `src/lib/pricing.ts`,
  each price linking to its order page (`planHref`). Prices in a money page
  can no longer drift from the tariffs.
- Money pages (`group: "commercial"`, 9 pages) now lead with
  « Choisir mon abonnement » (→ `/tarifs`) and a « Commander 12 mois »
  mid-page box; the free trial stays as the secondary button.
- `areaServed` on the Service schema (Belgique / Suisse pages).

## Existing money pages touched
- `/tarifs`: four buying-guide cards. `/tarifs/1|6|12-mois`: the
  "plusieurs appareils" FAQ said to contact support for a multi-screen plan;
  it now gives the real 2- and 3-screen prices. Links to the new pages;
  « €29 » → « 29€ ».
- `/abonnement-iptv`, `/iptv-france`, `/iptv-francais`, `/iptv-premium`,
  `/prix-iptv`, `/fournisseur-iptv`, `/meilleur-iptv-france`,
  `/comparatif-iptv`, `/revendeur`, `/parrainage`, homepage link hub,
  footer: links to the new pages.
- `/blog/iptv-4k-france` (owns « iptv 4k », 1 600/month, had no link to any
  plan): new « Quel abonnement pour la 4K » section with plan links.
- `/blog/iptv-pas-cher-france`: removed « meilleur rapport qualité/prix du
  marché », « tarif le plus bas du marché… qualité certifiée », « légal »;
  « 4€/mois » → 4,08 €; savings figure corrected (55 %, not 56 %).
- `/iptv-premium`: « bascule… en moins d'une seconde, sans interruption »
  and the claim that other services are 1080p and unstable removed.
- Homepage: « Le seul IPTV français… » → « Un IPTV français… ».
- « identifiants en moins de 5 minutes » → « en quelques minutes » on the 36
  multi-screen plan pages, the plan order form and `/comment-ca-marche`
  (same correction the audit made elsewhere).
- Device pages (Samsung, LG, Smart TV, Android TV) and the Hauts-de-France,
  Auvergne-Rhône-Alpes and Bourgogne-Franche-Comté hubs link to the new pages.

## Redirects
20 keyword-variant URLs → the new pages (`/acheter-iptv`,
`/renouveler-abonnement-iptv`, `/abonnement-iptv-belgique`, `/iptv-geneve`…).
None shadows a live route.

## Still for the owner (unchanged)
- beIN / RMC / Canal+ claims, MA channels, testimonials and « 50 000+ »,
  « -50% » badge, 24/7 vs 7j/7.
- Same family, spotted here: `/blog/iptv-4k-france` lists « Netflix 4K (via
  IPTV Smarters) » and « Amazon Prime 4K » as channels.
- « moins de 5 minutes » remains on `/essai-gratuit`, `/contact`,
  `/blog/iptv-sans-coupure` and `/blog/comment-installer-iptv-smart-tv`
  (not money pages, left alone).
