import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meilleur Lecteur IPTV France 2026 — TiviMate, Smarters, VLC | Stream Bleu",
  description: "Quel est le meilleur lecteur IPTV en France ? Comparatif TiviMate vs IPTV Smarters Pro vs VLC vs Perfect Player. Guide complet pour chaque appareil en 2026.",
  keywords: "meilleur lecteur iptv france, tivimate france, iptv smarters pro france, lecteur iptv android, lecteur iptv smart tv france",
  alternates: { canonical: "https://streambleu.fr/blog/meilleur-lecteur-iptv-france" },
  openGraph: {
    title: "Meilleur Lecteur IPTV France 2026 — TiviMate, Smarters, VLC | Stream Bleu",
    description: "Comparatif TiviMate vs IPTV Smarters Pro vs VLC vs Perfect Player pour la France en 2026.",
    url: "https://streambleu.fr/blog/meilleur-lecteur-iptv-france", type: "article", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Meilleur Lecteur IPTV France 2026" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Meilleur Lecteur IPTV France 2026 — Comparatif Complet",
  description: "Comparatif des meilleurs lecteurs IPTV disponibles en France : TiviMate, IPTV Smarters Pro, VLC, Perfect Player.",
  datePublished: "2026-02-20", dateModified: "2026-05-01",
  author: { "@type": "Organization", name: "Stream Bleu", url: "https://streambleu.fr" },
  publisher: { "@type": "Organization", name: "Stream Bleu", url: "https://streambleu.fr", logo: { "@type": "ImageObject", url: "https://streambleu.fr/favicon.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://streambleu.fr/blog/meilleur-lecteur-iptv-france" },
  image: { "@type": "ImageObject", url: "https://streambleu.fr/abonnement-iptv-france-1.jpg", width: 800, height: 533 },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Stream Bleu", item: "https://streambleu.fr" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://streambleu.fr/blog" },
    { "@type": "ListItem", position: 3, name: "Meilleur Lecteur IPTV France 2026", item: "https://streambleu.fr/blog/meilleur-lecteur-iptv-france" },
  ],
};

const faqItems = [
  { q: "TiviMate est-il le meilleur lecteur IPTV ?", a: "TiviMate est le meilleur lecteur IPTV pour les appareils Android TV (Fire Stick 4K, Nvidia Shield, Chromecast avec Google TV, Mi Box). Son interface est la plus proche d'une TV classique, son EPG est le plus complet, et son support H.265 est optimal. La version premium à 5€ est indispensable pour les enregistrements et les connexions multiples." },
  { q: "IPTV Smarters Pro est-il gratuit ?", a: "Oui. IPTV Smarters Pro est entièrement gratuit sur Android, iOS, Samsung Smart TV et LG Smart TV. Il n'y a aucun achat intégré requis pour utiliser les fonctionnalités de base. C'est pourquoi c'est la recommandation principale pour les Smart TV qui ne supportent pas TiviMate." },
  { q: "VLC peut-il lire les flux IPTV ?", a: "Oui, mais avec limitations. VLC lit les fichiers M3U et les flux IPTV, mais son interface n'est pas optimisée pour l'IPTV : pas d'EPG intégré, pas de guide de programmes, navigation difficile entre 50 000 chaînes. Il est acceptable pour un usage occasionnel ou un test rapide, mais ne remplace pas TiviMate ou IPTV Smarters au quotidien." },
  { q: "Quel lecteur IPTV choisir pour Samsung Smart TV ?", a: "Pour Samsung Smart TV (Tizen), IPTV Smarters Pro est la meilleure option, disponible directement dans le Samsung App Store. Smart IPTV est également très populaire mais nécessite une activation sur le site siptv.eu. Les deux sont compatibles avec Stream Bleu via URL M3U ou Xtream Codes." },
  { q: "Mon lecteur IPTV peut-il enregistrer des émissions ?", a: "TiviMate Premium (5€) permet d'enregistrer sur une clé USB ou un disque dur externe connecté à votre appareil Android TV. Cette fonctionnalité n'est pas disponible sur IPTV Smarters Pro. Pour les Smart TV Samsung et LG, l'enregistrement via IPTV n'est pas supporté nativement." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const players = [
  {
    name: "TiviMate",
    score: "9,5/10",
    platform: "Android TV / Fire TV",
    price: "Gratuit + 5€ Premium",
    best_for: "Fire Stick 4K, Nvidia Shield, Chromecast Google TV",
    pros: ["Interface TV la plus intuitive", "EPG complet sur 7 jours", "Enregistrement (Premium)", "Décodage H.265 matériel", "Multi-connexions (Premium)", "Catch-up TV"],
    cons: ["Android TV uniquement", "Premium requis pour toutes les fonctions", "Pas sur Samsung/LG natif"],
    verdict: "Meilleur choix absolu pour Android TV",
    color: "#1a7a4a",
  },
  {
    name: "IPTV Smarters Pro",
    score: "9,0/10",
    platform: "Toutes plateformes",
    price: "Gratuit",
    best_for: "Samsung Smart TV, LG Smart TV, iOS, Android",
    pros: ["Compatible toutes plateformes", "Entièrement gratuit", "Xtream Codes natif", "Interface multi-écrans", "Gestion des profils"],
    cons: ["Interface moins raffinée que TiviMate", "EPG parfois moins précis", "Pas d'enregistrement"],
    verdict: "Meilleur choix universel, surtout Smart TV",
    color: "#1a7a4a",
  },
  {
    name: "Perfect Player",
    score: "8,2/10",
    platform: "Android",
    price: "Gratuit",
    best_for: "Android TV, appareils bas de gamme",
    pros: ["Très léger sur les ressources", "Compatible appareils anciens", "Gratuit complet", "Personnalisable"],
    cons: ["Interface datée", "Pas d'Xtream Codes natif", "EPG basique", "Moins de support actif"],
    verdict: "Bon choix pour appareils anciens ou bas de gamme",
    color: "#5a5fcf",
  },
  {
    name: "VLC Media Player",
    score: "6,5/10",
    platform: "Windows, macOS, Android, iOS",
    price: "Gratuit open-source",
    best_for: "Test ponctuel, lecture M3U simple",
    pros: ["Disponible partout", "Entièrement gratuit et open source", "Supporte tous les formats", "Pas d'inscription"],
    cons: ["Aucun EPG", "Navigation très difficile avec 50 000 chaînes", "Pas optimisé IPTV", "Aucune gestion de favoris"],
    verdict: "Dépannage uniquement, pas pour usage quotidien",
    color: "#c0392b",
  },
];

const byDevice: { device: string; icon: string; recommended: string; alt: string; note: string }[] = [
  { device: "Amazon Fire TV Stick 4K", icon: "🔥", recommended: "TiviMate Premium", alt: "IPTV Smarters Pro", note: "TiviMate donne les meilleures performances avec le décodage H.265 matériel du Fire Stick 4K Max." },
  { device: "Samsung Smart TV (Tizen)", icon: "📺", recommended: "IPTV Smarters Pro", alt: "Smart IPTV", note: "Disponible directement dans le Samsung App Store. Configuration Xtream Codes en 2 minutes." },
  { device: "LG Smart TV (webOS)", icon: "📺", recommended: "Smart IPTV", alt: "IPTV Smarters Pro", note: "Smart IPTV est mieux intégré sur webOS. Activation via siptv.eu avec l'adresse MAC de votre TV." },
  { device: "Nvidia Shield Pro", icon: "🎮", recommended: "TiviMate Premium", alt: "Perfect Player", note: "L'appareil Android TV le plus puissant — TiviMate y est à son maximum, avec enregistrement 4K possible." },
  { device: "iPhone / iPad (iOS)", icon: "🍎", recommended: "IPTV Smarters Pro", alt: "GSE Smart IPTV", note: "IPTV Smarters Pro est disponible sur l'App Store. GSE Smart IPTV est une bonne alternative gratuite." },
  { device: "Android (smartphone/tablette)", icon: "🤖", recommended: "TiviMate (si Android TV)", alt: "IPTV Smarters Pro", note: "Pour les tablettes, IPTV Smarters offre une meilleure interface. TiviMate est exclusif à Android TV." },
  { device: "Windows (PC/laptop)", icon: "💻", recommended: "IPTV Smarters Pro", alt: "TiviMate (via BlueStacks)", note: "La version Windows d'IPTV Smarters Pro existe. Alternativement, un émulateur Android comme BlueStacks permet TiviMate." },
  { device: "Apple TV 4K", icon: "🍎", recommended: "IPTV Smarters Pro", alt: "iPlayTV", note: "Disponible sur l'App Store Apple TV. iPlayTV est une alternative bien notée spécifiquement pour tvOS." },
];

const S = { fontSize: 15, lineHeight: 1.8, color: "#333", marginBottom: 16 } as const;
const H2 = { fontSize: 24, fontWeight: 800, color: "#5a5fcf", marginBottom: 16, marginTop: 48 } as const;

export default function MeilleurLecteurIPTV() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ color: "#1a1a4e", minHeight: "100vh" }}>

        <section style={{ background: "linear-gradient(135deg,#4a4fc0,#5a5fcf)", padding: "70px 16px 50px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, textDecoration: "none" }}>Blog</Link>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>→</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>Meilleur Lecteur IPTV France 2026</span>
            </div>
            <h1 style={{ fontSize: "clamp(26px,4.5vw,48px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 18 }}>
              Meilleur Lecteur IPTV France 2026 :<br />TiviMate, Smarters Pro, VLC Comparés
            </h1>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 16, lineHeight: 1.7, maxWidth: 680 }}>
              Comparatif complet des meilleurs lecteurs IPTV disponibles en France : TiviMate vs IPTV Smarters Pro vs Perfect Player vs VLC, avec la recommandation par appareil.
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginTop: 18 }}>Mis à jour le 1 mai 2026 · 10 min de lecture</p>
          </div>
        </section>

        <article style={{ maxWidth: 820, margin: "0 auto", padding: "60px 16px" }}>

          <p style={S}>Le lecteur IPTV est l'application qui lit les flux fournis par votre abonnement (comme Stream Bleu). Le service IPTV fournit les chaînes, le lecteur les affiche. Choisir le bon lecteur est aussi important que choisir le bon service — un excellent service IPTV avec un mauvais lecteur donne une mauvaise expérience.</p>
          <p style={S}>Ce guide compare les 4 lecteurs IPTV les plus utilisés en France, explique leurs forces et faiblesses, et vous recommande le meilleur pour votre appareil spécifique.</p>

          <h2 style={H2}>Comparatif détaillé des 4 meilleurs lecteurs IPTV</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
            {players.map((p, pi) => (
              <div key={p.name} style={{ background: "#fff", border: `2px solid ${pi === 0 ? "#5a5fcf" : "rgba(90,95,207,0.12)"}`, borderRadius: 18, padding: "26px 26px", position: "relative" as const }}>
                {pi === 0 && <div style={{ position: "absolute" as const, top: -12, left: 24, background: "#5a5fcf", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 999 }}>⭐ MEILLEUR CHOIX</div>}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap" as const, gap: 10 }}>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 900, color: "#5a5fcf", margin: 0 }}>{p.name}</h3>
                    <p style={{ fontSize: 13, color: "#777", margin: "4px 0 0" }}>Plateformes : {p.platform} · Prix : {p.price}</p>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: p.color }}>{p.score}</div>
                </div>
                <p style={{ fontSize: 13, color: "#555", marginBottom: 14 }}><strong style={{ color: "#333" }}>Idéal pour :</strong> {p.best_for}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div style={{ background: "rgba(26,122,74,0.05)", borderRadius: 10, padding: "14px" }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#1a7a4a", marginBottom: 8 }}>Points forts</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {p.pros.map((item, i) => <li key={i} style={{ fontSize: 13, color: "#333", marginBottom: 5, display: "flex", gap: 6 }}><span style={{ color: "#1a7a4a" }}>✓</span>{item}</li>)}
                    </ul>
                  </div>
                  <div style={{ background: "rgba(192,57,43,0.04)", borderRadius: 10, padding: "14px" }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#c0392b", marginBottom: 8 }}>Limitations</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {p.cons.map((item, i) => <li key={i} style={{ fontSize: 13, color: "#333", marginBottom: 5, display: "flex", gap: 6 }}><span style={{ color: "#c0392b" }}>✗</span>{item}</li>)}
                    </ul>
                  </div>
                </div>
                <div style={{ background: "rgba(90,95,207,0.07)", borderRadius: 10, padding: "10px 14px" }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#5a5fcf" }}>Verdict : </span>
                  <span style={{ fontSize: 13, color: "#333" }}>{p.verdict}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 style={H2}>Recommandation par appareil</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
            {byDevice.map((d, i) => (
              <div key={i} style={{ display: "flex", gap: 16, background: "#fff", borderRadius: 14, padding: "16px 20px", border: "1px solid rgba(90,95,207,0.1)" }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{d.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" as const, marginBottom: 6 }}>
                    <h3 style={{ fontWeight: 700, fontSize: 14, color: "#1a1a4e", margin: 0 }}>{d.device}</h3>
                    <span style={{ background: "rgba(90,95,207,0.1)", color: "#5a5fcf", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999 }}>→ {d.recommended}</span>
                    <span style={{ fontSize: 11, color: "#999" }}>alt: {d.alt}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6, margin: 0 }}>{d.note}</p>
                </div>
              </div>
            ))}
          </div>

          <section style={{ marginBottom: 48 }}>
            <h2 style={H2}>Questions fréquentes — Lecteurs IPTV France</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {faqItems.map((f, i) => (
                <div key={i} style={{ background: "rgba(90,95,207,0.04)", border: "1px solid rgba(90,95,207,0.11)", borderRadius: 14, padding: "20px 24px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 8 }}>{f.q}</h3>
                  <p style={{ color: "#333", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ background: "#5a5fcf", borderRadius: 20, padding: "36px 32px", textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#fff", marginBottom: 12 }}>Testez Stream Bleu avec TiviMate ou Smarters Pro</h2>
            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 15, lineHeight: 1.7, marginBottom: 28, maxWidth: 500, margin: "0 auto 28px" }}>
              Essai 24h gratuit · Compatible tous lecteurs · Identifiants Xtream Codes inclus
            </p>
            <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
              Essai Gratuit 24h →
            </Link>
          </section>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/blog" style={{ color: "#7b87e8", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Blog</Link>
            <Link href="/blog/comment-installer-iptv-smart-tv" style={{ color: "#7b87e8", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>Installer IPTV Smart TV →</Link>
            <Link href="/iptv-firestick-france" style={{ color: "#7b87e8", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>IPTV Firestick →</Link>
          </div>
        </article>
      </main>
    </>
  );
}
