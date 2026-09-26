import type { Metadata } from "next";
import ContactEmailForm from "@/components/ContactEmailForm";

export const metadata: Metadata = {
  title: { absolute: "Contact | Stream Bleu – Meilleur IPTV France" },
  description: "Contactez Stream Bleu par WhatsApp, Telegram ou email. Notre équipe de support est disponible 24h/24 en français.",
  alternates: { canonical: "https://streambleu.fr/contact" },
  openGraph: {
    title: "Contact | Stream Bleu – Meilleur IPTV France",
    description: "Contactez Stream Bleu par WhatsApp, Telegram ou email. Support 24/7 en français.",
    url: "https://streambleu.fr/contact",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Stream Bleu – Contact" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "Contact", "item": "https://streambleu.fr/contact"}
  ]
};

const faqItems = [
  { q: "Quel est le moyen le plus rapide de contacter Stream Bleu ?", a: "WhatsApp est le canal le plus rapide, avec une réponse en moins de 5 minutes en général. Telegram et l'e-mail restent disponibles si vous préférez laisser un message écrit." },
  { q: "Le support est-il vraiment disponible 24h/24 ?", a: "Oui, notre équipe de support répond en français 24h/24 et 7j/7, y compris pour l'aide à l'installation sur votre appareil et les questions de facturation." },
  { q: "Puis-je demander de l'aide pour installer l'IPTV avant d'acheter ?", a: "Oui. Contactez-nous par WhatsApp avant ou pendant votre essai gratuit : notre équipe vous guide gratuitement pour l'installation sur votre TV, boîtier ou mobile." },
  { q: "Où puis-je signaler un problème technique avec mon abonnement ?", a: "Le plus rapide est WhatsApp, avec une capture d'écran du problème si possible. Notre équipe technique traite les incidents en priorité, y compris en dehors des heures ouvrées." },
  { q: "Stream Bleu a-t-il un numéro de téléphone à appeler ?", a: "Le support se fait par WhatsApp, Telegram et e-mail plutôt que par téléphone, ce qui nous permet de répondre plus rapidement et de conserver un historique de votre demande." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(90,95,207,0.04) 0%, #fdf5ff 35%, #fdf5ff 65%, rgba(200,80,100,0.04) 100%)", color: "#1a1a4e" }} className="min-h-screen py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nous <span style={{ color: "#5a5fcf" }}>Contacter</span>
          </h1>
          <p style={{ color: "#444", fontSize: 18, marginBottom: 48, lineHeight: 1.6 }}>
            Notre équipe de support est disponible 24h/24 en français.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
            {/* WhatsApp */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "24px 28px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 20px rgba(90,95,207,0.07)" }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1a1a4e", marginBottom: 6 }}>💬 WhatsApp</h2>
              <p style={{ color: "#555", fontSize: 14, marginBottom: 8, lineHeight: 1.6 }}>Réponse la plus rapide — généralement en moins de 5 minutes.</p>
              <p style={{ color: "#5a5fcf", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Cliquez pour discuter</p>
              <a href="/discuter/wa?msg=Bonjour%20Stream%20Bleu%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20votre%20service."
                target="_blank" rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#fff", fontWeight: 700, padding: "12px 28px", borderRadius: 12, fontSize: 14, textDecoration: "none", display: "inline-block" }}>
                Écrire sur WhatsApp
              </a>
            </div>

            {/* Telegram */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "24px 28px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 20px rgba(90,95,207,0.07)" }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1a1a4e", marginBottom: 6 }}>📱 Telegram</h2>
              <p style={{ color: "#555", fontSize: 14, marginBottom: 8, lineHeight: 1.6 }}>Rejoignez notre canal pour une aide rapide et les annonces de service.</p>
              <p style={{ color: "#5a5fcf", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>@IPTVfranceSupport</p>
              <a href="https://t.me/IPTVfranceSupport" target="_blank" rel="noopener noreferrer"
                style={{ background: "#229ED9", color: "#fff", fontWeight: 700, padding: "12px 28px", borderRadius: 12, fontSize: 14, textDecoration: "none", display: "inline-block" }}>
                Ouvrir Telegram
              </a>
            </div>

            {/* EmailJS Contact Form */}
            <ContactEmailForm />
          </div>

          {/* Response times */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "32px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 20px rgba(90,95,207,0.07)", marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#5a5fcf", marginBottom: 28 }}>Délais de réponse</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24, textAlign: "center" }}>
              <div><div style={{ fontSize: 32, fontWeight: 900, color: "#25D366", marginBottom: 6 }}>&lt; 5 min</div><div style={{ color: "#555", fontSize: 14 }}>WhatsApp</div></div>
              <div><div style={{ fontSize: 32, fontWeight: 900, color: "#229ED9", marginBottom: 6 }}>&lt; 15 min</div><div style={{ color: "#555", fontSize: 14 }}>Telegram</div></div>
              <div><div style={{ fontSize: 32, fontWeight: 900, color: "#e5a800", marginBottom: 6 }}>&lt; 2h</div><div style={{ color: "#555", fontSize: 14 }}>E-mail</div></div>
            </div>
          </div>

          <div style={{ background: "#fff", borderRadius: 20, padding: "32px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 20px rgba(90,95,207,0.07)", marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#5a5fcf", marginBottom: 16 }}>Un support en français, du premier message au suivi</h2>
            <p style={{ color: "#555", fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
              Notre équipe de support répond en français, que ce soit pour une question avant votre commande, une aide à l&apos;installation sur votre appareil, ou un problème technique une fois abonné. Vous n&apos;avez pas besoin de créer un ticket ni de patienter dans une file d&apos;attente : un message WhatsApp suffit pour démarrer la conversation.
            </p>
            <p style={{ color: "#555", fontSize: 14, lineHeight: 1.7 }}>
              Pour les questions générales sur l&apos;abonnement, les tarifs ou la compatibilité avec votre matériel, nos guides et notre <a href="/abonnement-iptv" style={{ color: "#5a5fcf", fontWeight: 600 }}>page FAQ</a> répondent souvent plus vite qu&apos;un échange en direct. Pour tout le reste — facturation, remboursement, ou une question spécifique à votre installation — notre équipe reste la meilleure ressource.
            </p>
          </div>

          {/* FAQ */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#5a5fcf", marginBottom: 20, textAlign: "center" }}>Questions fréquentes sur le contact</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {faqItems.map((f, i) => (
                <details key={i} style={{ background: "#fff", border: "1px solid rgba(90,95,207,0.15)", borderRadius: 14, padding: "4px 20px" }}>
                  <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 15, color: "#1a1a4e", padding: "14px 0" }}>{f.q}</summary>
                  <p style={{ color: "#555", fontSize: 14, lineHeight: 1.7, margin: "0 0 16px" }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#555", marginBottom: 16 }}>Vous avez une autre question ? Consultez notre FAQ complète sur l&apos;abonnement.</p>
            <a href="/abonnement-iptv" style={{ display: "inline-block", border: "2px solid #5a5fcf", color: "#5a5fcf", padding: "12px 32px", borderRadius: 12, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              Voir la FAQ Abonnement
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
