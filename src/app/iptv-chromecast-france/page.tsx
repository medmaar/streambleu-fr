import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "IPTV Chromecast France 2026 — Google TV & Chromecast Ultra | Stream Bleu" },
  description:
    "Utilisez Stream Bleu sur votre Chromecast avec Google TV. Guide complet pour l'IPTV sur Chromecast en France. Installation en 5 minutes, qualité 4K Ultra HD.",
  keywords: "iptv chromecast france, chromecast iptv, google tv iptv france, chromecast ultra iptv, stream bleu chromecast",
  alternates: { canonical: "https://streambleu.fr/iptv-chromecast-france" },
  openGraph: {
    title: "IPTV Chromecast France 2026 — Google TV & Chromecast Ultra | Stream Bleu",
    description: "Installez Stream Bleu sur votre Chromecast avec Google TV. 4K Ultra HD, 25 000+ chaînes, installation en 5 min.",
    url: "https://streambleu.fr/iptv-chromecast-france",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "IPTV Chromecast France Stream Bleu" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "Est-ce que Stream Bleu fonctionne sur Chromecast avec Google TV ?",
    a: "Oui. Le Chromecast avec Google TV est un appareil Android TV, ce qui signifie que vous pouvez installer IPTV Smarters Pro ou TiviMate directement depuis le Google Play Store. Stream Bleu est entièrement compatible et fonctionne en 4K Ultra HD.",
  },
  {
    q: "Puis-je utiliser l'ancien Chromecast (sans Google TV) avec Stream Bleu ?",
    a: "Oui, mais différemment. Les anciens Chromecast (1ère, 2ème, 3ème génération) ne permettent pas d'installer des applications directement. Vous devez caster depuis votre smartphone (Android ou iPhone) via une application IPTV compatible Cast, comme IPTV Smarters Pro.",
  },
  {
    q: "Quelle est la différence entre Chromecast avec Google TV et Fire TV Stick ?",
    a: "Les deux sont basés sur Android et supportent pleinement Stream Bleu. Le Chromecast avec Google TV est généralement moins cher et très bien intégré avec Google Assistant. Le Fire TV Stick 4K Max offre plus de mémoire RAM pour un multitâche plus fluide. Les deux sont d'excellents choix.",
  },
  {
    q: "L'IPTV 4K fonctionne-t-il sur Chromecast ?",
    a: "Oui. Le Chromecast avec Google TV (4K) et le Chromecast Ultra supportent nativement la résolution 4K Ultra HD avec HDR10. Stream Bleu diffuse en H.265/HEVC, le codec le plus efficace disponible, parfaitement supporté par ces appareils.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Stream Bleu", item: "https://streambleu.fr" },
    { "@type": "ListItem", position: 2, name: "IPTV Chromecast France 2026", item: "https://streambleu.fr/iptv-chromecast-france" },
  ],
};

export default function IPTVChromecastFrance() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "#fdf5ff", color: "#1a1a4e", minHeight: "100vh" }}>

        <section style={{ background: "linear-gradient(135deg, #5a5fcf, #7b87e8)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              IPTV Chromecast · Stream Bleu France
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginTop: 24, marginBottom: 20 }}>
              IPTV Chromecast France 2026<br />
              <span style={{ color: "#f5a623" }}>Google TV & Chromecast Ultra</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(15px, 2vw, 18px)", maxWidth: 640, marginBottom: 36, lineHeight: 1.7 }}>
              Configurez Stream Bleu sur votre Chromecast avec Google TV en moins de 5 minutes. Profitez de 25 000+ chaînes en 4K Ultra HD H.265 dans votre salon.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit 24h</Link>
              <Link href="/tarifs" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "70px 16px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, color: "#5a5fcf", textAlign: "center", marginBottom: 40 }}>
              Installation sur Chromecast avec Google TV
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { n: 1, t: "Allumer le Chromecast avec Google TV", d: "Assurez-vous que votre Chromecast est connecté au WiFi et à votre télévision." },
                { n: 2, t: "Ouvrir le Google Play Store", d: "Depuis l'écran d'accueil Google TV, naviguez vers le Google Play Store." },
                { n: 3, t: "Installer IPTV Smarters Pro ou TiviMate", d: "Recherchez « IPTV Smarters Pro » ou « TiviMate » et installez l'application de votre choix." },
                { n: 4, t: "Ouvrir l'application et ajouter Stream Bleu", d: "Lancez l'app → Ajouter un compte → choisissez Xtream Codes → entrez vos identifiants Stream Bleu." },
                { n: 5, t: "Choisir sa qualité", d: "Dans les paramètres, activez le codec H.265/HEVC pour profiter de la vraie 4K Ultra HD." },
                { n: 6, t: "Profiter de 25 000+ chaînes", d: "Naviguez dans toutes les catégories : TNT, sport, cinéma, séries, chaînes étrangères." },
              ].map(s => (
                <div key={s.n} style={{ display: "flex", gap: 16, background: "#fff", borderRadius: 14, padding: "18px 22px", border: "1px solid rgba(90,95,207,0.1)" }}>
                  <div style={{ background: "#5a5fcf", color: "#fff", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{s.n}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 4 }}>{s.t}</h3>
                    <p style={{ color: "#333", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "48px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "#5a5fcf", borderRadius: 24, padding: "48px 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>Testez Stream Bleu sur votre Chromecast</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32, fontSize: 15 }}>Essai gratuit 24h · Identifiants envoyés en moins de 30 min · Support 24/7</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit</Link>
              <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "60px 16px" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, marginBottom: 40, color: "#5a5fcf" }}>FAQ — IPTV Chromecast France</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqItems.map((faq) => (
                <div key={faq.q} style={{ background: "#fff", border: "1px solid rgba(123,135,232,0.2)", borderRadius: 16, padding: "24px 28px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: "#5a5fcf" }}>{faq.q}</h3>
                  <p style={{ color: "#1a1a4e", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "40px 16px 60px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: "#5a5fcf", marginBottom: 20 }}>Autres appareils compatibles</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                { label: "IPTV Firestick", href: "/iptv-firestick-france" },
                { label: "IPTV Smart TV", href: "/iptv-smart-tv-france" },
                { label: "IPTV Android TV", href: "/iptv-android-tv-france" },
                { label: "IPTV Samsung TV", href: "/iptv-samsung-tv-france" },
                { label: "IPTV LG TV", href: "/iptv-lg-tv-france" },
                { label: "IPTV Apple TV", href: "/iptv-apple-tv-france" },
                { label: "IPTV Kodi France", href: "/iptv-kodi-france" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ background: "rgba(90,95,207,0.08)", border: "1px solid rgba(90,95,207,0.2)", borderRadius: 999, padding: "8px 18px", fontSize: 13, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
