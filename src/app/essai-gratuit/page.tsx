import type { Metadata } from "next";
import PlanOrderForm from "../tarifs/PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../tarifs/PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "Essai Gratuit IPTV France — Testez Stream Bleu Sans Risque | Stream Bleu" },
  description: "Obtenez un essai gratuit IPTV en France. Sans carte bancaire. Accédez à 25 000+ chaînes en direct, beIN Sports, Canal+, TF1 et 120 000+ films. Activation en 5 minutes.",
  keywords: "essai gratuit iptv france, stream bleu essai, test iptv france gratuit, iptv france sans carte bancaire",
  alternates: { canonical: "https://streambleu.fr/essai-gratuit" },
  openGraph: {
    title: "Essai Gratuit IPTV France — Testez Stream Bleu Sans Risque",
    description: "Essai IPTV gratuit en France. Sans carte bancaire. 25 000+ chaînes, 120 000+ films et séries en 4K.",
    url: "https://streambleu.fr/essai-gratuit",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Stream Bleu Essai Gratuit IPTV France" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems: FaqItem[] = [
  { q: "Comment obtenir l'essai gratuit ?", a: "Remplissez simplement le formulaire ci-dessus et soumettez votre demande. Notre équipe activera votre essai en quelques minutes — généralement en moins de 5 minutes." },
  { q: "L'essai gratuit donne-t-il accès à toutes les chaînes ?", a: "Oui. Votre essai de 24h vous donne un accès complet à toutes les 25 000+ chaînes en direct, 120 000+ titres VOD, et tous les packages sportifs — sans restriction." },
  { q: "Combien d'appareils puis-je utiliser pendant l'essai ?", a: "Votre essai inclut une connexion simultanée. Si vous souhaitez tester sur plusieurs appareils, contactez-nous et nous pouvons l'organiser." },
  { q: "Que se passe-t-il après 24 heures ?", a: "Votre essai s'arrête simplement. Aucun frais, aucune annulation nécessaire. Si vous souhaitez continuer, contactez-nous pour choisir un forfait." },
  { q: "Une carte bancaire est-elle requise pour démarrer l'essai ?", a: "Absolument pas. Aucune information de paiement n'est nécessaire. L'essai est 100% gratuit, sans aucune obligation de s'abonner ensuite." },
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

export default function FreeTrialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #4a4fc0 0%, #5a5fcf 100%)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Sans Carte Bancaire · Activation Instantanée
            </span>
            <h1 style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.1, marginTop: 24, marginBottom: 20, color: "#ffffff" }}>
              Essai Gratuit IPTV<br />
              <span style={{ color: "#c5bcf5" }}>France 24 Heures</span>
            </h1>
            <p style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "rgba(255,255,255,0.85)", marginBottom: 36, lineHeight: 1.7 }}>
              Testez Stream Bleu gratuitement pendant 24 heures — sans carte bancaire, sans engagement. Accès complet à 25 000+ chaînes, beIN Sports, Canal+, TF1, et 120 000+ films en 4K.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {["✓ Aucune carte bancaire", "✓ Activation en 5 min", "✓ 4K Ultra HD", "✓ Toutes les chaînes incluses"].map(f => (
                <span key={f} style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>{f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Form — light blue background so it stands out */}
        <section style={{ padding: "60px 16px", background: "#eef0ff" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ background: "#5a5fcf", borderRadius: 20, padding: "40px 36px", boxShadow: "0 8px 40px rgba(90,95,207,0.3)" }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#ffffff", marginBottom: 8, textAlign: "center" }}>
                Demander votre essai gratuit
              </h2>
              <p style={{ textAlign: "center", color: "rgba(255,255,255,0.75)", fontSize: 14, marginBottom: 28 }}>
                Remplissez le formulaire — vous recevrez vos identifiants par email en moins de 5 minutes.
              </p>
              <PlanOrderForm plan="Essai Gratuit 24h" />
            </div>
          </div>
        </section>

        {/* FAQ — same blue background as form */}
        <section style={{ padding: "60px 16px 80px", background: "#eef0ff" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ background: "#4a4fc0", borderRadius: 20, padding: "40px 36px", boxShadow: "0 8px 40px rgba(90,95,207,0.25)" }}>
              <h2 style={{ textAlign: "center", fontSize: 24, fontWeight: 800, color: "#ffffff", marginBottom: 32 }}>
                Questions fréquentes sur l&apos;essai gratuit
              </h2>
              <PlanFAQ items={faqItems} />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
