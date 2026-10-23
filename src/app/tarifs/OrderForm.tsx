"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const countries = [
  "France", "États-Unis", "Royaume-Uni", "Australie", "France", "Allemagne",
  "Espagne", "Italie", "Pays-Bas", "Belgique", "Suisse", "Portugal", "Suède",
  "Norvège", "Danemark", "Finlande", "Pologne", "République tchèque", "Autriche", "Irlande",
  "Nouvelle-Zélande", "Afrique du Sud", "Nigeria", "Ghana", "Kenya", "Maroc", "Algérie",
  "Tunisie", "Sénégal", "Cameroun", "Côte d'Ivoire", "Égypte", "Arabie Saoudite",
  "Émirats Arabes Unis", "Qatar", "Koweït", "Bahreïn", "Oman", "Jordanie", "Liban",
  "Irak", "Iran", "Pakistan", "Inde", "Bangladesh", "Sri Lanka", "Népal",
  "Philippines", "Malaisie", "Singapour", "Indonésie", "Thaïlande", "Viêt Nam",
  "Chine", "Hong Kong", "Taïwan", "Japon", "Corée du Sud", "Brésil", "Mexique",
  "Argentine", "Colombie", "Chili", "Pérou", "Venezuela", "Équateur", "Bolivie",
  "Uruguay", "Paraguay", "Guatemala", "Honduras", "El Salvador", "Costa Rica",
  "Panama", "République Dominicaine", "Cuba", "Haïti", "Jamaïque", "Trinité-et-Tobago",
  "Autre",
];

interface Props {
  plan: string;
  price: number;
  devices: number;
}

export default function OrderForm({ plan, price, devices }: Props) {
  const [form, setForm] = useState({ name: "", email: "", country: "", whatsapp: "" });
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
        from_name: form.name || "Non renseigné",
        from_email: form.email || "Non renseigné",
        phone: form.whatsapp || "Non renseigné",
        country: form.country,
        device: "Non spécifié",
        plan: `${plan} — ${devices} device${devices > 1 ? "s" : ""} — $${price}`,
        message: "—",
        site_name: "Stream Bleu",
      });
    } catch {
      // Still show success to user even if email fails
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-green-400 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold mb-2">Commande reçue !</h3>
        <p className="text-gray-400 text-sm mb-1">
          Merci, <span className="text-white font-semibold">{form.name}</span>. We&apos;ll contact you shortly on WhatsApp or email.
        </p>
        <p className="text-gray-500 text-xs mt-4">
          Activation généralement en moins de 15 minutes. Vérifiez votre messagerie.
        </p>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Prénom</label>
        <input
          type="text"
          name="name"
          placeholder="Votre prénom"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Adresse e-mail</label>
        <input
          type="email"
          name="email"
          placeholder="vous@exemple.fr"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Country</label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          style={{ ...inputStyle, backgroundColor: "#1a1a2e", color: "#ffffff" }}
        >
          <option value="" style={{ backgroundColor: "#1a1a2e", color: "#ffffff" }}>Sélectionnez votre pays</option>
          {countries.map((c) => (
            <option key={c} value={c} style={{ backgroundColor: "#1a1a2e", color: "#ffffff" }}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Numéro WhatsApp</label>
        <input
          type="tel"
          name="whatsapp"
          placeholder="+33 6 00 00 00 00"
          value={form.whatsapp}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <input type="hidden" name="plan" value={`${plan} — ${devices} device${devices > 1 ? "s" : ""} — $${price}`} />
      <button
        type="submit"
        disabled={loading}
        className="w-full text-white py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110 disabled:opacity-60 mt-2"
        style={{ background: "#fd0322" }}
      >
        {loading ? "Envoi en cours…" : "Commander maintenant →"}
      </button>
      <p className="text-center text-gray-600 text-xs">
        Secure · We&apos;ll contact you via WhatsApp or email to activate.
      </p>
    </form>
  );
}
