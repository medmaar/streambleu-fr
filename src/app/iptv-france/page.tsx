import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV France 2026 — 25 000+ Chaînes en Direct | Stream Bleu",
  description: "IPTV France : le service IPTV le plus fiable en France. 25 000+ chaînes, beIN Sports, Canal+, TF1, RMC Sport. 4K Ultra HD, zéro coupure. Essai gratuit 24h sans carte bancaire.",
  keywords: "iptv france, france iptv, iptv en france, service iptv france, fournisseur iptv france",
  alternates: { canonical: "https://streambleu.fr/iptv-france" },
  openGraph: {
    title: "IPTV France 2026 — 25 000+ Chaînes en Direct | Stream Bleu",
    description: "Le meilleur service IPTV en France. 25 000+ chaînes, 4K Ultra HD, sans coupure. Essai gratuit 24h.",
    url: "https://streambleu.fr/iptv-france", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "IPTV France Stream Bleu" }],
  },
};

const faqItems = [
  { q: "Quel est le meilleur service IPTV en France ?", a: "Stream Bleu est reconnu comme le meilleur service IPTV en France grâce à sa stabilité, sa qualité 4K H.265 et son support 24/7 en français. Il propose 25 000+ chaînes dont toutes les chaînes françaises TNT, beIN Sports, Canal+ et RMC Sport." },
  { q: "L'IPTV est-il légal en France ?", a: "La technologie IPTV est parfaitement légale en France. Stream Bleu est un revendeur de services IPTV tiers. Les utilisateurs sont responsables des contenus auxquels ils accèdent conformément à la législation française en vigueur." },
  { q: "Comment fonctionne l'IPTV en France ?", a: "L'IPTV diffuse les chaînes TV via internet. Il suffit d'une connexion stable (25 Mbps pour la 4K) et d'un lecteur IPTV comme TiviMate ou IPTV Smarters Pro installé sur votre appareil." },
  { q: "L'IPTV France inclut-il les chaînes sportives ?", a: "Oui. Stream Bleu inclut beIN Sports 1/2/3, RMC Sport 1/2, Canal+ Sport, Eurosport 1/2 et L'Équipe TV. Tous les matchs Ligue 1, Champions League, Roland-Garros et Top 14 sont couverts." },
  { q: "Quelle connexion internet faut-il pour l'IPTV en France ?", a: "25 Mbps suffisent pour la 4K Ultra HD. La fibre française (100 Mbps+) permet plusieurs streams simultanés sans aucun buffering. L'IPTV fonctionne également très bien en 4G/5G." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const features = [
  { icon: "📺", title: "25 000+ Chaînes", desc: "Toutes les chaînes françaises TNT, câble, satellite et 152 pays." },
  { icon: "⚡", title: "Zéro Coupure", desc: "Serveurs optimisés pour la France — aucun buffering même en direct." },
  { icon: "🎬", title: "4K Ultra HD", desc: "H.265/HEVC, HDR10 & Dolby Vision sur appareils compatibles." },
  { icon: "🇫🇷", title: "Support Français 24/7", desc: "Équipe disponible 24h/24 en français via WhatsApp et email." },
  { icon: "📱", title: "Tous les Appareils", desc: "Smart TV, Firestick, Android, iOS, PC, MAG Box, Apple TV." },
  { icon: "✅", title: "Essai Gratuit 24h", desc: "Testez sans carte bancaire. Accès complet, activation en 5 min." },
];

const channels = ["TF1 4K","France 2 4K","M6","Arte","Canal+","beIN Sports 1","beIN Sports 2","beIN Sports 3","RMC Sport 1","RMC Sport 2","BFM TV","CNews","LCI","C8","W9","TMC","TFX","France 3","Eurosport 1","TV5 Monde","France 24","Canal+ Sport"];

export default function IptvFrancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ color: "#1a1a4e", minHeight: "100vh" }}>

        <section style={{ background: "linear-gradient(135deg,#4a4fc0 0%,#5a5fcf 100%)", padding: "80px 16px 60px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 24 }}>🇫🇷 Service IPTV N°1 en France</span>
            <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
              IPTV France 2026 —<br /><span style={{ color: "#c5bcf5" }}>25 000+ Chaînes en Direct</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px" }}>
              Le service IPTV France le plus stable du marché. Regardez la TV en 4K Ultra HD sur tous vos appareils — sans coupure, sans engagement, avec un essai gratuit de 24h.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#e03e3e", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit 24h</Link>
              <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 16px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#1a1a4e", marginBottom: 12 }}>Pourquoi choisir Stream Bleu pour l&apos;IPTV en France ?</h2>
            <p style={{ textAlign: "center", color: "#555", fontSize: 15, maxWidth: 560, margin: "0 auto 44px" }}>Un abonnement IPTV pensé pour la France — stabilité, qualité 4K et support en français.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
              {features.map(f => (
                <div key={f.title} style={{ background: "#fff", borderRadius: 16, padding: "24px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 16px rgba(90,95,207,0.06)" }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: "#5a5fcf", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ color: "#555", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 16px", background: "rgba(90,95,207,0.04)" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#1a1a4e", marginBottom: 16 }}>Toutes les chaînes françaises incluses</h2>
            <p style={{ color: "#555", fontSize: 15, marginBottom: 36, lineHeight: 1.7 }}>Votre IPTV France Stream Bleu comprend l&apos;intégralité des chaînes françaises — TNT, câble, satellite — sans supplément.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 36 }}>
              {channels.map(ch => (
                <span key={ch} style={{ background: "rgba(90,95,207,0.08)", border: "1px solid rgba(90,95,207,0.15)", borderRadius: 999, padding: "5px 14px", fontSize: 13, fontWeight: 600, color: "#5a5fcf" }}>{ch}</span>
              ))}
            </div>
            <Link href="/liste-chaines" style={{ display: "inline-block", background: "#5a5fcf", color: "#fff", fontWeight: 700, padding: "12px 28px", borderRadius: 12, textDecoration: "none" }}>Voir la liste complète →</Link>
          </div>
        </section>

        <section style={{ padding: "64px 16px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "#4a4fc0", borderRadius: 24, padding: "40px 36px", boxShadow: "0 8px 32px rgba(90,95,207,0.2)" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: 32, textAlign: "center" }}>Questions sur l&apos;IPTV en France</h2>
            {faqItems.map((f, i) => (
              <div key={i} style={{ borderBottom: i < faqItems.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none", paddingBottom: 20, marginBottom: 20 }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>{f.q}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.7 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "48px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "#5a5fcf", borderRadius: 24, padding: "48px 40px", textAlign: "center", boxShadow: "0 12px 40px rgba(90,95,207,0.3)" }}>
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>Démarrez votre IPTV France dès aujourd&apos;hui</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 28, fontSize: 15 }}>Essai gratuit 24h • Sans carte bancaire • Activation en 5 minutes</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#e03e3e", color: "#fff", fontWeight: 700, padding: "13px 28px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit</Link>
              <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 700, padding: "13px 28px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "32px 16px 64px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ textAlign: "center", color: "#555", fontSize: 13, marginBottom: 16 }}>Voir aussi :</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {[{l:"/abonnement-iptv",t:"Abonnement IPTV"},{l:"/iptv-premium",t:"IPTV Premium"},{l:"/meilleur-iptv-france",t:"Meilleur IPTV France"},{l:"/iptv-francais",t:"IPTV Français"},{l:"/liste-chaines",t:"Chaînes IPTV"},{l:"/essai-gratuit",t:"Essai Gratuit"}].map(x => (
                <Link key={x.l} href={x.l} style={{ background: "rgba(90,95,207,0.08)", border: "1px solid rgba(90,95,207,0.2)", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" }}>{x.t}</Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
