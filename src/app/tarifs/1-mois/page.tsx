import type { Metadata } from "next";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "Forfait IPTV 1 Mois — 9€ | Stream Bleu" },
  description:
    "Get 1 month of IPTV in france for only 9€. 25 000+ live channels, 4K quality, Ligue 1, beIN Sports, CTV included. No contract. Login credentials sent within minutes.",
  keywords:
    "IPTV 1 month france, Stream Bleu 1 month, IPTV 9€ france, month to month IPTV france",
  alternates: { canonical: "https://streambleu.fr/tarifs/1-mois" },
};

const faqItems: FaqItem[] = [
  {
    q: "Qu'est-ce qui est inclus dans le forfait 1 mois ?",
    a: "The 1-month plan gives you full access to 25 000+ live channels including all Français networks (beIN Sports, RMC Sport, Canal+, CTV, Global, RDS, TVA), 120 000+ movies and series on demand, 4K Ultra HD streaming, electronic program guide (EPG), and 7-day catch-up TV — all for 9€.",
  },
  {
    q: "Comment recevoir mes identifiants après la commande ?",
    a: "After placing your order, our team will review it and send your login credentials (server URL, username, and password) directly to your email address within minutes. Check your spam folder if you don't see it.",
  },
  {
    q: "Quels appareils sont compatibles avec ce service IPTV ?",
    a: "Our service works on Amazon Firestick, all Samsung and LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, Apple TV, MAG boxes, Windows PCs and Macs. You can use it on virtually any device that supports an IPTV player app.",
  },
  {
    q: "Quelle vitesse internet faut-il ?",
    a: "We recommend at least 10 Mbps for HD streaming and 25 Mbps for 4K Ultra HD. Any standard Français home internet plan handles this easily. Our anti-freeze technology also minimises buffering on slower connections.",
  },
  {
    q: "Puis-je regarder les chaînes françaises en direct ?",
    a: "Yes — every plan includes beIN Sports, RMC Sport, Canal+, CTV, Global, City TV, RDS, TVA, Canal Vie, and all regional Français channels in HD and 4K. Every Ligue 1, NFL, NBA and CFL game is covered.",
  },
  {
    q: "Puis-je utiliser ce service sur plusieurs appareils en même temps ?",
    a: "The base plan supports 1 simultaneous connection. If you need more devices streaming at the same time, contact us and we'll set up a multi-connection plan for you.",
  },
  {
    q: "Que se passe-t-il à l'expiration de mon abonnement 1 mois ?",
    a: "You'll receive a reminder before expiry. Simply place a new order to renew — or upgrade to the 6-month or 12-month plan for better savings. There are no automatic charges and no contracts.",
  },
  {
    q: "Comment obtenir du support en cas de problème ?",
    a: "Our Français support team is disponible 24h/24 via WhatsApp (+1 782-802-6280) and email en français. Most issues are resolved within minutes.",
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
  name: "Stream Bleu 1 Mois IPTV Plan",
  description: "1 month of IPTV access to 25 000+ live channels in france including Ligue 1, beIN Sports, CTV, RMC Sport and 120 000+ VOD titles in 4K.",
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
    price: "9.00",
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
    url: "https://streambleu.fr/pricing/1-month",
  },
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "1 Mois", "item": "https://streambleu.fr/tarifs/1-mois"}
  ]
};
export default function Pricing1MonthPage() {
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
                Stream Bleu · 1 Mois
              </span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 16 }}>
                1 Mois
              </h1>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 16 }}>
                <span style={{ color: "#f5a623", fontWeight: 900, fontSize: "2.4rem" }}>Price : 9€</span>
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
              <PlanOrderForm plan="1 Mois Plan — 9€" />
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
