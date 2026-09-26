import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Avertissement légal IPTV | Stream Bleu" },
  description:
    "Avertissement légal Stream Bleu : nous n'hébergeons ni ne diffusons aucun contenu protégé. Le contenu provient de fournisseurs tiers indépendants.",
  alternates: { canonical: "https://streambleu.fr/avertissement" },
  openGraph: {
    title: "Avertissement légal | Stream Bleu",
    description: "Stream Bleu n'héberge ni ne diffuse aucun contenu protégé. Le contenu provient de fournisseurs tiers indépendants.",
    url: "https://streambleu.fr/avertissement",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Stream Bleu – Avertissement légal" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  { q: "Stream Bleu héberge-t-il des contenus protégés ?", a: "Non. Stream Bleu n'héberge, ne produit ni ne stocke aucun contenu vidéo. Le service agit comme intermédiaire technique : les flux et contenus à la demande sont fournis par des prestataires tiers indépendants." },
  { q: "Qui est responsable du contenu que je regarde ?", a: "Vous restez responsable de vérifier que les contenus auxquels vous accédez sont conformes à la législation de votre pays de résidence. Stream Bleu ne peut être tenu responsable des contenus fournis par des tiers." },
  { q: "Que faire si je pense qu'un contenu protégé est diffusé sans autorisation ?", a: "Contactez-nous immédiatement à contact@streambleu.fr en précisant « Signalement copyright » dans l'objet. Nous transmettons chaque signalement au fournisseur tiers concerné." },
  { q: "Cet avertissement remplace-t-il les conditions d'utilisation ?", a: "Non. Cet avertissement complète nos conditions d'utilisation et notre politique de confidentialité, qui détaillent l'ensemble de vos droits et obligations en tant qu'utilisateur." },
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "Avertissement", "item": "https://streambleu.fr/avertissement"}
  ]
};
export default function AvertissementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", color: "#1a1a4e" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-[#5a5fcf]">Avertissement légal</h1>
        <p className="text-black text-sm mb-10">Dernière mise à jour : 4 avril 2026</p>

        <section className="space-y-8 text-black leading-relaxed">
          <div className="bg-transparent border border-red-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Avertissement sur le contenu</h2>
            <p className="text-black leading-relaxed">
              Stream Bleu n&apos;héberge ni ne diffuse aucun contenu protégé par le droit
              d&apos;auteur. L&apos;ensemble des contenus est fourni par des prestataires tiers.
              Les utilisateurs sont responsables de vérifier qu&apos;ils disposent des droits
              nécessaires pour visionner ce contenu dans leur juridiction. Pour une analyse
              complète de la légalité de l&apos;IPTV en France, consultez notre article{" "}
              <Link href="/blog/iptv-legal-france" className="text-[#5a5fcf] font-semibold hover:underline">
                L&apos;IPTV est-il légal en France ?
              </Link>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">Contenu tiers</h2>
            <p>
              Stream Bleu agit uniquement comme revendeur et intermédiaire technique pour des
              services IPTV tiers. Nous ne créons, ne produisons, n&apos;hébergeons, ne stockons
              ni ne transmettons nous-mêmes aucun contenu vidéo. L&apos;ensemble des flux,
              chaînes et contenus à la demande accessibles via notre plateforme sont fournis
              par des serveurs et prestataires tiers indépendants, sur lesquels nous n&apos;avons
              aucun contrôle direct.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">Responsabilité de l&apos;utilisateur</h2>
            <p className="mb-3">
              En utilisant le service Stream Bleu, vous reconnaissez et acceptez que :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>vous êtes seul responsable de vérifier la légalité de l&apos;accès à un contenu dans votre juridiction ;</li>
              <li>vous n&apos;utiliserez pas le service pour accéder à des contenus que vous n&apos;êtes pas légalement autorisé à visionner ;</li>
              <li>Stream Bleu n&apos;engage aucune responsabilité concernant les contenus accessibles via des prestataires tiers ;</li>
              <li>votre utilisation du service reste soumise aux lois et réglementations en vigueur dans votre pays de résidence.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">Absence de garantie</h2>
            <p>
              Le service est fourni « en l&apos;état », sans garantie d&apos;aucune sorte,
              expresse ou implicite. Stream Bleu ne garantit pas que le service sera ininterrompu,
              exempt d&apos;erreurs ou de tout composant nuisible. Nous déclinons toute garantie
              dans la limite autorisée par la loi applicable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">Limitation de responsabilité</h2>
            <p>
              Dans la limite autorisée par la loi applicable, Stream Bleu ne pourra être tenu
              responsable de tout dommage indirect, accessoire, spécial, consécutif ou punitif
              découlant de votre utilisation, ou de votre incapacité à utiliser, le service ou
              tout contenu accessible via celui-ci.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">Signalement d&apos;un contenu protégé</h2>
            <p>
              Si vous pensez qu&apos;un contenu protégé par le droit d&apos;auteur est accessible
              via notre plateforme sans autorisation, contactez-nous immédiatement. Nous prenons
              au sérieux tout signalement lié au droit d&apos;auteur et le transmettons sans
              délai au prestataire tiers concerné. Voir aussi notre{" "}
              <Link href="/dmca" className="text-[#5a5fcf] font-semibold hover:underline">politique DMCA</Link>.
            </p>
            <div className="mt-4 bg-transparent rounded-xl p-6 border border-gray-800">
              <p>E-mail : <a href="mailto:contact@streambleu.fr" className="text-[#5a5fcf] hover:underline">contact@streambleu.fr</a></p>
              <p className="text-[#5a5fcf] text-sm mt-2">Merci d&apos;indiquer « Signalement copyright » dans l&apos;objet de votre message.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Questions fréquentes</h2>
            <div className="space-y-3">
              {faqItems.map((f, i) => (
                <details key={i} className="bg-white rounded-2xl border border-gray-200 px-6">
                  <summary className="cursor-pointer font-bold py-4 text-black">{f.q}</summary>
                  <p className="pb-4 text-sm leading-relaxed text-gray-700">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center pt-4">
            {[
              { l: "/conditions-utilisation", t: "Conditions d'utilisation" },
              { l: "/politique-confidentialite", t: "Politique de confidentialité" },
              { l: "/dmca", t: "Politique DMCA" },
              { l: "/blog/iptv-legal-france", t: "IPTV légal en France" },
            ].map((x) => (
              <Link key={x.l} href={x.l} className="text-sm font-semibold px-4 py-2 rounded-full border border-[#5a5fcf]/30 text-[#5a5fcf] hover:bg-[#5a5fcf]/10">
                {x.t}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
