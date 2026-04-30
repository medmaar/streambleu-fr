import type { Metadata } from "next";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "IPTV 12 Mois — 6 Connexions — 294€ | Stream Bleu" },
  description: "Abonnement IPTV 12 Mois pour 6 connexions simultanées à 294€. 25 000+ chaînes françaises, beIN Sports, Canal+, 4K Ultra HD H.265. Sans engagement. Identifiants en 5 min.",
  keywords: "iptv 6 connexions, abonnement iptv 12 mois 6 appareils, iptv 6 ecrans france",
  alternates: { canonical: "https://streambleu.fr/tarifs/12-mois-6-connexions" },
  openGraph: {
    title: "IPTV 12 Mois — 6 Connexions — 294€ | Stream Bleu",
    description: "Abonnement IPTV 12 Mois pour 6 connexions simultanées à 294€. 25 000+ chaînes françaises, beIN Sports, Canal+, 4K Ultra HD H.265. Sans engagement. Identifiants en 5 min.",
    url: "https://streambleu.fr/tarifs/12-mois-6-connexions",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Abonnement IPTV France 12 Mois 6 connexions" }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Stream Bleu IPTV 12 Mois — 6 Connexions",
  description: "Abonnement IPTV 12 Mois pour 6 connexions simultanées à 294€. 25 000+ chaînes françaises, beIN Sports, Canal+, 4K Ultra HD H.265. Sans engagement. Identifiants en 5 min.",
  brand: { "@type": "Brand", name: "Stream Bleu" },
  offers: {
    "@type": "Offer",
    price: "294.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://streambleu.fr/tarifs/12-mois-6-connexions",
  },
};

const faqItems: FaqItem[] = [
  {
    q: "Combien d'appareils peuvent streamer en même temps avec ce forfait ?",
    a: "Ce forfait supporte exactement 6 connexions simultanées. Tous vos 6 appareils peuvent regarder des chaînes différentes en même temps sur le même compte.",
  },
  {
    q: "Comment recevoir mes identifiants après la commande ?",
    a: "Après votre commande, notre équipe vous enverra vos identifiants IPTV directement par email en moins de 5 minutes. Vérifiez vos spams si vous ne les recevez pas.",
  },
  {
    q: "Quels appareils sont compatibles avec ce forfait 6 connexions ?",
    a: "Ce forfait fonctionne sur tous les appareils compatibles IPTV : Smart TV Samsung/LG, Amazon Firestick, Android TV, Apple TV, MAG Box, iOS, Android, PC Windows et Mac.",
  },
  {
    q: "Y a-t-il un engagement avec ce forfait 12 Mois ?",
    a: "Non, aucun engagement. Le forfait 12 Mois 6 connexions est sans contrat — vous choisissez votre durée sans renouvellement automatique.",
  },
  {
    q: "Puis-je passer à plus de connexions simultanées ?",
    a: "Oui. Contactez notre support via WhatsApp pour upgrader votre forfait à n'importe quel moment. Nous proposons des forfaits jusqu'à 10 connexions simultanées.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "IPTV 12 Mois — 6 Connexions — 294€", "item": "https://streambleu.fr/tarifs/12-mois-6-connexions"}
  ]
};
export default function PlanMultiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(90,95,207,0.04) 0%, #fdf5ff 35%, #fdf5ff 65%, rgba(200,80,100,0.04) 100%)", color: "#1a1a4e", minHeight: "100vh" }}>
        <div style={{ padding: "60px 16px" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ background: "#5a5fcf", borderRadius: 24, padding: "28px 24px", boxShadow: "0 8px 32px rgba(90,95,207,0.25)", marginBottom: 24, textAlign: "center" }}>
              <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20 }}>
                🇫🇷 IPTV France — 6 Connexions Simultanées
              </span>
              <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 16 }}>
                IPTV 12 Mois — 6 Connexions
              </h1>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                <span style={{ color: "#f5a623", fontWeight: 900, fontSize: "2.4rem" }}>Prix : 294€</span>
                <span style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 12, padding: "5px 14px", borderRadius: 999 }}>-50% offre</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>Remplissez le formulaire — identifiants envoyés en moins de 5 minutes</p>
            </div>

            <div style={{ background: "#5a5fcf", borderRadius: 24, padding: "32px", boxShadow: "0 8px 32px rgba(90,95,207,0.25)", marginBottom: 32 }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 16, justifyContent: "center" }}>
                {"✓ 25 000+ Chaînes · ✓ 4K Ultra HD · ✓ ".split("·").map((f, i) => <span key={i} style={{ color: "rgba(255,255,255,0.85)", fontSize: 13 }}>{f}</span>)}
              </div>
              <h2 style={{ color: "#ffffff", fontSize: "1.4rem", fontWeight: 800, marginBottom: 24 }}>
                Forfait IPTV 12 Mois — 6 Connexions
              </h2>
              <PlanOrderForm plan="Forfait IPTV 12 Mois — 6 Connexions" />
            </div>

            <div style={{ marginTop: 32, background: "rgba(90,95,207,0.06)", borderRadius: 16, padding: "24px 20px" }}>
              <p style={{ color: "#5a5fcf", fontSize: 12, fontWeight: 700, textAlign: "center", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Autres Forfaits</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                <a href="/tarifs/1-mois-6-connexions" style={{ background: "rgba(90,95,207,0.1)", color: "#5a5fcf", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>1 Mois — 54€</a>
                <a href="/tarifs/3-mois-6-connexions" style={{ background: "rgba(90,95,207,0.1)", color: "#5a5fcf", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>3 Mois — 174€</a>
                <a href="/tarifs/6-mois-6-connexions" style={{ background: "rgba(90,95,207,0.1)", color: "#5a5fcf", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>6 Mois — 234€</a>
                <a href="/tarifs/12-mois-6-connexions" style={{ background: "#5a5fcf", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>12 Mois — 294€ ⭐</a>
                <a href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Essai Gratuit 24h</a>
                <a href="/tarifs" style={{ background: "rgba(90,95,207,0.1)", color: "#5a5fcf", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Tous les Tarifs</a>
              </div>
            </div>
          </div>
        </div>

        <section style={{ padding: "0 16px 60px" }}>
          <div style={{ maxWidth: 700, margin: "0 auto", background: "#4a4fc0", borderRadius: 24, padding: "32px 28px", boxShadow: "0 8px 28px rgba(90,95,207,0.2)" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#fff", marginBottom: 28, textAlign: "center" }}>Questions fréquentes</h2>
            <PlanFAQ items={faqItems} />
          </div>
        </section>
      </main>
    </>
  );
}
