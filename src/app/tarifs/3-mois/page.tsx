import type { Metadata } from "next";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "Forfait IPTV 3 Mois — €29 | Stream Bleu" },
  description:
    "Profitez de 3 mois d'IPTV en France pour seulement 29€. 25 000+ chaînes en direct, qualité 4K, Ligue 1, beIN Sports inclus. Sans contrat. Identifiants envoyés en quelques minutes.",
  keywords:
    "IPTV 3 months france, Stream Bleu 3 months, IPTV quarterly france, 3 month IPTV france €29",
  alternates: { canonical: "https://streambleu.fr/tarifs/3-mois" },
};

const faqItems: FaqItem[] = [
  {
    q: "Qu'est-ce qui est inclus dans le forfait 3 mois ?",
    a: "Le forfait 3 mois vous donne un accès complet à plus de 25 000 chaînes en direct dont toutes les chaînes françaises, 120 000+ films et séries à la demande, streaming 4K Ultra HD, EPG et rattrapage 7 jours — le tout pour 29€.",
  },
  {
    q: "Comment recevoir mes identifiants après la commande ?",
    a: "Après votre commande, notre équipe la vérifie et vous envoie vos identifiants (URL serveur, nom d'utilisateur et mot de passe) directement par e-mail en quelques minutes. Vérifiez vos courriers indésirables si vous ne les voyez pas.",
  },
  {
    q: "Quels appareils sont compatibles avec ce service IPTV ?",
    a: "Notre service fonctionne sur Amazon Firestick, toutes les Smart TV Samsung et LG, les box Android, les téléphones et tablettes Android, iPhone, iPad, Apple TV, les box MAG, PC Windows et Mac. Compatible avec pratiquement tout appareil supportant une application IPTV.",
  },
  {
    q: "Quelle vitesse internet faut-il ?",
    a: "Nous recommandons au moins 10 Mbps pour le streaming HD et 25 Mbps pour la 4K Ultra HD. Tout abonnement internet domicile standard en France gère cela facilement. Notre technologie anti-gel minimise également les coupures sur les connexions plus lentes.",
  },
  {
    q: "Puis-je regarder les chaînes françaises en direct ?",
    a: "Oui — chaque forfait inclut beIN Sports, RMC Sport, Canal+, TF1, M6, France 2, Arte, et toutes les chaînes régionales françaises en HD et 4K. Toute la Ligue 1, Champions League et matchs internationaux sont couverts.",
  },
  {
    q: "Que se passe-t-il à l'expiration de mon abonnement 3 mois ?",
    a: "Vous recevrez un rappel avant l'expiration. Passez simplement une nouvelle commande pour renouveler — ou passez au forfait 6 mois ou 12 mois pour plus d'économies. Aucun prélèvement automatique, aucun contrat.",
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
  name: "Stream Bleu 3 Mois IPTV Plan",
  description: "3 months of IPTV access to 25 000+ live channels in france including Ligue 1, beIN Sports, CTV, RMC Sport and 120 000+ VOD titles in 4K.",
  brand: { "@type": "Brand", name: "Stream Bleu" },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: { "@type": "Person", name: "Jean-Pierre M." },
    reviewBody: "Service IPTV exceptionnel, image 4K impeccable et aucune coupure depuis 6 mois. Support très réactif.",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "312",
    bestRating: "5",
    worstRating: "1",
  },
  image: "https://streambleu.fr/abonnement-iptv-france-1.jpg",
  offers: {
    "@type": "Offer",
    price: "29.00",
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
    url: "https://streambleu.fr/pricing/3-months",
  },
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "3 Mois", "item": "https://streambleu.fr/tarifs/3-mois"}
  ]
};
export default function Pricing3MonthsPage() {
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
                Stream Bleu · 3 Mois
              </span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 16 }}>
                3 Mois
              </h1>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 16 }}>
                <span style={{ color: "#f5a623", fontWeight: 900, fontSize: "2.4rem" }}>Prix : 29€</span>
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
              <PlanOrderForm plan="3 Mois - 1 Device — €29" />
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
                <a href="/tarifs/3-mois" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>3 Mois — €29</a>
                <a href="/tarifs/6-mois" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>6 Mois — €39</a>
                <a href="/tarifs/12-mois" style={{ background: "#5a5fcf", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>12 Mois — 49€ ⭐</a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
                <a href="/essai-gratuit" style={{ background: "#c5bcf5", color: "#5a5fcf", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Essai Gratuit 24h</a>
                <a href="/tarifs" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Tous les Tarifs</a>
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
