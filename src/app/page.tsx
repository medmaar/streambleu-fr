import type { Metadata } from "next";
import Link from "next/link";
import HomePricing from "./components/HomePricing";
import ReviewsSection from "./components/ReviewsSection";

export const metadata: Metadata = {
  title: { absolute: "Abonnement IPTV France 2026 — Meilleur IPTV Premium 4K | Stream Bleu" },
  description:
    "Abonnement IPTV France 2026 — IPTV premium 4K. 25 000+ chaînes, beIN Sports, Canal+. Sans coupure. Essai gratuit 24h. À partir de 9€/mois.",
  keywords:
    "abonnement iptv, iptv abonnement, iptv france, iptv premium, meilleur iptv france, abonnement iptv france, iptv 4k france, iptv sans coupure, iptv stable france, french iptv",
  alternates: { canonical: "https://streambleu.fr" },
  openGraph: {
    title: "Abonnement IPTV France 2026 — Meilleur IPTV Premium 4K | Stream Bleu",
    description:
      "Abonnement IPTV France 2026. Le meilleur IPTV premium 4K — 25 000+ chaînes, beIN Sports, Canal+, sans coupure. À partir de 9€/mois. Essai gratuit 24h.",
    url: "https://streambleu.fr",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Stream Bleu – Meilleur IPTV France" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "Quelle est la qualité vidéo de Stream Bleu ?",
    a: "Stream Bleu diffuse en 4K Ultra HD à 3840×2160, encodé en H.265/HEVC pour une qualité d'image maximale à des débits réduits. HDR10 et Dolby Vision sont entièrement pris en charge sur les écrans et lecteurs IPTV compatibles, offrant la même luminosité et profondeur de couleur qu'un Blu-ray 4K.",
  },
  {
    q: "Quelle vitesse internet faut-il pour regarder l'IPTV en 4K ?",
    a: "Une connexion stable de 25 Mbps suffit pour des streams 4K H.265 fluides. La plupart des offres fibre françaises à 100 Mbps+ permettent plusieurs streams 4K simultanés sans aucun buffering. Le repli automatique en HD s'active sur les connexions plus lentes.",
  },
  {
    q: "Stream Bleu inclut-il les chaînes françaises gratuites (TNT) ?",
    a: "Oui. Stream Bleu inclut toutes les chaînes de la TNT française : TF1, France 2, France 3, France 4, France 5, M6, Arte, C8, CNews, et bien d'autres — en qualité maximale disponible, sans coupure.",
  },
  {
    q: "Est-ce que Stream Bleu fonctionne sur ma Smart TV ?",
    a: "Oui. Stream Bleu est compatible avec toutes les Smart TV Samsung, LG, Philips, Sony, ainsi que les box Android TV, Amazon Fire Stick, Apple TV, MAG Box, et tout appareil supportant IPTV Smarters, TiviMate ou VLC.",
  },
  {
    q: "Stream Bleu inclut-il beIN Sports et RMC Sport ?",
    a: "Oui. Les forfaits Stream Bleu incluent beIN Sports 1/2/3, RMC Sport 1/2, Canal+ Sport, et l'ensemble des chaînes sportives premium françaises — matchs de Ligue 1, Champions League, Roland-Garros, Top 14 Rugby, Formule 1, et bien plus.",
  },
  {
    q: "Peut-on regarder l'IPTV sur plusieurs appareils en même temps ?",
    a: "Oui — les forfaits multi-connexions permettent de 2 à 10 streams simultanés indépendants, chacun capable de diffuser en 4K Ultra HD. Idéal pour les foyers avec plusieurs télévisions, une salle home cinéma et des appareils mobiles.",
  },
  {
    q: "L'IPTV est-il légal en France ?",
    a: "La technologie IPTV est légale en France et est le même mode de diffusion qu'utilisent les grands opérateurs téléphoniques. Stream Bleu donne accès à des flux disponibles publiquement. Les utilisateurs sont responsables de s'assurer que les contenus auxquels ils accèdent respectent la législation en vigueur.",
  },
  {
    q: "Y a-t-il un essai gratuit pour tester la qualité ?",
    a: "Oui — Stream Bleu propose un essai gratuit de 24h sans carte bancaire requise. L'essai diffuse en pleine qualité 4K pour que vous puissiez valider les performances H.265, le rendu HDR et la liste des chaînes sur votre propre matériel. Activation instantanée via WhatsApp ou email.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stream Bleu",
  url: "https://streambleu.fr",
  logo: "https://streambleu.fr/favicon.svg",
  email: "help@streambleu.fr",
  description:
    "Le meilleur abonnement IPTV en France. Streams H.265/HEVC, HDR10 & Dolby Vision. 25 000+ chaînes, 120 000+ films et séries.",
  areaServed: "FR",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Stream Bleu",
  url: "https://streambleu.fr",
};

const deviceNames = [
  "Amazon Fire Stick", "Samsung Smart TV", "LG Smart TV", "iPhone & iPad",
  "Android Phone", "Android TV Box", "MAG Box", "Apple TV",
  "Roku", "PC Windows", "Mac", "Kodi", "VLC Player", "Formuler", "Xbox", "PlayStation",
];

const sportsChannels = [
  "beIN Sports 1", "beIN Sports 2", "beIN Sports 3", "RMC Sport 1", "RMC Sport 2",
  "Canal+ Sport", "Eurosport 1", "Eurosport 2", "L'Équipe TV", "Sky Sports",
  "BT Sport", "ESPN", "DAZN", "Golf Channel", "Olympic Channel", "NBA TV",
];

const frenchChannels = [
  "TF1", "France 2", "France 3", "France 4", "France 5", "M6", "Arte",
  "C8", "W9", "TMC", "TFX", "BFM TV", "CNews", "LCI", "Canal+",
  "TV5 Monde", "M6 Boutique", "6ter",
];

const cities = [
  { name: "Paris", href: "/iptv-paris" },
  { name: "Lyon", href: "/iptv-lyon" },
  { name: "Marseille", href: "/iptv-marseille" },
  { name: "Toulouse", href: "/iptv-toulouse" },
  { name: "Nice", href: "/iptv-nice" },
  { name: "Bordeaux", href: "/iptv-bordeaux" },
];

const comparison = [
  { feature: "Prix/mois", us: "9€", cable: "30€–60€", other: "15€–25€" },
  { feature: "Chaînes en direct", us: "25 000+", cable: "150–500", other: "5 000–15 000" },
  { feature: "Résolution max", us: "4K Ultra HD", cable: "1080i", other: "1080p" },
  { feature: "Codec vidéo", us: "H.265/HEVC", cable: "MPEG-2/H.264", other: "H.264" },
  { feature: "Support HDR", us: "HDR10 + Dolby Vision", cable: "×", other: "Rarement" },
  { feature: "Engagement", us: "Aucun", cable: "12–24 mois", other: "Variable" },
  { feature: "Essai gratuit", us: "24h sans CB", cable: "×", other: "Rarement" },
  { feature: "Support FR 24/7", us: "✓", cable: "Heures ouvrées", other: "×" },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <main style={{ color: "#1a1a4e" }}>

        {/* ── 1. HERO ── */}
        <section style={{
          position: "relative",
          padding: "110px 16px 100px",
          textAlign: "center",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}>
          {/* ── HERO IMAGE CAROUSEL ── */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
            <div
              className="hero-carousel-track"
              style={{
                display: "flex",
                height: "100%",
                width: "600%",
                animation: "heroScroll 40s linear infinite",
              }}
            >
              {[
                { src: "/abonnement-iptv-france-1.jpg", alt: "Abonnement IPTV France — supporters français", pos: "center 30%" },
                { src: "/abonnement-iptv-france-2.jpg", alt: "IPTV France — fans coupe du monde", pos: "center 20%" },
                { src: "/abonnement-iptv-france-3.jpg", alt: "IPTV Premium France — Champs-Élysées", pos: "center 40%" },
                { src: "/abonnement-iptv-france-4.jpg", alt: "Abonnement IPTV — supporters Tour Eiffel", pos: "center 30%" },
                { src: "/abonnement-iptv-france-5.jpg", alt: "IPTV France 4K — équipe de France football", pos: "center 25%" },
                { src: "/abonnement-iptv-france-6.jpg", alt: "Service IPTV France — supporters stade", pos: "center 35%" },
              ].map((img, i) => (
                <div key={i} style={{ flex: "0 0 16.666%", height: "100%", position: "relative" }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: img.pos,
                      display: "block",
                    }}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(90,95,207,0.72) 0%, rgba(90,95,207,0.88) 100%)",
            zIndex: 1,
          }} />
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <span style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.5)",
              color: "#ffffff",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "6px 18px",
              borderRadius: 999,
              marginBottom: 28,
            }}>
              🇫🇷 Abonnement IPTV France — N°1 2026
            </span>
            <h1 style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 24,
              color: "#ffffff",
            }}>
              Abonnement IPTV France<br />
              <span style={{ color: "#c5bcf5" }}>Premium 4K Sans Coupure</span>
            </h1>
            <p style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "rgba(255,255,255,0.88)",
              maxWidth: 640,
              margin: "0 auto 36px",
              lineHeight: 1.7,
            }}>
              Le meilleur abonnement IPTV en France : 25 000+ chaînes en direct, beIN Sports, Canal+, RMC Sport et 120 000+ films en 4K Ultra HD H.265. IPTV premium sans coupure, activation instantanée — à partir de 9€/mois.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
              <Link href="/tarifs" style={{
                background: "#f5a623",
                color: "#fff",
                fontWeight: 700,
                fontSize: 17,
                padding: "16px 36px",
                borderRadius: 14,
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 6px 20px rgba(245,166,35,0.5)",
              }}>
                Voir les Tarifs →
              </Link>
              <Link href="/essai-gratuit" style={{
                background: "transparent",
                border: "2px solid #fff",
                color: "#fff",
                fontWeight: 700,
                fontSize: 17,
                padding: "16px 36px",
                borderRadius: 14,
                textDecoration: "none",
                display: "inline-block",
              }}>
                Essai Gratuit
              </Link>
            </div>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>
              ✓ Essai 24h gratuit &nbsp;&nbsp; ✓ Sans engagement &nbsp;&nbsp; ✓ Paiement PayPal &amp; Carte acceptés
            </p>
          </div>
        </section>

        {/* ── 2. STATS BAR ── */}
        <section style={{ background: "#7b87e8", padding: "32px 16px" }}>
          <div style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 0,
            textAlign: "center",
          }}>
            {[
              { val: "25 000+", label: "Chaînes en direct" },
              { val: "Vrai 4K", label: "HDR10 & Dolby Vision" },
              { val: "0 Buffering", label: "Serveurs ultra-rapides" },
              { val: "24/7", label: "Support France" },
            ].map((s, i) => (
              <div key={s.val} style={{
                padding: "8px 16px",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none",
                animation: `statPop 0.5s ease ${i * 0.12}s both`,
              }}>
                <div style={{ fontSize: 30, fontWeight: 900, color: "#fff", letterSpacing: "-0.5px" }}>{s.val}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section style={{ padding: "80px 16px", background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)" }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <ReviewsSection showHeader={true} />
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a href="/avis" style={{ display: "inline-block", background: "#5a5fcf", color: "#fff", padding: "12px 28px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                Voir tous les avis →
              </a>
            </div>
          </div>
        </section>

        {/* ── 3. PRICING ── */}
        <HomePricing />

        {/* ── 4. DEVICES MARQUEE ── */}
        <section style={{ padding: "80px 16px", background: "transparent", overflow: "hidden" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#1a1a4e" }}>
              Compatible avec tous vos appareils
            </h2>
            <p style={{ textAlign: "center", color: "#1a1a4e", marginBottom: 48, fontSize: 15 }}>
              Un seul abonnement — tous les écrans de votre maison.
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track" style={{ gap: 16 }}>
              {[...deviceNames, ...deviceNames].map((name, i) => (
                <div key={i} style={{
                  flexShrink: 0,
                  background: "rgba(123,135,232,0.1)",
                  border: "1px solid rgba(123,135,232,0.25)",
                  borderRadius: 14,
                  padding: "14px 24px",
                  color: "#1a1a4e",
                  fontSize: 13,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. FRENCH CHANNELS ── */}
        <section style={{ padding: "80px 16px", background: "transparent" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ color: "#5a5fcf", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
              Chaînes Françaises
            </p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 16, color: "#1a1a4e" }}>
              Toutes vos chaînes françaises préférées
            </h2>
            <p style={{ textAlign: "center", color: "#1a1a4e", marginBottom: 40, fontSize: 15, maxWidth: 620, margin: "0 auto 40px" }}>
              Stream Bleu inclut toutes les grandes chaînes françaises en qualité maximale — TNT, chaînes câblées, info en continu, sans coupure.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 32 }}>
              {frenchChannels.map((ch) => (
                <span key={ch} style={{
                  background: "rgba(123,135,232,0.08)",
                  border: "1px solid rgba(123,135,232,0.2)",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#1a1a4e",
                }}>
                  {ch}
                </span>
              ))}
            </div>
            <p style={{ textAlign: "center", color: "#1a1a4e", fontSize: 13 }}>
              + 25 000+ autres chaînes du monde entier
            </p>
          </div>
        </section>

        {/* ── 6. SPORTS ── */}
        <section style={{ padding: "80px 16px", background: "transparent", overflow: "hidden" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#1a1a4e" }}>
              Ne ratez plus aucun match
            </h2>
            <p style={{ textAlign: "center", color: "#1a1a4e", marginBottom: 16, fontSize: 15 }}>
              Tous les événements PPV inclus sans supplément. Chaque match en qualité maximale — 4K Ultra HD là où c&apos;est disponible.
            </p>
            <p style={{ textAlign: "center", color: "#7b87e8", fontSize: 13, marginBottom: 44 }}>
              ✓ Aucune coupure &nbsp;&nbsp; ✓ Tous les PPV gratuits &nbsp;&nbsp; ✓ Ligue 1, Champions League, Roland-Garros
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track" style={{ gap: 16 }}>
              {[...sportsChannels, ...sportsChannels].map((ch, i) => (
                <div key={i} style={{
                  flexShrink: 0,
                  background: "rgba(90,95,207,0.06)",
                  border: "1px solid rgba(90,95,207,0.15)",
                  borderRadius: 14,
                  padding: "14px 24px",
                  color: "#1a1a4e",
                  fontSize: 13,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}>
                  {ch}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. COMPARISON TABLE ── */}
        <section style={{ padding: "80px 16px", background: "transparent" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#1a1a4e" }}>
              Stream Bleu vs Câble vs IPTV Générique
            </h2>
            <p style={{ textAlign: "center", color: "#1a1a4e", marginBottom: 48, fontSize: 15 }}>
              Le câble plafonne à 1080i. L&apos;IPTV générique utilise H.264. Stream Bleu diffuse en vrai 4K H.265/HEVC avec HDR.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#1a1a4e", fontWeight: 600, borderBottom: "1px solid rgba(123,135,232,0.2)" }}>Fonctionnalité</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#5a5fcf", fontWeight: 700, borderBottom: "1px solid rgba(90,95,207,0.3)", background: "rgba(90,95,207,0.06)" }}>Stream Bleu</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#1a1a4e", fontWeight: 600, borderBottom: "1px solid rgba(123,135,232,0.2)" }}>Câble / ADSL</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#1a1a4e", fontWeight: 600, borderBottom: "1px solid rgba(123,135,232,0.2)" }}>Autre IPTV</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} style={{ background: i % 2 === 0 ? "transparent" : "rgba(123,135,232,0.04)" }}>
                      <td style={{ padding: "14px 16px", color: "#1a1a4e", fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#7b87e8", fontWeight: 600, background: "rgba(90,95,207,0.04)" }}>{row.us}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#1a1a4e" }}>{row.cable}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#1a1a4e" }}>{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ── */}
        <section style={{ padding: "80px 16px", background: "transparent" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <p style={{ color: "#5a5fcf", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>FAQ</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 48, color: "#1a1a4e" }}>
              Questions Fréquentes
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <div key={faq.q} style={{
                  background: "rgba(123,135,232,0.08)",
                  border: "1px solid rgba(123,135,232,0.2)",
                  borderRadius: 16,
                  padding: "24px 28px",
                }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: "#1a1a4e" }}>{faq.q}</h3>
                  <p style={{ color: "#1a1a4e", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. CITIES ── */}
        <section style={{ padding: "80px 16px", background: "transparent" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#1a1a4e" }}>
              Disponible dans toute la France
            </h2>
            <p style={{ textAlign: "center", color: "#1a1a4e", marginBottom: 48, fontSize: 15 }}>
              Serveurs Stream Bleu optimisés pour chaque grande ville française.
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: 14,
            }}>
              {cities.map((city) => (
                <Link key={city.name} href={city.href} style={{
                  background: "rgba(123,135,232,0.08)",
                  border: "1px solid rgba(123,135,232,0.2)",
                  borderRadius: 12,
                  padding: "18px 16px",
                  textAlign: "center",
                  textDecoration: "none",
                  color: "#1a1a4e",
                  fontSize: 14,
                  fontWeight: 600,
                  display: "block",
                }}>
                  <img src="https://flagcdn.com/20x15/fr.png" alt="FR" width={20} height={15} style={{ borderRadius: 2, display: "inline-block", verticalAlign: "middle", marginRight: 6 }} />{city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO INTERNAL LINKS HUB ── */}
        <section style={{ padding: "48px 16px 0" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "1.1rem", fontWeight: 700, color: "#5a5fcf", marginBottom: 20, letterSpacing: "0.02em" }}>
              Explorer nos services IPTV
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {[
                {l:"/iptv-france", t:"IPTV France"},
                {l:"/abonnement-iptv", t:"Abonnement IPTV"},
                {l:"/iptv-premium", t:"IPTV Premium 4K"},
                {l:"/meilleur-iptv-france", t:"Meilleur IPTV France"},
                {l:"/iptv-francais", t:"IPTV Français"},
                {l:"/blog/iptv-sans-coupure", t:"IPTV Sans Coupure"},
                {l:"/blog/iptv-pas-cher-france", t:"IPTV Pas Cher"},
                {l:"/blog/meilleur-abonnement-iptv-france", t:"Meilleur Abonnement IPTV"},
                {l:"/blog/iptv-france-avis", t:"Avis IPTV France"},
                {l:"/liste-chaines", t:"Liste des Chaînes"},
              ].map((x) => (
                <Link key={x.l} href={x.l} style={{ background: "rgba(90,95,207,0.07)", border: "1px solid rgba(90,95,207,0.18)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" }}>{x.t}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ padding: "80px 16px", textAlign: "center", background: "transparent" }}>
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, marginBottom: 16, color: "#1a1a4e" }}>
              Commencez à streamer dès aujourd&apos;hui
            </h2>
            <p style={{ color: "#1a1a4e", marginBottom: 36, fontSize: 16, lineHeight: 1.7 }}>
              Le seul IPTV français construit autour du vrai 4K Ultra HD. H.265/HEVC, HDR10 &amp; Dolby Vision — à partir de 9€/mois. Essai gratuit, sans carte bancaire.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{
                background: "#5a5fcf",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 36px",
                borderRadius: 14,
                textDecoration: "none",
                display: "inline-block",
              }}>
                Essai Gratuit
              </Link>
              <Link href="/tarifs" style={{
                background: "transparent",
                border: "2px solid rgba(90,95,207,0.4)",
                color: "#5a5fcf",
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 36px",
                borderRadius: 14,
                textDecoration: "none",
                display: "inline-block",
              }}>
                Voir les Tarifs →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
