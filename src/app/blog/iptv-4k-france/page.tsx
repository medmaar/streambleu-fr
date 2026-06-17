import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV 4K France 2026 — Ultra HD H.265 sans Coupure | Stream Bleu",
  description:
    "IPTV 4K en France : guide complet pour profiter de la qualité Ultra HD H.265/HEVC sur votre téléviseur. Stream Bleu propose le vrai 4K HDR avec 50 000+ chaînes.",
  keywords: "iptv 4k france, iptv 4k ultra hd, iptv h265 france, iptv hevc france, meilleur iptv 4k, stream bleu 4k",
  alternates: { canonical: "https://streambleu.fr/blog/iptv-4k-france" },
  openGraph: {
    title: "IPTV 4K France 2026 — Ultra HD H.265 sans Coupure | Stream Bleu",
    description: "Guide complet IPTV 4K en France : H.265, HDR10, Dolby Vision. Stream Bleu propose le vrai 4K Ultra HD.",
    url: "https://streambleu.fr/blog/iptv-4k-france",
    type: "article",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "IPTV 4K France 2026" }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IPTV 4K France 2026 — Ultra HD H.265 sans Coupure",
  description: "Guide complet pour profiter de l'IPTV 4K Ultra HD en France avec H.265/HEVC et HDR10.",
  datePublished: "2026-02-01",
  dateModified: "2026-05-01",
  author: { "@type": "Organization", name: "Stream Bleu" },
  publisher: { "@type": "Organization", name: "Stream Bleu", url: "https://streambleu.fr" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://streambleu.fr/blog/iptv-4k-france" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelle vitesse internet faut-il pour l'IPTV 4K ?",
      acceptedAnswer: { "@type": "Answer", text: "Pour profiter de l'IPTV 4K Ultra HD en H.265/HEVC, une connexion de 25 Mbps minimum est recommandée par stream. En pratique, avec la fibre optique (100+ Mbps) vous n'aurez aucun problème. L'ADSL à 30 Mbps peut aussi suffire pour 1 à 2 streams simultanés." }
    },
    {
      "@type": "Question",
      name: "Comment savoir si mon téléviseur supporte la 4K IPTV ?",
      acceptedAnswer: { "@type": "Answer", text: "Tous les téléviseurs Samsung, LG, Sony, Philips et TCL vendus depuis 2019 supportent la 4K Ultra HD. Pour bénéficier du HDR10, votre TV doit être certifiée HDR10. Vérifiez les spécifications de votre modèle dans le menu paramètres." }
    },
    {
      "@type": "Question",
      name: "Stream Bleu propose-t-il vraiment du 4K et pas du 1080p amélioré ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui. Stream Bleu encode ses streams premium en vrai 4K (3840×2160) en H.265/HEVC avec un débit minimum de 25 Mbps par stream 4K. C'est fondamentalement différent du 1080p upscalé proposé par beaucoup de concurrents." }
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Stream Bleu", item: "https://streambleu.fr" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://streambleu.fr/blog" },
    { "@type": "ListItem", position: 3, name: "IPTV 4K France 2026", item: "https://streambleu.fr/blog/iptv-4k-france" },
  ],
};

const comparaison = [
  { codec: "H.264 (AVC)", resolution: "1080p max", bitrate: "8–15 Mbps", hdr: "Non", perf: "Basique" },
  { codec: "H.265 (HEVC)", resolution: "4K Ultra HD", bitrate: "15–25 Mbps", hdr: "HDR10 / Dolby Vision", perf: "Premium ✓" },
];

export default function IPTV4KFrance() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ color: "#1a1a4e", minHeight: "100vh" }}>

        <section style={{ background: "linear-gradient(135deg, #5a5fcf, #7b87e8)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
              <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, textDecoration: "none" }}>Blog</Link>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>→</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>IPTV 4K France 2026</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4.5vw, 50px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              IPTV 4K France 2026 :<br />
              <span style={{ color: "#f5a623" }}>Guide Ultra HD H.265 Complet</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.7, maxWidth: 680 }}>
              Tout ce que vous devez savoir pour profiter de l'IPTV en qualité 4K Ultra HD en France : codec H.265, HDR10, Dolby Vision, compatibilité des appareils et quelle connexion internet vous faut-il.
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginTop: 20 }}>1 février 2026 · 10 min de lecture</p>
          </div>
        </section>

        <article style={{ maxWidth: 820, margin: "0 auto", padding: "60px 16px" }}>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#5a5fcf", marginBottom: 16 }}>
              Pourquoi la 4K change tout pour l'IPTV
            </h2>
            <p style={{ color: "#333", fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>
              La 4K Ultra HD (3840×2160 pixels) représente 4 fois plus de pixels que le Full HD 1080p. Sur un téléviseur de 55 pouces ou plus, la différence est immédiatement perceptible : les détails sont nets, les textures réelles, et les contenus sportifs comme le football ou les Grands Prix de F1 atteignent un niveau de réalisme saisissant.
            </p>
            <p style={{ color: "#333", fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>
              Mais la résolution seule ne suffit pas. Pour que la 4K IPTV soit vraiment belle, il faut le bon codec. En 2026, la distinction majeure entre un bon et un mauvais service IPTV se joue sur ce point précis : H.264 (AVC) vs H.265 (HEVC).
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#5a5fcf", marginBottom: 20 }}>
              H.264 vs H.265 : la différence concrète
            </h2>
            <div style={{ overflowX: "auto", marginBottom: 24 }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "#5a5fcf" }}>
                    {["Codec", "Résolution max", "Débit requis", "HDR", "Qualité"].map(h => (
                      <th key={h} style={{ padding: "12px 16px", color: "#fff", fontWeight: 700, textAlign: "left" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparaison.map((r, i) => (
                    <tr key={r.codec} style={{ background: i % 2 === 0 ? "#fff" : "rgba(123,135,232,0.05)" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 700, color: i === 1 ? "#5a5fcf" : "#333" }}>{r.codec}</td>
                      <td style={{ padding: "12px 16px", color: "#333" }}>{r.resolution}</td>
                      <td style={{ padding: "12px 16px", color: "#333" }}>{r.bitrate}</td>
                      <td style={{ padding: "12px 16px", color: "#333" }}>{r.hdr}</td>
                      <td style={{ padding: "12px 16px", color: i === 1 ? "#5a5fcf" : "#333", fontWeight: i === 1 ? 700 : 400 }}>{r.perf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: "#333", fontSize: 15, lineHeight: 1.8 }}>
              H.265/HEVC est deux fois plus efficace que H.264 à qualité équivalente. Cela signifie que pour le même débit internet, vous obtenez une image deux fois meilleure. Stream Bleu utilise exclusivement H.265/HEVC pour ses streams premium 4K.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#5a5fcf", marginBottom: 16 }}>
              Quelle connexion internet pour l'IPTV 4K ?
            </h2>
            <p style={{ color: "#333", fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>
              Voici les débits recommandés selon le nombre de streams 4K simultanés :
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 24 }}>
              {[
                { streams: "1 stream 4K", speed: "25 Mbps", note: "Minimum" },
                { streams: "2 streams 4K", speed: "50 Mbps", note: "Confortable" },
                { streams: "4 streams 4K", speed: "100 Mbps", note: "Fibre recommandée" },
              ].map(s => (
                <div key={s.streams} style={{ background: "rgba(90,95,207,0.06)", borderRadius: 14, padding: "20px", border: "1px solid rgba(90,95,207,0.15)", textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#5a5fcf", marginBottom: 6 }}>{s.speed}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#333", marginBottom: 4 }}>{s.streams}</div>
                  <div style={{ fontSize: 12, color: "#666" }}>{s.note}</div>
                </div>
              ))}
            </div>
            <p style={{ color: "#333", fontSize: 15, lineHeight: 1.8 }}>
              En France, la fibre optique (FTTH) est disponible dans plus de 85% des logements. Avec un abonnement fibre standard à 500 Mbps ou 1 Gbps, vous pouvez faire tourner plusieurs streams 4K simultanément sans aucune limitation.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#5a5fcf", marginBottom: 16 }}>
              Appareils compatibles IPTV 4K en France
            </h2>
            <p style={{ color: "#333", fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
              Les appareils suivants sont tous compatibles avec le service 4K Ultra HD de Stream Bleu :
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {[
                { icon: "📺", name: "Samsung Smart TV", detail: "QLED, The Frame, Neo QLED — modèles 2019+" },
                { icon: "📺", name: "LG OLED / QNED", detail: "webOS — modèles 2019+" },
                { icon: "🔥", name: "Amazon Fire Stick 4K", detail: "Fire Stick 4K Max recommandé" },
                { icon: "📦", name: "Android TV Box", detail: "Nvidia Shield, Chromecast avec Google TV" },
                { icon: "🍎", name: "Apple TV 4K", detail: "2ème et 3ème génération" },
                { icon: "📱", name: "Smartphones", detail: "iOS 14+ et Android 10+" },
              ].map(d => (
                <div key={d.name} style={{ background: "#fff", border: "1px solid rgba(90,95,207,0.15)", borderRadius: 12, padding: "16px" }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{d.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#5a5fcf", marginBottom: 4 }}>{d.name}</div>
                  <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5 }}>{d.detail}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#5a5fcf", marginBottom: 16 }}>
              Chaînes 4K disponibles sur Stream Bleu
            </h2>
            <p style={{ color: "#333", fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>
              Stream Bleu propose plusieurs centaines de chaînes en vrai 4K Ultra HD H.265. Parmi les plus importantes :
            </p>
            <div style={{ background: "rgba(90,95,207,0.05)", borderRadius: 16, padding: "20px 24px", border: "1px solid rgba(90,95,207,0.12)" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 8 }}>
                {["beIN Sports 4K", "RMC Sport 4K", "Canal+ 4K", "Eurosport 4K", "TF1 4K (événements)", "M6 4K (événements)", "Netflix 4K (via IPTV Smarters)", "Amazon Prime 4K", "Chaînes sport internationales 4K", "Documentaires 4K HDR"].map(c => (
                  <li key={c} style={{ fontSize: 13, color: "#333", display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#5a5fcf", fontWeight: 700 }}>✓</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#5a5fcf", marginBottom: 20 }}>Questions fréquentes — IPTV 4K</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqSchema.mainEntity.map((f, i) => (
                <div key={i} style={{ background: "rgba(90,95,207,0.04)", border: "1px solid rgba(90,95,207,0.12)", borderRadius: 14, padding: "20px 24px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 8 }}>{f.name}</h3>
                  <p style={{ color: "#333", fontSize: 14, lineHeight: 1.7 }}>{f.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ background: "#5a5fcf", borderRadius: 20, padding: "36px 32px", textAlign: "center" }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#fff", marginBottom: 12 }}>
              Testez la 4K Ultra HD de Stream Bleu gratuitement
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, lineHeight: 1.7, marginBottom: 28, maxWidth: 560, margin: "0 auto 28px" }}>
              Essai gratuit 24h sans carte bancaire. Vrai 4K H.265/HEVC avec HDR10. À partir de 9€/mois.
            </p>
            <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
              Essai Gratuit 24h →
            </Link>
          </section>

          <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/blog" style={{ color: "#7b87e8", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Retour au blog</Link>
            <Link href="/iptv-smart-tv-france" style={{ color: "#7b87e8", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>IPTV Smart TV →</Link>
          </div>

        </article>
      </main>
    </>
  );
}
