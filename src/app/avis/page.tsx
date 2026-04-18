import type { Metadata } from "next";
import ReviewsSection from "../components/ReviewsSection";

export const metadata: Metadata = {
  title: { absolute: "Avis Stream Bleu — Trustpilot, WhatsApp & Google | IPTV France" },
  description: "Lisez les avis vérifiés Stream Bleu de Trustpilot, WhatsApp et Google. 50 000+ clients satisfaits en France. Découvrez pourquoi Stream Bleu est le service IPTV le mieux noté en France.",
  alternates: { canonical: "https://streambleu.fr/avis" },
};

export default function ReviewsPage() {
  return (
    <main style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", minHeight: "100vh", color: "#1a1a4e" }}>
      <section style={{ padding: "48px 16px 32px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ background: "#5a5fcf", borderRadius: 24, padding: "28px 24px", boxShadow: "0 8px 32px rgba(90,95,207,0.25)", textAlign: "center" }}>
            <span style={{ display: "inline-block", background: "rgba(90,95,207,0.18)", border: "1px solid rgba(90,95,207,0.4)", color: "#5a5fcf", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, marginBottom: 20 }}>
              Avis Vérifiés
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 14 }}>
              Ce que disent les clients sur <span style={{ color: "#5a5fcf" }}>Stream Bleu</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
              Avis réels de Trustpilot, WhatsApp &amp; Google — 50 000+ clients satisfaits en France et dans le monde.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 16px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <ReviewsSection showHeader={false} />
      </section>

      <section style={{ padding: "60px 16px", background: "#5a5fcf", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#ffffff", marginBottom: 14 }}>
            Rejoignez 50 000+ clients satisfaits
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 28, fontSize: 15 }}>
            Testez Stream Bleu gratuitement pendant 24h — sans carte bancaire requise.
          </p>
          <a href="/essai-gratuit" style={{ display: "inline-block", background: "#5a5fcf", color: "#fff", padding: "14px 36px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
            Essai Gratuit 24h
          </a>
        </div>
      </section>
    </main>
  );
}
