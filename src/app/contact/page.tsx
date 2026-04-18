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
    actionBg: "#25D366",
    actionColor: "#fff",
    iconBg: "#25D366",
    detail: "+1 (782) 802-6280",
  },
  {
    name: "Telegram",
    desc: "Rejoignez notre canal de support pour une aide rapide et les annonces de service.",
    action: "Ouvrir Telegram",
    href: "https://t.me/IPTVfranceSupport",
    actionBg: "#229ED9",
    actionColor: "#fff",
    iconBg: "#229ED9",
    detail: "@IPTVfranceSupport",
  },
  {
    name: "Email",
    desc: "Pour les demandes détaillées, questions de facturation ou avis DMCA.",
    action: "Envoyer un email",
    href: "mailto:help@streambleu.fr",
    actionBg: "#F5C518",
    actionColor: "#111",
    iconBg: "#F5C518",
    detail: "help@streambleu.fr",
  },
];

export default function ContactPage() {
  return (
    <main style={{ background: "linear-gradient(to right, rgba(90,95,207,0.04) 0%, #fdf5ff 35%, #fdf5ff 65%, rgba(200,80,100,0.04) 100%)", color: "#1a1a4e" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Nous <span style={{ color: "#5a5fcf" }}>Contacter</span>
        </h1>
        <p style={{ color: "#444", fontSize: 18, marginBottom: 48, lineHeight: 1.6 }}>
          Notre équipe de support est disponible 24h/24 en français.
          Choisissez le canal qui vous convient le mieux.
        </p>

        {/* Contact cards — solid light background */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
          {channels.map((c) => (
            <div key={c.name} style={{
              background: "#fff",
              borderRadius: 20,
              padding: "24px 28px",
              border: "1px solid rgba(90,95,207,0.12)",
              boxShadow: "0 4px 20px rgba(90,95,207,0.07)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1a1a4e", margin: 0 }}>{c.name}</h2>
                <p style={{ color: "#555", fontSize: 14, margin: 0, lineHeight: 1.6 }}>{c.desc}</p>
                <p style={{ color: "#5a5fcf", fontSize: 13, fontWeight: 600, margin: 0 }}>{c.detail}</p>
              </div>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                style={{
                  background: c.actionBg,
                  color: c.actionColor,
                  fontWeight: 700,
                  padding: "12px 28px",
                  borderRadius: 12,
                  fontSize: 14,
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  alignSelf: "flex-start",
                }}
              >
                {c.action}
              </a>
            </div>
          ))}
        </div>

        {/* Response times */}
        <div style={{ background: "#fff", borderRadius: 20, padding: "32px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 20px rgba(90,95,207,0.07)", marginBottom: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#5a5fcf", marginBottom: 28 }}>Délais de réponse</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24, textAlign: "center" }}>
            <div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#25D366", marginBottom: 6 }}>&lt; 5 min</div>
              <div style={{ color: "#555", fontSize: 14 }}>WhatsApp<br />Aux heures de pointe</div>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#229ED9", marginBottom: 6 }}>&lt; 15 min</div>
              <div style={{ color: "#555", fontSize: 14 }}>Telegram<br />Toutes heures</div>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#e5a800", marginBottom: 6 }}>&lt; 2h</div>
              <div style={{ color: "#555", fontSize: 14 }}>Email<br />Toutes heures</div>
            </div>
          </div>
        </div>

        {/* FAQ link */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#555", marginBottom: 16 }}>Vous avez une question courante ? Consultez notre FAQ en premier.</p>
          <a href="/#faq" style={{ display: "inline-block", border: "2px solid #5a5fcf", color: "#5a5fcf", padding: "12px 32px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            Voir la FAQ
          </a>
        </div>

      </div>
    </main>
  );
}
