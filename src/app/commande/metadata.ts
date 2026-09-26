import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Commander un abonnement IPTV | Stream Bleu" },
  description: "Finalisez votre commande d'abonnement IPTV Stream Bleu. Accès immédiat en moins de 15 minutes.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://streambleu.fr/commande" },
  openGraph: {
    title: "Commander un abonnement IPTV",
    description: "Finalisez votre commande d'abonnement IPTV Stream Bleu. Accès immédiat en moins de 15 minutes.",
    url: "https://streambleu.fr/commande", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Commander un abonnement IPTV" }],
  },
};
