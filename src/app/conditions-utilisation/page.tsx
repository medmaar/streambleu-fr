import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Stream Bleu – IPTV France",
  description: "Conditions d'utilisation de Stream Bleu, le meilleur service IPTV en France. Lisez nos conditions avant d'utiliser notre service IPTV.",
  alternates: { canonical: "https://streambleu.fr/conditions-utilisation" },
};

const sections = [
  { num: "1", title: "Acceptation des conditions", content: "En accédant ou en utilisant le service Stream Bleu (« Service »), vous acceptez d'être lié par ces Conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre Service." },
  { num: "2", title: "Description du service", content: "Stream Bleu fournit un service de streaming télévisé par internet offrant l'accès à des chaînes en direct, des vidéos à la demande et des contenus connexes. Le Service nécessite un appareil compatible et une connexion internet haut débit." },
  { num: "3", title: "Inscription au compte", content: "Pour utiliser notre Service, vous devez avoir au moins 18 ans, fournir des informations d'inscription exactes et complètes, garder vos identifiants de connexion confidentiels, et nous informer immédiatement de toute utilisation non autorisée de votre compte. Vous êtes responsable de toute l'activité sur votre compte." },
  { num: "4", title: "Utilisation autorisée", content: "Votre abonnement est réservé à un usage personnel et non commercial. Vous ne pouvez pas partager vos identifiants avec des personnes extérieures à votre foyer, revendre ou redistribuer l'accès au Service, l'utiliser pour des diffusions publiques ou commerciales, ou tenter de contourner des mesures de sécurité techniques." },
  { num: "5", title: "Paiement et facturation", content: "Tous les abonnements sont prépayés. Les prix sont libellés en euros (EUR). En achetant un abonnement, vous acceptez que tous les frais soient dus au moment de l'achat, qu'il n'y a pas de renouvellement automatique, et que les prix peuvent changer avec un préavis raisonnable." },
  { num: "6", title: "Disponibilité du service", content: "Nous nous efforçons de maintenir une disponibilité de 99,9 % mais ne garantissons pas un accès ininterrompu au Service. Nous ne sommes pas responsables des interruptions causées par des pannes internet, des fenêtres de maintenance ou des circonstances indépendantes de notre volonté." },
  { num: "7", title: "Propriété intellectuelle", content: "Tout le contenu disponible via le Service est protégé par le droit d'auteur et d'autres lois sur la propriété intellectuelle. Vous ne pouvez pas enregistrer, télécharger, reproduire ou distribuer tout contenu du Service sans l'autorisation écrite expresse des titulaires des droits respectifs." },
  { num: "8", title: "Résiliation", content: "Nous nous réservons le droit de suspendre ou de résilier votre accès au Service à tout moment, sans préavis, si vous violez ces Conditions d'utilisation. En cas de résiliation pour violation, aucun remboursement ne sera effectué." },
  { num: "9", title: "Limitation de responsabilité", content: "Dans toute la mesure permise par la loi applicable, Stream Bleu ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs découlant de votre utilisation du Service. Notre responsabilité totale envers vous ne dépassera pas le montant que vous avez payé pour le Service au cours des trois mois précédant la réclamation." },
  { num: "10", title: "Droit applicable", content: "Ces Conditions d'utilisation sont régies et interprétées conformément aux lois françaises applicables, sans égard aux principes de conflit de lois." },
  { num: "11", title: "Modifications des conditions", content: "Nous pouvons modifier ces Conditions d'utilisation à tout moment. Nous vous informerons des changements importants en mettant à jour la date en haut de cette page. L'utilisation continue du Service après l'entrée en vigueur des modifications constitue votre acceptation des conditions révisées." },
];

export default function ConditionsUtilisationPage() {
  return (
    <main style={{ background: "linear-gradient(to right, rgba(90,95,207,0.04) 0%, #fdf5ff 35%, #fdf5ff 65%, rgba(200,80,100,0.04) 100%)", color: "#1a1a4e" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#5a5fcf" }}>Conditions d&apos;utilisation</h1>
        <p style={{ color: "#666", fontSize: 13, marginBottom: 40 }}>Dernière mise à jour : 28 mars 2026</p>
        <div className="space-y-8 leading-relaxed">
          {sections.map(s => (
            <section key={s.num}>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>{s.num}. {s.title}</h2>
              <p style={{ color: "#333" }}>{s.content}</p>
            </section>
          ))}
          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>12. Nous contacter</h2>
            <p style={{ color: "#333", marginBottom: 16 }}>Pour toute question concernant ces Conditions d&apos;utilisation :</p>
            <div style={{ background: "rgba(90,95,207,0.06)", borderRadius: 12, padding: 24, border: "1px solid rgba(90,95,207,0.15)" }}>
              <p>Email : <a href="mailto:help@streambleu.fr" style={{ color: "#5a5fcf" }}>help@streambleu.fr</a></p>
              <p className="mt-2">WhatsApp : <a href="https://wa.me/17828026280" target="_blank" rel="noopener noreferrer" style={{ color: "#5a5fcf" }}>+1 (782) 802-6280</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
