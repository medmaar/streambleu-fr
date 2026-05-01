"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Stream Bleu", "item": "https://streambleu.fr"},
    {"@type": "ListItem", "position": 2, "name": "Commande", "item": "https://streambleu.fr/commande"}
  ]
};

const COUNTRIES = [
  "France","Belgique","Suisse","Luxembourg","Canada","Maroc","Algérie","Tunisie",
  "Sénégal","Cameroun","Côte d'Ivoire","Allemagne","Espagne","Italie","Pays-Bas",
  "Royaume-Uni","États-Unis","Australie","Émirats Arabes Unis","Qatar","Arabie Saoudite",
  "Liban","Turquie","Brésil","Mexique","Autre",
];

function OrderContent() {
  const params = useSearchParams();
  const appareils = params.get("appareils") || "1";
  const duration = params.get("duration") || "1 Mois";
  const price = params.get("price") || "9";

  const [form, setForm] = useState({ name: "", email: "", country: "France", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("KfpszCeX5M5itfdsO");
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send("service_wqw39vi", "template_3jpw5qp", {
        plan:      `${duration} — ${appareils} appareil${Number(appareils) > 1 ? "s" : ""} — ${price}€`,
        full_name: form.name,
        email:     form.email,
        phone:     form.phone || "—",
        country:   form.country,
        device:    "—",
        message:   "—",
        reply_to:  form.email,
        site_name: "Stream Bleu",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <main style={{ background: "linear-gradient(to right, rgba(90,95,207,0.08) 0%, #f5f0ff 35%, #fdf5ff 65%, rgba(200,80,100,0.06) 100%)", color: "#1a1a4e" }} className="min-h-screen py-16 px-4 flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-3xl font-extrabold mb-4 text-[#5a5fcf]">Commande reçue !</h1>
            <p className="text-gray-600 text-lg mb-2">Merci <strong>{form.name}</strong>.</p>
            <p className="text-gray-500">Nous vous contacterons à <strong>{form.email}</strong> dans quelques minutes pour activer votre abonnement.</p>
            <a href="/tarifs" className="inline-block mt-8 text-[#5a5fcf] font-semibold text-sm">← Retour aux tarifs</a>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: "linear-gradient(to right, rgba(90,95,207,0.08) 0%, #f5f0ff 35%, #fdf5ff 65%, rgba(200,80,100,0.06) 100%)", color: "#1a1a4e" }} className="min-h-screen py-16 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
              Plus qu&apos;une étape
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
              Finaliser votre <span className="text-[#5a5fcf]">commande</span>
            </h1>
            <p className="text-gray-600">Remplissez le formulaire — activation en quelques minutes.</p>
          </div>

          {/* Plan summary */}
          <div className="bg-white border border-[#5a5fcf]/20 rounded-2xl p-6 mb-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#5a5fcf] mb-4">Votre forfait</h2>
            <div className="flex justify-between items-center mb-2 text-sm">
              <span className="text-gray-500">Durée</span>
              <span className="font-bold text-gray-800">{duration}</span>
            </div>
            <div className="flex justify-between items-center mb-2 text-sm">
              <span className="text-gray-500">Appareils</span>
              <span className="font-bold text-gray-800">{appareils} {Number(appareils) === 1 ? "Appareil" : "Appareils"}</span>
            </div>
            <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between items-center">
              <span className="font-bold text-gray-700">Total</span>
              <span className="text-3xl font-extrabold text-[#5a5fcf]">{price}€</span>
            </div>
          </div>

          {/* Order form */}
          <div className="bg-white border border-[#5a5fcf]/20 rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-lg font-bold text-[#5a5fcf] mb-6">Vos coordonnées</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Prénom <span className="text-red-500">*</span></label>
                <input type="text" name="name" required placeholder="Ex. Jean" value={form.name} onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 text-sm outline-none focus:border-[#5a5fcf] focus:ring-2 focus:ring-[#5a5fcf]/10 transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Adresse e-mail <span className="text-red-500">*</span></label>
                <input type="email" name="email" required placeholder="jean@exemple.fr" value={form.email} onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 text-sm outline-none focus:border-[#5a5fcf] focus:ring-2 focus:ring-[#5a5fcf]/10 transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Pays <span className="text-red-500">*</span></label>
                <select name="country" required value={form.country} onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 text-sm outline-none focus:border-[#5a5fcf] focus:ring-2 focus:ring-[#5a5fcf]/10 transition">
                  <option value="">Sélectionnez votre pays</option>
                  {COUNTRIES.map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp (optionnel)</label>
                <input type="tel" name="phone" placeholder="+33 6 00 00 00 00" value={form.phone} onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 text-sm outline-none focus:border-[#5a5fcf] focus:ring-2 focus:ring-[#5a5fcf]/10 transition" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full py-4 rounded-2xl font-bold text-white text-base transition-all hover:brightness-110 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg,#5a5fcf,#e11d2e)", boxShadow: "0 8px 24px rgba(90,95,207,0.25)" }}>
                {loading ? "Envoi en cours…" : "Confirmer la commande →"}
              </button>
              <p className="text-center text-gray-400 text-xs">Sécurisé · Confirmation par e-mail en quelques minutes.</p>
            </form>
          </div>

          <div className="text-center">
            <a href="/tarifs" className="text-[#5a5fcf] hover:text-[#5a5fcf] text-sm transition-colors">← Retour aux tarifs</a>
          </div>
        </div>
      </main>
    </>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-500">Chargement...</div>}>
      <OrderContent />
    </Suspense>
  );
}
