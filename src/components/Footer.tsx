"use client";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      className="py-16 px-4 border-t"
      style={{ background: "#6367FF", borderColor: "rgba(201,190,255,0.25)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Brand bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-12 mb-12 border-b"
          style={{ borderColor: "rgba(201,190,255,0.25)" }}
        >
          <div>
            <Logo className="mb-4" />
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.7, maxWidth: 320 }}>
              Le meilleur abonnement IPTV en France. Plus de 25 000 chaînes en direct,
              120 000 films &amp; séries en 4K. Service disponible dans toute l&apos;Europe.
            </p>
          </div>

          <div className="sm:text-right shrink-0">
            <a
              href="mailto:help@streambleu.fr"
              style={{ fontSize: 14, color: "#C9BEFF", textDecoration: "none" }}
            >
              help@streambleu.fr
            </a>
            <div className="mt-3" style={{ fontSize: 13, lineHeight: 1.8 }}>
              <p style={{ color: "rgba(255,255,255,0.55)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Adresse</p>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>1 Rue Volant</p>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>92000 Nanterre, France</p>
            </div>
          </div>
        </div>

        {/* Links — 2×2 on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Pages */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Pages</p>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Accueil" },
                { href: "/pricing", label: "Tarifs" },
                { href: "/channels-list", label: "Chaînes" },
                { href: "/free-trial", label: "Essai Gratuit" },
                { href: "/blog", label: "Blog" },
                { href: "/reseller", label: "Revendeur" },
                { href: "/referral", label: "Parrainage" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Par Appareil */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Par Appareil</p>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/iptv-firestick-france", label: "Fire Stick" },
                { href: "/iptv-android-tv-france", label: "Android TV" },
                { href: "/iptv-smart-tv-france", label: "Smart TV" },
                { href: "/iptv-apple-tv-france", label: "Apple TV" },
                { href: "/iptv-mag-box-france", label: "MAG Box" },
                { href: "/iptv-samsung-tv-france", label: "Samsung TV" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Par Ville */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Par Ville</p>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/iptv-paris", label: "Paris" },
                { href: "/iptv-lyon", label: "Lyon" },
                { href: "/iptv-marseille", label: "Marseille" },
                { href: "/iptv-toulouse", label: "Toulouse" },
                { href: "/iptv-nice", label: "Nice" },
                { href: "/iptv-bordeaux", label: "Bordeaux" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Légal */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Légal</p>
            <div className="flex flex-col gap-2.5 mb-6">
              {[
                { href: "/privacy-policy", label: "Politique de confidentialité" },
                { href: "/terms-of-service", label: "Conditions d'utilisation" },
                { href: "/refund-policy", label: "Politique de remboursement" },
                { href: "/disclaimer", label: "Avertissement" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                >{l.label}</Link>
              ))}
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, lineHeight: 1.6, marginBottom: 8 }}>
              Stream Bleu n&apos;héberge ni ne diffuse aucun contenu protégé par le droit d&apos;auteur.
              Tout le contenu est fourni par des prestataires tiers.
            </p>
            <Link href="/disclaimer" style={{ fontSize: 12, color: "#C9BEFF", textDecoration: "none" }}>
              Lire l&apos;avertissement →
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 border-t"
          style={{ borderColor: "rgba(201,190,255,0.2)" }}
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>© 2026 Stream Bleu. Tous droits réservés.</p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>1 Rue Volant, 92000 Nanterre, France</p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>help@streambleu.fr</p>
        </div>

      </div>
    </footer>
  );
}
