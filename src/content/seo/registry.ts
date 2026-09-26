import type { SeoPageData } from "./types";
import { HUB_PAGES } from "./pages/hubs";
import { APP_PAGES } from "./pages/apps";
import { BOX_PAGES } from "./pages/boxes";
import { DEVICE_PAGES } from "./pages/devices";
import { GUIDE_PAGES } from "./pages/guides";
import { COMMERCIAL_PAGES } from "./pages/commercial";
import { CITY_PAGES } from "./pages/cities";

export const SEO_PAGES: SeoPageData[] = [
  ...HUB_PAGES,
  ...APP_PAGES,
  ...BOX_PAGES,
  ...DEVICE_PAGES,
  ...GUIDE_PAGES,
  ...COMMERCIAL_PAGES,
  ...CITY_PAGES,
];

// Labels for existing routes that are not rendered by <SeoPage />
const EXISTING: Record<string, string> = {
  "/": "Accueil Stream Bleu",
  "/tarifs": "Tarifs IPTV",
  "/essai-gratuit": "Essai gratuit IPTV 24h",
  "/liste-chaines": "Liste des chaînes",
  "/avis": "Avis clients",
  "/blog": "Blog IPTV",
  "/iptv-france": "IPTV France",
  "/abonnement-iptv": "Abonnement IPTV",
  "/iptv-premium": "IPTV Premium 4K",
  "/meilleur-iptv-france": "Meilleur IPTV France",
  "/iptv-francais": "IPTV Français",
  "/tarifs/12-mois": "Abonnement IPTV 12 mois",
  "/tarifs/1-mois": "Abonnement IPTV 1 mois",
  "/tarifs/3-mois": "Abonnement IPTV 3 mois",
  "/tarifs/6-mois": "Abonnement IPTV 6 mois",
  "/contact": "Contact",
  "/politique-remboursement": "Politique de remboursement",
  "/avertissement": "Avertissement légal",
  "/blog/iptv-legal-france": "IPTV légal en France ?",
  "/blog/iptv-pas-cher-france": "IPTV pas cher",
  "/blog/iptv-test-gratuit": "Test IPTV gratuit",
  "/blog/meilleur-lecteur-iptv-france": "Meilleur lecteur IPTV",
  "/blog/iptv-4k-france": "IPTV 4K",
  "/blog/iptv-sans-coupure": "IPTV sans coupure",
  "/blog/iptv-stable-france": "IPTV stable",
  "/blog/iptv-france-avis": "Avis IPTV France",
  "/blog/iptv-vs-cable-france": "IPTV vs câble",
  "/blog/comment-installer-iptv-smart-tv": "Installer l'IPTV sur Smart TV",
  "/blog/meilleur-abonnement-iptv-france": "Meilleur abonnement IPTV",
  "/blog/iptv-firestick-france": "Guide IPTV Fire Stick",
  // Legacy hand-built city pages (not in the SEO_PAGES content registry)
  "/iptv-paris": "IPTV Paris",
  "/iptv-lyon": "IPTV Lyon",
  "/iptv-marseille": "IPTV Marseille",
  "/iptv-toulouse": "IPTV Toulouse",
  "/iptv-nice": "IPTV Nice",
  "/iptv-bordeaux": "IPTV Bordeaux",
  "/iptv-lille": "IPTV Lille",
  "/iptv-nantes": "IPTV Nantes",
  "/iptv-strasbourg": "IPTV Strasbourg",
  "/iptv-rennes": "IPTV Rennes",
  "/iptv-montpellier": "IPTV Montpellier",
  "/iptv-grenoble": "IPTV Grenoble",
  "/iptv-toulon": "IPTV Toulon",
  "/iptv-saint-etienne": "IPTV Saint-Étienne",
  "/iptv-reims": "IPTV Reims",
  "/iptv-dijon": "IPTV Dijon",
  "/iptv-rouen": "IPTV Rouen",
};

const BY_SLUG = new Map(SEO_PAGES.map((p) => [p.slug, p]));

export function getPage(slug: string): SeoPageData {
  const p = BY_SLUG.get(slug);
  if (!p) throw new Error(`Unknown SEO page: ${slug}`);
  return p;
}

export function labelFor(href: string): string {
  const p = BY_SLUG.get(href);
  if (p) return p.navLabel;
  if (EXISTING[href]) return EXISTING[href];
  throw new Error(`No label for internal link: ${href}`);
}
