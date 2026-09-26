import type { Metadata } from "next";
import Link from "next/link";
import ReviewsSection from "../components/ReviewsSection";

export const metadata: Metadata = {
  title: { absolute: "Avis Stream Bleu — Trustpilot, WhatsApp & Google | IPTV France" },
  description: "Lisez les avis vérifiés Stream Bleu de Trustpilot, WhatsApp et Google. 50 000+ clients satisfaits en France. Découvrez pourquoi Stream Bleu est le service.",
  alternates: { canonical: "https://streambleu.fr/avis" },
    openGraph: {
    title: "Avis Stream Bleu — Trustpilot, WhatsApp & Google",
    description: "Lisez les avis vérifiés Stream Bleu de Trustpilot, WhatsApp et Google. 50 000+ clients satisfaits en France. Découvrez pourquoi Stream Bleu est le service.",
    url: "https://streambleu.fr/avis", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Avis Stream Bleu — Trustpilot, WhatsApp & Google" }],
  },
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "Avis", "item": "https://streambleu.fr/avis"}
  ]
};

const faqItems = [
  { q: "Les avis Stream Bleu sont-ils vérifiés ?", a: "Les avis affichés proviennent de trois sources distinctes — Trustpilot, Google et les retours directs de clients sur WhatsApp — plutôt que d'un seul canal, pour donner une image plus complète et plus difficile à manipuler que des avis publiés uniquement sur notre propre site." },
  { q: "Où puis-je laisser mon propre avis sur Stream Bleu ?", a: "Vous pouvez laisser un avis directement sur notre page Trustpilot ou sur Google, ou nous écrire par WhatsApp. Nous lisons chaque retour, qu'il soit positif ou qu'il signale un problème à corriger." },
  { q: "Que faire si mon expérience avec Stream Bleu n'a pas été bonne ?", a: "Contactez d'abord notre support par WhatsApp : la plupart des problèmes (installation, coupure, identifiants) se résolvent en quelques minutes. Si le problème persiste, consultez notre politique de remboursement." },
  { q: "Pourquoi comparer plusieurs sources d'avis avant de choisir un service IPTV ?", a: "Un service fiable a des avis cohérents sur plusieurs plateformes indépendantes, pas seulement sur son propre site. Notre guide comparatif IPTV détaille les critères à vérifier avant de s'abonner à n'importe quel service." },
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
export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", minHeight: "100vh", color: "#1a1a4e" }}>
      <section style={{ padding: "48px 16px 32px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ background: "#5a5fcf", borderRadius: 24, padding: "28px 24px", boxShadow: "0 8px 32px rgba(90,95,207,0.25)", textAlign: "center" }}>
            <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", color: "#ffffff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, marginBottom: 20 }}>
              Avis Vérifiés
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 14 }}>
              Ce que disent les clients sur <span style={{ color: "#c5bcf5" }}>Stream Bleu</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
              Avis réels de Trustpilot, WhatsApp &amp; Google — 50 000+ clients satisfaits en France et dans le monde.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 16px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <ReviewsSection showHeader={false} />
      </section>

      <section style={{ padding: "0 16px 60px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#5a5fcf", marginBottom: 20, textAlign: "center" }}>
            Questions fréquentes sur nos avis
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqItems.map((f, i) => (
              <details key={i} style={{ background: "#fff", border: "1px solid rgba(90,95,207,0.15)", borderRadius: 14, padding: "4px 20px" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 15, color: "#1a1a4e", padding: "14px 0" }}>{f.q}</summary>
                <p style={{ color: "#555", fontSize: 14, lineHeight: 1.7, margin: "0 0 16px" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", background: "#5a5fcf", borderRadius: 24, padding: "48px 40px", textAlign: "center", boxShadow: "0 12px 40px rgba(90,95,207,0.3)" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#ffffff", marginBottom: 14 }}>
            Rejoignez 50 000+ clients satisfaits
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 28, fontSize: 15 }}>
            Testez Stream Bleu gratuitement pendant 24h — sans carte bancaire requise.
          </p>
          <a href="/essai-gratuit" style={{ display: "inline-block", background: "#5a5fcf", color: "#fff", padding: "14px 36px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
            Essai Gratuit 24h
          </a>
        </div>
      </section>

      <section style={{ padding: "0 16px 64px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#555", fontSize: 13, marginBottom: 16 }}>Voir aussi :</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {[{ l: "/comparatif-iptv", t: "Comparatif IPTV" }, { l: "/meilleur-iptv-france", t: "Meilleur IPTV France" }, { l: "/blog/iptv-france-avis", t: "IPTV France Avis" }, { l: "/politique-remboursement", t: "Remboursement" }, { l: "/contact", t: "Contact" }].map((x) => (
              <Link key={x.l} href={x.l} style={{ background: "rgba(90,95,207,0.08)", border: "1px solid rgba(90,95,207,0.2)", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" }}>{x.t}</Link>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
