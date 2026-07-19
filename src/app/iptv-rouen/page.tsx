import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "IPTV Rouen 2026 | Stream Bleu — Meilleur IPTV Normandie" },
  description: "Stream Bleu est le meilleur service IPTV à Rouen. Regardez TF1, Canal+, beIN Sports, RMC Sport et 50 000+ chaînes en 4K. À partir de 9€. Essai gratuit.",
  keywords: "iptv rouen, meilleur iptv rouen, abonnement iptv Rouen, iptv france Rouen, stream bleu Rouen",
  alternates: { canonical: "https://streambleu.fr/iptv-rouen" },
  openGraph: {
    title: "IPTV Rouen 2026 | Stream Bleu — Meilleur IPTV Normandie",
    description: "Stream Bleu est le meilleur service IPTV à Rouen. 50 000+ chaînes, 300 000+ films et séries en 4K. À partir de 9€/mois.",
    url: "https://streambleu.fr/iptv-rouen",
    type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Stream Bleu IPTV Rouen" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  { q: "L'IPTV est-il légal à Rouen ?", a: "La technologie IPTV est légale à Rouen et dans toute la France. Stream Bleu diffuse des flux internet sur votre appareil. Les utilisateurs sont responsables de s'assurer que les contenus auxquels ils accèdent respectent la législation française sur le droit d'auteur." },
  { q: "Quel est le meilleur service IPTV à Rouen ?", a: "Stream Bleu est le meilleur service IPTV à Rouen. Il propose 50 000+ chaînes en direct incluant toutes les chaînes françaises, les chaînes sportives premium (beIN Sports, RMC Sport, Canal+ Sport) et 300 000+ titres à la demande — à partir de 9€/mois sans engagement." },
  { q: "Stream Bleu fonctionne-t-il bien à Rouen ?", a: "Oui. Stream Bleu fonctionne parfaitement à Rouen avec tous les fournisseurs internet majeurs (Orange, SFR, Free, Bouygues). Nos serveurs CDN couvrent la région Normandie, offrant des streams 4K stables avec un minimum de latence." },
  { q: "Combien coûte un abonnement IPTV à Rouen ?", a: "Stream Bleu propose des abonnements à partir de 9€/mois sans engagement. Des forfaits longue durée permettent de descendre à 4€/mois. Toutes les formules incluent 50 000+ chaînes, 300 000+ films & séries, et les chaînes sportives premium." },
  { q: "Puis-je suivre le FC Rouen avec Stream Bleu ?", a: "Oui. Stream Bleu inclut beIN Sports, RMC Sport et Canal+ Sport, ce qui vous permet de suivre le FC Rouen et toutes les compétitions françaises et européennes en 4K Ultra HD." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Stream Bleu", item: "https://streambleu.fr" },
    { "@type": "ListItem", position: 2, name: "IPTV Rouen 2026", item: "https://streambleu.fr/iptv-rouen" },
  ],
};

const allCities = [
  { label: "IPTV Paris", href: "/iptv-paris" }, { label: "IPTV Lyon", href: "/iptv-lyon" },
  { label: "IPTV Marseille", href: "/iptv-marseille" }, { label: "IPTV Toulouse", href: "/iptv-toulouse" },
  { label: "IPTV Nice", href: "/iptv-nice" }, { label: "IPTV Bordeaux", href: "/iptv-bordeaux" },
  { label: "IPTV Lille", href: "/iptv-lille" }, { label: "IPTV Nantes", href: "/iptv-nantes" },
  { label: "IPTV Strasbourg", href: "/iptv-strasbourg" }, { label: "IPTV Rennes", href: "/iptv-rennes" },
  { label: "IPTV Montpellier", href: "/iptv-montpellier" }, { label: "IPTV Grenoble", href: "/iptv-grenoble" },
  { label: "IPTV Toulon", href: "/iptv-toulon" }, { label: "IPTV Saint-Étienne", href: "/iptv-saint-etienne" },
  { label: "IPTV Reims", href: "/iptv-reims" }, { label: "IPTV Dijon", href: "/iptv-dijon" },
  { label: "IPTV Rouen", href: "/iptv-rouen" },
];

export default function IPTVCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", color: "#1a1a4e", minHeight: "100vh" }}>
        <section style={{ padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(90,95,207,0.12)", border: "1px solid rgba(90,95,207,0.3)", color: "#5a5fcf", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
              IPTV Rouen · Stream Bleu
            </span>
            <h1 style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 900, lineHeight: 1.1, marginTop: 24, marginBottom: 20, color: "#5a5fcf" }}>
              Meilleur IPTV<br /><span style={{ color: "#5a5fcf" }}>Rouen 2026</span>
            </h1>
            <p style={{ fontSize: "clamp(15px,2vw,18px)", color: "#5a5fcf", maxWidth: 640, marginBottom: 36, lineHeight: 1.7 }}>
              Stream Bleu est le meilleur service IPTV à Rouen. Profitez de TF1, Canal+, beIN Sports, RMC Sport et 50 000+ chaînes en 4K Ultra HD. Suivez le FC Rouen et toutes les compétitions en 4K sans coupure.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/tarifs" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none", boxShadow: "0 6px 20px rgba(90,95,207,0.4)" }}>Voir les Tarifs →</Link>
              <Link href="/essai-gratuit" style={{ background: "transparent", border: "2px solid #5a5fcf", color: "#5a5fcf", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit 24h</Link>
            </div>
          </div>
        </section>
        <section style={{ padding: "70px 16px", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(22px,3.5vw,34px)", fontWeight: 900, marginBottom: 40, color: "#5a5fcf" }}>Pourquoi choisir Stream Bleu à Rouen ?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 22 }}>
              {[
                { icon: "📺", title: "50 000+ Chaînes", desc: "TNT, câble, satellite, chaînes étrangères — tout en un seul abonnement." },
                { icon: "⚽", title: "Sport Premium", desc: "beIN Sports, RMC Sport, Canal+ Sport, Eurosport — tous les matchs sans supplément." },
                { icon: "🔥", title: "4K Ultra HD", desc: "Streams H.265/HEVC avec HDR10 & Dolby Vision sur les chaînes compatibles." },
                { icon: "📱", title: "Multi-écrans", desc: "Smart TV, Fire Stick, Android, iOS, PC — tous les appareils supportés." },
                { icon: "⚡", title: "Zéro Coupure", desc: "Infrastructure premium avec serveurs redondants. 99,9% uptime garanti." },
                { icon: "🆓", title: "Essai Gratuit", desc: "Testez 24h gratuitement sans carte bancaire. Activation instantanée." },
              ].map(f => (
                <div key={f.title} style={{ background: "rgba(123,135,232,0.06)", border: "1px solid rgba(123,135,232,0.18)", borderRadius: 16, padding: "26px 22px" }}>
                  <div style={{ fontSize: 30, marginBottom: 10 }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 7, color: "#5a5fcf" }}>{f.title}</h3>
                  <p style={{ color: "#1a1a4e", fontSize: 13, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section style={{ padding: "48px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "#5a5fcf", borderRadius: 24, padding: "48px 40px", textAlign: "center", boxShadow: "0 12px 40px rgba(90,95,207,0.3)" }}>
            <h2 style={{ fontSize: "clamp(22px,3.5vw,32px)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>Abonnement IPTV Rouen à partir de 9€/mois</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 30, fontSize: 15, lineHeight: 1.7 }}>Sans engagement · Activation sous 30 minutes · Support 24/7 en français</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit</Link>
              <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>
        <section style={{ padding: "70px 16px", background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(22px,3.5vw,32px)", fontWeight: 900, marginBottom: 36, color: "#5a5fcf" }}>Questions fréquentes — IPTV Rouen</h2>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
              {faqItems.map(faq => (
                <div key={faq.q} style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(123,135,232,0.2)", borderRadius: 14, padding: "22px 26px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 9, color: "#5a5fcf" }}>{faq.q}</h3>
                  <p style={{ color: "#1a1a4e", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section style={{ padding: "60px 16px", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 20, fontWeight: 800, marginBottom: 28, color: "#5a5fcf" }}>IPTV dans d&apos;autres villes françaises</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {allCities.filter(c => c.href !== "/iptv-rouen").map(c => (
                <Link key={c.href} href={c.href} style={{ background: "rgba(123,135,232,0.08)", border: "1px solid rgba(123,135,232,0.2)", borderRadius: 10, padding: "9px 18px", textDecoration: "none", color: "#5a5fcf", fontSize: 13, fontWeight: 600 }}>
                  🇫🇷 {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
