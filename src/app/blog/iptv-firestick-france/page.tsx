import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment Installer l'IPTV sur Fire Stick en France 2026 | Stream Bleu",
  description:
    "Guide complet pour installer Stream Bleu sur Amazon Fire Stick en France. Compatible Fire TV Stick 4K, Fire TV Cube. Configuration IPTV Smarters et TiviMate incluse.",
  keywords: "iptv firestick france, installer iptv fire stick france, stream bleu firestick, iptv fire tv france",
  alternates: { canonical: "https://streambleu.fr/blog/iptv-firestick-france" },
  openGraph: {
    title: "Comment Installer l'IPTV sur Fire Stick en France 2026",
    description: "Guide étape par étape pour configurer l'IPTV sur Amazon Fire Stick en France.",
    url: "https://streambleu.fr/blog/iptv-firestick-france",
    type: "article",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/favicon.svg", width: 512, height: 512 }],
  },
};

const steps = [
  { num: 1, title: "Activer les sources inconnues", desc: "Sur votre Fire Stick, allez dans Paramètres → Ma Fire TV → Options développeur → Activer « Applications de sources inconnues »." },
  { num: 2, title: "Télécharger Downloader", desc: "Recherchez « Downloader » dans l'App Store Amazon et installez-le. C'est l'outil qui vous permettra d'installer des APK non disponibles sur le store." },
  { num: 3, title: "Installer IPTV Smarters Pro", desc: "Ouvrez Downloader et entrez l'URL de l'APK IPTV Smarters Pro. Une fois téléchargé, appuyez sur Installer." },
  { num: 4, title: "Souscrire à Stream Bleu", desc: "Rendez-vous sur streambleu.fr/pricing et choisissez votre forfait. Vous recevrez vos identifiants M3U par email sous 30 minutes." },
  { num: 5, title: "Configurer votre lecteur", desc: "Dans IPTV Smarters, appuyez sur « Ajouter un utilisateur », puis entrez vos identifiants Stream Bleu (URL M3U, nom d'utilisateur, mot de passe)." },
  { num: 6, title: "Profitez de 25 000+ chaînes", desc: "L'application va charger la liste des chaînes. Naviguez dans les catégories : France, Sport, Cinéma, Séries et bien plus." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment installer l'IPTV sur Fire Stick en France",
  description: "Guide étape par étape pour configurer Stream Bleu sur Amazon Fire Stick.",
  step: steps.map(s => ({ "@type": "HowToStep", name: s.title, text: s.desc })),
};

export default function IPTVFirestickFrance() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main style={{ background: "#FFDBFD", minHeight: "100vh" }}>
        <section style={{ background: "linear-gradient(135deg, #6367FF, #8494FF)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
              <span style={{ background: "#6367FF", border: "1px solid #C9BEFF", color: "#C9BEFF", fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 999, textTransform: "uppercase" }}>Guide</span>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>1 mars 2026 · 7 min de lecture</span>
            </div>
            <h1 style={{ fontSize: "clamp(26px, 4vw, 46px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
              Comment Installer l&apos;IPTV sur Fire Stick en France (2026)
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.7, maxWidth: 640 }}>
              Guide étape par étape pour regarder Stream Bleu sur votre Amazon Fire Stick. Fonctionne sur Fire TV Stick 4K, Fire TV Stick Lite et Fire TV Cube.
            </p>
          </div>
        </section>

        <article style={{ maxWidth: 820, margin: "0 auto", padding: "60px 16px" }}>
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#6367FF", marginBottom: 14 }}>Ce dont vous avez besoin</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Un Amazon Fire Stick (Lite, 4K, 4K Max ou Fire TV Cube)",
                "Une connexion internet fibre ou ADSL (min. 25 Mbps pour la 4K)",
                "Un abonnement Stream Bleu (essai gratuit disponible)",
                "5 minutes de configuration",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "#fff", borderRadius: 10, padding: "14px 18px", border: "1px solid rgba(132,148,255,0.15)" }}>
                  <span style={{ color: "#8494FF", fontWeight: 800, fontSize: 16, flexShrink: 0 }}>✓</span>
                  <span style={{ color: "#333", fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#6367FF", marginBottom: 24 }}>Installation en 6 étapes</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {steps.map((step) => (
                <div key={step.num} style={{ background: "#fff", borderRadius: 16, padding: "24px 24px", border: "1px solid rgba(132,148,255,0.15)", display: "flex", gap: 20 }}>
                  <div style={{ flexShrink: 0, width: 44, height: 44, background: "#6367FF", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, color: "#fff" }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: "#6367FF", marginBottom: 8 }}>{step.title}</h3>
                    <p style={{ color: "#444", fontSize: 14, lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ background: "#6367FF", borderRadius: 18, padding: "32px 28px", textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#fff", marginBottom: 12 }}>Prêt à commencer ?</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, marginBottom: 24 }}>Essai gratuit 24h — sans carte bancaire. Vous recevez vos identifiants en 30 minutes.</p>
            <Link href="/free-trial" style={{ background: "#6367FF", color: "#fff", fontWeight: 700, fontSize: 15, padding: "12px 28px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
              Essai Gratuit →
            </Link>
          </section>

          <Link href="/blog" style={{ color: "#8494FF", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Retour au blog</Link>
        </article>
      </main>
    </>
  );
}
