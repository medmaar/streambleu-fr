import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meilleur Lecteur IPTV France 2026 : TiviMate, Smarters & Plus | Stream Bleu",
  description:
    "Quel est le meilleur lecteur IPTV en France en 2026 ? Comparatif de TiviMate, IPTV Smarters Pro, IBO Player et Perfect Player — testés avec Stream Bleu.",
  keywords: "meilleur lecteur iptv france, tivimate france, iptv smarters france, lecteur iptv 2026",
  alternates: { canonical: "https://streambleu.fr/blog/meilleur-lecteur-iptv-france" },
  openGraph: {
    title: "Meilleur Lecteur IPTV France 2026 : TiviMate, Smarters & Plus",
    description: "Comparatif des meilleurs lecteurs IPTV disponibles en France pour 2026.",
    url: "https://streambleu.fr/blog/meilleur-lecteur-iptv-france",
    type: "article",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/favicon.svg", width: 512, height: 512 }],
  },
};

const players = [
  { rank: 1, name: "TiviMate", platforms: "Android TV, Fire TV", price: "Gratuit (Premium 4€/an)", rating: "9.5/10", pros: ["Interface fluide et élégante", "EPG complet", "Enregistrement multi-chaînes", "Décodage 4K H.265 matériel"], cons: ["Android TV / Fire TV uniquement"], verdict: "Meilleur choix global" },
  { rank: 2, name: "IPTV Smarters Pro", platforms: "iOS, Android, Smart TV, PC", price: "Gratuit", rating: "9/10", pros: ["Multiplateforme", "Installation facile", "VOD intégré", "Support M3U & Xtream"], cons: ["Interface moins raffinée que TiviMate"], verdict: "Meilleur pour iOS & Apple TV" },
  { rank: 3, name: "IBO Player", platforms: "Android TV, Fire TV", price: "Offert avec forfait 12 mois Stream Bleu", rating: "8.5/10", pros: ["Spécialement optimisé pour Stream Bleu", "4K natif", "EPG intégré", "Interface simple"], cons: ["Moins de fonctionnalités avancées"], verdict: "Inclus gratuit (12 mois)" },
  { rank: 4, name: "Perfect Player", platforms: "Android", price: "Gratuit", rating: "7.5/10", pros: ["Léger et rapide", "Très configurable", "Interface personnalisable"], cons: ["Pas de support officiel", "Interface datée"], verdict: "Bon pour Android téléphone" },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meilleur Lecteur IPTV France 2026",
  datePublished: "2026-03-15",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "Stream Bleu" },
  publisher: { "@type": "Organization", name: "Stream Bleu", url: "https://streambleu.fr" },
};

export default function MeilleurLecteurIPTV() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main style={{ background: "#E8F4F5", minHeight: "100vh" }}>
        <section style={{ background: "linear-gradient(to right, #1A3D45, #2d6a78)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <span style={{ background: "#1A3D45", border: "1px solid #79C9C5", color: "#79C9C5", fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 999, textTransform: "uppercase" }}>Guide</span>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>15 mars 2026 · 6 min de lecture</span>
            </div>
            <h1 style={{ fontSize: "clamp(26px, 4vw, 46px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
              Meilleur Lecteur IPTV France 2026
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.7, maxWidth: 640 }}>
              TiviMate, IPTV Smarters Pro, IBO Player, Perfect Player — nous les avons tous testés avec Stream Bleu. Voici notre classement honnête.
            </p>
          </div>
        </section>

        <article style={{ maxWidth: 820, margin: "0 auto", padding: "60px 16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 48 }}>
            {players.map((p, i) => (
              <div key={p.name} style={{ background: "#fff", borderRadius: 18, padding: "28px 28px", border: i === 0 ? "2px solid rgba(249,110,91,0.3)" : "1px solid rgba(63,154,174,0.15)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                  <div>
                    <span style={{ background: i === 0 ? "#F96E5B" : "#1A3D45", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999, marginRight: 10 }}>#{p.rank}</span>
                    <span style={{ fontSize: 20, fontWeight: 800, color: "#1A3D45" }}>{p.name}</span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#F96E5B" }}>{p.rating}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>{p.verdict}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                  <span style={{ background: "rgba(63,154,174,0.1)", color: "#3F9AAE", fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 999 }}>{p.platforms}</span>
                  <span style={{ background: "rgba(249,110,91,0.1)", color: "#F96E5B", fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 999 }}>{p.price}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#3F9AAE", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Points forts</p>
                    {p.pros.map(pro => <p key={pro} style={{ fontSize: 13, color: "#333", marginBottom: 4, display: "flex", gap: 6 }}><span style={{ color: "#3F9AAE" }}>✓</span>{pro}</p>)}
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#F96E5B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Points faibles</p>
                    {p.cons.map(con => <p key={con} style={{ fontSize: 13, color: "#555", marginBottom: 4, display: "flex", gap: 6 }}><span style={{ color: "#F96E5B" }}>−</span>{con}</p>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section style={{ background: "#1A3D45", borderRadius: 18, padding: "32px 28px", textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#fff", marginBottom: 12 }}>Testez avec Stream Bleu gratuitement</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, marginBottom: 24 }}>IBO Player inclus gratuitement avec le forfait 12 mois. Essai 24h disponible.</p>
            <Link href="/free-trial" style={{ background: "#F96E5B", color: "#fff", fontWeight: 700, fontSize: 15, padding: "12px 28px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
              Essai Gratuit →
            </Link>
          </section>

          <Link href="/blog" style={{ color: "#3F9AAE", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Retour au blog</Link>
        </article>
      </main>
    </>
  );
}
