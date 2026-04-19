import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Abonnement IPTV France 2026 — À partir de 9€/mois | Stream Bleu",
  description: "Abonnement IPTV en France à partir de 9€/mois. 25 000+ chaînes, beIN Sports, Canal+, 4K Ultra HD. Sans engagement, activation instantanée. Essai gratuit 24h sans carte bancaire.",
  keywords: "abonnement iptv, iptv abonnement, abonnement iptv france, abonnement iptv pas cher, abonnement iptv 4k",
  alternates: { canonical: "https://streambleu.fr/abonnement-iptv" },
  openGraph: {
    title: "Abonnement IPTV France 2026 — À partir de 9€/mois | Stream Bleu",
    description: "Abonnement IPTV France à partir de 9€/mois. 25 000+ chaînes, 4K Ultra HD, sans engagement.",
    url: "https://streambleu.fr/abonnement-iptv", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Abonnement IPTV France Stream Bleu" }],
  },
};

const plans = [
  { name: "1 Mois", price: "9€", desc: "Idéal pour tester. Accès complet à 25 000+ chaînes.", href: "/tarifs/1-mois", tag: null },
  { name: "3 Mois", price: "29€", desc: "3€ de moins par mois. Parfait pour usage régulier.", href: "/tarifs/3-mois", tag: "Populaire" },
  { name: "6 Mois", price: "39€", desc: "6,50€/mois. Le meilleur rapport qualité/prix.", href: "/tarifs/6-mois", tag: null },
  { name: "12 Mois", price: "49€", desc: "4€/mois. Économisez 56% vs l'abonnement mensuel.", href: "/tarifs/12-mois", tag: "Meilleur Prix" },
];

const faqItems = [
  { q: "Quel est le meilleur abonnement IPTV en France ?", a: "Stream Bleu propose le meilleur abonnement IPTV en France avec 25 000+ chaînes, une qualité 4K Ultra HD et un support 24/7 en français. Le forfait 12 mois à 49€ offre le meilleur rapport qualité/prix à seulement 4€/mois." },
  { q: "Comment fonctionne un abonnement IPTV ?", a: "Après votre abonnement, vous recevez vos identifiants par email en moins de 5 minutes. Installez un lecteur IPTV (TiviMate, IPTV Smarters Pro) sur votre appareil, entrez votre URL M3U et commencez à regarder." },
  { q: "L'abonnement IPTV nécessite-t-il un engagement ?", a: "Non. Tous les abonnements Stream Bleu sont sans engagement. Vous choisissez la durée qui vous convient : 1, 3, 6 ou 12 mois, sans renouvellement automatique." },
  { q: "Puis-je essayer avant de m'abonner ?", a: "Oui ! Stream Bleu propose un essai gratuit de 24h sans carte bancaire. Testez la qualité 4K et toutes les chaînes sur votre propre matériel avant de vous décider." },
  { q: "L'abonnement fonctionne-t-il sur plusieurs appareils ?", a: "Chaque abonnement inclut 1 connexion simultanée. Des forfaits multi-connexions (2 à 10 appareils) sont disponibles pour regarder sur plusieurs écrans en même temps." },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function AbonnementIptvPage() {
  return (
    <>
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
              Le meilleur abonnement IPTV en France. 25 000+ chaînes, beIN Sports, Canal+, RMC Sport en 4K Ultra HD. Sans engagement, sans carte bancaire pour l&apos;essai.
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
            <p style={{ textAlign: "center", color: "#555", fontSize: 15, maxWidth: 500, margin: "0 auto 44px" }}>Tous les abonnements incluent les 25 000+ chaînes, la 4K Ultra HD et le support 24/7.</p>
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
                { title: "Plus de chaînes qu'un abonnement classique", desc: "Avec 25 000+ chaînes françaises, européennes et internationales, l'abonnement IPTV Stream Bleu dépasse toutes les offres câble/satellite à une fraction du prix." },
                { title: "Qualité 4K supérieure", desc: "Encodage H.265/HEVC pour une qualité d'image maximale. HDR10 & Dolby Vision sur appareils compatibles. La même qualité qu'un Blu-ray 4K en streaming." },
                { title: "Aucun engagement", desc: "Choisissez 1, 3, 6 ou 12 mois selon vos besoins. Pas de renouvellement automatique, pas de frais cachés, résiliation libre." },
                { title: "Support français 24/7", desc: "Notre équipe de support parle français et répond sous 5 minutes via WhatsApp. Aide à l'installation sur tous les appareils incluse." },
              ].map(item => (
                <div key={item.title} style={{ background: "#fff", borderRadius: 16, padding: "22px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 14px rgba(90,95,207,0.06)" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "#5a5fcf", marginBottom: 8 }}>✓ {item.title}</h3>
                  <p style={{ color: "#555", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
              {[{l:"/iptv-france",t:"IPTV France"},{l:"/iptv-premium",t:"IPTV Premium"},{l:"/meilleur-iptv-france",t:"Meilleur IPTV France"},{l:"/iptv-francais",t:"IPTV Français"},{l:"/tarifs",t:"Nos Tarifs"},{l:"/liste-chaines",t:"Liste des Chaînes"}].map(x => (
                <Link key={x.l} href={x.l} style={{ background: "rgba(90,95,207,0.08)", border: "1px solid rgba(90,95,207,0.2)", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" }}>{x.t}</Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
