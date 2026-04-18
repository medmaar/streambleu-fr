"use client";
import { useRef, useState } from "react";
import Link from "next/link";

const allPrices: Record<number, [number, number, number, number]> = {
  1:  [9,   29,  39,  49],
  2:  [18,  50,  69,  89],
  3:  [27,  75,  105, 135],
  4:  [36,  99,  140, 180],
  5:  [45,  120, 175, 225],
  6:  [54,  144, 210, 270],
  7:  [63,  168, 245, 315],
  8:  [72,  192, 280, 360],
  9:  [81,  216, 315, 405],
  10: [90,  240, 350, 450],
};

const planDefs = [
  { name: "1 Mois",   badge: null,         slug: "1-month"   },
  { name: "3 Mois",  badge: null,         slug: "3-months"  },
  { name: "6 Mois",  badge: "Populaire",    slug: "6-months"  },
  { name: "12 Mois", badge: "Meilleur Prix", slug: "12-months" },
];

const planFeatures = [
  "25 000+ Chaînes en direct",
  "120 000+ Films & Séries",
  "Vrai 4K Ultra HD — H.265/HEVC",
  "Support HDR10 & Dolby Vision",
  "Ligue 1 · beIN Sports · Canal+",
  "Événements PPV inclus",
  "EPG & Télévision de rattrapage",
  "Support 24/7 en français",
];

function getHref(n: number, slug: string): string {
  if (n === 1) return `/pricing/${slug}`;
  const multiSlug = slug === "12-months" ? "1-year" : slug;
  return `/pricing/${n}-devices/${multiSlug}`;
}

export default function HomePricing() {
  const [selected, setSelected] = useState(1);
  const prices = allPrices[selected];
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleSelect(n: number) {
    setSelected(n);
    requestAnimationFrame(() => {
      const btn = scrollRef.current?.querySelector<HTMLElement>(`[data-n="${n}"]`);
      btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
  }

  const connLabel = `${selected} Connexion${selected > 1 ? "s" : ""}`;

  return (
    <section style={{ padding: "80px 16px", background: "#fdf5ff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <p style={{ textAlign: "center", color: "#5a5fcf", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
          Tarifs Transparents
        </p>
        <h2 style={{ textAlign: "center", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, marginBottom: 12, color: "#1a1a4e" }}>
          Abonnements Stream Bleu
        </h2>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ display: "inline-block", background: "#5a5fcf", color: "#fff", fontSize: 13, fontWeight: 700, padding: "5px 18px", borderRadius: 999 }}>
            Offre Spéciale -50% Aujourd'hui !
          </span>
        </div>
        <p style={{ textAlign: "center", color: "#1a1a4e", marginBottom: 36, fontSize: 15 }}>
          Tous les forfaits incluent 25 000+ chaînes, streaming 4K H.265/HEVC avec HDR10, et support 24/7 en français. Paiement par PayPal ou Carte bancaire.
        </p>

        {/* Connection selector — horizontally scrollable, starts from left */}
        <div
          ref={scrollRef}
          style={{
            overflowX: "auto",
            overflowY: "visible",
            WebkitOverflowScrolling: "touch",
            display: "flex",
            gap: 10,
            marginBottom: 40,
            paddingBottom: 10,
            paddingTop: 6,
            scrollbarWidth: "none",
          } as React.CSSProperties}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => {
            const active = n === selected;
            return (
              <button
                key={n}
                data-n={n}
                onClick={() => handleSelect(n)}
                style={{
                  flexShrink: 0,
                  padding: "9px 18px",
                  borderRadius: 999,
                  border: active ? "none" : "1.5px solid #5a5fcf",
                  background: active ? "#5a5fcf" : "transparent",
                  color: active ? "#fdf5ff" : "#5a5fcf",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  opacity: active ? 1 : 0.4,
                  transition: "all .18s",
                  whiteSpace: "nowrap",
                }}
              >
                {n} Connexion{n > 1 ? "s" : ""}
              </button>
            );
          })}
        </div>

        {/* Plan cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {planDefs.map((plan, i) => {
            const isBest = plan.badge === "Meilleur Prix";
            const isPopulaire = plan.badge === "Populaire";
            // Each card gets its own distinct color
            const cardBg = isBest ? "#5a5fcf" : isPopulaire ? "#7b87e8" : i === 0 ? "#ffffff" : "#7b87e8";
            const isLight = i === 0; // 1 Mois card is white/light
            return (
            <div
              key={plan.name}
              style={{
                background: cardBg,
                border: isLight ? "2px solid rgba(123,135,232,0.3)" : "none",
                borderRadius: 20,
                padding: "32px 24px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: isBest
                  ? "0 12px 40px rgba(90,95,207,0.45)"
                  : isPopulaire
                  ? "0 12px 40px rgba(123,135,232,0.45)"
                  : "0 8px 24px rgba(90,95,207,0.3)",
              }}
            >
              {plan.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: isBest ? "#5a5fcf" : "#5a5fcf",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 800,
                    padding: "4px 14px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}
                >
                  {plan.badge}
                </span>
              )}
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6, color: isLight ? "#5a5fcf" : "#fff" }}>{plan.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 20 }}>
                <span style={{ fontSize: 40, fontWeight: 900, color: isLight ? "#5a5fcf" : "#fdf5ff" }}>€{prices[i]}</span>
                <span style={{ fontSize: 12, color: isLight ? "#7b87e8" : "rgba(255,255,255,0.7)" }}>/ {connLabel.replace('Connection', 'Connexion')}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", flex: 1 }}>
                {plan.slug === "12-months" && (
                  <li
                    style={{
                      marginBottom: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      borderRadius: 8,
                      padding: "7px 10px",
                    }}
                  >
                    <span style={{ flexShrink: 0, fontSize: 14 }}>⭐</span>
                    <span style={{ fontSize: 13, color: "#fff", fontWeight: 600, lineHeight: 1.3 }}>
                      Abonnement IBO Player offert
                    </span>
                  </li>
                )}
                {planFeatures.map((f) => (
                  <li key={f} style={{ fontSize: 13, color: isLight ? "#5a5fcf" : "rgba(255,255,255,0.9)", marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: isLight ? "#7b87e8" : "#fdf5ff", fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href={getHref(selected, plan.slug)}
                style={{
                  display: "block",
                  background: isLight ? "#5a5fcf" : "#fdf5ff",
                  color: isLight ? "#fff" : cardBg,
                  fontWeight: 800,
                  fontSize: 15,
                  padding: "13px 20px",
                  borderRadius: 12,
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Commencer →
              </Link>
            </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/pricing" style={{ color: "#5a5fcf", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
            Voir tous les tarifs →
          </Link>
        </div>
      </div>
    </section>
  );
}
