import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment fonctionne l'IPTV en France 2026 | Stream Bleu",
  description: "Découvrez comment fonctionne l'IPTV en France. Installation simple en 3 étapes, appareils compatibles, connexion requise — tout pour commencer à streamer en 4K Ultra HD.",
  keywords: "comment fonctionne iptv france, iptv explication france, installer iptv france, iptv configuration",
  alternates: { canonical: "https://streambleu.fr/comment-ca-marche" },
  openGraph: {
    title: "Comment fonctionne l'IPTV en France 2026 | Stream Bleu",
    description: "Learn how Stream Bleu IPTV works en France. Simple 3-step setup, compatible devices, internet requirements — everything you need to start 4K streaming today.",
    url: "https://streambleu.fr/comment-ca-marche",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Stream Bleu – Best 4K IPTV France" }],
  },
  twitter: { card: "summary_large_image" },
};

const steps = [
  {
    step: "1",
    title: "Choisir un forfait",
    desc: "Choisissez la durée d'abonnement et le nombre d'appareils adaptés à votre foyer. Tous les forfaits incluent toutes les chaînes.",
    detail: "Les forfaits débutent à 9€/mois pour 1 appareil. Des formules multi-appareils sont disponibles pour les familles. Commencez par un essai gratuit 24h si vous souhaitez tester.",
    cta: { label: "Voir les forfaits", href: "/tarifs" },
  },
  {
    step: "2",
    title: "Recevoir vos identifiants",
    desc: "Après votre commande, notre équipe vous envoie vos identifiants en quelques minutes — URL serveur, nom d'utilisateur et mot de passe.",
    detail: "Contactez-nous via WhatsApp, Telegram ou e-mail. Notre équipe support est disponible 24h/24 et répond généralement en moins de 5 minutes.",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  {
    step: "3",
    title: "Installer & regarder",
    desc: "Téléchargez une application IPTV gratuite sur votre appareil, entrez vos identifiants et commencez à regarder instantanément.",
    detail: "Nous vous indiquerons exactement quelle application installer et vous guiderons pas à pas si besoin. La plupart des utilisateurs regardent en moins de 10 minutes.",
    cta: { label: "Appareils compatibles", href: "#devices" },
  },
];

const devices = [
  { name: "Amazon Fire Stick", desc: "Toutes générations dont 4K et Lite", guide: "/iptv-firestick-france" },
  { name: "Samsung Smart TV", desc: "Tous les modèles Tizen (2018+)", guide: "/iptv-samsung-tv-france" },
  { name: "LG Smart TV", desc: "Modèles webOS (2016+)" },
  { name: "Android TV / Box", desc: "Nvidia Shield, Chromecast avec Google TV, toute Box Android TV" },
  { name: "iPhone & iPad", desc: "iOS 13 et supérieur" },
  { name: "Android Phone & Tablet", desc: "Android 6.0 et supérieur" },
  { name: "Windows PC", desc: "Windows 10 et 11 via une application IPTV" },
  { name: "Mac", desc: "macOS 11 Big Sur et supérieur" },
  { name: "MAG Box", desc: "MAG 250, 254, 256, 322, 324 et modèles récents" },
  { name: "Formuler", desc: "Z8, Z10, Z Alpha et tous les appareils Formuler" },
];

const requirements = [
  { label: "SD / 480p", speed: "5 Mbps" },
  { label: "HD / 720p", speed: "10 Mbps" },
  { label: "Full HD / 1080p", speed: "25 Mbps" },
  { label: "4K Ultra HD", speed: "50 Mbps" },
];


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "Comment fonctionne l'IPTV en France 2026", "item": "https://streambleu.fr/comment-ca-marche"}
  ]
};
export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", color: "#1a1a4e" }} className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Comment fonctionne <span className="text-[#5a5fcf]">l&apos;IPTV</span> en France
          </h1>
          <p className="text-xl text-black">
            Trois étapes simples. Aucun technicien requis. Regardez en quelques minutes.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 bg-transparent rounded-2xl p-8 border border-gray-800">
                <div className="flex-shrink-0 w-14 h-14 bg-[#5a5fcf] rounded-full flex items-center justify-center font-extrabold text-black text-2xl">
                  {s.step}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{s.title}</h2>
                  <p className="text-black mb-3">{s.desc}</p>
                  <p className="text-black text-sm mb-4">{s.detail}</p>
                  <a
                    href={s.cta.href}
                    className="inline-block border border-[#5a5fcf] text-[#5a5fcf] hover:bg-[#5a5fcf] hover:text-black px-5 py-2 rounded-lg text-sm font-bold transition-colors"
                  >
                    {s.cta.label} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is IPTV */}
      <section className="py-16 px-4 bg-transparent">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Qu&apos;est-ce que <span className="text-[#5a5fcf]">l&apos;IPTV&nbsp;?</span>
          </h2>
          <div className="space-y-4 text-black leading-relaxed">
            <p>
              IPTV signifie <strong>Internet Protocol Television</strong>. Au lieu de recevoir les signaux TV via un câble coaxial ou une antenne satellite, l&apos;IPTV diffuse la télévision en direct et le contenu à la demande via votre connexion internet.
            </p>
            <p>
              Pensez-y comme Netflix ou YouTube — mais pour la TV en direct. Vous ouvrez une application, parcourez un guide avec 25 000+ chaînes et appuyez sur lecture. Le flux provient directement de nos serveurs vers votre appareil en temps réel.
            </p>
            <p>
              Grâce à internet, l&apos;IPTV fonctionne sur <strong>n&apos;importe quel appareil connecté</strong> — votre TV, téléphone, tablette ou ordinateur — et vous pouvez regarder de partout avec une bonne connexion.
            </p>
          </div>
        </div>
      </section>

      {/* Devices */}
      <section id="devices" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Appareils <span className="text-[#5a5fcf]">compatibles</span>
          </h2>
          <p className="text-center text-black mb-10">
            Notre service IPTV fonctionne sur pratiquement tous vos écrans.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {devices.map((d) => (
              <div key={d.name} className="bg-transparent rounded-xl p-5 border border-gray-800 flex items-start gap-4">
                <span className="text-green-400 text-xl mt-0.5">✓</span>
                <div>
                  <div className="font-bold text-black">{d.name}</div>
                  <div className="text-black text-sm">{d.desc}</div>
                  {d.guide && (
                    <a href={d.guide} className="text-[#5a5fcf] text-xs hover:underline mt-1 inline-block">
                      Guide d’installation →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internet requirements */}
      <section className="py-16 px-4 bg-transparent">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Débit internet <span className="text-[#5a5fcf]">requis</span>
          </h2>
          <p className="text-center text-black mb-10">
            Toute connexion internet standard en France est largement suffisante.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {requirements.map((r) => (
              <div key={r.label} className="bg-transparent rounded-xl p-5 border border-gray-800 text-center">
                <div className="text-2xl font-extrabold text-[#5a5fcf] mb-1">{r.speed}</div>
                <div className="text-black text-sm">{r.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-black text-sm">
            La vitesse internet moyenne en France est de 200+ Mbps — bien au-delà du nécessaire, même pour la 4K sur plusieurs appareils simultanément.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Questions <span className="text-[#5a5fcf]">fréquentes</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Faut-il installer du matériel spécifique ?", a: "Non. Si vous avez déjà un Fire Stick, une Smart TV, un téléphone ou un ordinateur, vous êtes prêt. Pas d'antenne, pas de décodeur, pas de technicien requis." },
              { q: "L'IPTV fonctionne-t-il avec mon abonnement internet actuel ?", a: "Oui. Tout abonnement internet français standard (Orange, SFR, Free, Bouygues) avec au moins 25 Mbps fonctionne parfaitement pour le streaming HD." },
              { q: "Puis-je regarder sur plusieurs TV en même temps ?", a: "Oui — choisissez un forfait 2, 3, 4 ou 5 appareils. Chaque appareil streame indépendamment. Une personne peut regarder le foot au salon pendant qu'une autre regarde un film dans la chambre." },
              { q: "L'IPTV fonctionne-t-il hors de France ?", a: "Votre abonnement fonctionne partout dans le monde avec une bonne connexion internet. Voyagez en Europe, aux États-Unis ou ailleurs et accédez toujours à toutes vos chaînes françaises." },
              { q: "Que se passe-t-il si une chaîne est indisponible ?", a: "Nos serveurs maintiennent plusieurs flux redondants pour chaque chaîne. En cas de problème, le système bascule automatiquement sur un flux de secours. Notre équipe support 24h/24 surveille le service en permanence." },
            ].map((item) => (
              <div key={item.q} className="bg-transparent rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-3 text-[#5a5fcf]">{item.q}</h3>
                <p className="text-black text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900 to-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-black mb-8">
            Essayez gratuitement pendant 24 heures. Sans carte bancaire, sans engagement. Notre équipe vous configure en quelques minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/essai-gratuit" className="bg-[#5a5fcf] hover:bg-[#5a5fcf] text-black px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Obtenir l’essai gratuit
            </a>
            <a href="/tarifs" className="border border-[#5a5fcf] text-[#5a5fcf] hover:bg-[#5a5fcf] hover:text-black px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Voir les Tarifs
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
