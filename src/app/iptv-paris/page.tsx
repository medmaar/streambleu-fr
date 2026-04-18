import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "IPTV Paris 2026 | Stream Bleu — Meilleur IPTV France" },
  description:
    "Stream Bleu est le meilleur service IPTV à Paris. Regardez TF1, Canal+, beIN Sports, RMC Sport et 25 000+ chaînes en 4K. À partir de 9€. Essai gratuit disponible.",
  keywords:
    "iptv paris, meilleur iptv paris, abonnement iptv Paris, iptv france Paris, stream bleu Paris",
  alternates: { canonical: "https://streambleu.fr/iptv-paris" },
  openGraph: {
    title: "IPTV Paris 2026 | Stream Bleu — Meilleur IPTV France",
    description:
      "Stream Bleu est le meilleur service IPTV à Paris. 25 000+ chaînes, 120 000+ films et séries en 4K. À partir de 9€/mois.",
    url: "https://streambleu.fr/iptv-paris",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Stream Bleu IPTV Paris" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "L'IPTV est-il légal à Paris ?",
    a: "La technologie IPTV est légale à Paris et dans toute la France. Stream Bleu diffuse des flux internet sur votre appareil. Les utilisateurs à Paris sont responsables de s'assurer que les contenus auxquels ils accèdent respectent la législation française sur le droit d'auteur.",
  },
  {
    q: "Quel est le meilleur service IPTV à Paris ?",
    a: "Stream Bleu est largement considéré comme le meilleur service IPTV à Paris. Il propose 25 000+ chaînes en direct incluant toutes les chaînes locales françaises, les chaînes sportives premium (beIN Sports, RMC Sport, Canal+ Sport) et 120 000+ titres à la demande — à partir de 9€/mois.",
  },
  {
    q: "Stream Bleu fonctionne-t-il bien à Paris ?",
    a: "Oui. Stream Bleu fonctionne parfaitement à Paris avec n'importe quel fournisseur internet majeur comme Orange et Free. Nos serveurs sont optimisés pour les connexions en Île-de-France, offrant des streams 4K stables avec un minimum de buffering même aux heures de pointe.",
  },
  {
    q: "Combien coûte un abonnement IPTV à Paris ?",
    a: "Stream Bleu propose des abonnements à partir de 9€/mois sans engagement. Des forfaits longue durée sont disponibles à prix réduit. Toutes les formules incluent un accès à 25 000+ chaînes, 120 000+ films &amp; séries, et les chaînes sportives premium.",
  },
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

export default function IPTVParisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", color: "#1a1a4e", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{
              background: "rgba(90,95,207,0.12)",
              border: "1px solid rgba(90,95,207,0.3)",
              color: "#5a5fcf",
              fontSize: 12,
              fontWeight: 700,
              padding: "4px 14px",
              borderRadius: 999,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>
              IPTV Paris · Stream Bleu
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, lineHeight: 1.1, marginTop: 24, marginBottom: 20, color: "#5a5fcf" }}>
              Meilleur IPTV<br />
              <span style={{ color: "#5a5fcf" }}>Paris 2026</span>
            </h1>
            <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "#5a5fcf", maxWidth: 640, marginBottom: 36, lineHeight: 1.7 }}>
              Stream Bleu est le meilleur service IPTV à Paris. Profitez de TF1, Canal+, beIN Sports,
              RMC Sport et 25 000+ chaînes en 4K Ultra HD. Suivez le PSG, l'Équipe de France et Roland-Garros en 4K sans coupure.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/tarifs" style={{
                background: "#5a5fcf",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 32px",
                borderRadius: 12,
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 6px 20px rgba(90,95,207,0.4)",
              }}>
                Voir les Tarifs →
              </Link>
              <Link href="/essai-gratuit" style={{
                background: "transparent",
                border: "2px solid #5a5fcf",
                color: "#5a5fcf",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 32px",
                borderRadius: 12,
                textDecoration: "none",
                display: "inline-block",
              }}>
                Essai Gratuit 24h
              </Link>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section style={{ padding: "70px 16px", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 900, marginBottom: 48, color: "#5a5fcf" }}>
              Pourquoi choisir Stream Bleu à Paris ?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
              {[
                { icon: "📺", title: "25 000+ Chaînes", desc: "TNT, câble, satellite, chaînes étrangères — tout en un seul abonnement." },
                { icon: "🎬", title: "120 000+ VOD", desc: "Films et séries à la demande, mis à jour quotidiennement." },
                { icon: "⚽", title: "Sport Premium", desc: "beIN Sports, RMC Sport, Canal+ Sport, Eurosport — sans supplément." },
                { icon: "🔥", title: "4K Ultra HD", desc: "Streams H.265/HEVC avec HDR10 & Dolby Vision sur les chaînes compatibles." },
                { icon: "📱", title: "Multi-écrans", desc: "Smart TV, Fire Stick, Android, iOS, PC — tous les appareils supportés." },
                { icon: "🆓", title: "Essai Gratuit", desc: "Testez 24h gratuitement sans carte bancaire. Activation instantanée." },
              ].map((f) => (
                <div key={f.title} style={{
                  background: "rgba(123,135,232,0.06)",
                  border: "1px solid rgba(123,135,232,0.18)",
                  borderRadius: 16,
                  padding: "28px 24px",
                }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#5a5fcf" }}>{f.title}</h3>
                  <p style={{ color: "#1a1a4e", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section style={{ padding: "70px 16px", background: "#5a5fcf", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 900, color: "#fff", marginBottom: 16 }}>
              Abonnement IPTV Paris à partir de 9€/mois
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32, fontSize: 15, lineHeight: 1.7 }}>
              Sans engagement · Activation sous 30 minutes · Support 24/7 en français
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{
                background: "#5a5fcf",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 32px",
                borderRadius: 12,
                textDecoration: "none",
                display: "inline-block",
              }}>
                Essai Gratuit
              </Link>
              <Link href="/tarifs" style={{
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.4)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 32px",
                borderRadius: 12,
                textDecoration: "none",
                display: "inline-block",
              }}>
                Voir les Tarifs →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "70px 16px", background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <p style={{ color: "#5a5fcf", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>FAQ</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 900, marginBottom: 40, color: "#5a5fcf" }}>
              Questions fréquentes — IPTV Paris
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqItems.map((faq) => (
                <div key={faq.q} style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(123,135,232,0.2)",
                  borderRadius: 16,
                  padding: "24px 28px",
                }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: "#5a5fcf" }}>{faq.q}</h3>
                  <p style={{ color: "#1a1a4e", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links to other cities */}
        <section style={{ padding: "60px 16px", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 22, fontWeight: 800, marginBottom: 32, color: "#5a5fcf" }}>
              IPTV dans d&apos;autres villes françaises
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {[
                { label: "IPTV Paris", href: "/iptv-paris" },
                { label: "IPTV Lyon", href: "/iptv-lyon" },
                { label: "IPTV Marseille", href: "/iptv-marseille" },
                { label: "IPTV Toulouse", href: "/iptv-toulouse" },
                { label: "IPTV Nice", href: "/iptv-nice" },
                { label: "IPTV Bordeaux", href: "/iptv-bordeaux" },
              ].filter(c => !c.href.includes("paris")).map((c) => (
                <Link key={c.href} href={c.href} style={{
                  background: "rgba(123,135,232,0.08)",
                  border: "1px solid rgba(123,135,232,0.2)",
                  borderRadius: 10,
                  padding: "10px 20px",
                  textDecoration: "none",
                  color: "#5a5fcf",
                  fontSize: 14,
                  fontWeight: 600,
                }}>
                  🇫🇷 {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
