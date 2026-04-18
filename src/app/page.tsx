import type { Metadata } from "next";
import Link from "next/link";
import HomePricing from "./components/HomePricing";
import ReviewsSection from "./components/ReviewsSection";

export const metadata: Metadata = {
  title: { absolute: "Meilleur IPTV France 2026 — 4K Ultra HD | Stream Bleu" },
  description:
    "Le meilleur abonnement IPTV en France. Streams H.265/HEVC avec support HDR10 & Dolby Vision. 25 000+ chaînes en direct, 120 000+ films et séries — à partir de 9€/mois. Essai gratuit.",
  keywords:
    "iptv france, meilleur iptv france 2026, abonnement iptv france, iptv 4k france, iptv premium france, stream bleu, iptv pas cher france",
  alternates: { canonical: "https://streambleu.fr" },
  openGraph: {
    title: "Meilleur IPTV France 2026 — 4K Ultra HD | Stream Bleu",
    description:
      "Le meilleur abonnement IPTV en France. 25 000+ chaînes, 120 000+ films et séries en 4K. À partir de 9€/mois. Essai gratuit sans carte bancaire.",
    url: "https://streambleu.fr",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Stream Bleu – Meilleur IPTV France" }],
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
      <main style={{ background: "#E8F4F5", color: "#000000" }}>

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
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "70% 30%",
            zIndex: 0,
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(26,61,69,0.72) 0%, rgba(26,61,69,0.88) 100%)",
            zIndex: 1,
          }} />
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <span style={{
              display: "inline-block",
              background: "rgba(249,110,91,0.2)",
              border: "1px solid rgba(249,110,91,0.6)",
              color: "#F96E5B",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "6px 18px",
              borderRadius: 999,
              marginBottom: 28,
            }}>
              🇫🇷 Meilleur IPTV France — 2026
            </span>
            <h1 style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 24,
              color: "#ffffff",
            }}>
              L&apos;IPTV Premium<br />
              <span style={{ color: "#F96E5B" }}>Made for France</span>
            </h1>
            <p style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "rgba(255,255,255,0.88)",
              maxWidth: 640,
              margin: "0 auto 36px",
              lineHeight: 1.7,
            }}>
              Streams H.265/HEVC avec support HDR10 &amp; Dolby Vision. 25 000+ chaînes en direct
              et 120 000+ films &amp; séries — à la résolution que votre écran mérite.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
              <Link href="/pricing" style={{
                background: "#F96E5B",
                color: "#fff",
                fontWeight: 700,
                fontSize: 17,
                padding: "16px 36px",
                borderRadius: 14,
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 6px 20px rgba(249,110,91,0.5)",
              }}>
                Voir les Tarifs →
              </Link>
              <Link href="/free-trial" style={{
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
        <section style={{ background: "#3F9AAE", padding: "32px 16px" }}>
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
        <section style={{ padding: "80px 16px", background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <ReviewsSection showHeader={true} />
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a href="/reviews" style={{ display: "inline-block", background: "#1A3D45", color: "#fff", padding: "12px 28px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                Voir tous les avis →
              </a>
            </div>
          </div>
        </section>

        {/* ── 3. PRICING ── */}
        <HomePricing />

        {/* ── 4. DEVICES MARQUEE ── */}
        <section style={{ padding: "80px 16px", background: "#E8F4F5", overflow: "hidden" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#000000" }}>
              Compatible avec tous vos appareils
            </h2>
            <p style={{ textAlign: "center", color: "#000000", marginBottom: 48, fontSize: 15 }}>
              Un seul abonnement — tous les écrans de votre maison.
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track" style={{ gap: 16 }}>
              {[...deviceNames, ...deviceNames].map((name, i) => (
                <div key={i} style={{
                  flexShrink: 0,
                  background: "rgba(63,154,174,0.1)",
                  border: "1px solid rgba(63,154,174,0.25)",
                  borderRadius: 14,
                  padding: "14px 24px",
                  color: "#000000",
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
        <section style={{ padding: "80px 16px", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ color: "#F96E5B", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
              Chaînes Françaises
            </p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 16, color: "#000000" }}>
              Toutes vos chaînes françaises préférées
            </h2>
            <p style={{ textAlign: "center", color: "#000000", marginBottom: 40, fontSize: 15, maxWidth: 620, margin: "0 auto 40px" }}>
              Stream Bleu inclut toutes les grandes chaînes françaises en qualité maximale — TNT, chaînes câblées, info en continu, sans coupure.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 32 }}>
              {frenchChannels.map((ch) => (
                <span key={ch} style={{
                  background: "rgba(63,154,174,0.08)",
                  border: "1px solid rgba(63,154,174,0.2)",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#000000",
                }}>
                  {ch}
                </span>
              ))}
            </div>
            <p style={{ textAlign: "center", color: "#000000", fontSize: 13 }}>
              + 25 000+ autres chaînes du monde entier
            </p>
          </div>
        </section>

        {/* ── 6. SPORTS ── */}
        <section style={{ padding: "80px 16px", background: "#E8F4F5", overflow: "hidden" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#000000" }}>
              Ne ratez plus aucun match
            </h2>
            <p style={{ textAlign: "center", color: "#000000", marginBottom: 16, fontSize: 15 }}>
              Tous les événements PPV inclus sans supplément. Chaque match en qualité maximale — 4K Ultra HD là où c&apos;est disponible.
            </p>
            <p style={{ textAlign: "center", color: "#3F9AAE", fontSize: 13, marginBottom: 44 }}>
              ✓ Aucune coupure &nbsp;&nbsp; ✓ Tous les PPV gratuits &nbsp;&nbsp; ✓ Ligue 1, Champions League, Roland-Garros
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track" style={{ gap: 16 }}>
              {[...sportsChannels, ...sportsChannels].map((ch, i) => (
                <div key={i} style={{
                  flexShrink: 0,
                  background: "rgba(249,110,91,0.06)",
                  border: "1px solid rgba(249,110,91,0.15)",
                  borderRadius: 14,
                  padding: "14px 24px",
                  color: "#000000",
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
        <section style={{ padding: "80px 16px", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#000000" }}>
              Stream Bleu vs Câble vs IPTV Générique
            </h2>
            <p style={{ textAlign: "center", color: "#000000", marginBottom: 48, fontSize: 15 }}>
              Le câble plafonne à 1080i. L&apos;IPTV générique utilise H.264. Stream Bleu diffuse en vrai 4K H.265/HEVC avec HDR.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#000000", fontWeight: 600, borderBottom: "1px solid rgba(63,154,174,0.2)" }}>Fonctionnalité</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#F96E5B", fontWeight: 700, borderBottom: "1px solid rgba(249,110,91,0.3)", background: "rgba(249,110,91,0.06)" }}>Stream Bleu</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#000000", fontWeight: 600, borderBottom: "1px solid rgba(63,154,174,0.2)" }}>Câble / ADSL</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#000000", fontWeight: 600, borderBottom: "1px solid rgba(63,154,174,0.2)" }}>Autre IPTV</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} style={{ background: i % 2 === 0 ? "transparent" : "rgba(63,154,174,0.04)" }}>
                      <td style={{ padding: "14px 16px", color: "#000000", fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#3F9AAE", fontWeight: 600, background: "rgba(249,110,91,0.04)" }}>{row.us}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#000000" }}>{row.cable}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#000000" }}>{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ── */}
        <section style={{ padding: "80px 16px", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <p style={{ color: "#F96E5B", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>FAQ</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 48, color: "#000000" }}>
              Questions Fréquentes
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <div key={faq.q} style={{
                  background: "rgba(63,154,174,0.08)",
                  border: "1px solid rgba(63,154,174,0.2)",
                  borderRadius: 16,
                  padding: "24px 28px",
                }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: "#000000" }}>{faq.q}</h3>
                  <p style={{ color: "#000000", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. CITIES ── */}
        <section style={{ padding: "80px 16px", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#000000" }}>
              Disponible dans toute la France
            </h2>
            <p style={{ textAlign: "center", color: "#000000", marginBottom: 48, fontSize: 15 }}>
              Serveurs Stream Bleu optimisés pour chaque grande ville française.
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: 14,
            }}>
              {cities.map((city) => (
                <Link key={city.name} href={city.href} style={{
                  background: "rgba(63,154,174,0.08)",
                  border: "1px solid rgba(63,154,174,0.2)",
                  borderRadius: 12,
                  padding: "18px 16px",
                  textAlign: "center",
                  textDecoration: "none",
                  color: "#000000",
                  fontSize: 14,
                  fontWeight: 600,
                  display: "block",
                }}>
                  🇫🇷 {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ padding: "80px 16px", textAlign: "center", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, marginBottom: 16, color: "#000000" }}>
              Commencez à streamer dès aujourd&apos;hui
            </h2>
            <p style={{ color: "#000000", marginBottom: 36, fontSize: 16, lineHeight: 1.7 }}>
              Le seul IPTV français construit autour du vrai 4K Ultra HD. H.265/HEVC, HDR10 &amp; Dolby Vision — à partir de 9€/mois. Essai gratuit, sans carte bancaire.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-trial" style={{
                background: "#F96E5B",
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
              <Link href="/pricing" style={{
                background: "transparent",
                border: "2px solid rgba(249,110,91,0.4)",
                color: "#F96E5B",
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
