import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment Installer IPTV sur Smart TV 2026 — Guide Complet | Stream Bleu",
  description:
    "Guide étape par étape pour installer IPTV sur Samsung Smart TV, LG, Sony, Philips. Installez TiviMate ou IPTV Smarters Pro en moins de 5 minutes.",
  keywords: "comment installer iptv smart tv, installer iptv samsung, installer iptv lg, tivimate smart tv, iptv smarters smart tv france",
  alternates: { canonical: "https://streambleu.fr/blog/comment-installer-iptv-smart-tv" },
  openGraph: {
    title: "Comment Installer IPTV sur Smart TV 2026 — Guide Complet | Stream Bleu",
    description: "Guide complet pour installer IPTV sur votre Smart TV Samsung, LG, Sony ou Philips. TiviMate, IPTV Smarters Pro — installation en 5 min.",
    url: "https://streambleu.fr/blog/comment-installer-iptv-smart-tv",
    type: "article",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Installer IPTV Smart TV France 2026" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment installer IPTV sur Smart TV",
  description: "Guide étape par étape pour installer un abonnement IPTV sur Samsung Smart TV, LG et autres Smart TV.",
  totalTime: "PT10M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Obtenir vos identifiants IPTV", text: "Souscrivez à Stream Bleu et recevez votre URL M3U ou vos identifiants Xtream Codes par email en moins de 30 minutes." },
    { "@type": "HowToStep", position: 2, name: "Installer une application IPTV", text: "Téléchargez IPTV Smarters Pro ou Smart IPTV depuis le Samsung App Store, le LG Content Store, ou le Google Play Store sur Android TV." },
    { "@type": "HowToStep", position: 3, name: "Entrer vos identifiants", text: "Ouvrez l'application, choisissez 'Ajouter un compte' et entrez l'URL M3U ou les identifiants Xtream Codes fournis par Stream Bleu." },
    { "@type": "HowToStep", position: 4, name: "Profiter de l'IPTV", text: "Vos chaînes se chargent automatiquement. Naviguez dans les catégories et profitez de 25 000+ chaînes en 4K Ultra HD." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelle application IPTV est la meilleure sur Smart TV ?",
      acceptedAnswer: { "@type": "Answer", text: "TiviMate est la meilleure application IPTV pour Android TV (Nvidia Shield, Mi Box, Chromecast avec Google TV, Fire TV Stick). Pour Samsung Tizen et LG webOS, IPTV Smarters Pro ou Smart IPTV sont les meilleures options. Toutes sont compatibles avec Stream Bleu." }
    },
    {
      "@type": "Question",
      name: "Mon Samsung Smart TV est-il compatible avec Stream Bleu ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui. Tous les Samsung Smart TV avec le système Tizen (modèles 2017 et plus récents) sont compatibles avec Stream Bleu via l'application IPTV Smarters Pro ou Smart IPTV disponible dans le Samsung App Store." }
    },
    {
      "@type": "Question",
      name: "Combien de temps prend l'installation d'IPTV sur Smart TV ?",
      acceptedAnswer: { "@type": "Answer", text: "Avec Stream Bleu, l'installation complète prend généralement moins de 10 minutes : 2 minutes pour télécharger l'application, 2 minutes pour entrer vos identifiants, et les chaînes se chargent automatiquement en quelques secondes." }
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Stream Bleu", item: "https://streambleu.fr" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://streambleu.fr/blog" },
    { "@type": "ListItem", position: 3, name: "Comment installer IPTV sur Smart TV", item: "https://streambleu.fr/blog/comment-installer-iptv-smart-tv" },
  ],
};

const tvGuides = [
  {
    brand: "Samsung Smart TV",
    icon: "📺",
    system: "Tizen",
    app: "IPTV Smarters Pro",
    steps: [
      "Appuyez sur la touche Home de votre télécommande",
      "Allez dans Apps → Rechercher → tapez « IPTV Smarters »",
      "Installez IPTV Smarters Pro",
      "Ouvrez l'app → Ajouter un utilisateur",
      "Entrez votre login/password/URL Xtream Codes Stream Bleu",
      "Vos 25 000+ chaînes se chargent automatiquement",
    ],
  },
  {
    brand: "LG Smart TV",
    icon: "📺",
    system: "webOS",
    app: "Smart IPTV",
    steps: [
      "Appuyez sur LG Content Store sur votre télécommande LG",
      "Recherchez « Smart IPTV » et installez-le",
      "Notez l'adresse MAC affichée dans l'application",
      "Connectez-vous sur siptv.eu depuis votre ordinateur",
      "Entrez l'adresse MAC et l'URL M3U de Stream Bleu",
      "Redémarrez Smart IPTV — vos chaînes apparaissent",
    ],
  },
  {
    brand: "Android TV / Google TV",
    icon: "🤖",
    system: "Android TV",
    app: "TiviMate",
    steps: [
      "Ouvrez le Google Play Store sur votre Android TV",
      "Recherchez « TiviMate IPTV Player » et installez-le",
      "Ouvrez TiviMate → Ajouter une playlist",
      "Choisissez « Xtream Codes » ou « URL M3U »",
      "Entrez les identifiants fournis par Stream Bleu",
      "TiviMate charge vos chaînes et l'EPG automatiquement",
    ],
  },
  {
    brand: "Amazon Fire TV Stick",
    icon: "🔥",
    system: "Fire OS",
    app: "IPTV Smarters Pro",
    steps: [
      "Activez les sources inconnues dans Paramètres → Ma Fire TV → Options développeur",
      "Installez Downloader depuis l'Appstore Amazon",
      "Utilisez Downloader pour télécharger IPTV Smarters Pro",
      "Ouvrez IPTV Smarters → Ajouter un compte",
      "Entrez vos identifiants Stream Bleu",
      "Profitez de la 4K Ultra HD sur votre téléviseur",
    ],
  },
];

export default function CommentInstallerIPTVSmartTV() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ color: "#1a1a4e", minHeight: "100vh" }}>

        <section style={{ background: "linear-gradient(135deg, #5a5fcf, #7b87e8)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, textDecoration: "none" }}>Blog</Link>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>→</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>Installer IPTV Smart TV</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4.5vw, 50px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Comment Installer IPTV<br />
              <span style={{ color: "#f5a623" }}>sur Smart TV en 2026</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.7, maxWidth: 680 }}>
              Guide complet, étape par étape, pour installer un service IPTV sur Samsung, LG, Sony, Android TV et Amazon Fire Stick. Installation en moins de 10 minutes.
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginTop: 20 }}>Mis à jour le 1 mai 2026 · 12 min de lecture</p>
          </div>
        </section>

        <article style={{ maxWidth: 820, margin: "0 auto", padding: "60px 16px" }}>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#5a5fcf", marginBottom: 16 }}>Avant de commencer : ce dont vous avez besoin</h2>
            <div style={{ background: "rgba(90,95,207,0.05)", borderRadius: 16, padding: "20px 24px", border: "1px solid rgba(90,95,207,0.12)", marginBottom: 20 }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Un abonnement IPTV actif (Stream Bleu — essai gratuit 24h disponible)",
                  "Vos identifiants Xtream Codes ou votre URL M3U (envoyés par email sous 30 min)",
                  "Une Smart TV connectée à internet (WiFi ou câble Ethernet)",
                  "Une connexion internet d'au moins 10 Mbps pour la HD, 25 Mbps pour la 4K",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 14, color: "#333", marginBottom: 10, display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#5a5fcf", fontWeight: 700, fontSize: 16, flexShrink: 0 }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {tvGuides.map((guide, gIdx) => (
            <section key={guide.brand} style={{ marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <span style={{ fontSize: 36 }}>{guide.icon}</span>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: "#5a5fcf", margin: 0 }}>{guide.brand}</h2>
                  <p style={{ color: "#666", fontSize: 13, margin: 0 }}>Système : {guide.system} · Application recommandée : {guide.app}</p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {guide.steps.map((step, sIdx) => (
                  <div key={sIdx} style={{ display: "flex", gap: 16, alignItems: "flex-start", background: sIdx % 2 === 0 ? "rgba(90,95,207,0.04)" : "#fff", borderRadius: 12, padding: "14px 18px", border: "1px solid rgba(90,95,207,0.1)" }}>
                    <span style={{ background: "#5a5fcf", color: "#fff", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{sIdx + 1}</span>
                    <p style={{ color: "#333", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{step}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#5a5fcf", marginBottom: 20 }}>Questions fréquentes</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqSchema.mainEntity.map((f, i) => (
                <div key={i} style={{ background: "rgba(90,95,207,0.04)", border: "1px solid rgba(90,95,207,0.12)", borderRadius: 14, padding: "20px 24px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 8 }}>{f.name}</h3>
                  <p style={{ color: "#333", fontSize: 14, lineHeight: 1.7 }}>{f.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ background: "#5a5fcf", borderRadius: 20, padding: "36px 32px", textAlign: "center" }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#fff", marginBottom: 12 }}>
              Prêt à installer Stream Bleu sur votre Smart TV ?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, lineHeight: 1.7, marginBottom: 28, maxWidth: 560, margin: "0 auto 28px" }}>
              Essai gratuit 24h. Recevez vos identifiants en moins de 30 minutes. Support 24/7 pour vous aider à l'installation.
            </p>
            <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
              Commencer l'essai gratuit →
            </Link>
          </section>

          <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/blog" style={{ color: "#7b87e8", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Retour au blog</Link>
            <Link href="/iptv-smart-tv-france" style={{ color: "#7b87e8", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>IPTV Smart TV France →</Link>
            <Link href="/iptv-firestick-france" style={{ color: "#7b87e8", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>IPTV Firestick France →</Link>
          </div>
        </article>
      </main>
    </>
  );
}
