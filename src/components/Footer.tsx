"use client";
import Link from "next/link";
import Logo from "./Logo";

const sections = [
  {
    title: "Pages",
    links: [
      { href: "/", label: "Accueil" },
      { href: "/tarifs", label: "Tarifs" },
      { href: "/essai-gratuit", label: "Essai Gratuit" },
      { href: "/liste-chaines", label: "Chaînes" },
      { href: "/avis", label: "Avis" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "IPTV France",
    links: [
      { href: "/iptv-france", label: "IPTV France" },
      { href: "/abonnement-iptv", label: "Abonnement IPTV" },
      { href: "/iptv-premium", label: "IPTV Premium 4K" },
      { href: "/meilleur-iptv-france", label: "Meilleur IPTV France" },
      { href: "/iptv-francais", label: "IPTV Français" },
      { href: "/parrainage", label: "Parrainage" },
      { href: "/revendeur", label: "Revendeur" },
    ],
  },
  {
    title: "Par Appareil",
    links: [
      { href: "/iptv-firestick-france", label: "Fire Stick" },
      { href: "/iptv-android-tv-france", label: "Android TV" },
      { href: "/iptv-smart-tv-france", label: "Smart TV" },
      { href: "/iptv-apple-tv-france", label: "Apple TV" },
      { href: "/iptv-mag-box-france", label: "MAG Box" },
      { href: "/iptv-samsung-tv-france", label: "Samsung TV" },
    ],
  },
  {
    title: "Par Ville",
    links: [
      { href: "/iptv-paris", label: "Paris" },
      { href: "/iptv-lyon", label: "Lyon" },
      { href: "/iptv-marseille", label: "Marseille" },
      { href: "/iptv-toulouse", label: "Toulouse" },
      { href: "/iptv-nice", label: "Nice" },
      { href: "/iptv-bordeaux", label: "Bordeaux" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/politique-confidentialite", label: "Politique de confidentialité" },
      { href: "/conditions-utilisation", label: "Conditions d'utilisation" },
      { href: "/politique-remboursement", label: "Remboursement" },
      { href: "/avertissement", label: "Avertissement" },
      { href: "/dmca", label: "DMCA" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#4a4fc0", borderTop: "1px solid rgba(197,188,245,0.2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 24px 0" }}>

        {/* ── TOP ROW: Logo+tagline left | 4 link sections right ── */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "32px 48px",
          alignItems: "flex-start",
          paddingBottom: 28,
          borderBottom: "1px solid rgba(197,188,245,0.18)",
        }}>

          {/* Brand */}
          <div style={{ flex: "0 0 220px", minWidth: 180 }}>
            <Logo className="mb-3" />
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, lineHeight: 1.65, marginBottom: 10 }}>
              Meilleur IPTV France. 25 000+ chaînes, 120 000+ films en 4K. Disponible toute l&apos;Europe.
            </p>
            <a href="mailto:contact@streambleu.fr"
              style={{ color: "#c5bcf5", fontSize: 12, textDecoration: "none" }}>
              contact@streambleu.fr
            </a>
          </div>

          {/* 4 link sections in one horizontal row */}
          <div style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
            gap: "0 24px",
          }}>
            {sections.map((section) => (
              <div key={section.title}>
                <p style={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: 10,
                }}>
                  {section.title}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {section.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      style={{ color: "rgba(255,255,255,0.72)", fontSize: 12, textDecoration: "none" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "6px 24px",
          padding: "14px 0",
        }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", margin: 0 }}>
            © 2026 Stream Bleu. Tous droits réservés.
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", margin: 0 }}>
            1 Rue Volant, 92000 Nanterre, France
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", margin: 0 }}>
            Stream Bleu ne diffuse aucun contenu protégé — fourni par des prestataires tiers.
          </p>
        </div>

      </div>
    </footer>
  );
}
