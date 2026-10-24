import type { Metadata } from "next";
import Link from "next/link";
import Prose, { type ProseSection } from "@/components/seo/Prose";

export const metadata: Metadata = {
  title: { absolute: "IPTV Français 2026 — Chaînes Françaises en 4K | Stream Bleu" },
  description: "IPTV français : chaînes françaises en 4K, TF1, France 2, M6, Canal+, beIN Sports, RMC Sport, guide TV et support en français. Essai gratuit 24h.",
  keywords: "iptv francais, french iptv, iptv en français, chaînes françaises iptv, iptv france français",
  alternates: { canonical: "https://streambleu.fr/iptv-francais", languages: { "fr-FR": "https://streambleu.fr/iptv-francais", "x-default": "https://streambleu.fr/iptv-francais" } },
  openGraph: {
    title: "IPTV Français 2026 — Chaînes Françaises en 4K | Stream Bleu",
    description: "IPTV Français : toutes les chaînes françaises en 4K Ultra HD. Support en français 24/7.",
    url: "https://streambleu.fr/iptv-francais", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "IPTV Français Stream Bleu" }],
  },
};

const frenchChannelGroups = [
  { group: "🇫🇷 TNT Généraliste", channels: ["TF1 4K", "France 2 4K", "France 3", "France 4", "France 5", "M6 4K", "Arte 4K", "W9", "TMC", "TFX", "6ter", "C Star"] },
  { group: "📰 Info & Actualités", channels: ["BFM TV 4K", "CNews", "LCI", "BFM Business", "France 24", "Public Sénat", "LCP Assemblée", "CNEWS", "Europe 1 TV"] },
  { group: "⚽ Sport Premium", channels: ["beIN Sports 1", "beIN Sports 2", "beIN Sports 3", "RMC Sport 1", "RMC Sport 2", "Canal+ Sport", "Eurosport 1", "Eurosport 2", "L'Équipe TV"] },
  { group: "🎬 Canal+ & Cinéma", channels: ["Canal+ 4K", "Canal+ Cinéma", "Canal+ Séries", "Canal+ Docs", "Ciné+ Premier", "Ciné+ Club", "Ciné+ Émotion"] },
  { group: "👨‍👩‍👧 Famille & Divertissement", channels: ["Gulli", "TFou Max", "Piwi+", "Tiji", "J-One", "Game One", "Comédie+", "Paris Première", "Teva"] },
];

const faqItems = [
  { q: "Quelles sont les chaînes françaises disponibles en IPTV ?", a: "Stream Bleu propose toutes les chaînes françaises disponibles : TF1, France 2, France 3 (avec les déclinaisons régionales), M6, Arte, Canal+, beIN Sports 1/2/3, RMC Sport 1/2, BFM TV, CNews, LCI, et bien plus encore. Plus de 180 chaînes françaises au total." },
  { q: "Le service IPTV français fonctionne-t-il en dehors de France ?", a: "Oui. Stream Bleu fonctionne dans toute l'Europe et dans le monde entier. Les expatriés français peuvent regarder leurs chaînes françaises préférées depuis n'importe où grâce à notre service IPTV." },
  { q: "Les chaînes françaises sont-elles en direct ou en décalé ?", a: "Toutes les chaînes françaises Stream Bleu sont diffusées en direct (live). De plus, les principales chaînes proposent 7 jours de TV de rattrapage (catch-up) pour regarder les émissions manquées." },
  { q: "Y a-t-il un IPTV français qui fonctionne sans VPN ?", a: "Oui. Stream Bleu fonctionne sans VPN depuis la France et depuis l'étranger. Notre infrastructure est optimisée pour une diffusion directe sans nécessiter de services supplémentaires." },
];

const proseSections: ProseSection[] = [
  {
    "h2": "Qu'est-ce qu'un IPTV français ?",
    "paras": [
      "Un **IPTV français** est un service IPTV construit autour d'un public francophone : chaînes françaises en tête de liste, guide des programmes en français, site, facturation en euros et support dans votre langue. La technologie est la même que celle de tout service IPTV ; ce qui change, c'est l'organisation du catalogue et l'accompagnement.",
      "Chez Stream Bleu, les chaînes françaises sont regroupées dans des catégories dédiées (généralistes, info, sport, jeunesse, cinéma), ce qui évite de chercher TF1 ou France 2 parmi des milliers de chaînes étrangères. La [liste des chaînes](/liste-chaines) détaille le contenu par catégorie."
    ]
  },
  {
    "h2": "Régler votre application en français",
    "list": [
      "**Langue de l'interface** : dans [IPTV Smarters Pro](/iptv-smarters-pro) et [TiviMate](/tivimate), choisissez le français dans les paramètres, rubrique Langue.",
      "**Fuseau horaire du guide TV** : réglez l'EPG sur Europe/Paris, sinon les programmes s'affichent avec une ou deux heures de décalage.",
      "**Audio et sous-titres** : sur les films et séries, le choix de la piste se fait pendant la lecture, dans le menu audio du lecteur.",
      "**Favoris** : ajoutez vos chaînes françaises habituelles en favoris pour les retrouver en un clic."
    ]
  },
  {
    "h2": "IPTV français en Belgique et en Suisse",
    "paras": [
      "L'abonnement fonctionne de la même façon pour les francophones de Belgique et de Suisse : mêmes applications, mêmes identifiants, même grille tarifaire en euros. Le fuseau horaire est le même qu'en France, ce qui simplifie le guide TV.",
      "En Suisse, pensez aux frais d'itinérance mobile si vous regardez sur smartphone avec une carte SIM française : privilégiez le Wi-Fi."
    ]
  },
  {
    "h2": "Tarifs de l'IPTV français",
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
    },
    "paras": [
      "Testez d'abord gratuitement pendant 24h avec l'[essai gratuit](/essai-gratuit), puis choisissez votre durée sur la page [tarifs](/tarifs)."
    ]
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
    {"@type": "ListItem", "position": 2, "name": "IPTV Français 2026 — Chaînes Françaises en 4K", "item": "https://streambleu.fr/iptv-francais"}
  ]
};
export default function IptvFrancaisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ color: "#1a1a4e", minHeight: "100vh" }}>

        <section style={{ background: "linear-gradient(135deg,#4a4fc0 0%,#5a5fcf 100%)", padding: "80px 16px 60px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 24 }}>
              🇫🇷 IPTV 100% Français
            </span>
            <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
              IPTV Français 2026 —<br /><span style={{ color: "#c5bcf5" }}>Toutes les Chaînes Françaises en 4K</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>
              Un service IPTV pensé pour les francophones. 180+ chaînes françaises en 4K Ultra HD — TF1, France 2, Canal+, beIN Sports — avec un support client entièrement en français, 7j/7.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit 24h</Link>
              <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#1a1a4e", marginBottom: 12 }}>
              180+ Chaînes françaises organisées par catégorie
            </h2>
            <p style={{ textAlign: "center", color: "#555", fontSize: 15, maxWidth: 540, margin: "0 auto 44px" }}>
              Toutes les chaînes de la télévision française — TNT, câble, satellite — incluses dans chaque abonnement IPTV.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {frenchChannelGroups.map(group => (
                <div key={group.group} style={{ background: "#fff", borderRadius: 16, padding: "22px 24px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 14px rgba(90,95,207,0.06)" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 14 }}>{group.group}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {group.channels.map(ch => (
                      <span key={ch} style={{ background: "rgba(90,95,207,0.07)", borderRadius: 999, padding: "4px 12px", fontSize: 12, fontWeight: 600, color: "#5a5fcf" }}>{ch}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link href="/liste-chaines" style={{ display: "inline-block", background: "#5a5fcf", color: "#fff", fontWeight: 700, padding: "12px 28px", borderRadius: 12, textDecoration: "none" }}>Voir toutes les chaînes françaises →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 16px", background: "rgba(90,95,207,0.04)" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#1a1a4e", marginBottom: 36 }}>
              Un service IPTV entièrement conçu pour les Français
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
              {[
                { icon: "🇫🇷", title: "Interface en français", desc: "Site, support, facturation — tout est en français. Pas de traduction approximative, pas de support étranger." },
                { icon: "📡", title: "Guide TV à l'heure française", desc: "Programme des chaînes (EPG) affiché en français, calé sur le fuseau Europe/Paris une fois l'application réglée." },
                { icon: "💬", title: "Support WhatsApp en français", desc: "Réponse rapide via WhatsApp, en français. Notre équipe connaît les appareils populaires en France." },
                { icon: "💳", title: "Paiement en euros", desc: "Paiement par carte bancaire ou PayPal en euros, sans conversion de devises ni frais cachés." },
              ].map(item => (
                <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "22px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 14px rgba(90,95,207,0.05)" }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: "#555", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Prose sections={proseSections} />


        <section style={{ padding: "64px 16px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "#4a4fc0", borderRadius: 24, padding: "40px 36px", boxShadow: "0 8px 32px rgba(90,95,207,0.2)" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: 32, textAlign: "center" }}>Questions sur l&apos;IPTV Français</h2>
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
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>Regardez la TV française en 4K dès aujourd&apos;hui</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 28, fontSize: 15 }}>Essai gratuit 24h • 180+ chaînes françaises • Sans carte bancaire</p>
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
              {[{l:"/iptv-france",t:"IPTV France"},{l:"/abonnement-iptv",t:"Abonnement IPTV"},{l:"/iptv-premium",t:"IPTV Premium"},{l:"/meilleur-iptv-france",t:"Meilleur IPTV France"},{l:"/liste-chaines",t:"Chaînes IPTV"},{l:"/iptv-paris",t:"IPTV Paris"},{l:"/tarifs",t:"Nos Tarifs"},{l:"/iptv-belgique",t:"IPTV Belgique"},{l:"/iptv-suisse",t:"IPTV Suisse"},{l:"/acheter-abonnement-iptv",t:"Acheter un abonnement IPTV"}].map(x => (
                <Link key={x.l} href={x.l} style={{ background: "rgba(90,95,207,0.08)", border: "1px solid rgba(90,95,207,0.2)", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" }}>{x.t}</Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
