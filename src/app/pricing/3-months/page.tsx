import type { Metadata } from "next";
import PlanOrderForm from "../PlanOrderForm";
import PlanFAQ, { type FaqItem } from "../PlanFAQ";

export const metadata: Metadata = {
  title: { absolute: "3 Month IPTV france — €29 | Stream Bleu" },
  description:
    "Get 3 months of IPTV in france for only €29. 25 000+ live channels, 4K quality, Ligue 1, beIN Sports, CTV included. No contract. Login credentials sent within minutes.",
  keywords:
    "IPTV 3 months france, Stream Bleu 3 months, IPTV quarterly france, 3 month IPTV france €29",
  alternates: { canonical: "https://streambleu.fr/pricing/3-months" },
};

const faqItems: FaqItem[] = [
  {
    q: "What is included in the 3-month IPTV plan?",
    a: "The 3-month plan gives you full access to 25 000+ live channels including all Français networks (beIN Sports, RMC Sport, Canal+, CTV, Global, RDS, TVA), 120 000+ movies and series on demand, 4K Ultra HD streaming, electronic program guide (EPG), and 7-day catch-up TV — all for €29.",
  },
  {
    q: "How do I receive my login credentials after ordering?",
    a: "After placing your order, our team will review it and send your login credentials (server URL, username, and password) directly to your email address within minutes. Check your spam folder if you don't see it.",
  },
  {
    q: "Which devices are compatible with this IPTV service?",
    a: "Our service works on Amazon Firestick, all Samsung and LG Smart TVs, Android boxes, Android phones and tablets, iPhone, iPad, Apple TV, MAG boxes, Windows PCs and Macs. You can use it on virtually any device that supports an IPTV player app.",
  },
  {
    q: "How fast does my internet connection need to be?",
    a: "We recommend at least 10 Mbps for HD streaming and 25 Mbps for 4K Ultra HD. Any standard Français home internet plan handles this easily. Our anti-freeze technology also minimises buffering on slower connections.",
  },
  {
    q: "Can I watch live Français and Quebec channels?",
    a: "Yes — every plan includes beIN Sports, RMC Sport, Canal+, CTV, Global, City TV, RDS, TVA, Canal Vie, and all regional Français channels in HD and 4K. Every Ligue 1, NFL, NBA and CFL game is covered.",
  },
  {
    q: "What happens when my 3-month subscription expires?",
    a: "You'll receive a reminder before expiry. Simply place a new order to renew — or upgrade to the 6-month or 12-month plan for better savings. There are no automatic charges and no contracts.",
  },
  {
    q: "How do I get support if something stops working?",
    a: "Our Français support team is disponible 24h/24 via WhatsApp (+1 782-802-6280) and email en français. Most issues are resolved within minutes.",
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

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Stream Bleu 3 Month IPTV Plan",
  description: "3 months of IPTV access to 25 000+ live channels in france including Ligue 1, beIN Sports, CTV, RMC Sport and 120 000+ VOD titles in 4K.",
  brand: { "@type": "Brand", name: "Stream Bleu" },
  offers: {
    "@type": "Offer",
    price: "29.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://streambleu.fr/pricing/3-months",
  },
};

export default function Pricing3MonthsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main style={{ background: "linear-gradient(135deg, #C9BEFF 0%, #FFDBFD 100%)", color: "#1a1a4e", minHeight: "100vh" }}>
        <section
          className="py-20 px-4"
          style={{
            background:
              "transparent",
          }}
        >
          <div className="max-w-2xl mx-auto">
            {/* 1. Page title */}
            <div style={{ background: "#6367FF", borderRadius: 24, padding: "28px 24px", boxShadow: "0 8px 32px rgba(99,103,255,0.25)", marginBottom: 24, textAlign: "center" }}>
              <span style={{ background: "rgba(99,103,255,0.18)", border: "1px solid rgba(99,103,255,0.4)", color: "#6367FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, display: "inline-block", marginBottom: 20 }}>
                Stream Bleu · 3 Months
              </span>
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 16 }}>
                3 Months
              </h1>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 16 }}>
                <span style={{ color: "#6367FF", fontWeight: 900, fontSize: "2.4rem" }}>Price : €29</span>
                <span style={{ background: "#6367FF", color: "#fff", fontWeight: 700, fontSize: 12, padding: "5px 14px", borderRadius: 999 }}>50% OFF</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>Fill out the form below — credentials sent within minutes</p>
            </div>

            {/* 3. Order Form */}
            <div
              className="rounded-3xl p-6 md:p-8 border mb-16"
              style={{
                background: "#6367FF",
                borderColor: "rgba(201,190,255,0.2)", boxShadow: "0 8px 32px rgba(99,103,255,0.25)",
              }}
            >
              <PlanOrderForm plan="3 Months - 1 Device — €29" />
            </div>

            {/* 4. FAQ */}
            <div style={{ background: "#6367FF", borderRadius: 24, padding: "32px", boxShadow: "0 8px 32px rgba(99,103,255,0.25)", marginBottom: 32 }}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#6367FF" }}
              >
                FAQ
              </p>
              <h2 style={{ color: "#ffffff", fontSize: "1.4rem", fontWeight: 800, marginBottom: 24 }}>
                Frequently Asked Questions
              </h2>
              <PlanFAQ items={faqItems} />
            
            {/* Internal Links */}
            <div style={{ marginTop: 32, background: "rgba(255,255,255,0.06)", borderRadius: 16, padding: "24px 20px" }}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 600, textAlign: "center", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Explore More Plans</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 14 }}>
                <a href="/pricing/1-month" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>1 Month — 9€</a>
                <a href="/pricing/3-months" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>3 Months — €29</a>
                <a href="/pricing/6-months" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>6 Months — €39</a>
                <a href="/pricing/12-months" style={{ background: "#6367FF", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>1 Year — €49 ⭐</a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
                <a href="/free-trial" style={{ background: "#C9BEFF", color: "#6367FF", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Essai Gratuit 24h</a>
                <a href="/pricing" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>All Plans</a>
                <a href="/channels-list" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Channel List</a>
                <a href="/iptv-paris" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>IPTV Toronto</a>
                <a href="/iptv-lyon" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>IPTV Vancouver</a>
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
