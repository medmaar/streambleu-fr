"use client";
import { useRef, useState } from "react";

const plans = [
  { devices: 1,  prices: { "1 Mois": 9,   "3 Mois": 29,  "6 Mois": 39,  "12 Mois": 49  } },
  { devices: 2,  prices: { "1 Mois": 18,  "3 Mois": 50,  "6 Mois": 69,  "12 Mois": 89  } },
  { devices: 3,  prices: { "1 Mois": 27,  "3 Mois": 75,  "6 Mois": 105, "12 Mois": 135 } },
  { devices: 4,  prices: { "1 Mois": 36,  "3 Mois": 99,  "6 Mois": 140, "12 Mois": 180 } },
  { devices: 5,  prices: { "1 Mois": 45,  "3 Mois": 120, "6 Mois": 175, "12 Mois": 225 } },
  { devices: 6,  prices: { "1 Mois": 54,  "3 Mois": 144, "6 Mois": 210, "12 Mois": 270 } },
  { devices: 7,  prices: { "1 Mois": 63,  "3 Mois": 168, "6 Mois": 245, "12 Mois": 315 } },
  { devices: 8,  prices: { "1 Mois": 72,  "3 Mois": 192, "6 Mois": 280, "12 Mois": 360 } },
  { devices: 9,  prices: { "1 Mois": 81,  "3 Mois": 216, "6 Mois": 315, "12 Mois": 405 } },
  { devices: 10, prices: { "1 Mois": 90,  "3 Mois": 240, "6 Mois": 350, "12 Mois": 450 } },
];

const durations = ["1 Mois", "3 Mois", "6 Mois", "12 Mois"] as const;
type Duration = typeof durations[number];

// Same colors as HomePricing cards
const cardColors: Record<Duration, { bg: string; isLight: boolean; shadow: string }> = {
  "1 Mois":  { bg: "#ffffff",  isLight: true,  shadow: "0 8px 24px rgba(123,135,232,0.15)" },
  "3 Mois": { bg: "#c5c9f5",  isLight: true,  shadow: "0 8px 24px rgba(45,106,120,0.3)" },
  "6 Mois": { bg: "#8b92ec",  isLight: false, shadow: "0 12px 40px rgba(123,135,232,0.45)" },
  "12 Mois":   { bg: "#5a5fcf",  isLight: false, shadow: "0 12px 40px rgba(90,95,207,0.45)" },
};

const badgeLabels: Partial<Record<Duration, string>> = {
  "12 Mois": "Meilleur Prix",
};

const badgeBg: Partial<Record<Duration, string>> = {
  "12 Mois": "#f5a623",
};

const durationSlug: Record<Duration, string> = {
  "1 Mois":  "1-mois",
  "3 Mois": "3-mois",
  "6 Mois": "6-mois",
  "12 Mois":   "12-mois",
};

function orderHref(devices: number, dur: Duration): string {
  const slug = durationSlug[dur];
  if (devices === 1) return `/tarifs/${slug}`;
  return `/tarifs/${slug}-${devices}-connexions`;
}

const features = [
  "25 000+ Chaînes en Direct",
  "120 000+ Films & Séries",
  "4K Ultra HD Quality",
  "beIN Sports · RMC Sport · Canal+ · CTV",
  "PPV Events Included",
  "EPG & Catch-Up TV",
  "All Devices Supported",
  "24/7 Français Support",
];

export default function PricingSection() {
  const [activeDevices, setActiveDevices] = useState(1);
  const plan = plans.find((p) => p.devices === activeDevices)!;
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleSelect(n: number) {
    setActiveDevices(n);
    requestAnimationFrame(() => {
      const btn = scrollRef.current?.querySelector<HTMLElement>(`[data-n="${n}"]`);
      btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
  }

  const connLabel = `${activeDevices} Connection${activeDevices > 1 ? "s" : ""}`;

  return (
    <section id="pricing-section" style={{ padding: "0 16px 60px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <p style={{ textAlign: "center", color: "#5a5fcf", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
          PRICING PLANS
        </p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 900, color: "#1a1a4e", marginBottom: 10 }}>
          Simple, Transparent Pricing
        </h2>
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <span style={{ display: "inline-block", background: "#5a5fcf", color: "#fff", fontSize: 13, fontWeight: 700, padding: "5px 18px", borderRadius: 999 }}>
            50% OFF Today!
          </span>
        </div>
        <p style={{ textAlign: "center", color: "#1a1a4e", marginBottom: 32, fontSize: 15 }}>
          Sans engagement. Sans frais cachés. Activation instantanée après votre commande.
        </p>

        {/* Connection selector */}
        <div
          ref={scrollRef}
          style={{
            overflowX: "auto",
            overflowY: "visible",
            WebkitOverflowScrolling: "touch",
            display: "flex",
            gap: 8,
            marginBottom: 36,
            paddingBottom: 10,
            paddingTop: 6,
            scrollbarWidth: "none",
          } as React.CSSProperties}
        >
          {plans.map((p) => {
            const active = activeDevices === p.devices;
            return (
              <button
                key={p.devices}
                data-n={p.devices}
                onClick={() => handleSelect(p.devices)}
                style={{
                  flexShrink: 0,
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: active ? "none" : "1.5px solid #5a5fcf",
                  background: active ? "#5a5fcf" : "transparent",
                  color: active ? "#fdf5ff" : "#5a5fcf",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  opacity: active ? 1 : 0.5,
                  transition: "all .2s",
                  whiteSpace: "nowrap",
                  fontFamily: "inherit",
                }}
              >
                {p.devices} Connection{p.devices > 1 ? "s" : ""}
              </button>
            );
          })}
        </div>

        {/* Price cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {durations.map((dur) => {
            const price = plan.prices[dur];
            const badge = badgeLabels[dur];
            const { bg, isLight, shadow } = cardColors[dur];
            const isYear = dur === "12 Mois";
            return (
              <div
                key={dur}
                style={{
                  background: bg,
                  border: isLight ? "2px solid rgba(123,135,232,0.3)" : "none",
                  borderRadius: 20,
                  padding: "32px 24px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: shadow,
                }}
              >
                {badge && (
                  <span style={{
                    position: "absolute", top: -13, left: "50%",
                    transform: "translateX(-50%)",
                    background: badgeBg[dur], color: "#fff",
                    fontSize: 11, fontWeight: 800,
                    padding: "4px 14px", borderRadius: 999, whiteSpace: "nowrap",
                  }}>
                    {badge}
                  </span>
                )}
                <p style={{ fontSize: 16, fontWeight: 700, color: isLight ? "#5a5fcf" : "#fff", marginBottom: 6 }}>{dur}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "4px 0 16px" }}>
                  <span style={{ fontSize: "clamp(2rem,5vw,2.6rem)", fontWeight: 900, color: isLight ? "#5a5fcf" : "#fdf5ff" }}>${price}</span>
                  <span style={{ fontSize: 12, color: isLight ? "#7b87e8" : "rgba(255,255,255,0.65)" }}>/ {connLabel}</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", flex: 1 }}>
                  {isYear && (
                    <li style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "7px 10px" }}>
                      <span style={{ flexShrink: 0, fontSize: 14 }}>⭐</span>
                      <span style={{ fontSize: 13, color: "#fff", fontWeight: 600, lineHeight: 1.3 }}>IBO Player Subscription for Free</span>
                    </li>
                  )}
                  {features.map((f) => (
                    <li key={f} style={{ fontSize: 13, color: isLight ? "#5a5fcf" : "rgba(255,255,255,0.9)", marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: isLight ? "#7b87e8" : "#fdf5ff", fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={orderHref(activeDevices, dur)}
                  style={{
                    display: "block", textAlign: "center",
                    padding: "13px 0", borderRadius: 12,
                    background: isLight ? "#5a5fcf" : "#fdf5ff",
                    color: isLight ? "#fff" : bg,
                    fontWeight: 800, fontSize: 14,
                    textDecoration: "none",
                  }}
                >
                  Commencer →
                </a>
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: "center", color: "#1a1a4e", fontSize: 12, marginTop: 24, opacity: 0.6 }}>
          Tous les forfaits incluent 25 000+ chaînes, 120 000+ VOD et le support 24/7. Plus longue est la durée, moins vous payez par mois.
        </p>
      </div>
    </section>
  );
}
