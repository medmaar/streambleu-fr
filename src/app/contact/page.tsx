import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Stream Bleu – Meilleur IPTV France",
  description: "Contactez Stream Bleu par WhatsApp, Telegram ou email. Notre équipe de support est disponible 24h/24 en français.",
  alternates: { canonical: "https://streambleu.fr/contact" },
  openGraph: {
    title: "Contact | Stream Bleu – Meilleur IPTV France",
    description: "Contactez Stream Bleu par WhatsApp, Telegram ou email. Support 24/7 en français.",
    url: "https://streambleu.fr/contact",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Stream Bleu – Contact" }],
  },
};

const channels = [
  {
    name: "WhatsApp",
    desc: "Réponse la plus rapide. Discutez directement avec notre équipe — généralement en moins de 5 minutes.",
    action: "Écrire sur WhatsApp",
    href: "https://wa.me/17828026280?text=Bonjour%20Stream%20Bleu%2C%20je%20suis%20intéressé%20par%20votre%20service.",
    bg: "bg-[#25D366]",
    detail: "+1 (782) 802-6280",
  },
  {
    name: "Telegram",
    desc: "Rejoignez notre canal de support pour une aide rapide et les annonces de service.",
    action: "Ouvrir Telegram",
    href: "https://t.me/IPTVfranceSupport",
    bg: "bg-[#229ED9]",
    detail: "@IPTVfranceSupport",
  },
  {
    name: "Email",
    desc: "Pour les demandes détaillées, questions de facturation ou avis DMCA.",
    action: "Envoyer un email",
    href: "mailto:help@streambleu.fr",
    bg: "bg-[#F5C518]",
    detail: "help@streambleu.fr",
  },
];

export default function ContactPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">

        {/* En-tête */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Nous <span className="text-[#F96E5B]">Contacter</span>
        </h1>
        <p className="text-black text-lg mb-12">
          Notre équipe de support est disponible 24h/24 en français.
          Choisissez le canal qui vous convient le mieux.
        </p>

        {/* Cartes de contact */}
        <div className="flex flex-col gap-6 mb-16">
          {channels.map((c) => (
            <div key={c.name} className="bg-transparent rounded-2xl p-6 border border-gray-300 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{c.name}</h2>
                <p className="text-black text-sm mb-1">{c.desc}</p>
                <p className="text-[#1A3D45] text-xs font-semibold">{c.detail}</p>
              </div>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`${c.bg} text-gray-900 font-bold px-6 py-3 rounded-xl text-sm text-center whitespace-nowrap hover:brightness-110 transition shrink-0`}
              >
                {c.action}
              </a>
            </div>
          ))}
        </div>

        {/* Délais de réponse */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-12" style={{ boxShadow: "0 4px 20px rgba(26,61,69,0.08)" }}>
          <h2 className="text-2xl font-bold mb-6 text-[#1A3D45]">Délais de réponse</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-green-500 mb-1">&lt; 5 min</div>
              <div className="text-black text-sm">WhatsApp<br />Aux heures de pointe</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-500 mb-1">&lt; 15 min</div>
              <div className="text-black text-sm">Telegram<br />Toutes heures</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-yellow-500 mb-1">&lt; 2h</div>
              <div className="text-black text-sm">Email<br />Toutes heures</div>
            </div>
          </div>
        </div>

        {/* Lien FAQ */}
        <div className="text-center">
          <p className="text-black mb-4">Vous avez une question courante ? Consultez notre FAQ en premier.</p>
          <a href="/#faq" className="inline-block border border-[#F96E5B] text-[#F96E5B] hover:bg-[#F96E5B] hover:text-white px-8 py-3 rounded-xl font-bold transition-colors">
            Voir la FAQ
          </a>
        </div>

      </div>
    </main>
  );
}
