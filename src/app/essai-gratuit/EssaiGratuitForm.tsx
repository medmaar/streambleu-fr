"use client";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

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

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "12px 16px",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
  fontFamily: "Arial, Helvetica, sans-serif",
  boxSizing: "border-box",
};

export default function EssaiGratuitForm() {
  const [form, setForm] = useState({ full_name: "", email: "", country: "France", device: "", message: "" });
  const [phone, setPhone] = useState<string | undefined>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:     form.full_name,
          email:    form.email,
          country:  form.country,
          device:   form.device || "Non précisé",
          whatsapp: phone || "",
          notes:    form.message || "",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Erreur Worker");
      setStatus("success");
      setForm({ full_name: "", email: "", country: "France", device: "", message: "" });
      setPhone("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>

      {/* Success */}
      {status === "success" && (
        <>
          <style>{`
            @keyframes popIn{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}
            @keyframes drawCheck{to{stroke-dashoffset:0}}
          `}</style>
          <div style={{
            textAlign: "center", padding: "2.5rem 1.5rem",
            background: "rgba(46,204,113,0.08)",
            border: "1px solid rgba(46,204,113,0.35)",
            borderRadius: 20,
            boxShadow: "0 0 40px rgba(46,204,113,0.12)"
          }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{
                width: 90, height: 90, borderRadius: "50%",
                background: "rgba(46,204,113,0.15)",
                border: "3px solid #2ecc71",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto",
                animation: "popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275) both"
              }}>
                <svg viewBox="0 0 52 52" style={{
                  width: 44, height: 44, stroke: "#2ecc71", strokeWidth: 3, fill: "none",
                  strokeDasharray: 60, strokeDashoffset: 60,
                  animation: "drawCheck 0.5s 0.35s ease forwards"
                } as React.CSSProperties}>
                  <polyline points="14,27 22,36 38,17" />
                </svg>
              </div>
            </div>
            <div style={{ color: "#2ecc71", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>
              Votre essai est actif !
            </div>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
              Vos identifiants ont été envoyés à votre adresse email.<br />
              Vérifiez votre boîte de réception — votre accès 24H commence maintenant.
            </p>
          </div>
        </>
      )}

      {/* Error */}
      {status === "error" && (
        <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5", borderRadius: 12, padding: "12px 16px", fontSize: 14 }}>
          Une erreur est survenue. Veuillez réessayer ou{" "}
          <a href={`https://wa.me/${"+17828026280".replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" style={{ color: "#fca5a5", textDecoration: "underline" }}>
            contactez-nous sur WhatsApp
          </a>.
        </div>
      )}

      {/* Nom */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Nom complet</label>
        <input type="text" name="full_name" placeholder="Votre nom" value={form.full_name} onChange={handleChange} style={inputStyle} />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Adresse email</label>
        <input type="email" name="email" placeholder="vous@exemple.com" value={form.email} onChange={handleChange} style={inputStyle} />
      </div>

      {/* Téléphone */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Téléphone / WhatsApp</label>
        <div className="phone-input-wrapper">
          <PhoneInput defaultCountry="FR" value={phone} onChange={setPhone} international countryCallingCodeEditable={false} placeholder="Numéro de téléphone" />
        </div>
      </div>

      {/* Pays */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Pays</label>
        <select name="country" value={form.country} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#111827" }}>
          {countries.map(c => <option key={c} value={c} style={{ backgroundColor: "#111827", color: "#fff" }}>{c}</option>)}
        </select>
      </div>

      {/* Appareil */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Type d&apos;appareil</label>
        <select name="device" value={form.device} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#111827" }}>
          <option value="" style={{ backgroundColor: "#111827", color: "#fff" }}>Sélectionnez votre appareil</option>
          {deviceTypes.map(d => <option key={d} value={d} style={{ backgroundColor: "#111827", color: "#fff" }}>{d}</option>)}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Message</label>
        <textarea name="message" placeholder="Questions ou remarques..." value={form.message} onChange={handleChange} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="w-full text-white py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110 disabled:opacity-60"
        style={{ background: "#4a4fc0", fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        {status === "loading" ? "Activation en cours…" : status === "success" ? "✅ Essai envoyé !" : "Obtenir mon essai gratuit →"}
      </button>

      <p className="text-center text-gray-600 text-xs" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        Sécurisé · Identifiants envoyés automatiquement par email
      </p>
    </form>
  );
}
