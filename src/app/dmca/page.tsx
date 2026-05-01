import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique DMCA | Stream Bleu – IPTV France",
  description: "Politique DMCA de Stream Bleu. Apprenez comment soumettre un avis de retrait DMCA et notre processus de traitement des réclamations pour violation de droits d'auteur.",
  alternates: { canonical: "https://streambleu.fr/dmca" },
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "Politique DMCA", "item": "https://streambleu.fr/dmca"}
  ]
};
export default function DMCAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(90,95,207,0.04) 0%, #fdf5ff 35%, #fdf5ff 65%, rgba(200,80,100,0.04) 100%)", color: "#1a1a4e" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#5a5fcf" }}>Politique DMCA</h1>
        <p style={{ color: "#666", fontSize: 13, marginBottom: 32 }}>Dernière mise à jour : 28 mars 2026</p>

        <div style={{ border: "1px solid rgba(220,50,50,0.3)", borderRadius: 16, padding: 24, marginBottom: 40, background: "rgba(220,50,50,0.04)" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#5a5fcf", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Avertissement Légal</p>
          <p style={{ color: "#333", lineHeight: 1.7 }}>
            Stream Bleu est un revendeur de services IPTV tiers. Nous n&apos;hébergeons, ne stockons ni ne transmettons aucun contenu vidéo. Tous les flux sont fournis par des serveurs tiers indépendants. Si vous pensez que votre contenu protégé est accessible via notre plateforme, veuillez nous contacter à <a href="mailto:contact@streambleu.fr" style={{ color: "#5a5fcf" }}>contact@streambleu.fr</a> et nous transmettrons votre demande au prestataire concerné. Nous répondons à tous les avis DMCA valides dans les 72 heures.
          </p>
        </div>

        <div className="space-y-8 leading-relaxed" style={{ color: "#333" }}>
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>Présentation</h2>
            <p>Stream Bleu respecte les droits de propriété intellectuelle d&apos;autrui et attend de ses utilisateurs qu&apos;ils fassent de même. Conformément à la législation applicable sur le droit d&apos;auteur, nous répondrons rapidement aux réclamations pour violation du droit d&apos;auteur.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>Signalement d&apos;une violation de droits d&apos;auteur</h2>
            <p className="mb-3">Si vous pensez qu&apos;un contenu accessible via notre service viole vos droits d&apos;auteur, veuillez envoyer un avis écrit contenant les informations suivantes à notre agent DMCA désigné :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Une signature physique ou électronique du titulaire des droits ou de son représentant autorisé.</li>
              <li>Identification de l&apos;œuvre protégée dont la violation est alléguée.</li>
              <li>Identification du contenu supposément contrefaisant, avec suffisamment de détails pour que nous puissions le localiser.</li>
              <li>Vos coordonnées : nom, adresse, numéro de téléphone et adresse email.</li>
              <li>Une déclaration attestant de bonne foi que l&apos;utilisation contestée n&apos;est pas autorisée par le titulaire des droits.</li>
              <li>Une déclaration, sous peine de parjure, que les informations contenues dans votre avis sont exactes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>Contact de l&apos;agent DMCA</h2>
            <p className="mb-2">Envoyez tous les avis DMCA à notre agent désigné :</p>
            <div style={{ background: "rgba(90,95,207,0.06)", borderRadius: 12, padding: 24, border: "1px solid rgba(90,95,207,0.15)" }}>
              <p style={{ fontWeight: 700, color: "#1a1a4e" }}>Stream Bleu — Agent DMCA</p>
              <p>Email : <a href="mailto:contact@streambleu.fr" style={{ color: "#5a5fcf" }}>contact@streambleu.fr</a></p>
              <p style={{ fontSize: 13, color: "#666", marginTop: 8 }}>Veuillez indiquer « Avis DMCA » dans l&apos;objet du message.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>Contre-notification</h2>
            <p>Si vous pensez que votre contenu a été retiré par erreur ou identification incorrecte, vous pouvez soumettre une contre-notification à notre agent DMCA. La contre-notification doit inclure vos coordonnées, l&apos;identification du contenu retiré, une déclaration sous peine de parjure que le retrait était une erreur, et votre consentement à la juridiction de votre tribunal fédéral local.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>Contrevenants récidivistes</h2>
            <p>Stream Bleu se réserve le droit de résilier les comptes des utilisateurs reconnus comme des contrevenants récidivistes des droits de propriété intellectuelle.</p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
