import { PRICES } from "@/lib/pricing";

const [m1, m3, m6, m12] = PRICES[1];

// Shared by the visible accordion and the FAQPage JSON-LD on /tarifs.
export const TARIFS_FAQ = [
  {
    q: "Combien coûte l'abonnement IPTV Stream Bleu ?",
    a: `Pour 1 écran : ${m1} € pour 1 mois, ${m3} € pour 3 mois, ${m6} € pour 6 mois et ${m12} € pour 12 mois, soit environ ${(m12 / 12).toFixed(2).replace(".", ",")} € par mois sur un an. Tous les forfaits donnent accès au même catalogue ; seuls la durée et le nombre d'écrans changent.`,
  },
  {
    q: "Combien coûtent plusieurs écrans ?",
    a: `Le prix dépend du nombre d'écrans utilisés en même temps. Par exemple, sur 12 mois : ${PRICES[2][3]} € pour 2 écrans, ${PRICES[3][3]} € pour 3 écrans et ${PRICES[5][3]} € pour 5 écrans. La grille complète, jusqu'à 10 écrans, est affichée ci-dessus.`,
  },
  {
    q: "Le lecteur IPTV est-il inclus dans le prix ?",
    a: "Les lecteurs gratuits comme IPTV Smarters Pro, Smarters Player Lite ou VLC ne coûtent rien. Avec le forfait 12 mois, l'activation IBO Player est offerte, ce qui évite le coût du lecteur sur TV Samsung ou LG.",
  },
  {
    q: "Puis-je tester avant de payer ?",
    a: "Oui, l'essai gratuit de 24h vous permet de vérifier la compatibilité avec votre TV et la stabilité sur votre connexion, idéalement un soir de semaine ou pendant un match, avant de choisir un forfait.",
  },
  {
    q: "Y a-t-il un engagement ?",
    a: "Non, les forfaits sont sans engagement : vous payez la durée choisie. Les conditions de remboursement sont détaillées dans notre politique de remboursement.",
  },
  {
    q: "Quel forfait choisir ?",
    a: `Le forfait 1 mois (${m1} €) pour un événement ou un premier mois de test, le 6 mois (${m6} €) pour un bon équilibre, et le 12 mois (${m12} €) pour le prix mensuel le plus bas, avec l'activation IBO Player offerte.`,
  },
];
