import type { Metadata } from "next";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "Forfait IPTV 6 Mois — 39€ | Stream Bleu" },
  description:
    "IPTV 6 mois en France pour 39 € : 50 000+ chaînes en direct, qualité 4K, Ligue 1, beIN Sports inclus. Moins cher que 6 forfaits mensuels.",
  keywords:
    "iptv 6 mois france, Stream Bleu 6 mois, meilleur forfait iptv france, iptv 6 mois 39€",
  alternates: { canonical: "https://streambleu.fr/tarifs/6-mois", languages: { "fr-FR": "https://streambleu.fr/tarifs/6-mois", "x-default": "https://streambleu.fr/tarifs/6-mois" } },
    openGraph: {
    title: "Forfait IPTV 6 Mois — 39€",
    description: "IPTV 6 mois en France pour 39 € : 50 000+ chaînes en direct, qualité 4K, Ligue 1, beIN Sports inclus. Moins cher que 6 forfaits mensuels.",
    url: "https://streambleu.fr/tarifs/6-mois", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Forfait IPTV 6 Mois — 39€" }],
  },
};

const faqItems: FaqItem[] = [
  {
    q: "Qu'est-ce qui est inclus dans le forfait 6 mois ?",
    a: "Le forfait 6 mois inclut six mois complets d'accès à plus de 50 000 chaînes en direct (beIN Sports, RMC Sport, Canal+, TF1, M6 et plus), 300 000+ films et séries, streaming 4K Ultra HD, EPG et rattrapage 7 jours — le tout pour 39€.",
  },
  {
    q: "Comment recevoir mes identifiants après la commande ?",
    a: "Après votre commande, notre équipe la vérifie et vous envoie vos identifiants (URL serveur, nom d'utilisateur et mot de passe) directement par e-mail en quelques minutes. Vérifiez vos courriers indésirables si vous ne les voyez pas.",
  },
  {
    q: "Quels appareils sont compatibles avec ce service IPTV ?",
    a: "Notre service fonctionne sur Amazon Firestick, toutes les Smart TV Samsung et LG, les box Android, les téléphones et tablettes Android, iPhone, iPad, Apple TV, les box MAG, PC Windows et Mac. Tout appareil supportant une application IPTV est compatible.",
  },
  {
    q: "Quelle vitesse internet faut-il ?",
    a: "Nous recommandons au moins 10 Mbps pour le streaming HD et 25 Mbps pour la 4K Ultra HD. Tout abonnement internet domicile standard en France gère facilement cela. Notre technologie anti-gel aide également sur les connexions plus lentes.",
  },
  {
    q: "Puis-je regarder les chaînes françaises en direct ?",
    a: "Oui — chaque forfait inclut beIN Sports, RMC Sport, Canal+, TF1, M6, France 2, Arte et toutes les chaînes régionales françaises en HD et 4K. Toute la Ligue 1, la Champions League et les grands matchs internationaux sont couverts.",
  },
  {
    q: "Puis-je utiliser ce service sur plusieurs appareils en même temps ?",
    a: "Ce forfait comprend 1 connexion simultanée. Pour regarder sur plusieurs écrans en même temps, choisissez un forfait de 2 à 10 écrans : en 6 mois, 69€ pour 2 écrans et 105€ pour 3 écrans. Détails sur notre page Abonnement IPTV multi-écrans.",
  },
  {
    q: "Que se passe-t-il à l'expiration de mon abonnement 6 mois ?",
    a: "Vous recevrez un rappel avant l'expiration. Vous pouvez renouveler pour 6 mois ou passer au forfait 12 mois pour encore plus d'économies. Aucun prélèvement automatique, aucun contrat.",
  },
  {
    q: "Comment obtenir du support en cas de problème ?",
    a: "Notre équipe support est disponible 24h/24 via WhatsApp et e-mail en français. La plupart des problèmes sont résolus en quelques minutes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Forfait IPTV 6 Mois Stream Bleu",
  description: "6 mois d'accès IPTV à plus de 50 000 chaînes en direct en France dont Ligue 1, beIN Sports, RMC Sport et 300 000+ titres VOD en 4K.",
  brand: { "@type": "Brand", name: "Stream Bleu" },
  image: "https://streambleu.fr/abonnement-iptv-france-1.jpg",
  offers: {
    "@type": "Offer",
    price: "39.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      applicableCountry: "FR",
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "EUR" },
      shippingDestination: { "@type": "DefinedRegion", addressCountry: "FR" },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "MIN" },
        transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 5, unitCode: "MIN" },
      },
    },
    url: "https://streambleu.fr/tarifs/6-mois",
  },
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "6 Mois", "item": "https://streambleu.fr/tarifs/6-mois"}
  ]
};
export default function Pricing6MonthsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", color: "#1a1a4e", minHeight: "100vh" }}>
        <section
          className="py-20 px-4"
          style={{
            background:
              "transparent",
          }}
        >
          <div className="max-w-2xl mx-auto">
            {/* 1. Page title */}
            <div style={{ background: "#5a5fcf", borderRadius: 24, padding: "28px 24px", boxShadow: "0 8px 32px rgba(90,95,207,0.25)", marginBottom: 24, textAlign: "center" }}>
              <span style={{ background: "rgba(90,95,207,0.18)", border: "1px solid rgba(90,95,207,0.4)", color: "rgba(255,255,255,0.8)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20 }}>
                Stream Bleu · 6 Mois
              </span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 16 }}>
                6 Mois
              </h1>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 16 }}>
                <span style={{ color: "#f5a623", fontWeight: 900, fontSize: "2.4rem" }}>Prix : 39€</span>
                <span style={{ background: "#f5a623", color: "#1a1a4e", fontWeight: 700, fontSize: 12, padding: "5px 14px", borderRadius: 999 }}>Offre -50%</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>Remplissez le formulaire — identifiants envoyés en quelques minutes</p>
            </div>

            {/* 3. Order Form */}
            <div
              className="rounded-3xl p-6 md:p-8 border mb-16"
              style={{
                background: "#5a5fcf",
                borderColor: "rgba(197,188,245,0.2)", boxShadow: "0 8px 32px rgba(90,95,207,0.25)",
              }}
            >
              <PlanOrderForm plan="Forfait IPTV 6 Mois — 1 Connexion — 39€" />
            </div>

            {/* 4. FAQ */}
            <div style={{ background: "#5a5fcf", borderRadius: 24, padding: "32px", boxShadow: "0 8px 32px rgba(90,95,207,0.25)", marginBottom: 32 }}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#5a5fcf" }}
              >
                FAQ
              </p>
              <h2 style={{ color: "#ffffff", fontSize: "1.4rem", fontWeight: 800, marginBottom: 24 }}>
                Questions Fréquentes
              </h2>
              <PlanFAQ items={faqItems} />
            
            {/* Internal Links */}
            <div style={{ marginTop: 32, background: "rgba(255,255,255,0.06)", borderRadius: 16, padding: "24px 20px" }}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 600, textAlign: "center", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Autres Forfaits</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 14 }}>
                <a href="/tarifs/1-mois" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>1 Mois — 9€</a>
                <a href="/tarifs/3-mois" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>3 Mois — 29€</a>
                <a href="/tarifs/6-mois" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>6 Mois — 39€</a>
                <a href="/tarifs/12-mois" style={{ background: "#5a5fcf", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>12 Mois — 49€ ⭐</a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
                <a href="/essai-gratuit" style={{ background: "#c5bcf5", color: "#5a5fcf", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Essai Gratuit 24h</a>
                <a href="/tarifs" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Tous les Tarifs</a>
                <a href="/abonnement-iptv-multi-ecrans" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Plusieurs écrans</a>
                <a href="/abonnement-iptv-smart-tv" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Abonnement Smart TV</a>
                <a href="/acheter-abonnement-iptv" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Commande et renouvellement</a>
                <a href="/liste-chaines" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Liste des Chaînes</a>
                <a href="/iptv-paris" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>IPTV Paris</a>
                <a href="/iptv-lyon" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>IPTV Lyon</a>
              </div>
            </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
