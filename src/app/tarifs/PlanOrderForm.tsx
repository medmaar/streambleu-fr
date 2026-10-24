"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import SuccessCheck from "../../components/SuccessCheck";

const countries = [
  "France", "Belgique", "Suisse", "Luxembourg", "Canada", "Maroc", "Algérie",
  "Tunisie", "Sénégal", "Cameroun", "Côte d'Ivoire", "Madagascar", "Mali",
  "Allemagne", "Espagne", "Italie", "Portugal", "Pays-Bas", "Suède", "Norvège",
  "Danemark", "Finlandee", "Irlande", "Royaume-Uni", "États-Unis", "Australie",
  "Nouvelle-Zélande", "Émirats Arabes Unis", "Qatar", "Koweït", "Arabie Saoudite",
  "Liban", "Jordanieie", "Turquie", "Brésil", "Mexique", "Colombie", "Argentine", "Autre",
];

const deviceTypes = [
  "Smart TV (Samsung / LG / Philips)",
  "Amazon Fire Stick",
  "Box Android TV",
  "Téléphone / Tablette Android",
  "iPhone / iPad",
  "MAG Box",
  "Apple TV",
  "PC Windows / Mac",
  "Autre",
];

interface Props {
  plan: string;
}

export default function PlanOrderForm({ plan }: Props) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    country: "France",
    device: "",
    message: "",
  });
  const [phone, setPhone] = useState<string | undefined>("");
  const [emailWarning, setEmailWarning] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    emailjs.init("KfpszCeX5M5itfdsO");
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      setEmailWarning(value.length > 3 && !value.includes("@"));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const result = await emailjs.send(
        "service_wqw39vi",
        "template_3jpw5qp",
        {
          from_name: form.full_name || "Non renseigné",
          from_email: form.email || "Non renseigné",
          phone: phone || "Non renseigné",
          country: form.country,
          device: form.device || "Non précisé",
          plan,
          message: form.message || "—",
          site_name: "Stream Bleu",
        }
      );
      console.log("EmailJS success:", result);
      setStatus("success");
      setForm({ full_name: "", email: "", country: "France", device: "", message: "" });
      setPhone("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return <SuccessCheck title="Commande confirmée !" text="Vous recevrez vos identifiants en moins de 5 minutes." />;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">

      {/* Erreur */}
      {status === "error" && (
        <div className="rounded-2xl px-4 py-3 text-sm font-semibold"
          style={{ background: "#fdecec", border: "1px solid #f08080", color: "#9b1c1c" }}>
          ❌ Une erreur s&apos;est produite. Réessayez ou{" "}
          <a href={`/discuter/wa?msg=${encodeURIComponent(`Je souhaite commander le ${plan}.`)}`} target="_blank" rel="noopener noreferrer" className="underline">
            contactez-nous
          </a>.
        </div>
      )}

      {/* Nom complet */}
      <div>
        <label htmlFor="po-name" className="sb-label">Nom complet</label>
        <input id="po-name" type="text" name="full_name" autoComplete="name" placeholder="Ex : Jean Dupont"
          value={form.full_name} onChange={handleChange} className="sb-field" />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="po-email" className="sb-label">Adresse email</label>
        <input id="po-email" type="email" inputMode="email" name="email" autoComplete="email" placeholder="vous@exemple.com"
          value={form.email} onChange={handleChange} className="sb-field" />
        {emailWarning && (
          <p className="text-xs mt-1" style={{ color: "#ffd166" }}>
            Cet email ne semble pas valide — assurez-vous qu&apos;il contient @
          </p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label className="sb-label">Téléphone / WhatsApp</label>
        <div className="phone-input-wrapper">
          <PhoneInput international defaultCountry="FR" value={phone} onChange={setPhone} placeholder="+33 6 00 00 00 00" />
        </div>
      </div>

      {/* Pays */}
      <div>
        <label htmlFor="po-country" className="sb-label">Pays</label>
        <select id="po-country" name="country" value={form.country} onChange={handleChange} className="sb-field">
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Appareil */}
      <div>
        <label htmlFor="po-device" className="sb-label">Type d&apos;appareil</label>
        <select id="po-device" name="device" value={form.device} onChange={handleChange} className="sb-field">
          <option value="">Sélectionnez votre appareil</option>
          {deviceTypes.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="po-message" className="sb-label">Message</label>
        <textarea id="po-message" name="message" placeholder="Demandes particulières ?"
          value={form.message} onChange={handleChange} rows={3}
          className="sb-field" style={{ resize: "vertical" }} />
      </div>

      <button type="submit" disabled={status === "loading"} className="sb-submit">
        {status === "loading" ? "Envoi en cours…" : "Commander →"}
      </button>

      <p style={{ textAlign: "center", color: "rgba(255,255,255,0.85)", fontSize: 12 }}>
        🔒 Sécurisé · Identifiants reçus en moins de 5 minutes
      </p>
    </form>
  );
}
