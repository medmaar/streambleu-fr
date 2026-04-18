import type { Metadata } from "next";
import ReferralForm from "../../components/ReferralForm";

export const metadata: Metadata = {
  title: "Programme de Parrainage | Stream Bleu — Parrainez un ami, gagnez +1 an gratuit",
  description: "Parrainez un ami sur Stream Bleu et gagnez +1 an de service gratuit. Sans limite — chaque parrainage réussi ajoute 12 mois à votre compte.",
  keywords: "parrainage stream bleu, parrainer ami iptv, stream bleu an gratuit, affiliation iptv france",
  alternates: { canonical: "https://streambleu.fr/referral" },
};

const steps = [
  { number: "01", title: "Parrainez un ami", description: "Partagez vos informations de parrainage avec un ami qui n'a pas encore utilisé notre service. Envoyez-les via WhatsApp ou remplissez le formulaire ci-dessous." },
  { number: "02", title: "Votre ami s'abonne", description: "Votre ami s'inscrit et souscrit au moins un abonnement de 12 mois à Stream Bleu." },
  { number: "03", title: "Vous gagnez +1 an GRATUIT", description: "Une fois le paiement vérifié, 12 mois sont ajoutés à votre compte automatiquement. Sans limite — parrainez autant d'amis que vous voulez !" },
];

const rewardCards = [
  { title: "+1 An par Parrainage", desc: "Chaque parrainage approuvé ajoute 12 mois gratuits à votre abonnement.", bg: "#6367FF" },
  { title: "Sans Limite", desc: "Parrainez autant de personnes que vous voulez. Chaque parrainage réussi rapporte une autre année bonus.", bg: "#8494FF" },
  { title: "Validation Rapide", desc: "Notre équipe examine et approuve manuellement les parrainages rapidement.", bg: "#6367FF" },
];

const rules = [
  "La personne parrainée doit souscrire au moins un abonnement de 1 an Stream Bleu.",
  "Votre bonus est ajouté après vérification du paiement.",
  "La personne parrainée doit être un nouveau client qui n'a jamais utilisé Stream Bleu.",
  "Les parrainages sont illimités — chaque parrainage réussi vous donne +12 mois supplémentaires.",
];

export default function ReferralPage() {
  return (
    <main style={{ background: "linear-gradient(135deg, #C9BEFF 0%, #FFDBFD 100%)", color: "#1a1a4e", minHeight: "100vh" }}>
      <section style={{ background: "linear-gradient(135deg, #C9BEFF 0%, #FFDBFD 100%)", padding: "48px 16px 32px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ background: "#6367FF", borderRadius: 24, padding: "28px 24px", boxShadow: "0 8px 32px rgba(99,103,255,0.25)", textAlign: "center" }}>
            <span style={{ display: "inline-block", background: "rgba(99,103,255,0.18)", border: "1px solid rgba(99,103,255,0.4)", color: "#6367FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, marginBottom: 20 }}>
              Programme de Parrainage
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 14 }}>
              Parrainez un ami,<br /><span style={{ color: "#6367FF" }}>gagnez +1 an gratuit</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Sans limite — chaque parrainage réussi ajoute 12 mois à votre compte.</p>
          </div>
        </div>
      </section>

      {/* Récompenses */}
      <section style={{ padding: "48px 16px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {rewardCards.map((card) => (
            <div key={card.title} style={{ background: card.bg, borderRadius: 20, padding: "28px 24px", textAlign: "center" }}>
              <h3 style={{ fontWeight: 800, fontSize: 18, color: "#fff", marginBottom: 10 }}>{card.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Étapes */}
      <section style={{ padding: "48px 16px", background: "#fff" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 900, color: "#6367FF", marginBottom: 36 }}>
            Comment ça fonctionne
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {steps.map((step) => (
              <div key={step.number} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 48, height: 48, background: "#6367FF", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: "#fff" }}>
                  {step.number}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "#6367FF", marginBottom: 6 }}>{step.title}</h3>
                  <p style={{ color: "#555", fontSize: 14, lineHeight: 1.6 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Règles */}
      <section style={{ padding: "48px 16px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#6367FF", marginBottom: 20 }}>Règles du programme</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {rules.map((rule, i) => (
              <div key={i} style={{ display: "flex", gap: 12, background: "#fff", borderRadius: 12, padding: "14px 18px", border: "1px solid rgba(132,148,255,0.15)" }}>
                <span style={{ color: "#8494FF", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ color: "#333", fontSize: 14 }}>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section style={{ padding: "48px 16px 80px", background: "#6367FF" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: 28 }}>
            Soumettre un Parrainage
          </h2>
          <ReferralForm />
        </div>
      </section>
    </main>
  );
}
