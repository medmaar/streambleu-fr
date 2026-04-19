import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avertissement | Stream Bleu – Best 4K IPTV France",
  description:
    "Legal disclaimer for Stream Bleu, de France meilleur IPTV service. We do not host or stream any copyrighted content. All content is provided by third-party providers.",
  alternates: { canonical: "https://streambleu.fr/avertissement" },
  openGraph: {
    title: "Avertissement | Stream Bleu – Best 4K IPTV France",
    description: "Legal disclaimer for Stream Bleu, de France meilleur IPTV service. We do not host or stream any copyrighted content.",
    url: "https://streambleu.fr/disclaimer",
    type: "website",
    siteName: "Stream Bleu",
    locale: "fr_FR",
    images: [{ url: "/abonnement-iptv-france-1.jpg", width: 800, height: 533, alt: "Stream Bleu – Best 4K IPTV France" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function AvertissementPage() {
  return (
    <main style={{ background: "linear-gradient(to right, rgba(100,130,255,0.08) 0%, #c5bcf5 30%, #fdf5ff 60%, rgba(220,100,120,0.07) 100%)", color: "#1a1a4e" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-[#5a5fcf]">Avertissement</h1>
        <p className="text-black text-sm mb-10">Last updated: April 4, 2026</p>

        <section className="space-y-8 text-black leading-relaxed">
          <div className="bg-transparent border border-red-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Content Avertissement</h2>
            <p className="text-black leading-relaxed">
              Stream Bleu does not host or stream any copyrighted content. All content is
              provided by third-party providers. Users are responsible for ensuring they have
              the rights to view content in their jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">Third-Party Content</h2>
            <p>
              Stream Bleu acts solely as a reseller and intermediary for third-party IPTV
              services. We do not create, produce, host, store, or transmit any video content
              ourselves. All streams, channels, and on-demand content accessible through our
              platform are delivered by independent third-party servers and providers over
              which we have no direct control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">User Responsibility</h2>
            <p className="mb-3">
              By using the Stream Bleu service, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are solely responsible for determining the legality of accessing any content in your jurisdiction.</li>
              <li>You will not use the service to access content you are not legally permitted to view.</li>
              <li>Stream Bleu bears no liability for any content accessed through third-party providers.</li>
              <li>Your use of the service is subject to the laws and regulations of your local jurisdiction.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">No Warranties</h2>
            <p>
              The service is provided &quot;as is&quot; without warranties of any kind, express or implied.
              Stream Bleu does not warrant that the service will be uninterrupted, error-free,
              or free of viruses or other harmful components. We disclaim all warranties to the
              fullest extent permitted by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Stream Bleu shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages
              arising from your use of, or inability to use, the service or any content
              accessed through it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">Copyright Concerns</h2>
            <p>
              If you believe that copyrighted content is being made accessible through our
              platform without authorization, please contact us immediately. We take all
              copyright concerns seriously and will forward your complaint to the appropriate
              third-party provider.
            </p>
            <div className="mt-4 bg-transparent rounded-xl p-6 border border-gray-800">
              <p>Email: <a href="mailto:help@streambleu.fr" className="text-[#5a5fcf] hover:underline">help@streambleu.fr</a></p>
              <p className="text-[#5a5fcf] text-sm mt-2">Please include &quot;Copyright Concern&quot; in the subject line.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
