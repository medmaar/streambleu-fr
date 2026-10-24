import type { Metadata } from "next";
import Link from "next/link";
import Prose, { type ProseSection } from "@/components/seo/Prose";

export const metadata: Metadata = {
  title: { absolute: "IPTV Premium France 2026 — 4K H.265 HDR10 | Stream Bleu" },
  description: "IPTV premium en France : 4K Ultra HD H.265/HEVC, HDR10 et Dolby Vision, 50 000+ chaînes, serveurs redondants. Dès 9 €, essai gratuit 24h.",
  keywords: "iptv premium, iptv premium france, service iptv premium, iptv premium 4k, abonnement iptv premium, premium iptv, premium iptv tv, abonnements iptv premium",
  alternates: { canonical: "https://streambleu.fr/iptv-premium", languages: { "fr-FR": "https://streambleu.fr/iptv-premium", "x-default": "https://streambleu.fr/iptv-premium" } },
  openGraph: {
    title: "IPTV Premium France 2026 — 4K H.265 HDR10 | Stream Bleu",
    description: "IPTV Premium France : 4K Ultra HD, H.265/HEVC, HDR10 & Dolby Vision. 50 000+ chaînes sans coupure.",
    url: "https://streambleu.fr/iptv-premium", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "IPTV Premium France Stream Bleu" }],
  },
};

const premiumFeatures = [
  { icon: "🎬", title: "4K Ultra HD H.265/HEVC", desc: "Encodage H.265 (HEVC) pour une qualité d'image maximale à débits réduits. La même netteté qu'un Blu-ray 4K en streaming." },
  { icon: "🌈", title: "HDR10 & Dolby Vision", desc: "Support complet de l'HDR10 et du Dolby Vision pour des couleurs, contrastes et luminosité exceptionnels sur vos écrans compatibles." },
  { icon: "⚡", title: "Serveurs redondants", desc: "Infrastructure avec redondance et basculement automatique pour limiter les interruptions lors des grands événements." },
  { icon: "🏆", title: "Sport Premium Inclus", desc: "beIN Sports 1/2/3, RMC Sport 1/2, Canal+ Sport, Eurosport 1/2 — tous les matchs Ligue 1, Champions League, Top 14, Roland-Garros." },
  { icon: "🎭", title: "300 000+ VOD 4K", desc: "Bibliothèque complète de films et séries en 4K Ultra HD. Contenu récent et classique, mis à jour en continu." },
  { icon: "📱", title: "Multi-Appareils Premium", desc: "Jusqu'à 10 connexions simultanées en 4K. Smart TV, Firestick, Android TV, Apple TV, MAG Box — tous compatibles." },
];

const faqItems = [
  { q: "Qu'est-ce qui différencie un IPTV premium d'un IPTV classique ?", a: "Un service IPTV premium comme Stream Bleu offre une qualité 4K Ultra HD H.265/HEVC, des serveurs redondants pour limiter les coupures, un support HDR10 & Dolby Vision, un guide des programmes EPG complet et un support client réactif 24/7. Comparez ces points pendant un essai plutôt que sur une promesse commerciale." },
  { q: "L'IPTV premium de Stream Bleu fonctionne-t-il sur toutes les Smart TV ?", a: "Oui. Stream Bleu est compatible avec Samsung (Tizen), LG (webOS), Philips (Android TV), Sony (Google TV) et tous les systèmes Smart TV via des applications IPTV. Nous fournissons des guides d'installation personnalisés." },
  { q: "Comment limitez-vous les coupures ?", a: "Notre infrastructure utilise des serveurs premium avec CDN distribué et basculement automatique. En cas de problème sur un serveur, la lecture bascule automatiquement sur un serveur de secours, ce qui limite la durée des coupures sans pouvoir les exclure totalement." },
  { q: "Le service IPTV premium inclut-il la TV de rattrapage ?", a: "Oui. Stream Bleu inclut 7 jours de TV de rattrapage (catch-up) sur les principales chaînes françaises. Regardez vos émissions manquées à tout moment." },
  { q: "IPTV premium et abonnement IPTV premium : quelle différence de prix ?", a: "Aucune chez Stream Bleu : la qualité premium (4K, HDR10, serveurs anti-coupure, support prioritaire) est incluse dans tous les abonnements IPTV premium, sans supplément caché. Voir le détail sur notre page Prix IPTV." },
];

const proseSections: ProseSection[] = [
  {
    "h2": "Ce que « premium » veut dire concrètement",
    "paras": [
      "Le mot **IPTV premium** est utilisé par beaucoup de services sans définition précise. Chez Stream Bleu, il recouvre trois éléments vérifiables chez vous pendant l'essai gratuit : des flux 4K encodés en H.265/HEVC, un catalogue VOD inclus dans tous les forfaits, et une infrastructure avec basculement automatique entre serveurs.",
      "Le H.265 compresse environ deux fois mieux que l'ancien H.264 : à qualité égale, un flux 4K demande donc moins de débit, autour de 25 Mbps stables. C'est ce qui rend la 4K regardable sur la plupart des connexions fibre et VDSL françaises. Pour aller plus loin, lisez notre guide [IPTV 4K](/blog/iptv-4k-france)."
    ]
  },
  {
    "h2": "Le matériel nécessaire pour la 4K et le HDR",
    "paras": [
      "La 4K et le HDR ne s'affichent que si toute la chaîne est compatible : la TV, l'appareil qui lit le flux et l'application."
    ],
    "table": {
      "head": [
        "Appareil",
        "4K",
        "Décodage H.265",
        "HDR"
      ],
      "rows": [
        [
          "[Fire TV Stick 4K](/iptv-firestick-france)",
          "Oui",
          "Oui",
          "HDR10, Dolby Vision selon modèle"
        ],
        [
          "[Apple TV 4K](/iptv-apple-tv-france)",
          "Oui",
          "Oui",
          "HDR10, Dolby Vision"
        ],
        [
          "[Smart TV Samsung / LG](/iptv-smart-tv-france) 4K",
          "Oui",
          "Oui",
          "Selon le modèle de TV"
        ],
        [
          "Fire TV Stick (non 4K)",
          "Non (1080p)",
          "Oui",
          "Non"
        ],
        [
          "[Box Android](/boitier-iptv) d'entrée de gamme",
          "Variable",
          "Variable",
          "Rarement"
        ]
      ],
      "caption": "Vérifiez la fiche technique de votre appareil : la mention HEVC/H.265 est indispensable pour la 4K IPTV."
    }
  },
  {
    "h2": "Débit et réglages pour une image premium",
    "list": [
      "Environ **25 Mbps stables par écran 4K**, 10 Mbps en HD : mesurez le soir, au moment où vous regardez.",
      "Préférez un **câble Ethernet** ou le Wi-Fi 5 GHz : voir [Wi-Fi ou Ethernet pour l'IPTV](/blog/iptv-wifi-ou-ethernet).",
      "Dans [TiviMate](/tivimate) ou [IPTV Smarters Pro](/iptv-smarters-pro), activez le décodage matériel et augmentez la mémoire tampon si l'image saccade.",
      "Plusieurs TV en 4K en même temps : additionnez les débits et choisissez un forfait multi-écrans sur la page [tarifs](/tarifs)."
    ]
  },
  {
    "h2": "Prix de l'IPTV premium",
    "paras": [
      "La qualité premium est incluse dans tous les forfaits, sans option payante :"
    ],
    "table": {
      "head": [
        "Durée",
        "1 écran",
        "Prix par mois",
        "2 écrans"
      ],
      "rows": [
        [
          "1 mois",
          "9 €",
          "9 €",
          "18 €"
        ],
        [
          "3 mois",
          "29 €",
          "≈ 9,67 €",
          "50 €"
        ],
        [
          "6 mois",
          "39 €",
          "6,50 €",
          "69 €"
        ],
        [
          "12 mois",
          "49 €",
          "≈ 4,08 €",
          "89 €"
        ]
      ],
      "caption": "Grille officielle en euros TTC, sans engagement ni renouvellement automatique. Jusqu'à 10 écrans sur la page tarifs."
    }
  }
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "IPTV Premium France 2026 — 4K H.265 HDR10", "item": "https://streambleu.fr/iptv-premium"}
  ]
};
export default function IptvPremiumPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ color: "#1a1a4e", minHeight: "100vh" }}>

        <section style={{ background: "linear-gradient(135deg,#4a4fc0 0%,#5a5fcf 100%)", padding: "80px 16px 60px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 24 }}>
              🎬 Service IPTV Premium 4K
            </span>
            <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
              IPTV Premium France —<br /><span style={{ color: "#c5bcf5" }}>4K H.265 · HDR10 · Sans Coupure</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>
              L&apos;IPTV premium selon Stream Bleu : qualité 4K Ultra HD avec encodage H.265/HEVC, HDR10 et Dolby Vision sur les écrans compatibles, et des serveurs redondants pour limiter les coupures.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit 24h</Link>
              <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 16px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#1a1a4e", marginBottom: 12 }}>Les caractéristiques du service IPTV premium</h2>
            <p style={{ textAlign: "center", color: "#555", fontSize: 15, maxWidth: 540, margin: "0 auto 44px" }}>Stream Bleu n&apos;est pas un service IPTV ordinaire. Chaque aspect est pensé pour l&apos;expérience premium.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
              {premiumFeatures.map(f => (
                <div key={f.title} style={{ background: "#fff", borderRadius: 16, padding: "26px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 16px rgba(90,95,207,0.06)" }}>
                  <div style={{ fontSize: 30, marginBottom: 14 }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ color: "#555", fontSize: 14, lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* vs comparison */}
        <section style={{ padding: "64px 16px", background: "rgba(90,95,207,0.04)" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#1a1a4e", marginBottom: 36 }}>IPTV Premium vs Câble vs IPTV Basique</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#5a5fcf" }}>
                    {["Critère","Stream Bleu Premium","Câble/Satellite","IPTV Basique"].map(h => (
                      <th key={h} style={{ padding: "14px 16px", color: h === "Stream Bleu Premium" ? "#f5a623" : "#fff", fontWeight: 700, textAlign: "center" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Résolution max","4K Ultra HD","1080i","1080p"],
                    ["Codec vidéo","H.265/HEVC","MPEG-2/H.264","H.264"],
                    ["HDR10 & Dolby Vision","✅","❌","Rarement"],
                    ["Chaînes","50 000+","150–500","5 000–15 000"],
                    ["Stabilité","Objectif 99,9 %","Variable","Aléatoire"],
                    ["Prix/mois","Dès 4,08 € (12 mois)","30€–60€","5€–15€"],
                    ["Support 24/7","✅ Français","Heures ouvrées","❌"],
                    ["Essai gratuit","✅ 24h sans CB","❌","Rarement"],
                  ].map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "rgba(90,95,207,0.03)" }}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ padding: "12px 16px", textAlign: "center", color: j === 1 ? "#5a5fcf" : "#333", fontWeight: j === 0 ? 600 : j === 1 ? 700 : 400 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Prose sections={proseSections} />


        <section style={{ padding: "64px 16px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "#4a4fc0", borderRadius: 24, padding: "40px 36px", boxShadow: "0 8px 32px rgba(90,95,207,0.2)" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: 32, textAlign: "center" }}>Questions sur l&apos;IPTV Premium</h2>
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
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>Découvrez l&apos;IPTV Premium sans risque</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 28, fontSize: 15 }}>Essai gratuit 24h • Qualité 4K complète • Sans carte bancaire</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, padding: "13px 28px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit</Link>
              <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 700, padding: "13px 28px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "32px 16px 64px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ textAlign: "center", color: "#555", fontSize: 13, marginBottom: 16 }}>Voir aussi :</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {[{l:"/iptv-france",t:"IPTV France"},{l:"/abonnement-iptv",t:"Abonnement IPTV"},{l:"/meilleur-iptv-france",t:"Meilleur IPTV France"},{l:"/liste-chaines",t:"Liste des Chaînes"},{l:"/blog/iptv-sans-coupure",t:"IPTV Sans Coupure"},{l:"/essai-gratuit",t:"Essai Gratuit"},{l:"/prix-iptv",t:"Prix IPTV"},{l:"/blog/iptv-4k-france",t:"IPTV 4K"},{l:"/tarifs",t:"Nos Tarifs"},{l:"/abonnement-iptv-multi-ecrans",t:"Abonnement multi-écrans"},{l:"/abonnement-iptv-smart-tv",t:"Abonnement IPTV Smart TV"}].map(x => (
                <Link key={x.l} href={x.l} style={{ background: "rgba(90,95,207,0.08)", border: "1px solid rgba(90,95,207,0.2)", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" }}>{x.t}</Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
