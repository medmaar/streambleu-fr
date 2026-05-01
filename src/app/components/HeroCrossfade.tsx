"use client";
import React, { useState, useEffect } from "react";

const HERO_IMAGES = [
  { src: "/abonnement-iptv-france-1.jpg", alt: "Abonnement IPTV France — supporters français", pos: "center 30%" },
  { src: "/abonnement-iptv-france-2.jpg", alt: "IPTV France — fans coupe du monde", pos: "center 20%" },
  { src: "/abonnement-iptv-france-3.jpg", alt: "IPTV Premium France — Champs-Élysées", pos: "center 40%" },
  { src: "/abonnement-iptv-france-4.jpg", alt: "Abonnement IPTV — supporters Tour Eiffel", pos: "center 30%" },
  { src: "/abonnement-iptv-france-5.jpg", alt: "IPTV France 4K — équipe de France football", pos: "center 25%" },
  { src: "/abonnement-iptv-france-6.jpg", alt: "Service IPTV France — supporters stade", pos: "center 35%" },
];

export default function HeroCrossfade() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [phase, setPhase] = useState<"idle" | "flash" | "reveal">("idle");

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (current + 1) % HERO_IMAGES.length;
      // Step 1: flash white
      setPrev(current);
      setPhase("flash");
      // Step 2: swap image + reveal
      setTimeout(() => {
        setCurrent(next);
        setPhase("reveal");
        // Step 3: settle to idle (let Ken Burns continue)
        setTimeout(() => {
          setPrev(null);
          setPhase("idle");
        }, 800);
      }, 140);
    }, 5200);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>

      {/* Outgoing image — snaps off instantly via flash */}
      {prev !== null && (
        <img
          key={"prev-" + prev}
          src={HERO_IMAGES[prev].src}
          alt={HERO_IMAGES[prev].alt}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: HERO_IMAGES[prev].pos,
            opacity: phase === "flash" ? 0 : 1,
            transition: phase === "flash" ? "opacity 0.1s ease-in" : "none",
            zIndex: 1,
          }}
        />
      )}

      {/* Incoming image — fades + Ken Burns zoom in */}
      <img
        key={"cur-" + current}
        src={HERO_IMAGES[current].src}
        alt={HERO_IMAGES[current].alt}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          objectPosition: HERO_IMAGES[current].pos,
          opacity: phase === "idle" ? 1 : phase === "reveal" ? 1 : 0,
          transform: phase === "idle"
            ? "scale(1.06)"
            : phase === "reveal"
            ? "scale(1.02)"
            : "scale(1.1)",
          transition: phase === "reveal"
            ? "opacity 0.65s ease-out, transform 5.5s cubic-bezier(0.25,0.46,0.45,0.94)"
            : phase === "idle"
            ? "transform 5.5s cubic-bezier(0.25,0.46,0.45,0.94)"
            : "none",
          zIndex: 2,
        }}
        loading={current === 0 ? "eager" : "lazy"}
      />

      {/* White flash — camera shutter feel */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 3,
          background: "rgba(255,255,255,0.6)",
          opacity: phase === "flash" ? 1 : 0,
          transition: phase === "flash"
            ? "opacity 0.07s ease-in"
            : "opacity 0.22s ease-out",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
