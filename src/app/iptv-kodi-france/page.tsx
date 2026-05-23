import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "IPTV Kodi France 2026 — Configuration PVR IPTV Simple | Stream Bleu" },
  description:
    "Configurez IPTV sur Kodi en France avec Stream Bleu. Guide complet PVR IPTV Simple Client — M3U, EPG, installation en 5 minutes. 25 000+ chaînes en 4K.",
  keywords: "iptv kodi france, kodi iptv pvr, kodi m3u france, iptv simple client kodi, stream bleu kodi",
  alternates: { canonical: "https://streambleu.fr/iptv-kodi-france" },
  openGraph: {
    title: "IPTV Kodi France 2026 — Configuration PVR IPTV Simple | Stream Bleu",
    description: "Configurez Stream Bleu sur Kodi avec le PVR IPTV Simple Client. Guide complet pour la France.",
    url: "https://streambleu.fr/iptv-kodi-france",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "IPTV Kodi France Stream Bleu" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "Comment configurer IPTV sur Kodi ?",
    a: "Installez le PVR IPTV Simple Client depuis les extensions Kodi. Entrez l'URL M3U de Stream Bleu dans les paramètres de l'extension. Activez l'extension et redémarrez Kodi. Vos chaînes apparaissent automatiquement dans la section TV.",
  },
  {
    q: "Kodi est-il compatible avec tous les appareils ?",
    a: "Oui. Kodi fonctionne sur Windows, macOS, Linux, Android, Raspberry Pi, Amazon Fire TV, et même certaines Smart TV. Stream Bleu est compatible avec toutes ces versions de Kodi via l'URL M3U ou Xtream Codes.",
  },
  {
    q: "L'EPG (guide des programmes) fonctionne-t-il avec Kodi et Stream Bleu ?",
    a: "Oui. Stream Bleu fournit une URL EPG compatible XMLTV que vous configurez dans les paramètres du PVR IPTV Simple Client. L'EPG affiche les programmes sur 7 jours pour toutes les chaînes françaises.",
  },
  {
    q: "Kodi supporte-t-il la 4K Ultra HD avec Stream Bleu ?",
    a: "Oui, à condition que votre appareil supporte la 4K et que le codec H.265/HEVC soit activé dans les paramètres de Kodi. Sur un PC ou un Nvidia Shield avec Kodi, vous profiterez du vrai 4K HDR de Stream Bleu.",
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
    { "@type": "ListItem", position: 2, name: "IPTV Kodi France 2026", item: "https://streambleu.fr/iptv-kodi-france" },
  ],
};

const steps = [
  { num: 1, title: "Installer Kodi", desc: "Téléchargez Kodi depuis kodi.tv (Windows, Android, Fire TV, etc.)" },
  { num: 2, title: "Activer PVR IPTV Simple Client", desc: "Allez dans Extensions → Mes extensions → Extensions PVR → PVR IPTV Simple Client → Activer" },
  { num: 3, title: "Configurer l'URL M3U", desc: "Ouvrez les paramètres du PVR → onglet Général → Entrez l'URL M3U fournie par Stream Bleu" },
  { num: 4, title: "Configurer l'EPG", desc: "Onglet EPG → Entrez l'URL EPG Stream Bleu pour avoir le guide des programmes sur 7 jours" },
  { num: 5, title: "Redémarrer Kodi", desc: "Fermez et rouvrez Kodi. Vos chaînes apparaissent dans TV > Chaînes" },
  { num: 6, title: "Profiter", desc: "Naviguez dans 25 000+ chaînes, utilisez le guide EPG et profitez de la 4K Ultra HD" },
];

export default function IPTVKodiFrance() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "#fdf5ff", color: "#1a1a4e", minHeight: "100vh" }}>

        <section style={{ background: "linear-gradient(135deg, #5a5fcf, #7b87e8)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              IPTV Kodi · Stream Bleu France
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginTop: 24, marginBottom: 20 }}>
              IPTV Kodi France 2026<br />
              <span style={{ color: "#f5a623" }}>Configuration PVR complète</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(15px, 2vw, 18px)", maxWidth: 640, marginBottom: 36, lineHeight: 1.7 }}>
              Configurez Stream Bleu sur Kodi en France grâce au PVR IPTV Simple Client. Guide étape par étape pour Windows, Android, Fire TV et Raspberry Pi.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit 24h</Link>
              <Link href="/tarifs" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "70px 16px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, color: "#5a5fcf", marginBottom: 36, textAlign: "center" }}>
              Configuration Kodi + Stream Bleu en 6 étapes
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {steps.map((step) => (
                <div key={step.num} style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "#fff", borderRadius: 16, padding: "20px 24px", border: "1px solid rgba(90,95,207,0.12)" }}>
                  <div style={{ background: "#5a5fcf", color: "#fff", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, flexShrink: 0 }}>{step.num}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: "#5a5fcf", marginBottom: 6 }}>{step.title}</h3>
                    <p style={{ color: "#333", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "48px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "#5a5fcf", borderRadius: 24, padding: "48px 40px", textAlign: "center", boxShadow: "0 12px 40px rgba(90,95,207,0.3)" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>Obtenez votre URL M3U Stream Bleu</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32, fontSize: 15 }}>Essai gratuit 24h · Activation sous 30 minutes · Compatible Kodi, TiviMate, IPTV Smarters</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit</Link>
              <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "60px 16px" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, marginBottom: 40, color: "#5a5fcf" }}>Questions fréquentes — Kodi IPTV France</h2>
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
            <h2 style={{ fontSize: 20, fontWeight: 800, color: "#5a5fcf", marginBottom: 20 }}>Autres appareils compatibles Stream Bleu</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                { label: "IPTV Firestick", href: "/iptv-firestick-france" },
                { label: "IPTV Smart TV", href: "/iptv-smart-tv-france" },
                { label: "IPTV Android TV", href: "/iptv-android-tv-france" },
                { label: "IPTV Samsung TV", href: "/iptv-samsung-tv-france" },
                { label: "IPTV LG TV", href: "/iptv-lg-tv-france" },
                { label: "IPTV Apple TV", href: "/iptv-apple-tv-france" },
                { label: "IPTV Android", href: "/iptv-android-france" },
                { label: "IPTV Windows", href: "/iptv-windows-france" },
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
