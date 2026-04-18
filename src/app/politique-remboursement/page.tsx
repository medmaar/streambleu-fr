import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de remboursement | Stream Bleu – IPTV France",
  description: "Politique de remboursement de Stream Bleu. En raison de la nature numérique instantanée de notre service, les remboursements ne sont pas possibles après activation. Un essai gratuit de 24h est disponible.",
  alternates: { canonical: "https://streambleu.fr/politique-remboursement" },
};

export default function PolitiqueRemboursementPage() {
  return (
    <main style={{ background: "linear-gradient(to right, rgba(90,95,207,0.04) 0%, #fdf5ff 35%, #fdf5ff 65%, rgba(200,80,100,0.04) 100%)", color: "#1a1a4e" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: "#5a5fcf" }}>Politique de remboursement</h1>
        <p style={{ color: "#666", fontSize: 13, marginBottom: 40 }}>Dernière mise à jour : 28 mars 2026</p>

        <div style={{ background: "#5a5fcf", borderRadius: 16, padding: 24, marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Résumé</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, lineHeight: 1.7 }}>
            En raison de la nature numérique instantanée de notre service, nous n&apos;offrons pas de remboursements une fois l&apos;abonnement activé. Pour vous protéger avant l&apos;achat, nous proposons un <strong>essai gratuit de 24h sans carte bancaire</strong>. Veuillez utiliser l&apos;essai pour vérifier la compatibilité avant de vous abonner.
          </p>
        </div>

        <div className="space-y-10 leading-relaxed" style={{ color: "#333" }}>
          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>1. Politique de non-remboursement</h2>
            <p className="mb-3">Toutes les ventes sont définitives. Une fois votre abonnement IPTV activé et vos identifiants transmis, nous ne pouvons pas offrir de remboursement pour les raisons suivantes :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Le service est livré numériquement et immédiatement après le paiement</li>
              <li>L&apos;activation donne un accès instantané à toutes les chaînes et contenus</li>
              <li>La nature des services numériques rend impossible le &quot;retour&quot; de l&apos;accès une fois accordé</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>2. Essai Gratuit — Testez avant d&apos;acheter</h2>
            <p className="mb-3">Nous encourageons vivement tous les nouveaux clients à utiliser notre essai gratuit de 24h avant d&apos;acheter un abonnement. L&apos;essai :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ne nécessite pas de carte bancaire</li>
              <li>Donne un accès complet à toutes les 25 000+ chaînes et 120 000+ titres VOD</li>
              <li>Vous permet de tester sur tous vos appareils</li>
              <li>N&apos;impose aucune obligation d&apos;achat</li>
            </ul>
            <p className="mt-3"><a href="/essai-gratuit" style={{ color: "#5a5fcf", fontWeight: 600 }}>Obtenez votre essai gratuit ici →</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>3. Exceptions</h2>
            <p className="mb-3">Nous examinerons un crédit ou une solution (pas un remboursement en espèces) dans les circonstances limitées suivantes :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service jamais activé :</strong> Si vous avez payé mais n&apos;avez jamais reçu vos identifiants en raison d&apos;une erreur technique de notre part, vous avez droit à un remboursement complet ou à une nouvelle livraison.</li>
              <li><strong>Panne prolongée :</strong> Si notre service subit une panne vérifiée de plus de 72 heures consécutives, nous fournirons une extension d&apos;abonnement au prorata.</li>
              <li><strong>Achat en double :</strong> Si vous avez accidentellement acheté le même forfait deux fois, nous rembourserons le double.</li>
            </ul>
            <p className="mt-3">Pour soumettre une demande d&apos;exception, contactez-nous dans les 7 jours suivant le problème.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>4. Rétrofacturations</h2>
            <p>Initier une rétrofacturation ou un litige de paiement sans nous contacter au préalable entraînera la résiliation immédiate du compte. Veuillez d&apos;abord contacter notre équipe de support — nous résolvons les problèmes rapidement et équitablement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#1a1a4e" }}>5. Nous contacter</h2>
            <p className="mb-4">Si vous pensez être éligible à une exception ou avez une question de facturation, contactez-nous.</p>
            <div style={{ background: "rgba(90,95,207,0.06)", borderRadius: 12, padding: 24, border: "1px solid rgba(90,95,207,0.15)" }}>
              <p><span style={{ color: "#5a5fcf", fontWeight: 600 }}>WhatsApp : </span><a href="https://wa.me/17828026280" target="_blank" rel="noopener noreferrer" style={{ color: "#5a5fcf" }}>+1 (782) 802-6280</a></p>
              <p className="mt-2"><span style={{ color: "#5a5fcf", fontWeight: 600 }}>Telegram : </span><a href="https://t.me/IPTVFranceSupport" target="_blank" rel="noopener noreferrer" style={{ color: "#5a5fcf" }}>@IPTVFranceSupport</a></p>
              <p className="mt-2"><span style={{ color: "#5a5fcf", fontWeight: 600 }}>Email : </span><a href="mailto:help@streambleu.fr" style={{ color: "#5a5fcf" }}>help@streambleu.fr</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
