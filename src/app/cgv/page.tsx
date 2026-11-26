import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Conditions générales de vente (CGV) | Stream Bleu – IPTV France" },
  description: "Conditions générales de vente de Stream Bleu : commande, prix, durée de l’abonnement IPTV, droit de rétractation de 14 jours, remboursement et responsabilité.",
  alternates: { canonical: "https://streambleu.fr/cgv", languages: { "fr-FR": "https://streambleu.fr/cgv", "x-default": "https://streambleu.fr/cgv" } },
  openGraph: {
    title: "Conditions générales de vente",
    description: "Conditions générales de vente de Stream Bleu : commande, prix, durée de l’abonnement IPTV, droit de rétractation de 14 jours, remboursement et responsabilité.",
    url: "https://streambleu.fr/cgv", type: "website", siteName: "Stream Bleu", locale: "fr_FR",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Conditions générales de vente" }],
  },
};

// Paragraphs are trusted static HTML (links, line breaks) written for this page.
const sections: { title: string; paras: string[] }[] = [
  {
    "title": "Article 1 – Objet et vendeur",
    "paras": [
      "Les présentes conditions générales de vente (CGV) s’appliquent à tout abonnement souscrit sur le site streambleu.fr.",
      "Le service est vendu par :",
      "Stream Bleu<br>18 bis rue Waldeck Rochet<br>92000 Nanterre<br>France<br>Numéro d’immatriculation : 3967XXXX<br>E-mail : <a href=\"mailto:contact@streambleu.fr\">contact@streambleu.fr</a><br>WhatsApp : <a href=\"/discuter/wa\" rel=\"noopener\">nous écrire</a>"
    ]
  },
  {
    "title": "Article 2 – Description du service",
    "paras": [
      "Nous fournissons des identifiants personnels donnant accès à notre service de streaming IPTV. Vous choisissez une durée (1, 3, 6 ou 12 mois) et un nombre d’appareils (de 1 à 10 écrans) utilisables en même temps. Le contenu de chaque offre est celui décrit sur le site au moment de la commande.",
      "L’utilisation du service nécessite un appareil compatible, une application de lecture et une connexion internet stable. Les appareils, les applications tierces et l’accès à internet ne font pas partie de notre prestation."
    ]
  },
  {
    "title": "Article 3 – Commande",
    "paras": [
      "La présentation des offres sur le site constitue une invitation à commander. Votre commande, envoyée par le formulaire du site, par e-mail ou par WhatsApp, vaut offre ferme.",
      "Le contrat est conclu lorsque nous confirmons votre commande ou vous transmettons vos identifiants. La langue du contrat est le français."
    ]
  },
  {
    "title": "Article 4 – Prix et paiement",
    "paras": [
      "Les prix applicables sont ceux affichés sur le site au moment de la commande, en euros, toutes taxes comprises. Aucuns frais de livraison ne s’appliquent.",
      "Le prix de la durée choisie est payable en une seule fois, à la commande. Les moyens de paiement disponibles vous sont indiqués lors de la confirmation de commande."
    ]
  },
  {
    "title": "Article 5 – Durée de l’abonnement",
    "paras": [
      "L’abonnement commence à l’activation de vos identifiants et prend fin automatiquement à l’issue de la durée choisie. <strong>Il n’est pas renouvelé automatiquement</strong>, aucune résiliation n’est donc nécessaire."
    ]
  },
  {
    "title": "Article 6 – Droit de rétractation",
    "paras": [
      "Conformément à l’article L221-18 du Code de la consommation, vous disposez d’un délai de quatorze jours à compter de la conclusion du contrat pour exercer votre droit de rétractation, sans avoir à motiver votre décision.",
      "Pour l’exercer, informez-nous de votre décision par une déclaration dénuée d’ambiguïté, par exemple par e-mail à <a href=\"mailto:contact@streambleu.fr\">contact@streambleu.fr</a>. Vous pouvez utiliser le formulaire ci-dessous, qui n’est pas obligatoire. Nous vous remboursons tous les paiements reçus au plus tard quatorze jours après réception de votre demande, par le même moyen de paiement.",
      "Si vous avez demandé que le service commence avant la fin du délai de rétractation, vous nous devez, conformément à l’article L221-25 du Code de la consommation, un montant proportionnel au service fourni jusqu’à la communication de votre décision de vous rétracter.",
      "<strong>Modèle de formulaire de rétractation</strong><br>À l’attention de : Stream Bleu, 18 bis rue Waldeck Rochet, 92000 Nanterre, France, contact@streambleu.fr<br>Je vous notifie par la présente ma rétractation du contrat portant sur la prestation de services ci-dessous :<br>Commandé le :<br>Nom du consommateur :<br>Adresse du consommateur :<br>Signature (uniquement en cas de notification sur papier) :<br>Date :"
    ]
  },
  {
    "title": "Article 7 – Garantie commerciale",
    "paras": [
      "En plus du droit de rétractation, notre <a href=\"/politique-remboursement\">politique de remboursement</a> décrit les cas dans lesquels nous remboursons un abonnement en cas de problème technique. Elle ne limite pas vos droits légaux."
    ]
  },
  {
    "title": "Article 8 – Utilisation du service",
    "paras": [
      "L’accès est réservé à un usage privé et non commercial. Il est interdit de partager, revendre ou utiliser les identifiants sur plus d’appareils que ne le prévoit votre offre. Vous utilisez le service dans le respect de la loi. En cas de manquement grave, nous pouvons suspendre l’accès après vous en avoir informé."
    ]
  },
  {
    "title": "Article 9 – Disponibilité et responsabilité",
    "paras": [
      "Nous faisons notre possible pour assurer un service sans interruption. Des coupures ponctuelles dues à la maintenance, à un incident technique ou à des causes extérieures (par exemple votre fournisseur d’accès) ne peuvent être totalement exclues. Notre responsabilité ne peut être engagée pour les dommages résultant d’un cas de force majeure ou de votre équipement ou connexion. Rien dans les présentes ne limite les garanties légales dont vous bénéficiez en tant que consommateur."
    ]
  },
  {
    "title": "Article 10 – Réclamations et médiation",
    "paras": [
      "Pour toute réclamation, contactez-nous d’abord à <a href=\"mailto:contact@streambleu.fr\">contact@streambleu.fr</a>. Conformément à l’article L612-1 du Code de la consommation, vous pouvez recourir gratuitement à un médiateur de la consommation : CM2C (Centre de la Médiation de la Consommation de Conciliateurs de Justice), 49 rue de Ponthieu, 75008 Paris, France – <a href=\"https://www.cm2c.net/declarer-un-litige.php\" rel=\"noopener\">www.cm2c.net</a>."
    ]
  },
  {
    "title": "Article 11 – Droit applicable",
    "paras": [
      "Les présentes CGV sont soumises au droit français. En tant que consommateur, vous conservez la protection des dispositions impératives du droit de votre pays de résidence. En cas de litige, les tribunaux compétents sont déterminés selon les règles légales."
    ]
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "CGV", "item": "https://streambleu.fr/cgv"}
  ]
};

export default function CgvPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(90,95,207,0.04) 0%, #fdf5ff 35%, #fdf5ff 65%, rgba(200,80,100,0.04) 100%)", color: "#1a1a4e" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#5a5fcf" }}>Conditions générales de vente</h1>
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
