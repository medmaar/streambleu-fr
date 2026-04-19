import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meilleur IPTV France 2026 — Comparatif & Test | Stream Bleu",
  description: "Quel est le meilleur IPTV en France en 2026 ? Comparatif complet des services IPTV français. Stream Bleu arrive en tête : 4K Ultra HD, zéro coupure, 25 000+ chaînes, support 24/7.",
  keywords: "meilleur iptv france, meilleur iptv, meilleur service iptv france, top iptv france, iptv france comparatif",
  alternates: { canonical: "https://streambleu.fr/meilleur-iptv-france" },
  openGraph: {
    title: "Meilleur IPTV France 2026 — Comparatif & Test | Stream Bleu",
    description: "Comparatif du meilleur IPTV en France 2026. Stream Bleu : 4K Ultra HD, 25 000+ chaînes, sans coupure.",
    url: "https://streambleu.fr/meilleur-iptv-france", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Meilleur IPTV France Stream Bleu" }],
  },
};

const criteria = [
  { score: "9.8/10", label: "Stabilité", detail: "99,9% uptime · Serveurs redondants · Basculement automatique" },
  { score: "9.7/10", label: "Qualité 4K", detail: "H.265/HEVC · HDR10 · Dolby Vision · 3840×2160" },
  { score: "9.9/10", label: "Nombre de chaînes", detail: "25 000+ chaînes · 152 pays · TNT + câble + sport premium" },
  { score: "9.6/10", label: "Support client", detail: "24/7 en français · WhatsApp < 5 min · Installation guidée" },
  { score: "9.8/10", label: "Rapport qualité/prix", detail: "À partir de 4€/mois · Sans engagement · Essai gratuit 24h" },
];

const faqItems = [
  { q: "Comment choisir le meilleur IPTV en France ?", a: "Pour choisir le meilleur IPTV en France, évaluez : la stabilité (uptime et serveurs redondants), la qualité vidéo (4K H.265 vs 1080p), le nombre de chaînes françaises incluses, la réactivité du support et le prix. Stream Bleu excelle sur tous ces critères." },
  { q: "Stream Bleu est-il vraiment le meilleur IPTV en France ?", a: "Selon nos tests et les avis de nos 50 000+ clients, Stream Bleu est le service IPTV le plus stable et qualitatif disponible en France. 4K Ultra HD H.265, serveurs premium anti-coupure, toutes les chaînes françaises et sportives, support 24/7 en français." },
  { q: "Quelle est la différence entre un bon et un mauvais service IPTV ?", a: "Un bon service IPTV offre une stabilité constante (pas de coupures aléatoires), une vraie qualité 4K (pas du 1080p étiré), toutes les chaînes annoncées réellement disponibles, et un support réactif. Les mauvais services disparaissent souvent après quelques semaines." },
  { q: "Le meilleur IPTV France fonctionne-t-il sans installation technique ?", a: "Oui. Stream Bleu vous guide pas à pas pour l'installation sur votre appareil. Un lien M3U ou des identifiants Xtream Codes sont fournis — compatibles avec tous les lecteurs IPTV populaires. Notre support vous accompagne en direct si besoin." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function MeilleurIptvFrancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ color: "#1a1a4e", minHeight: "100vh" }}>

        <section style={{ background: "linear-gradient(135deg,#4a4fc0 0%,#5a5fcf 100%)", padding: "80px 16px 60px", textAlign: "center" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 24 }}>
              🏆 Classement IPTV France 2026
            </span>
            <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
              Meilleur IPTV France 2026 —<br /><span style={{ color: "#c5bcf5" }}>Comparatif & Test Complet</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>
              Nous avons testé et comparé les principaux services IPTV disponibles en France. Voici notre verdict pour 2026, basé sur la stabilité, la qualité 4K, les chaînes disponibles et le support.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#e03e3e", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit 24h</Link>
              <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        {/* Score card */}
        <section style={{ padding: "64px 16px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ background: "#fff", borderRadius: 20, padding: "36px", border: "1px solid rgba(90,95,207,0.15)", boxShadow: "0 8px 32px rgba(90,95,207,0.1)", marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
                <div style={{ background: "#5a5fcf", borderRadius: 16, padding: "16px 24px", textAlign: "center" }}>
                  <div style={{ fontSize: 36, fontWeight: 900, color: "#f5a623" }}>9.8</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Score Global</div>
                </div>
                <div>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1a1a4e", marginBottom: 6 }}>Stream Bleu — N°1 IPTV France 2026</h2>
                  <p style={{ color: "#555", fontSize: 14, lineHeight: 1.6 }}>Meilleure stabilité, meilleure qualité 4K, support français 24/7. Le choix évident pour l&apos;IPTV en France.</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                    {["4K Ultra HD","H.265/HEVC","HDR10","Dolby Vision","25 000+ Chaînes"].map(tag => (
                      <span key={tag} style={{ background: "rgba(90,95,207,0.1)", borderRadius: 999, padding: "3px 10px", fontSize: 11, fontWeight: 600, color: "#5a5fcf" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              {criteria.map(c => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 100, flexShrink: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a4e" }}>{c.label}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#5a5fcf" }}>{c.score}</div>
                  </div>
                  <div style={{ flex: 1, background: "rgba(90,95,207,0.08)", borderRadius: 999, height: 8, overflow: "hidden" }}>
                    <div style={{ width: c.score, background: "#5a5fcf", height: "100%", borderRadius: 999 }} />
                  </div>
                  <div style={{ fontSize: 12, color: "#555", flexShrink: 0, maxWidth: 220 }}>{c.detail}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.8rem)", fontWeight: 900, color: "#1a1a4e", marginBottom: 20 }}>
              Pourquoi Stream Bleu est le meilleur IPTV en France ?
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "1. La stabilité la plus élevée du marché", desc: "99,9% d'uptime garanti grâce à une infrastructure avec serveurs redondants et basculement automatique. Aucune coupure lors des matchs de Ligue 1, Champions League ou événements PPV — là où les concurrents échouent le plus souvent." },
                { title: "2. La seule vraie 4K H.265 disponible en France", desc: "La plupart des services IPTV proposent du 1080p habillé en '4K'. Stream Bleu diffuse en véritable 4K Ultra HD 3840×2160 avec encodage H.265/HEVC, HDR10 et Dolby Vision — la qualité cinéma sur votre écran." },
                { title: "3. Le plus grand catalogue de chaînes françaises", desc: "25 000+ chaînes dont l'intégralité des chaînes françaises TNT, toutes les déclinaisons régionales de France 3, beIN Sports 1/2/3 et Max 1-7, RMC Sport 1-4, Canal+ et ses déclinaisons — sans supplément." },
                { title: "4. Support client 24/7 en français", desc: "Notre équipe de support française répond en moins de 5 minutes sur WhatsApp. Installation guidée, dépannage, mise à jour — nous restons disponibles. Les concurrents proposent rarement un support en français et encore moins 24/7." },
                { title: "5. Le meilleur rapport qualité/prix", desc: "À partir de 4€/mois pour le forfait annuel, Stream Bleu est moins cher que la quasi-totalité des services IPTV similaires, tout en offrant une qualité supérieure. L'essai gratuit 24h sans carte bancaire élimine tout risque." },
              ].map(item => (
                <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "22px", border: "1px solid rgba(90,95,207,0.1)", boxShadow: "0 4px 14px rgba(90,95,207,0.05)" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: "#555", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 16px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "#4a4fc0", borderRadius: 24, padding: "40px 36px", boxShadow: "0 8px 32px rgba(90,95,207,0.2)" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: 32, textAlign: "center" }}>FAQ — Meilleur IPTV France</h2>
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
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>Testez le meilleur IPTV France gratuitement</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 28, fontSize: 15 }}>Essai gratuit 24h • Qualité 4K complète • Sans carte bancaire</p>
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
              {[{l:"/iptv-france",t:"IPTV France"},{l:"/abonnement-iptv",t:"Abonnement IPTV"},{l:"/iptv-premium",t:"IPTV Premium"},{l:"/iptv-francais",t:"IPTV Français"},{l:"/blog/meilleur-iptv-france-2026",t:"Article Blog"},{l:"/avis",t:"Avis Clients"}].map(x => (
                <Link key={x.l} href={x.l} style={{ background: "rgba(90,95,207,0.08)", border: "1px solid rgba(90,95,207,0.2)", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" }}>{x.t}</Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
