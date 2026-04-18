import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de remboursement | Stream Bleu – Best 4K IPTV France",
  description: "Refund policy for Stream Bleu, de France meilleur IPTV service. Learn about our no-refund policy and how our essai gratuit protects you before you subscribe.",
  alternates: { canonical: "https://streambleu.fr/refund-policy" },
  openGraph: {
    title: "Politique de remboursement | Stream Bleu – Best 4K IPTV France",
    description: "Refund policy for Stream Bleu, de France meilleur IPTV service. Learn about our no-refund policy and how our essai gratuit protects you.",
    url: "https://streambleu.fr/refund-policy",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Stream Bleu – Best 4K IPTV France" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RefundPolicyPage() {
  return (
    <main style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", color: "#1a1a4e" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-[#5a5fcf]">Politique de remboursement</h1>
        <p className="text-black text-sm mb-10">Last updated: March 28, 2026</p>

        {/* Summary box */}
        <div style={{ background: "#5a5fcf", border: "1px solid rgba(197,188,245,0.3)", borderRadius: 16, padding: "24px", marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#ffffff", marginBottom: 8 }}>Summary</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.7 }}>
            Due to the instant digital nature of our service, we do not offer refunds once a subscription
            has been activated. To protect you before purchase, we offer a <strong>free 24h trial with
            no credit card required</strong>. Please use the trial to verify compatibility before subscribing.
          </p>
        </div>

        <div className="space-y-10 text-black leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. No-Politique de remboursement</h2>
            <p className="mb-3">All sales are final. Once your IPTV subscription has been activated and credentials delivered, we are unable to offer refunds for the following reasons:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The service is delivered digitally and immediately upon payment</li>
              <li>Activation provides instant access to all channels and content</li>
              <li>The nature of digital services makes it impossible to "return" access once granted</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. Essai Gratuit — Try Before You Buy</h2>
            <p className="mb-3">We strongly encourage all new customers to use our free 24h trial before purchasing a subscription. The trial:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Requires no credit card</li>
              <li>Gives full access to all 25 000+ channels and 120 000+ VOD titles</li>
              <li>Lets you test on all your devices</li>
              <li>Carries zero obligation to purchase</li>
            </ul>
            <p className="mt-3">
              <a href="/free-trial" className="text-[#5a5fcf] hover:underline font-semibold">Get your essai gratuit here →</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. Exceptions</h2>
            <p className="mb-3">We will consider a credit or resolution (not a cash refund) in the following limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service never activated:</strong> If you paid but never received your credentials due to a technical error on our end, you are entitled to a full refund or re-delivery.</li>
              <li><strong>Extended outage:</strong> If our service experiences a verified outage exceeding 72 consecutive hours, we will provide a pro-rated subscription extension.</li>
              <li><strong>Duplicate purchase:</strong> If you accidentally purchased the same plan twice, we will refund the duplicate charge.</li>
            </ul>
            <p className="mt-3">To submit an exception request, contact us within 7 days of the issue.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">4. Chargebacks</h2>
            <p>Initiating a chargeback or payment dispute without first contacting us will result in immediate account termination and may be reported to payment processors. Please contact our support team first — we resolve issues quickly and fairly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">5. How to Nous Contacter</h2>
            <p className="mb-4">If you believe you qualify for an exception or have a billing concern, please reach out — we're here to help.</p>
            <div className="bg-transparent rounded-xl p-6 border border-gray-800 space-y-3">
              <p>
                <span className="text-black text-sm">WhatsApp: </span>
                <a href="https://wa.me/17828026280" target="_blank" rel="noopener noreferrer" className="text-[#5a5fcf] hover:underline">+1 (782) 802-6280</a>
              </p>
              <p>
                <span className="text-black text-sm">Telegram: </span>
                <a href="https://t.me/IPTVFranceSupport" target="_blank" rel="noopener noreferrer" className="text-[#5a5fcf] hover:underline">@IPTVFranceSupport</a>
              </p>
              <p>
                <span className="text-black text-sm">Email: </span>
                <a href="mailto:help@streambleu.fr" className="text-[#5a5fcf] hover:underline">help@streambleu.fr</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
