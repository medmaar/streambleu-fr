import type { Metadata } from "next";
import Link from "next/link";
import ReferralForm from "../../components/ReferralForm";

export const metadata: Metadata = {
  title: { absolute: "Parrainage IPTV France — Gagnez +12 Mois | Stream Bleu" },
  description: "Parrainez un ami sur Stream Bleu et gagnez +12 mois de service gratuit. Sans limite — chaque parrainage réussi ajoute 12 mois à votre compte.",
  keywords: "parrainage stream bleu, parrainer ami iptv, stream bleu an gratuit, affiliation iptv france",
  alternates: { canonical: "https://streambleu.fr/parrainage" },
    openGraph: {
    title: "Parrainage IPTV France — Gagnez +12 Mois",
    description: "Parrainez un ami sur Stream Bleu et gagnez +12 mois de service gratuit. Sans limite — chaque parrainage réussi ajoute 12 mois à votre compte.",
    url: "https://streambleu.fr/parrainage", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Parrainage IPTV France — Gagnez +12 Mois" }],
  },
};

const steps = [
  { number: "01", title: "Parrainez un ami", description: "Partagez vos informations de parrainage avec un ami qui n'a pas encore utilisé notre service. Envoyez-les via WhatsApp ou remplissez le formulaire." },
  { number: "02", title: "Votre ami s'abonne", description: "Votre ami s'inscrit et souscrit au moins un abonnement de 12 mois à Stream Bleu." },
  { number: "03", title: "Vous gagnez +12 Mois GRATUITS", description: "Une fois le paiement vérifié, 12 mois sont ajoutés à votre compte automatiquement. Sans limite — parrainez autant d'amis que vous voulez !" },
];

const rewardCards = [
  { title: "+12 Mois par Parrainage", desc: "Chaque parrainage approuvé ajoute 12 mois gratuits à votre abonnement.", bg: "#5a5fcf" },
  { title: "Sans Limite", desc: "Parrainez autant de personnes que vous voulez. Chaque parrainage réussi rapporte une autre année bonus.", bg: "#7b87e8" },
  { title: "Validation Rapide", desc: "Notre équipe examine et approuve manuellement les parrainages rapidement.", bg: "#5a5fcf" },
];

const rules = [
  "La personne parrainée doit souscrire au moins un abonnement de 12 mois Stream Bleu.",
  "Votre bonus est ajouté après vérification du paiement.",
  "La personne parrainée doit être un nouveau client qui n'a jamais utilisé Stream Bleu.",
  "Les parrainages sont illimités — chaque parrainage réussi vous donne +12 mois supplémentaires.",
];

// Shared page gradient
const pageBg = "linear-gradient(135deg, #4a4fc0 0%, #6366d4 40%, #7b87e8 100%)";


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "Parrainage IPTV France — Gagnez +12 Mois", "item": "https://streambleu.fr/parrainage"}
  ]
};

const faqItems = [
  { q: "Comment parrainer un ami sur Stream Bleu ?", a: "Remplissez le formulaire de parrainage sur cette page avec les informations de votre ami, ou partagez directement vos coordonnées avec lui pour qu'il vous mentionne au moment de son abonnement." },
  { q: "Combien de temps faut-il pour recevoir mon bonus de parrainage ?", a: "Une fois le paiement de votre ami vérifié par notre équipe, les 12 mois sont ajoutés automatiquement à votre compte, généralement sous 24 à 48h." },
  { q: "Y a-t-il une limite au nombre de parrainages ?", a: "Non, aucune limite. Chaque nouvel ami qui souscrit un abonnement de 12 mois grâce à vous vous rapporte 12 mois supplémentaires, sans plafond." },
  { q: "Mon ami doit-il choisir un forfait précis pour que le parrainage compte ?", a: "Oui, votre ami doit souscrire au moins un abonnement de 12 mois. Les forfaits plus courts (1, 3 ou 6 mois) ne déclenchent pas le bonus de parrainage." },
  { q: "Puis-je me parrainer moi-même ou parrainer un compte déjà existant ?", a: "Non. Le programme est réservé aux nouveaux clients qui n'ont jamais utilisé Stream Bleu, afin de garantir un programme équitable pour tous les parrains." },
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
export default function ParrainagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: pageBg, color: "#fff", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ padding: "64px 16px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, marginBottom: 24 }}>
            Programme de Parrainage
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 14 }}>
            Parrainez un ami,<br />
            <span style={{ color: "#f5a623" }}>gagnez +1 an gratuit</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16 }}>
            Sans limite — chaque parrainage réussi ajoute 12 mois à votre compte.
          </p>
        </div>
      </section>

      {/* Reward cards */}
      <section style={{ padding: "0 16px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {rewardCards.map((card) => (
            <div key={card.title} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: "28px 24px", textAlign: "center", backdropFilter: "blur(8px)" }}>
              <h2 style={{ fontWeight: 800, fontSize: 18, color: "#f5a623", marginBottom: 10 }}>{card.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "48px 16px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 900, color: "#fff", marginBottom: 36 }}>
            Comment ça fonctionne
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {steps.map((step) => (
              <div key={step.number} style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "rgba(255,255,255,0.1)", borderRadius: 16, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.15)" }}>
                <div style={{ flexShrink: 0, width: 48, height: 48, background: "#f5a623", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: "#1a1a4e" }}>
                  {step.number}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 6 }}>{step.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.6 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: "48px 16px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 20, padding: "36px 32px", border: "1px solid rgba(255,255,255,0.2)" }}>
            <h2 style={{ textAlign: "center", fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: 28 }}>
              Soumettre un Parrainage
            </h2>
            <ReferralForm />
          </div>
        </div>
      </section>

      {/* Rules — BELOW form */}
      <section style={{ padding: "48px 16px 80px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: 20 }}>Règles du programme</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {rules.map((rule, i) => (
              <div key={i} style={{ display: "flex", gap: 12, background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 18px", border: "1px solid rgba(255,255,255,0.15)" }}>
                <span style={{ color: "#f5a623", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 14 }}>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 16px 64px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: 20, textAlign: "center" }}>Questions fréquentes sur le parrainage</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqItems.map((f, i) => (
              <details key={i} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "4px 20px" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 15, color: "#fff", padding: "14px 0" }}>{f.q}</summary>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, lineHeight: 1.7, margin: "0 0 16px" }}>{f.a}</p>
              </details>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {[{ l: "/tarifs", t: "Nos Tarifs" }, { l: "/revendeur", t: "Programme Revendeur" }, { l: "/essai-gratuit", t: "Essai Gratuit" }, { l: "/contact", t: "Contact" }].map((x) => (
              <Link key={x.l} href={x.l} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#fff", textDecoration: "none" }}>{x.t}</Link>
            ))}
          </div>
        </div>
      </section>

    </main>
    </>
  );
}
