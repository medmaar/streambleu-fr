"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import SuccessCheck from "../../components/SuccessCheck";

const WORKER_URL = "https://iptv-trial-streambleu.medmaar.workers.dev";

const countries = [
  "France", "Belgique", "Suisse", "Luxembourg", "Canada", "Maroc", "Algérie",
  "Tunisie", "Sénégal", "Cameroun", "Côte d'Ivoire", "Madagascar",
  "Allemagne", "Espagne", "Italie", "Portugal", "Pays-Bas", "Royaume-Uni",
  "États-Unis", "Australie", "Émirats Arabes Unis", "Autre",
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

export default function EssaiGratuitForm() {
  const [form, setForm] = useState({ full_name: "", email: "", country: "France", device: "", message: "" });
  const [phone, setPhone] = useState<string | undefined>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    emailjs.init("KfpszCeX5M5itfdsO");
  }, []);

  // Every field is optional. With an email the trial is created and sent automatically;
  // without one (or if the automation fails) the team gets the request and sends it by hand.
  async function notifyTeam(reason: string) {
    await emailjs.send("service_wqw39vi", "template_3jpw5qp", {
      from_name: form.full_name || "Non renseigné",
      from_email: form.email || "Non renseigné",
      phone: phone || "Non renseigné",
      country: form.country,
      device: form.device || "Non précisé",
      plan: `Essai gratuit 24h — à envoyer manuellement (${reason})`,
      message: form.message || "—",
      site_name: "Stream Bleu",
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const email = form.email.trim();
      let sent = false;
      if (email.includes("@")) {
        try {
          const res = await fetch(WORKER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name:     form.full_name.trim() || "Client",
              email,
              country:  form.country,
              device:   form.device || "Non précisé",
              whatsapp: phone || "",
              notes:    form.message || "",
            }),
          });
          const data = await res.json();
          if (!res.ok || !data.success) throw new Error(data.error || "Erreur Worker");
          sent = true;
        } catch (err) {
          console.error(err);
        }
      }
      if (!sent) await notifyTeam(email ? "activation auto échouée" : "pas d'email");
      setStatus("success");
      setForm({ full_name: "", email: "", country: "France", device: "", message: "" });
      setPhone("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return <SuccessCheck title="Essai confirmé !" text="Vous recevrez vos identifiants en quelques minutes." />;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">

      {/* Error */}
      {status === "error" && (
        <div style={{ background: "#fdecec", border: "1px solid #f08080", color: "#9b1c1c", borderRadius: 12, padding: "12px 16px", fontSize: 14, fontWeight: 600 }}>
          Une erreur est survenue. Veuillez réessayer ou{" "}
          <a href={`/discuter/wa`} target="_blank" rel="noopener noreferrer" style={{ color: "#9b1c1c", textDecoration: "underline" }}>
            contactez-nous
          </a>.
        </div>
      )}

      {/* Nom */}
      <div>
        <label className="sb-label">Nom complet</label>
        <input type="text" autoComplete="name" name="full_name" placeholder="Votre nom" value={form.full_name} onChange={handleChange} className="sb-field" />
      </div>

      {/* Email */}
      <div>
        <label className="sb-label">Adresse email</label>
        <input type="email" inputMode="email" autoComplete="email" name="email" placeholder="vous@exemple.com" value={form.email} onChange={handleChange} className="sb-field" />
      </div>

      {/* Téléphone */}
      <div>
        <label className="sb-label">Téléphone / WhatsApp</label>
        <div className="phone-input-wrapper">
          <PhoneInput defaultCountry="FR" value={phone} onChange={setPhone} international countryCallingCodeEditable={false} placeholder="Numéro de téléphone" />
        </div>
      </div>

      {/* Pays */}
      <div>
        <label className="sb-label">Pays</label>
        <select name="country" value={form.country} onChange={handleChange} className="sb-field">
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Appareil */}
      <div>
        <label className="sb-label">Type d&apos;appareil</label>
        <select name="device" value={form.device} onChange={handleChange} className="sb-field">
          <option value="">Sélectionnez votre appareil</option>
          {deviceTypes.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="sb-label">Message</label>
        <textarea name="message" placeholder="Questions ou remarques..." value={form.message} onChange={handleChange} rows={3} className="sb-field" style={{ resize: "vertical" }} />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="sb-submit"
      >
        {status === "loading" ? "Activation en cours…" : "Obtenir mon essai gratuit →"}
      </button>

      <p style={{ textAlign: "center", color: "rgba(255,255,255,0.85)", fontSize: 12 }}>
        🔒 Sécurisé · Identifiants reçus en quelques minutes
      </p>
    </form>
  );
}
