import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "IPTV sur Apple TV en France 2026 | Stream Bleu" },
  description:
    "Comment regarder Stream Bleu sur Apple TV en France. Guide complet. 25 000+ chaînes, 4K Ultra HD. Compatible Apple TV 4K (3e gen), Apple TV 4K (2e gen), Apple TV HD.",
  keywords: "iptv apple-tv france, stream bleu apple tv, iptv apple tv france 2026",
  alternates: { canonical: "https://streambleu.fr/iptv-apple-tv-france" },
  openGraph: {
    title: "IPTV sur Apple TV en France 2026 | Stream Bleu",
    description: "Installez Stream Bleu sur Apple TV en France. Guide étape par étape.",
    url: "https://streambleu.fr/iptv-apple-tv-france",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Stream Bleu IPTV Apple TV" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function IPTVAppletvFrancePage() {
  return (
    <main style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", color: "#1a1a4e", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "rgba(90,95,207,0.12)", border: "1px solid rgba(90,95,207,0.3)", color: "#5a5fcf", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            IPTV Apple TV · Stream Bleu
          </span>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.1, marginTop: 24, marginBottom: 20, color: "#5a5fcf" }}>
            IPTV sur Apple TV<br />
            <span style={{ color: "#5a5fcf" }}>en France 2026</span>
          </h1>
          <p style={{ fontSize: "clamp(14px, 2vw, 17px)", color: "#5a5fcf", maxWidth: 640, marginBottom: 36, lineHeight: 1.7 }}>
            Guide complet pour configurer Stream Bleu sur votre Apple TV. Installation en 5 minutes, 25 000+ chaînes françaises et internationales en 4K Ultra HD.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/pricing" style={{ background: "#5a5fcf", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none", display: "inline-block", boxShadow: "0 6px 20px rgba(90,95,207,0.4)" }}>
              Voir les Tarifs →
            </Link>
            <Link href="/free-trial" style={{ background: "transparent", border: "2px solid #5a5fcf", color: "#5a5fcf", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
              Essai Gratuit 24h
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: "60px 16px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, marginBottom: 36, color: "#5a5fcf" }}>
            Installation en 5 étapes
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ background: "#fdf5ff", borderRadius: 14, padding: "20px 22px", border: "1px solid rgba(123,135,232,0.15)", display: "flex", gap: 16 }}><div style={{ flexShrink: 0, width: 40, height: 40, background: "#5a5fcf", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: "#fff" }}>1</div><div><h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 6 }}>Ouvrir le Play Store</h3><p style={{ color: "#444", fontSize: 14, lineHeight: 1.6 }}>Depuis l'écran d'accueil de votre Android TV, ouvrez le Google Play Store</p></div></div> <div style={{ background: "#fdf5ff", borderRadius: 14, padding: "20px 22px", border: "1px solid rgba(123,135,232,0.15)", display: "flex", gap: 16 }}><div style={{ flexShrink: 0, width: 40, height: 40, background: "#5a5fcf", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: "#fff" }}>2</div><div><h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 6 }}>Installer TiviMate ou Smarters</h3><p style={{ color: "#444", fontSize: 14, lineHeight: 1.6 }}>Recherchez TiviMate ou IPTV Smarters Pro et installez</p></div></div> <div style={{ background: "#fdf5ff", borderRadius: 14, padding: "20px 22px", border: "1px solid rgba(123,135,232,0.15)", display: "flex", gap: 16 }}><div style={{ flexShrink: 0, width: 40, height: 40, background: "#5a5fcf", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: "#fff" }}>3</div><div><h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 6 }}>Souscrire à Stream Bleu</h3><p style={{ color: "#444", fontSize: 14, lineHeight: 1.6 }}>Choisissez votre forfait sur streambleu.fr — identifiants en 30 min</p></div></div> <div style={{ background: "#fdf5ff", borderRadius: 14, padding: "20px 22px", border: "1px solid rgba(123,135,232,0.15)", display: "flex", gap: 16 }}><div style={{ flexShrink: 0, width: 40, height: 40, background: "#5a5fcf", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: "#fff" }}>4</div><div><h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 6 }}>Configurer le lecteur</h3><p style={{ color: "#444", fontSize: 14, lineHeight: 1.6 }}>Dans TiviMate → Ajouter une liste M3U → collez votre URL Stream Bleu</p></div></div> <div style={{ background: "#fdf5ff", borderRadius: 14, padding: "20px 22px", border: "1px solid rgba(123,135,232,0.15)", display: "flex", gap: 16 }}><div style={{ flexShrink: 0, width: 40, height: 40, background: "#5a5fcf", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: "#fff" }}>5</div><div><h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 6 }}>Regarder en 4K</h3><p style={{ color: "#444", fontSize: 14, lineHeight: 1.6 }}>Naviguez dans vos chaînes favorites en 4K Ultra HD H.265</p></div></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 16px", background: "#5a5fcf", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>
            IPTV sur Apple TV à partir de 9€/mois
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, marginBottom: 28, lineHeight: 1.6 }}>
            Sans engagement · Activation en 30 min · Support 24/7 en français
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free-trial" style={{ background: "#5a5fcf", color: "#fff", fontWeight: 700, fontSize: 15, padding: "13px 28px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
              Essai Gratuit
            </Link>
            <Link href="/pricing" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.35)", color: "#fff", fontWeight: 700, fontSize: 15, padding: "13px 28px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
              Voir les Tarifs →
            </Link>
          </div>
        </div>
      </section>

      {/* City links */}
      <section style={{ padding: "50px 16px", background: "#fdf5ff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 20, fontWeight: 800, color: "#5a5fcf", marginBottom: 24 }}>IPTV par ville en France</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { label: "IPTV Paris", href: "/iptv-paris" },
              { label: "IPTV Lyon", href: "/iptv-lyon" },
              { label: "IPTV Marseille", href: "/iptv-marseille" },
              { label: "IPTV Toulouse", href: "/iptv-toulouse" },
              { label: "IPTV Nice", href: "/iptv-nice" },
              { label: "IPTV Bordeaux", href: "/iptv-bordeaux" },
            ].map((c) => (
              <Link key={c.href} href={c.href} style={{ background: "rgba(123,135,232,0.08)", border: "1px solid rgba(123,135,232,0.2)", borderRadius: 10, padding: "9px 18px", textDecoration: "none", color: "#5a5fcf", fontSize: 13, fontWeight: 600 }}>
                🇫🇷 {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
