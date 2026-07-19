import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "IPTV Rennes 2026 | Stream Bleu — Meilleur IPTV Bretagne" },
  description:
    "Stream Bleu est le meilleur service IPTV à Rennes. Regardez TF1, Canal+, beIN Sports, RMC Sport et 50 000+ chaînes en 4K. À partir de 9€. Essai gratuit.",
  keywords:
    "iptv rennes, meilleur iptv rennes, abonnement iptv Rennes, iptv france Rennes, stream bleu Rennes",
  alternates: { canonical: "https://streambleu.fr/iptv-rennes" },
  openGraph: {
    title: "IPTV Rennes 2026 | Stream Bleu — Meilleur IPTV Bretagne",
    description: "Stream Bleu est le meilleur service IPTV à Rennes. 50 000+ chaînes, 300 000+ films et séries en 4K. À partir de 9€/mois.",
    url: "https://streambleu.fr/iptv-rennes",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Stream Bleu IPTV Rennes" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "L'IPTV est-il légal à Rennes ?",
    a: "La technologie IPTV est légale à Rennes et dans toute la France. Stream Bleu diffuse des flux internet sur votre appareil. Les utilisateurs à Rennes sont responsables de s'assurer que les contenus auxquels ils accèdent respectent la législation française sur le droit d'auteur.",
  },
  {
    q: "Quel est le meilleur service IPTV à Rennes ?",
    a: "Stream Bleu est le meilleur service IPTV à Rennes. Il propose 50 000+ chaînes en direct incluant toutes les chaînes françaises, les chaînes sportives premium (beIN Sports, RMC Sport, Canal+ Sport) et 300 000+ titres à la demande — à partir de 9€/mois.",
  },
  {
    q: "Stream Bleu fonctionne-t-il bien à Rennes ?",
    a: "Oui. Stream Bleu fonctionne parfaitement à Rennes avec tous les fournisseurs internet (Orange, SFR, Free, Bouygues). Nos serveurs sont optimisés pour les connexions en Bretagne, offrant des streams 4K stables même aux heures de pointe.",
  },
  {
    q: "Combien coûte un abonnement IPTV à Rennes ?",
    a: "Stream Bleu propose des abonnements à partir de 9€/mois sans engagement. Des forfaits longue durée sont disponibles à prix réduit. Toutes les formules incluent un accès à 50 000+ chaînes, 300 000+ films & séries, et les chaînes sportives premium.",
  },
  {
    q: "Puis-je regarder le Stade Rennais en IPTV avec Stream Bleu ?",
    a: "Oui ! Stream Bleu inclut beIN Sports, RMC Sport et Canal+ Sport, ce qui vous permet de suivre le Stade Rennais et toutes les compétitions françaises et européennes en 4K Ultra HD.",
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
    { "@type": "ListItem", position: 2, name: "IPTV Rennes 2026", item: "https://streambleu.fr/iptv-rennes" },
  ],
};

const allCities = [
  { label: "IPTV Paris", href: "/iptv-paris" },
  { label: "IPTV Lyon", href: "/iptv-lyon" },
  { label: "IPTV Marseille", href: "/iptv-marseille" },
  { label: "IPTV Toulouse", href: "/iptv-toulouse" },
  { label: "IPTV Nice", href: "/iptv-nice" },
  { label: "IPTV Bordeaux", href: "/iptv-bordeaux" },
  { label: "IPTV Lille", href: "/iptv-lille" },
  { label: "IPTV Nantes", href: "/iptv-nantes" },
  { label: "IPTV Strasbourg", href: "/iptv-strasbourg" },
  { label: "IPTV Rennes", href: "/iptv-rennes" },
  { label: "IPTV Montpellier", href: "/iptv-montpellier" },
];

export default function IPTVCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", color: "#1a1a4e", minHeight: "100vh" }}>

        <section style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(90,95,207,0.12)", border: "1px solid rgba(90,95,207,0.3)", color: "#5a5fcf", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              IPTV Rennes · Stream Bleu
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, lineHeight: 1.1, marginTop: 24, marginBottom: 20, color: "#5a5fcf" }}>
              Meilleur IPTV<br /><span style={{ color: "#5a5fcf" }}>Rennes 2026</span>
            </h1>
            <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "#5a5fcf", maxWidth: 640, marginBottom: 36, lineHeight: 1.7 }}>
              Stream Bleu est le meilleur service IPTV à Rennes. Profitez de TF1, Canal+, beIN Sports, RMC Sport et 50 000+ chaînes en 4K Ultra HD. Suivez le Stade Rennais et toutes les compétitions en 4K sans coupure.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/tarifs" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none", display: "inline-block", boxShadow: "0 6px 20px rgba(90,95,207,0.4)" }}>Voir les Tarifs →</Link>
              <Link href="/essai-gratuit" style={{ background: "transparent", border: "2px solid #5a5fcf", color: "#5a5fcf", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>Essai Gratuit 24h</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "70px 16px", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 900, marginBottom: 48, color: "#5a5fcf" }}>Pourquoi choisir Stream Bleu à Rennes ?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
              {[
                { icon: "📺", title: "50 000+ Chaînes", desc: "TNT, câble, satellite, chaînes étrangères — tout en un seul abonnement." },
                { icon: "⚽", title: "Sport Premium", desc: "beIN Sports, RMC Sport, Canal+ Sport, Eurosport — tous les matchs sans supplément." },
                { icon: "🔥", title: "4K Ultra HD", desc: "Streams H.265/HEVC avec HDR10 & Dolby Vision sur les chaînes compatibles." },
                { icon: "📱", title: "Multi-écrans", desc: "Smart TV, Fire Stick, Android, iOS, PC — tous les appareils supportés." },
                { icon: "⚡", title: "Zéro Coupure", desc: "Infrastructure premium avec serveurs redondants. 99,9% uptime garanti." },
                { icon: "🆓", title: "Essai Gratuit", desc: "Testez 24h gratuitement sans carte bancaire. Activation instantanée." },
              ].map((f) => (
                <div key={f.title} style={{ background: "rgba(123,135,232,0.06)", border: "1px solid rgba(123,135,232,0.18)", borderRadius: 16, padding: "28px 24px" }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#5a5fcf" }}>{f.title}</h3>
                  <p style={{ color: "#1a1a4e", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "48px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "#5a5fcf", borderRadius: 24, padding: "48px 40px", textAlign: "center", boxShadow: "0 12px 40px rgba(90,95,207,0.3)" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 900, color: "#fff", marginBottom: 16 }}>Abonnement IPTV Rennes à partir de 9€/mois</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32, fontSize: 15, lineHeight: 1.7 }}>Sans engagement · Activation sous 30 minutes · Support 24/7 en français</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/essai-gratuit" style={{ background: "#f5a623", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Essai Gratuit</Link>
              <Link href="/tarifs" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.4)", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Voir les Tarifs →</Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "70px 16px", background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <p style={{ color: "#5a5fcf", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>FAQ</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 900, marginBottom: 40, color: "#5a5fcf" }}>Questions fréquentes — IPTV Rennes</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqItems.map((faq) => (
                <div key={faq.q} style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(123,135,232,0.2)", borderRadius: 16, padding: "24px 28px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: "#5a5fcf" }}>{faq.q}</h3>
                  <p style={{ color: "#1a1a4e", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "60px 16px", background: "#fff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 22, fontWeight: 800, marginBottom: 32, color: "#5a5fcf" }}>IPTV dans d&apos;autres villes françaises</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {allCities.filter(c => c.href !== "/iptv-rennes").map((c) => (
                <Link key={c.href} href={c.href} style={{ background: "rgba(123,135,232,0.08)", border: "1px solid rgba(123,135,232,0.2)", borderRadius: 10, padding: "10px 20px", textDecoration: "none", color: "#5a5fcf", fontSize: 14, fontWeight: 600 }}>
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
