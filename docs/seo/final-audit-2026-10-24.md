# Final SEO audit — 2026-10-24

All 165 built HTML pages in `out/` were parsed and checked: title and meta
length, duplicates, canonical (absolute, self), hreflang (`fr-FR` + `x-default`
self), robots, OG and Twitter tags (url = canonical, image exists and its
declared size matches the file), one H1 and no skipped heading level, image
alt/dimensions, internal links (dead, to redirects, trailing slash), orphans,
JSON-LD validity (FAQ questions visible on the page, breadcrumb and `url`
targets are live pages, Article fields), no rating markup, sitemap = exactly
the indexable pages, `_redirects` (all 301, no chains, no dead target, none
shadowing a live page), keyword-map coverage, and duplicate FAQ questions.

Result before fixes: no dead internal link, no missing canonical/hreflang, no
orphan, sitemap already matched the 127 indexable pages. What was wrong:

## Fixed
- **Truncated titles**: `/blog/iptv-sans-coupure` (« … — Fini le | Stream
  Bleu ») and `/blog/iptv-rapide-france` (« … Instantané & | Stream Bleu »).
  Truncated breadcrumb names on `/essai-gratuit` (« …Stream Bleu San ») and
  `/blog/iptv-sans-coupure` (« …Bufferi »).
- **Cannibalised titles**: homepage, `/abonnement-iptv` and `/tarifs` all
  started « Abonnement IPTV France 2026 — … »; the homepage also said
  « Meilleur IPTV » (owned by `/meilleur-iptv-france`). Homepage → « … IPTV
  Premium 4K », `/tarifs` → « Tarifs IPTV 2026 : forfaits 1 à 12 mois dès 9 € ».
- **Other titles**: `/contact` (« Meilleur IPTV France »), `/revendeur`,
  `/iptv-saint-etienne` (66 chars), `/blog/iptv-4k-france` (« sans
  Coupure »); og:title aligned with title on `/avertissement` and
  `/blog/iptv-legal-france`.
- **H1 on the four indexable plan pages** « 1 Mois » → « IPTV 1 Mois » (same
  pattern as the multi-screen pages). Layout, form and success card unchanged.
- **OG images**: 57 pages declared `abonnement-iptv-france-1.jpg` as 800×533,
  the file is 800×450 → all use `og-image.jpg` (1200×630). `/revendeur` used
  the SVG favicon as og:image (not supported) → `og-image.jpg` + alt.
- **JSON-LD**: 6 blog Article `image` URLs were relative → absolute; 3 blog
  Articles had no `image`. Organization/publisher `logo` was an SVG → new
  `logo-stream-bleu.png` (512×512). LocalBusiness and Organization
  descriptions no longer say « Meilleur » / « Sans coupure ».
- **Head**: duplicate `<link rel="icon">` removed; added
  `apple-touch-icon.png` (180×180) and `theme-color` (#1A3D45).
- **Claims** (same family the earlier audits corrected): « Le meilleur
  abonnement IPTV en France » (homepage hero, footer on every page), « IPTV
  premium sans coupure » (hero), « Zéro buffering garanti » (blog CTA, which
  contradicted its own FAQ), « identifiants en moins de 5 minutes » (all 40
  plan pages, both order forms, trial page) and « réponse en moins de
  5 minutes » (contact, blog) → « en quelques minutes ».
- **C8** (stopped broadcasting on 28 February 2025) removed from the TNT
  lists on the homepage, `/iptv-france` and `/iptv-francais`.
- **Duplicate FAQ questions** on 11 pages (same question twice, sometimes
  word for word) merged, keeping the more complete answer.
- **robots.txt**: `/commande` was both disallowed and `noindex`; Google
  cannot see a noindex on a blocked URL, so the disallow is removed (the
  noindex now works). `/discuter/` (WhatsApp redirect function linked from
  every page) is disallowed instead.
- **Sitemap lastmod**: the generator read `dateModified: D` (a constant) as
  the next page's literal date. It now resolves the constants.
- Removed 3 unused public files (`hero.jpg` 750 KB, `google-reviews-logo.png`,
  `trustpilot-logo.png`).

## Checked, no change
- Keyword sheet: all 684 mapped keywords point to a live page; the
  ≈ 114 000 searches/month without a literal match are misspellings, glued
  forms and English word order (« smasters », « iptvfrance », « premium
  iptv »), not forced into the copy (same decision as round two).
- 36 `/tarifs/N-mois-X-connexions` stay `noindex, follow`; the legacy
  `/tarifs/X-connexions/…` URLs 301 to them (kept for old order links).
- `/contact`, `/dmca`, `/politique-remboursement`, `/revendeur` are under 400
  words: utility pages, not ranking targets.
- The 404 page carries two robots tags (Next.js adds its own); both noindex.

## Still for the owner (unchanged, not invented)
- beIN Sports / RMC Sport / Canal+ / Ligue 1 inclusion claims, Netflix and
  Amazon Prime listed as « 4K channels » on `/blog/iptv-4k-france`.
- Testimonials on `/avis` and the homepage presented as Trustpilot / Google
  reviews, and « 50 000+ clients satisfaits ».
- « Offre -50% » badge on plan pages (no reference price shown).
- « Support 24/7 » vs « 7j/7 ».
- Moroccan (« MA - ») and OSN channels on `/liste-chaines`.
