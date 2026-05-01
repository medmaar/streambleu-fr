import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Stream Bleu – IPTV France",
  description: "Politique de confidentialité de Stream Bleu. Découvrez comment nous collectons, utilisons et protégeons vos informations personnelles.",
  alternates: { canonical: "https://streambleu.fr/politique-confidentialite" },
};

const sections = [
  {
    num: "1", title: "Informations que nous collectons",
    content: "Lorsque vous utilisez Stream Bleu, nous pouvons collecter les types d'informations suivants :",
    list: [
      "Informations de compte : votre nom, adresse email et coordonnées fournies lors de votre inscription ou prise de contact.",
      "Informations de paiement : données de transaction traitées par nos prestataires de paiement. Nous ne stockons pas les numéros de carte bancaire complets.",
      "Données d'utilisation : informations sur la façon dont vous utilisez notre service, y compris le type d'appareil, l'adresse IP et l'activité de streaming.",
      "Communications : messages que vous nous envoyez par email, WhatsApp ou Telegram.",
    ]
  },
  {
    num: "2", title: "Comment nous utilisons vos informations",
    content: "Nous utilisons les informations collectées pour :",
    list: [
      "Fournir, maintenir et améliorer notre service IPTV",
      "Traiter les transactions et envoyer les informations associées",
      "Envoyer des mises à jour de service, des avis techniques et des messages de support",
      "Répondre à vos commentaires et questions",
      "Surveiller et analyser les tendances d'utilisation pour améliorer l'expérience utilisateur",
      "Détecter et prévenir les utilisations frauduleuses ou non autorisées",
    ]
  },
  {
    num: "3", title: "Partage des informations",
    content: "Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les circonstances suivantes :",
    list: [
      "Prestataires de services : sociétés tierces de confiance qui nous aident à exploiter notre service (ex : processeurs de paiement), soumises à des accords de confidentialité.",
      "Exigences légales : lorsque la loi, une décision de justice ou une autorité gouvernementale l'exige.",
      "Transferts d'entreprise : dans le cadre d'une fusion, acquisition ou vente d'actifs, avec des protections de confidentialité appropriées.",
    ]
  },
  {
    num: "4", title: "Conservation des données",
    content: "Nous conservons vos informations personnelles aussi longtemps que votre compte est actif ou que nécessaire pour vous fournir notre service. Vous pouvez demander la suppression de vos données à tout moment en nous contactant. Nous répondrons dans les 30 jours.",
  },
  {
    num: "5", title: "Sécurité",
    content: "Nous mettons en œuvre des mesures de sécurité conformes aux normes du secteur pour protéger vos informations personnelles contre tout accès, divulgation, altération ou destruction non autorisés. Cependant, aucune méthode de transmission sur internet n'est sécurisée à 100 %.",
  },
  {
    num: "6", title: "Cookies",
    content: "Notre site web peut utiliser des cookies et des technologies de suivi similaires pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies, bien que certaines parties du site puissent ne pas fonctionner correctement.",
  },
  {
    num: "7", title: "Vos droits (résidents français)",
    content: "Conformément au RGPD (Règlement Général sur la Protection des Données), vous avez le droit de :",
    list: [
      "Accéder aux informations personnelles que nous détenons sur vous",
      "Demander la correction d'informations inexactes",
      "Retirer votre consentement à l'utilisation de vos informations personnelles",
      "Demander la suppression de vos informations personnelles",
      "Vous opposer au traitement de vos données à des fins de marketing direct",
    ]
  },
  {
    num: "8", title: "Modifications de cette politique",
    content: "Nous pouvons mettre à jour cette Politique de confidentialité de temps en temps. Nous vous informerons des changements importants en publiant la nouvelle politique sur cette page avec une date mise à jour.",
  },
];


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "Politique de confidentialité", "item": "https://streambleu.fr/politique-confidentialite"}
  ]
};
export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(90,95,207,0.04) 0%, #fdf5ff 35%, #fdf5ff 65%, rgba(200,80,100,0.04) 100%)", color: "#1a1a4e" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#5a5fcf" }}>Politique de confidentialité</h1>
        <p style={{ color: "#666", fontSize: 13, marginBottom: 40 }}>Dernière mise à jour : 28 mars 2026</p>
        <div className="space-y-8 leading-relaxed">
          {sections.map(s => (
            <section key={s.num}>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>{s.num}. {s.title}</h2>
              <p style={{ color: "#333", marginBottom: s.list ? 12 : 0 }}>{s.content}</p>
              {s.list && (
                <ul className="list-disc pl-6 space-y-2">
                  {s.list.map((item, i) => <li key={i} style={{ color: "#333" }}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}
          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>9. Nous contacter</h2>
            <p style={{ color: "#333", marginBottom: 16 }}>Si vous avez des questions concernant cette Politique de confidentialité :</p>
            <div style={{ background: "rgba(90,95,207,0.06)", borderRadius: 12, padding: 24, border: "1px solid rgba(90,95,207,0.15)" }}>
              <p>Email : <a href="mailto:help@streambleu.fr" style={{ color: "#5a5fcf" }}>help@streambleu.fr</a></p>
              <p className="mt-2">WhatsApp : <a href="https://wa.me/17828026280" target="_blank" rel="noopener noreferrer" style={{ color: "#5a5fcf" }}>+1 (782) 802-6280</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
    </>
  );
}
