import type { Metadata } from "next";
import Link from "next/link";
import Prose, { type ProseSection } from "@/components/seo/Prose";

export const metadata: Metadata = {
  title: { absolute: "Abonnement IPTV France 2026 — Dès 9€/mois | Stream Bleu" },
  description: "Abonnement IPTV en France à partir de 9€/mois. 50 000+ chaînes, beIN Sports, Canal+, 4K Ultra HD. Sans engagement, activation instantanée. Essai gratuit.",
  keywords: "abonnement iptv, iptv abonnement, abonnement iptv france, abonnement iptv pas cher, abonnement iptv 4k, abonnementiptv, abonnement ip tv, ip tv abonnement, abonement iptv, iptv abonement, iptv abonnemen, iptv abonnement france",
  alternates: { canonical: "https://streambleu.fr/abonnement-iptv", languages: { "fr-FR": "https://streambleu.fr/abonnement-iptv", "x-default": "https://streambleu.fr/abonnement-iptv" } },
  openGraph: {
    title: "Abonnement IPTV France 2026 — À partir de 9€/mois | Stream Bleu",
    description: "Abonnement IPTV France à partir de 9€/mois. 50 000+ chaînes, 4K Ultra HD, sans engagement.",
    url: "https://streambleu.fr/abonnement-iptv", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Abonnement IPTV France Stream Bleu" }],
  },
};

const plans = [
  { name: "1 Mois", price: "9€", desc: "Idéal pour tester. Accès complet à 50 000+ chaînes.", href: "/tarifs/1-mois", tag: null },
  { name: "3 Mois", price: "29€", desc: "Sans engagement. Parfait pour un usage régulier.", href: "/tarifs/3-mois", tag: "Populaire" },
  { name: "6 Mois", price: "39€", desc: "6,50€/mois. Le meilleur rapport qualité/prix.", href: "/tarifs/6-mois", tag: null },
  { name: "12 Mois", price: "49€", desc: "4,08€/mois. Économisez 55% vs l'abonnement mensuel.", href: "/tarifs/12-mois", tag: "Meilleur Prix" },
];

const faqItems = [
  { q: "Quel est le meilleur abonnement IPTV en France ?", a: "Le meilleur abonnement IPTV est celui qui reste stable sur votre connexion et fonctionne avec votre TV : testez-le 24h avant de payer. Chez Stream Bleu, le forfait 12 mois à 49 € revient à environ 4,08 € par mois pour un écran ; notre guide Meilleur IPTV France détaille la méthode de test." },
  { q: "Quelle est la différence entre un abonnement IPTV France et un abonnement IPTV international ?", a: "Un abonnement IPTV France est pensé pour un public francophone : chaînes françaises, guide TV en français et support en français. Chez Stream Bleu, les tarifs sont les mêmes partout en France : 9 € pour 1 mois, 29 € pour 3 mois, 39 € pour 6 mois et 49 € pour 12 mois." },
  { q: "Comment fonctionne un abonnement IPTV ?", a: "Après votre abonnement, vous recevez vos identifiants par email en moins de 5 minutes. Installez un lecteur IPTV (TiviMate, IPTV Smarters Pro) sur votre appareil, entrez votre URL M3U et commencez à regarder." },
  { q: "L'abonnement IPTV nécessite-t-il un engagement ?", a: "Non. Tous les abonnements Stream Bleu sont sans engagement. Vous choisissez la durée qui vous convient : 1, 3, 6 ou 12 mois, sans renouvellement automatique." },
  { q: "Puis-je essayer avant de m'abonner ?", a: "Oui ! Stream Bleu propose un essai gratuit de 24h sans carte bancaire. Testez la qualité 4K et toutes les chaînes sur votre propre matériel avant de vous décider." },
  { q: "L'abonnement fonctionne-t-il sur plusieurs appareils ?", a: "Chaque abonnement inclut 1 connexion simultanée. Des forfaits multi-connexions (2 à 10 appareils) sont disponibles pour regarder sur plusieurs écrans en même temps." },
  { q: "Abonnement IPTV, IPTV abonnement, abonnement ip tv : est-ce la même chose ?", a: "Oui. Que vous cherchiez « abonnement iptv », « abonnementiptv » en un mot, « ip tv abonnement » ou « abonnement iptv france », il s'agit toujours du même service : un accès aux chaînes en direct et à la VOD via une application IPTV, sans matériel ni décodeur imposé." },
];

const proseSections: ProseSection[] = [
  {
    "h2": "Souscrire un abonnement IPTV en 4 étapes",
    "list": [
      "**Testez** : demandez l'[essai gratuit de 24h](/essai-gratuit), sans carte bancaire, sur l'appareil que vous utiliserez.",
      "**Choisissez** une durée (1, 3, 6 ou 12 mois) et un nombre d'écrans sur la page [tarifs](/tarifs), puis payez par carte bancaire ou PayPal.",
      "**Recevez vos identifiants** par e-mail en quelques minutes : nom d'utilisateur, mot de passe et URL du serveur, ou lien M3U.",
      "**Installez l'application** adaptée à votre appareil ([Smart TV](/iptv-smart-tv-france), [Fire TV Stick](/iptv-firestick-france), [IPTV Smarters Pro](/iptv-smarters-pro)) et saisissez vos identifiants."
    ]
  },
  {
    "h2": "Combien d'écrans prévoir ?",
    "paras": [
      "Un écran correspond à un flux regardé en même temps. Vous pouvez installer l'application sur autant d'appareils que vous voulez ; c'est le nombre de lectures simultanées qui compte. Prix pour 12 mois, extraits de la grille officielle :"
    ],
    "table": {
      "head": [
        "Écrans simultanés",
        "12 mois",
        "Soit par mois",
        "Pour qui"
      ],
      "rows": [
        [
          "1",
          "49 €",
          "≈ 4,08 €",
          "Une TV principale"
        ],
        [
          "2",
          "89 €",
          "≈ 7,42 €",
          "Couple, colocation"
        ],
        [
          "3",
          "135 €",
          "11,25 €",
          "Famille avec une TV enfant"
        ],
        [
          "4",
          "180 €",
          "15 €",
          "Grande famille"
        ],
        [
          "5",
          "225 €",
          "18,75 €",
          "Maison avec plusieurs pièces TV"
        ]
      ],
      "caption": "Grille complète de 1 à 10 écrans et pour 1, 3 et 6 mois sur la page tarifs."
    }
  },
  {
    "h2": "Abonnement IPTV, box opérateur ou « IPTV à vie » ?",
    "paras": [
      "La TV de votre box opérateur est déjà de l'IPTV, mais liée à votre ligne et à un bouquet souvent payant en option ; un abonnement IPTV indépendant fonctionne sur n'importe quelle connexion et n'importe quel appareil. Le détail est sur notre page [IPTV avec Orange, SFR ou Bouygues](/iptv-orange-sfr-bouygues).",
      "Les offres « à vie » promettent un paiement unique, mais un service IPTV a des coûts permanents (serveurs, bande passante) : lisez [pourquoi l'IPTV à vie est un piège](/blog/iptv-a-vie) avant de payer. Pour comparer les prix du marché, consultez notre page [prix IPTV](/prix-iptv)."
    ]
  },
  {
    "h2": "Paiement, engagement et remboursement",
    "list": [
      "Paiement par **carte bancaire ou PayPal**, en euros.",
      "**Aucun engagement** et aucun renouvellement automatique : à l'échéance, vous renouvelez seulement si vous le souhaitez.",
      "Identifiants jamais reçus ou achat en double : consultez notre [politique de remboursement](/politique-remboursement).",
      "Questions avant l'achat : [contactez le support](/contact) en français."
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
    {"@type": "ListItem", "position": 2, "name": "Abonnement IPTV France 2026 — À partir de 9€/mois", "item": "https://streambleu.fr/abonnement-iptv"}
  ]
};
export default function AbonnementIptvPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ color: "#1a1a4e", minHeight: "100vh" }}>

        <section style={{ background: "linear-gradient(135deg,#4a4fc0 0%,#5a5fcf 100%)", padding: "80px 16px 60px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 24 }}>
              🇫🇷 Abonnement IPTV Sans Engagement
            </span>
            <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
              Abonnement IPTV France —<br /><span style={{ color: "#c5bcf5" }}>À partir de 9€/mois</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px" }}>
              Un abonnement IPTV simple pour la France : 50 000+ chaînes, beIN Sports, Canal+, RMC Sport en 4K Ultra HD. Sans engagement, sans carte bancaire pour l&apos;essai.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit 24h</Link>
              <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        {/* Pricing overview */}
        <section style={{ padding: "64px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#1a1a4e", marginBottom: 12 }}>Choisissez votre abonnement IPTV</h2>
            <p style={{ textAlign: "center", color: "#555", fontSize: 15, maxWidth: 500, margin: "0 auto 44px" }}>Tous les abonnements incluent les 50 000+ chaînes, la 4K Ultra HD et le support en français 7j/7.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
              {plans.map((p, i) => (
                <div key={p.name} style={{ background: i === 3 ? "#5a5fcf" : i === 2 ? "#8b92ec" : i === 1 ? "#c5c9f5" : "#fff", borderRadius: 20, padding: "28px 22px", textAlign: "center", border: i < 2 ? "1px solid rgba(90,95,207,0.15)" : "none", position: "relative", boxShadow: i === 3 ? "0 8px 32px rgba(90,95,207,0.3)" : "0 4px 16px rgba(90,95,207,0.08)" }}>
                  {p.tag && <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#f5a623", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 999, whiteSpace: "nowrap" }}>{p.tag}</span>}
                  <div style={{ fontSize: 16, fontWeight: 700, color: i >= 2 ? "#fff" : "#1a1a4e", marginBottom: 6 }}>{p.name}</div>
                  <div style={{ fontSize: 36, fontWeight: 900, color: i >= 2 ? "#fff" : "#5a5fcf", marginBottom: 6 }}>{p.price}</div>
                  <p style={{ fontSize: 13, color: i >= 2 ? "rgba(255,255,255,0.8)" : "#555", marginBottom: 16, lineHeight: 1.5 }}>{p.desc}</p>
                  <Link href={p.href} style={{ display: "block", background: i >= 2 ? "#fff" : "#5a5fcf", color: i >= 2 ? "#5a5fcf" : "#fff", fontWeight: 700, fontSize: 14, padding: "10px 20px", borderRadius: 10, textDecoration: "none" }}>Commencer →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why subscribe */}
        <section style={{ padding: "64px 16px", background: "rgba(90,95,207,0.04)" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#1a1a4e", marginBottom: 16, textAlign: "center" }}>
              Pourquoi souscrire un abonnement IPTV Stream Bleu ?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16, marginTop: 32 }}>
              {[
                { title: "Plus de chaînes qu'un abonnement classique", desc: "Avec 50 000+ chaînes françaises, européennes et internationales, l'abonnement IPTV Stream Bleu dépasse toutes les offres câble/satellite à une fraction du prix." },
                { title: "Qualité 4K supérieure", desc: "Encodage H.265/HEVC pour une qualité d'image maximale. HDR10 & Dolby Vision sur appareils compatibles. La même qualité qu'un Blu-ray 4K en streaming." },
                { title: "Aucun engagement", desc: "Choisissez 1, 3, 6 ou 12 mois selon vos besoins. Pas de renouvellement automatique, pas de frais cachés, résiliation libre." },
                { title: "Support en français", desc: "Notre équipe francophone répond par WhatsApp, Telegram et e-mail, 7j/7. Aide à l'installation sur tous les appareils incluse." },
              ].map(item => (
                <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "22px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 14px rgba(90,95,207,0.06)" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 8 }}>✓ {item.title}</h3>
                  <p style={{ color: "#555", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Prose sections={proseSections} />


        <section style={{ padding: "64px 16px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "#4a4fc0", borderRadius: 24, padding: "40px 36px", boxShadow: "0 8px 32px rgba(90,95,207,0.2)" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: 32, textAlign: "center" }}>FAQ — Abonnement IPTV France</h2>
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
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>Commencez votre abonnement IPTV</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 28, fontSize: 15 }}>Essai gratuit 24h • Sans carte bancaire • Identifiants en 5 min</p>
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
              {[{l:"/iptv-france",t:"IPTV France"},{l:"/iptv-premium",t:"IPTV Premium"},{l:"/meilleur-iptv-france",t:"Meilleur IPTV France"},{l:"/iptv-francais",t:"IPTV Français"},{l:"/tarifs",t:"Nos Tarifs"},{l:"/liste-chaines",t:"Liste des Chaînes"},{l:"/prix-iptv",t:"Prix IPTV"},{l:"/comparatif-iptv",t:"Comparatif IPTV"}].map(x => (
                <Link key={x.l} href={x.l} style={{ background: "rgba(90,95,207,0.08)", border: "1px solid rgba(90,95,207,0.2)", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" }}>{x.t}</Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
