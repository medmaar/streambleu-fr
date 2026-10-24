# streambleu.fr

Site de Stream Bleu (IPTV, France). Next.js en export statique (`output: "export"`), hébergé sur Cloudflare Pages.

## Développement

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # régénère public/sitemap.xml puis exporte le site dans out/
```

## Où modifier quoi

- Prix : `src/lib/pricing.ts` (source unique de la grille tarifaire).
- Pages SEO (applications, appareils, guides, régions, villes) : `src/content/seo/pages/*.ts`, rendues par `src/components/seo/SeoPage.tsx`.
- Liens officiels affichés en bas des pages SEO : `src/content/seo/sources.ts`.
- Redirections : `public/_redirects` (format Cloudflare Pages).
- Sitemap : généré par `scripts/generate-sitemap.mjs` (exclut les pages noindex et les URL redirigées).
- Notes SEO : `docs/seo/`.
