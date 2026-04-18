import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      className="py-16 px-4 border-t"
      style={{ background: "#1A3D45", borderColor: "rgba(121,201,197,0.2)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Brand bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-12 mb-12 border-b"
          style={{ borderColor: "rgba(121,201,197,0.2)" }}
        >
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Le meilleur abonnement IPTV en France. Plus de 25 000 chaînes en direct,
              120 000 films &amp; séries en 4K. Service disponible dans toute l&apos;Europe.
            </p>
          </div>

          <div className="sm:text-right shrink-0">
            <a
              href="mailto:help@streambleu.fr"
              className="text-sm text-gray-400 hover:text-[#79C9C5] transition-colors"
            >
              help@streambleu.fr
            </a>
            <div className="mt-3 text-gray-500 text-sm leading-relaxed">
              <p className="text-gray-400 font-medium text-xs uppercase tracking-wider mb-1">Service client</p>
              <p>Disponible 7j/7</p>
              <p>Réponse sous 24h</p>
              <p>France &amp; Europe</p>
            </div>
          </div>
        </div>

        {/* Links — 2×2 on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Pages */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Pages</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Accueil</Link>
              <Link href="/pricing" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Tarifs</Link>
              <Link href="/channels-list" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Chaînes</Link>
              <Link href="/free-trial" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Essai Gratuit</Link>
              <Link href="/blog" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Blog</Link>
              <Link href="/reseller" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Revendeur</Link>
              <Link href="/referral" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Parrainage</Link>
              <Link href="/contact" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Contact</Link>
            </div>
          </div>

          {/* By Device */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Par Appareil</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/iptv-firestick-france" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Firestick</Link>
              <Link href="/iptv-android-tv-france" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Android TV</Link>
              <Link href="/iptv-smart-tv-france" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Smart TV</Link>
              <Link href="/iptv-apple-tv-france" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Apple TV</Link>
              <Link href="/iptv-mag-box-france" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">MAG Box</Link>
              <Link href="/iptv-samsung-tv-france" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Samsung TV</Link>
            </div>
          </div>

          {/* By City */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Par Ville</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/iptv-paris" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Paris</Link>
              <Link href="/iptv-lyon" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Lyon</Link>
              <Link href="/iptv-marseille" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Marseille</Link>
              <Link href="/iptv-toulouse" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Toulouse</Link>
              <Link href="/iptv-nice" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Nice</Link>
              <Link href="/iptv-bordeaux" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Bordeaux</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Légal</p>
            <div className="flex flex-col gap-2.5 mb-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Politique de confidentialité</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Conditions d&apos;utilisation</Link>
              <Link href="/refund-policy" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Politique de remboursement</Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Avertissement</Link>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">
              Stream Bleu n&apos;héberge ni ne diffuse aucun contenu protégé par le droit d&apos;auteur.
              Tout le contenu est fourni par des prestataires tiers.
            </p>
            <Link href="/disclaimer" className="text-xs text-[#F96E5B] hover:text-[#79C9C5] transition-colors">
              Lire l&apos;avertissement →
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 border-t"
          style={{ borderColor: "rgba(121,201,197,0.2)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>© 2026 Stream Bleu. Tous droits réservés.</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>help@streambleu.fr</p>
        </div>

      </div>
    </footer>
  );
}
