import type { Metadata } from "next";
import Link from "next/link";
import PricingSection from "../PricingSection";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: { absolute: "Abonnement IPTV France 2026 — 4K H.265 à partir de 9€ | Stream Bleu" },
  description: "Comparez les forfaits IPTV premium Stream Bleu. H.265/HEVC, HDR10 & Dolby Vision. Formules 1, 3, 6 et 12 mois à partir de 9€. 25 000+ chaînes, sans engagement.",
  keywords: "abonnement iptv france, tarif iptv france 2026, forfait iptv 4k france, iptv pas cher france",
  alternates: { canonical: "https://streambleu.fr/pricing" },
};

export default function PricingPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000", minHeight: "100vh" }}>

      {/* En-tête */}
      <section style={{ padding: "80px 16px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Tarifs Transparents
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#000000", marginBottom: 16, lineHeight: 1.1 }}>
            Stream Bleu <span style={{ color: "#F96E5B" }}>Forfaits Premium 4K 2026</span>
          </h1>
          <p style={{ color: "#000000", marginBottom: 28, maxWidth: 560, margin: "0 auto 28px", lineHeight: 1.7, fontSize: 16 }}>
            Pas de frais cachés. Chaque forfait diffuse en vrai 4K Ultra HD avec encodage H.265/HEVC, support HDR10 &amp; Dolby Vision, et assistance 24/7 en français.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20, fontSize: 14, color: "#000000", fontWeight: 600 }}>
            {["Sans engagement", "Activation instantanée", "Résiliation à tout moment", "Essai gratuit 24h disponible"].map((item) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#3F9AAE" }}>✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section style={{ padding: "0 16px 60px" }}>
        <PricingSection />
      </section>

      {/* Inclus dans chaque forfait */}
      <section style={{ padding: "60px 16px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Inclus dans chaque forfait
          </p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#000000", marginBottom: 36 }}>
            Tout ce qu&apos;il vous faut — <span style={{ color: "#F96E5B" }}>Sans supplément</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {[
              "25 000+ Chaînes TV en direct",
              "120 000+ Films & Séries (VOD)",
              "Vrai 4K Ultra HD — H.265/HEVC",
              "Support HDR10 & Dolby Vision",
              "Ligue 1, Champions League, Roland-Garros",
              "beIN Sports, RMC Sport, Canal+, TF1, M6",
              "Événements PPV inclus — sans supplément",
              "EPG complet + Télévision de rattrapage (7 jours)",
              "Compatible TiviMate & IBO Player",
              "Tous appareils : Fire TV, Smart TV, iOS, Android",
              "Garantie de disponibilité 99,9%",
              "Support 24/7 en français",
            ].map((feature) => (
              <div key={feature} style={{ display: "flex", alignItems: "center", gap: 12, background: "#ffffff", border: "1px solid rgba(63,154,174,0.2)", borderRadius: 14, padding: "14px 18px" }}>
                <span style={{ color: "#3F9AAE", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ color: "#000000", fontSize: 14, fontWeight: 500 }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA essai gratuit */}
      <section style={{ padding: "60px 16px", textAlign: "center", background: "#1A3D45" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#ffffff", marginBottom: 14 }}>
            Pas encore convaincu ? Testez l&apos;expérience 4K gratuitement
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 28, fontSize: 15 }}>
            Sans carte bancaire. Testez les streams 4K H.265 sur votre propre matériel.
            Consultez aussi notre <Link href="/channels-list" style={{ color: "#79C9C5", textDecoration: "underline" }}>liste complète des chaînes</Link>.
          </p>
          <Link href="/free-trial" style={{ display: "inline-block", background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(249,110,91,0.4)" }}>
            Essai Gratuit 24h
          </Link>
        </div>
      </section>

      {/* Liens villes */}
      <section style={{ padding: "48px 16px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#000000", fontSize: 13, fontWeight: 600, marginBottom: 20 }}>
            Disponible dans votre ville :
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { name: "Paris", href: "/iptv-paris" },
              { name: "Lyon", href: "/iptv-lyon" },
              { name: "Marseille", href: "/iptv-marseille" },
              { name: "Toulouse", href: "/iptv-toulouse" },
              { name: "Nice", href: "/iptv-nice" },
              { name: "Bordeaux", href: "/iptv-bordeaux" },
            ].map((city) => (
              <Link key={city.href} href={city.href} style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>
                🇫🇷 IPTV {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 16px 80px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", background: "#1A3D45", borderRadius: 24, padding: "36px 28px", boxShadow: "0 8px 32px rgba(26,61,69,0.2)" }}>
          <p style={{ color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#ffffff", marginBottom: 28, textAlign: "center" }}>
            Questions fréquentes sur les tarifs
          </h2>
          <FaqAccordion />
        </div>
      </section>

    </main>
  );
}
