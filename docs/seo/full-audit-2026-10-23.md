# Full SEO audit — 2026-10-23

Every built HTML page (211 before, 160 after) was parsed from `out/` and checked
for title/meta length and duplicates, canonical, hreflang, OG/Twitter, robots,
sitemap membership, H1 count and heading order, word count, primary keyword
(from `keyword-map.csv`) in title and first 120 words, internal/outbound links,
dead links, orphans, JSON-LD validity, FAQ markup vs visible Q&A, ratings
markup, image dimensions, and near-duplicates (5–6-word shingles).

## Technical
- **hreflang**: 88 hand-built pages had none → `fr-FR` + `x-default` (self).
  The root layout no longer sets a canonical/hreflang, so the 404 page stopped
  pointing its canonical at the homepage.
- **404**: new French `not-found` page (noindex) with links to key sections.
- **Robots**: `max-image-preview:large`, `max-snippet:-1` on indexable pages.
- **Render-blocking**: the hero image preload ran on every page; now homepage
  only. Hero `<img>` got width/height. Only remaining `<head>` script is
  Next's `nomodule` polyfill (not loaded by modern browsers).
- **Meta descriptions** >160 chars trimmed (19 pages).
- **Orphan**: `/comment-ca-marche` linked from the footer.
- **Sitemap** (209 → 122 URLs): generator now skips noindex pages and
  redirected URLs, and uses each registry page's `dateModified` as lastmod.
- **_redirects**: 51 new 301s (small cities → region). 202 rules, no chains,
  no dead targets, no rule shadowing a live page.
- Removed leftover create-next-app assets (`vercel.svg` etc.) and README.

## Schema
- Removed `AggregateRating`/`Review` (4.8/312, 4.8/321, a named 5★ review) from
  the homepage and 40 plan pages: no real, visible review data backs them.
- Homepage and money pages (`commercial` group): `Service` + `AggregateOffer`
  computed from `src/lib/pricing.ts` (9–450 €, 40 offers).
- LocalBusiness: `contactPoint`, `priceRange` matching the grid.
- 17 big-city pages moved to the template: BreadcrumbList (via region),
  WebPage, FAQPage.

## Duplicates / consolidation
- **51 small-city pages → 301 to their region hub** (owner's decision). They
  shared ~70% of their text and targeted no keyword in the France sheet.
- 13 region hubs + 17 big cities rewritten with region/city-specific network
  and housing advice (échoppes bordelaises, maisons à étages du Nord, stations
  de montagne, frontaliers...). Shared text between city pages ~70% → ~35%.
- 36 `/tarifs/N-mois-X-connexions` pages: noindex,follow (kept for ordering).

## Content / claims
- Money pages (IPTV France, IPTV Français, IPTV Premium, Abonnement IPTV)
  deepened with how-it-works, price tables, screen-count table, buying
  criteria, payment/refund facts.
- Removed: « N°1 », « le plus stable/fiable du marché », « zéro coupure
  garanti(e) », « serveurs localisés en France », « réponse en moins de 5 min »,
  « largement considéré comme le meilleur », « À partir de 4€ » (→ 4,08 €).
- `/blog/iptv-france-avis` rewritten as an honest guide: the invented
  Trustpilot/Google/Facebook scores, « 50 000 avis vérifiés », « top 3% » and
  satisfaction percentages are gone. « 50 000+ avis/clients » removed from
  three other blog posts.
- 14 thin app/device pages (<550 words) got a troubleshooting/comparison
  section. Trust block (trial, payment, support, refund) and an official
  « Sources » section on ~70 template pages and 11 hand-built blog posts.

## Left for the owner
- beIN Sports / RMC Sport / Canal+ inclusion claims (unchanged, as asked).
- Moroccan (« MA - ») channels on `/liste-chaines` (unchanged, as asked).
- `/avis` and the homepage reviews carousel present testimonials as
  Trustpilot / Google reviews with platform logos, and « 50 000+ clients
  satisfaits ». Keep only if these exist on those platforms; otherwise this is
  a misleading-practice risk (DGCCRF) as well as an SEO one.
- « -50% offre » badge on plan pages has no reference price.
- « Support 24/7 » (homepage, plans) vs « 7j/7 » (most pages): pick one.
