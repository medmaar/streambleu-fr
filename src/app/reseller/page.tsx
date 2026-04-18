import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Revendeur IPTV France 2026 | Lancez votre Business IPTV – Stream Bleu",
  description: "Devenez revendeur IPTV en France avec Stream Bleu. Prix grossiste, options marque blanche et panneau revendeur rapide. Lancez votre propre activité IPTV dès aujourd'hui.",
  keywords: "revendeur iptv france, programme revendeur iptv france 2026, business iptv france",
  alternates: { canonical: "https://streambleu.fr/reseller" },
  openGraph: {
    title: "Revendeur IPTV France 2026 | Lancez votre Business IPTV – Stream Bleu",
    description: "Devenez revendeur IPTV en France avec Stream Bleu. Prix grossiste et panneau revendeur rapide.",
    url: "https://streambleu.fr/reseller", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/favicon.svg", width: 512, height: 512 }],
  },
};

const features = [
  { title: "Prix Grossiste", desc: "Obtenez des crédits d'abonnements à prix réduit à revendre à vos clients. Plus vous achetez, plus vous économisez — sans commande minimum.", icon: "💰" },
  { title: "Votre Propre Marque", desc: "Commercialisez notre service sous votre propre marque. Vos clients voient votre identité visuelle, vos prix — propulsé par l'infrastructure Stream Bleu.", icon: "🏷️" },
  { title: "Panneau Rapide", desc: "Gérez tous vos clients depuis un tableau de bord revendeur. Créez des comptes, définissez des dates d'expiration, surveillez les connexions et rechargez les crédits instantanément.", icon: "⚡" },
];

export default function ResellerPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000", minHeight: "100vh" }}>
      <section style={{ background: "#1A3D45", padding: "80px 16px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={{ background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 24 }}>
            Programme Revendeur
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
            Lancez votre <span style={{ color: "#F96E5B" }}>Business IPTV</span> en France
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Rejoignez le programme revendeur Stream Bleu. Obtenez des crédits à prix grossiste, gérez vos clients depuis un panneau dédié, et construisez votre propre activité IPTV sous votre marque.
          </p>
          <a href="mailto:help@streambleu.fr?subject=Demande Revendeur Stream Bleu"
            style={{ display: "inline-block", background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
            Devenir Revendeur →
          </a>
        </div>
      </section>

      <section style={{ padding: "80px 16px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#1A3D45", marginBottom: 48 }}>
            Pourquoi revendre Stream Bleu ?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", border: "1px solid rgba(63,154,174,0.15)", boxShadow: "0 4px 20px rgba(26,61,69,0.06)" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: 18, color: "#1A3D45", marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: "#555", fontSize: 14, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 16px", background: "#1A3D45", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>
            Prêt à démarrer ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 28, fontSize: 15 }}>
            Contactez-nous par email ou WhatsApp pour obtenir votre accès revendeur. Activation sous 24h.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:help@streambleu.fr?subject=Demande Revendeur"
              style={{ display: "inline-block", background: "#F96E5B", color: "#fff", padding: "14px 32px", borderRadius: 14, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              Envoyer un Email
            </a>
            <a href="https://wa.me/17828026280?text=Bonjour%2C%20je%20souhaite%20devenir%20revendeur%20Stream%20Bleu"
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: "transparent", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 32px", borderRadius: 14, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
