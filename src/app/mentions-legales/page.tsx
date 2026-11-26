import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Mentions légales | Stream Bleu – IPTV France" },
  description: "Mentions légales de Stream Bleu (streambleu.fr) : éditeur du site, hébergeur, propriété intellectuelle, données personnelles et contact.",
  alternates: { canonical: "https://streambleu.fr/mentions-legales", languages: { "fr-FR": "https://streambleu.fr/mentions-legales", "x-default": "https://streambleu.fr/mentions-legales" } },
  openGraph: {
    title: "Mentions légales",
    description: "Mentions légales de Stream Bleu (streambleu.fr) : éditeur du site, hébergeur, propriété intellectuelle, données personnelles et contact.",
    url: "https://streambleu.fr/mentions-legales", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Mentions légales" }],
  },
};

// Paragraphs are trusted static HTML (links, line breaks) written for this page.
const sections: { title: string; paras: string[] }[] = [
  {
    "title": "1. Éditeur du site",
    "paras": [
      "Stream Bleu<br>18 bis rue Waldeck Rochet<br>92000 Nanterre<br>France<br>Numéro d’immatriculation : 3967XXXX<br>E-mail : <a href=\"mailto:contact@streambleu.fr\">contact@streambleu.fr</a>",
      "Directeur de la publication : Stream Bleu"
    ]
  },
  {
    "title": "2. Hébergement",
    "paras": [
      "Le site est hébergé par Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis (<a href=\"https://www.cloudflare.com\" target=\"_blank\" rel=\"noopener noreferrer\">www.cloudflare.com</a>)."
    ]
  },
  {
    "title": "3. Propriété intellectuelle",
    "paras": [
      "Les textes, visuels, logos et la structure du site sont la propriété de Stream Bleu, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite. Les noms d’applications et d’appareils cités le sont uniquement pour décrire la compatibilité technique."
    ]
  },
  {
    "title": "4. Données personnelles",
    "paras": [
      "Le traitement de vos données est décrit dans notre <a href=\"/politique-confidentialite\">politique de confidentialité</a>."
    ]
  },
  {
    "title": "5. Conditions de vente",
    "paras": [
      "Les conditions applicables aux abonnements figurent dans nos <a href=\"/cgv\">conditions générales de vente</a>."
    ]
  },
  {
    "title": "6. Contact",
    "paras": [
      "Pour toute question : <a href=\"mailto:contact@streambleu.fr\">contact@streambleu.fr</a>."
    ]
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "Mentions légales", "item": "https://streambleu.fr/mentions-legales"}
  ]
};

export default function MentionsLegalesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(90,95,207,0.04) 0%, #fdf5ff 35%, #fdf5ff 65%, rgba(200,80,100,0.04) 100%)", color: "#1a1a4e" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#5a5fcf" }}>Mentions légales</h1>
        <p style={{ color: "#666", fontSize: 13, marginBottom: 12 }}>Dernière mise à jour : 26 novembre 2026</p>
        <div className="space-y-8 leading-relaxed legal-text">
          {sections.map(s => (
            <section key={s.title}>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>{s.title}</h2>
              {s.paras.map((p, i) => (
                <p key={i} style={{ color: "#333", marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
    </>
  );
}
