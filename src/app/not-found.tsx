import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Page introuvable | Stream Bleu" },
  description: "Cette page n'existe pas ou a été déplacée. Retrouvez les tarifs, l'essai gratuit 24h et les guides d'installation IPTV de Stream Bleu.",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/tarifs", label: "Tarifs IPTV" },
  { href: "/essai-gratuit", label: "Essai gratuit 24h" },
  { href: "/applications-iptv", label: "Applications IPTV" },
  { href: "/appareils-iptv", label: "Appareils compatibles" },
  { href: "/blog", label: "Blog IPTV" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <main style={{ color: "#1a1a4e", minHeight: "70vh", padding: "100px 16px", textAlign: "center" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <p style={{ fontSize: 56, fontWeight: 900, color: "#5a5fcf", marginBottom: 8 }}>404</p>
        <h1 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, color: "#5a5fcf", marginBottom: 16 }}>Page introuvable</h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#444", marginBottom: 32 }}>
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Voici les pages les plus consultées :
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={{ background: "rgba(90,95,207,0.07)", border: "1px solid rgba(90,95,207,0.18)", borderRadius: 999, padding: "8px 18px", fontSize: 14, fontWeight: 600, color: "#5a5fcf", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
