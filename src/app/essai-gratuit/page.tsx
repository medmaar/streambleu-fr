import type { Metadata } from "next";
import Link from "next/link";
import EssaiGratuitForm from "./EssaiGratuitForm";
import PlanFAQ, { type FaqItem } from "../tarifs/PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "Essai Gratuit IPTV France 24h — Sans CB | Stream Bleu" },
  description: "Essai IPTV gratuit 24h en France, sans carte bancaire : 50 000+ chaînes, beIN Sports, Canal+, TF1 et 300 000+ films. Activation en quelques minutes.",
  keywords: "essai gratuit iptv france, stream bleu essai, test iptv france gratuit, iptv france sans carte bancaire, iptv tester, iptv tester gratuitement, test iptv, iptv test, essai iptv, iptv essai, iptv free trial, iptv essaie gratuit, trial iptv, iptv trial 48, iptv 24h",
  alternates: { canonical: "https://streambleu.fr/essai-gratuit", languages: { "fr-FR": "https://streambleu.fr/essai-gratuit", "x-default": "https://streambleu.fr/essai-gratuit" } },
  openGraph: {
    title: "Essai Gratuit IPTV France — Testez Stream Bleu Sans Risque",
    description: "Essai IPTV gratuit en France. Sans carte bancaire. 50 000+ chaînes, 300 000+ films et séries en 4K.",
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
  { q: "L'essai gratuit donne-t-il accès à toutes les chaînes ?", a: "Oui. Votre essai de 24h vous donne un accès complet à toutes les 50 000+ chaînes en direct, 300 000+ titres VOD, et tous les packages sportifs — sans restriction." },
  { q: "Combien d'appareils puis-je utiliser pendant l'essai ?", a: "Votre essai inclut une connexion simultanée. Si vous souhaitez tester sur plusieurs appareils, contactez-nous et nous pouvons l'organiser." },
  { q: "Que se passe-t-il après 24 heures ?", a: "Votre essai s'arrête simplement. Aucun frais, aucune annulation nécessaire. Si vous souhaitez continuer, contactez-nous pour choisir un forfait." },
  { q: "Une carte bancaire est-elle requise pour démarrer l'essai ?", a: "Absolument pas. Aucune information de paiement n'est nécessaire. L'essai est 100% gratuit, sans aucune obligation de s'abonner ensuite." },
  { q: "Comment tester l'IPTV gratuitement pendant 24h ?", a: "Remplissez le formulaire de cette page : vous recevez un accès d'essai IPTV de 24h par e-mail, à utiliser dans votre lecteur habituel. Pour bien tester, regardez un soir de semaine entre 20h et 23h ou pendant un match, sur l'appareil que vous utiliserez vraiment." },
  { q: "Essai gratuit, test IPTV, trial IPTV : quelle différence ?", a: "Aucune — ce sont les mêmes mots pour la même chose. Que vous cherchiez « essai gratuit iptv », « test iptv gratuit » ou « iptv free trial », Stream Bleu propose systématiquement 24h d'accès complet, sans carte bancaire et sans engagement." },
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


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "Essai Gratuit IPTV France — Testez Stream Bleu San", "item": "https://streambleu.fr/essai-gratuit"}
  ]
};
export default function FreeTrialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ minHeight: "100vh" }}>

        {/* Title + price, one instruction line, then the form */}
        <section style={{ padding: "60px 16px 24px", background: "#eef0ff" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <div style={{ background: "#5a5fcf", borderRadius: 24, padding: "28px 24px", boxShadow: "0 8px 32px rgba(90,95,207,0.25)", marginBottom: 24, textAlign: "center" }}>
              <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20 }}>
                Stream Bleu · Essai 24h
              </span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 16 }}>
                Essai Gratuit IPTV 24h
              </h1>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ color: "#ffd166", fontWeight: 900, fontSize: "2.4rem" }}>Prix : 0€</span>
                <span style={{ background: "#f5a623", color: "#1a1a4e", fontWeight: 700, fontSize: 12, padding: "5px 14px", borderRadius: 999 }}>Sans carte bancaire</span>
              </div>
              <p style={{ color: "#ffffff", fontSize: 15, fontWeight: 600, lineHeight: 1.5, maxWidth: 440, margin: "0 auto" }}>Entrez vos informations ci-dessous et recevez vos identifiants en moins de 5 minutes.</p>
            </div>

            <div style={{ background: "#5a5fcf", borderRadius: 24, padding: "32px", boxShadow: "0 8px 32px rgba(90,95,207,0.25)" }}>
              <EssaiGratuitForm />
            </div>
          </div>
        </section>

        {/* SEO content below the form */}
        <section style={{ padding: "36px 16px 0", background: "#eef0ff" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: 900, lineHeight: 1.2, marginBottom: 14, color: "#1a1a4e" }}>
              Essai Gratuit IPTV France 24 Heures
            </h2>
            <p style={{ fontSize: 16, color: "#33366b", marginBottom: 20, lineHeight: 1.7 }}>
              Testez Stream Bleu gratuitement pendant 24 heures — sans carte bancaire, sans engagement. Accès complet à 50 000+ chaînes, beIN Sports, Canal+, TF1, et 300 000+ films en 4K.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["✓ Aucune carte bancaire", "✓ Activation en 5 min", "✓ 4K Ultra HD", "✓ Toutes les chaînes incluses"].map(f => (
                <span key={f} style={{ fontSize: 14, fontWeight: 700, color: "#3d4199", background: "#ffffff", border: "1px solid #c5bcf5", borderRadius: 999, padding: "6px 14px" }}>{f}</span>
              ))}
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

        <section style={{ padding: "0 16px 64px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ textAlign: "center", color: "#555", fontSize: 13, marginBottom: 16 }}>Voir aussi :</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {[{l:"/tarifs",t:"Nos Tarifs"},{l:"/abonnement-iptv",t:"Abonnement IPTV"},{l:"/prix-iptv",t:"Prix IPTV"},{l:"/comparatif-iptv",t:"Comparatif IPTV"},{l:"/applications-iptv",t:"Applications IPTV"}].map(x => (
                <Link key={x.l} href={x.l} style={{ background: "rgba(90,95,207,0.08)", border: "1px solid rgba(90,95,207,0.2)", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" }}>{x.t}</Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
