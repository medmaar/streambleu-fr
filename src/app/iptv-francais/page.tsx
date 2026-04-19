import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV Français 2026 — Chaînes Françaises en 4K | Stream Bleu",
  description: "Service IPTV français avec toutes les chaînes françaises en 4K Ultra HD. TF1, France 2, M6, Canal+, beIN Sports, RMC Sport. Support en français 24/7. Essai gratuit 24h.",
  keywords: "iptv francais, french iptv, iptv en français, chaînes françaises iptv, iptv france français",
  alternates: { canonical: "https://streambleu.fr/iptv-francais" },
  openGraph: {
    title: "IPTV Français 2026 — Chaînes Françaises en 4K | Stream Bleu",
    description: "IPTV Français : toutes les chaînes françaises en 4K Ultra HD. Support en français 24/7.",
    url: "https://streambleu.fr/iptv-francais", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "IPTV Français Stream Bleu" }],
  },
};

const frenchChannelGroups = [
  { group: "🇫🇷 TNT Généraliste", channels: ["TF1 4K", "France 2 4K", "France 3", "France 4", "France 5", "M6 4K", "Arte 4K", "C8", "W9", "TMC", "TFX", "6ter", "C Star"] },
  { group: "📰 Info & Actualités", channels: ["BFM TV 4K", "CNews", "LCI", "BFM Business", "France 24", "Public Sénat", "LCP Assemblée", "CNEWS", "Europe 1 TV"] },
  { group: "⚽ Sport Premium", channels: ["beIN Sports 1", "beIN Sports 2", "beIN Sports 3", "RMC Sport 1", "RMC Sport 2", "Canal+ Sport", "Eurosport 1", "Eurosport 2", "L'Équipe TV"] },
  { group: "🎬 Canal+ & Cinéma", channels: ["Canal+ 4K", "Canal+ Cinéma", "Canal+ Séries", "Canal+ Docs", "Ciné+ Premier", "Ciné+ Club", "Ciné+ Émotion"] },
  { group: "👨‍👩‍👧 Famille & Divertissement", channels: ["Gulli", "TFou Max", "Piwi+", "Tiji", "J-One", "Game One", "Comédie+", "Paris Première", "Teva"] },
];

const faqItems = [
  { q: "Quelles sont les chaînes françaises disponibles en IPTV ?", a: "Stream Bleu propose toutes les chaînes françaises disponibles : TF1, France 2, France 3 (avec les déclinaisons régionales), M6, Arte, C8, Canal+, beIN Sports 1/2/3, RMC Sport 1/2, BFM TV, CNews, LCI, et bien plus encore. Plus de 180 chaînes françaises au total." },
  { q: "Le service IPTV français fonctionne-t-il en dehors de France ?", a: "Oui. Stream Bleu fonctionne dans toute l'Europe et dans le monde entier. Les expatriés français peuvent regarder leurs chaînes françaises préférées depuis n'importe où grâce à notre service IPTV." },
  { q: "Les chaînes françaises sont-elles en direct ou en décalé ?", a: "Toutes les chaînes françaises Stream Bleu sont diffusées en direct (live). De plus, les principales chaînes proposent 7 jours de TV de rattrapage (catch-up) pour regarder les émissions manquées." },
  { q: "Y a-t-il un IPTV français qui fonctionne sans VPN ?", a: "Oui. Stream Bleu fonctionne sans VPN depuis la France et depuis l'étranger. Notre infrastructure est optimisée pour une diffusion directe sans nécessiter de services supplémentaires." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function IptvFrancaisPage() {
  return (
    <>
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
              Le service IPTV français par excellence. 180+ chaînes françaises en 4K Ultra HD — TF1, France 2, Canal+, beIN Sports — avec un support client entièrement en français 24h/24.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#e03e3e", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit 24h</Link>
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
                { icon: "📡", title: "Serveurs localisés en France", desc: "Nos serveurs sont optimisés pour les connexions françaises. Moins de latence, plus de stabilité pour les utilisateurs en France." },
                { icon: "💬", title: "Support WhatsApp en français", desc: "Réponse en moins de 5 minutes via WhatsApp en français. Notre équipe connaît les appareils populaires en France." },
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
              <Link href="/essai-gratuit" style={{ background: "#e03e3e", color: "#fff", fontWeight: 700, padding: "13px 28px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit</Link>
              <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 700, padding: "13px 28px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "32px 16px 64px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ textAlign: "center", color: "#555", fontSize: 13, marginBottom: 16 }}>Voir aussi :</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {[{l:"/iptv-france",t:"IPTV France"},{l:"/abonnement-iptv",t:"Abonnement IPTV"},{l:"/iptv-premium",t:"IPTV Premium"},{l:"/meilleur-iptv-france",t:"Meilleur IPTV France"},{l:"/liste-chaines",t:"Chaînes IPTV"},{l:"/iptv-paris",t:"IPTV Paris"}].map(x => (
                <Link key={x.l} href={x.l} style={{ background: "rgba(90,95,207,0.08)", border: "1px solid rgba(90,95,207,0.2)", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" }}>{x.t}</Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
