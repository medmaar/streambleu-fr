"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const countries = [
  "France", "Belgique", "Suisse", "Luxembourg", "Canada", "Maroc", "Algérie",
  "Tunisie", "Sénégal", "Cameroun", "Côte d'Ivoire", "Madagascar", "Mali",
  "Allemagne", "Espagne", "Italie", "Portugal", "Pays-Bas", "Suède", "Norvège",
  "Danemark", "Finlande", "Irlande", "Royaume-Uni", "États-Unis", "Australie",
  "Nouvelle-Zélande", "Émirats Arabes Unis", "Qatar", "Koweït", "Arabie Saoudite",
  "Liban", "Jordanie", "Turquie", "Brésil", "Mexique", "Colombie", "Argentine", "Autre",
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
    emailjs.init("XgOQHE8VNnCyBYP1z");
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
        "service_0e3cugb",
        "template_cuf7svm",
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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Instructions */}
      <div style={{ marginBottom: 8, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: 6 }}>
          Passer votre commande
        </h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>
          Remplissez le formulaire ci-dessous. Assurez-vous que vos coordonnées sont correctes afin que nous puissions vous contacter rapidement.
        </p>
        <ol style={{ paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
          <li style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Entrez votre prénom et nom</li>
          <li style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Ajoutez votre email ou numéro WhatsApp selon votre préférence</li>
          <li style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Soumettez le formulaire — nous vous contacterons en quelques minutes</li>
        </ol>
      </div>

      {/* Succès */}
      {status === "success" && (
        <div className="rounded-2xl px-4 py-3 text-sm font-medium"
          style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)", color: "#4ade80" }}>
          ✅ Commande reçue ! Nous vous contacterons dans quelques minutes.
        </div>
      )}

      {/* Erreur */}
      {status === "error" && (
        <div className="rounded-2xl px-4 py-3 text-sm font-medium"
          style={{ background: "rgba(253,3,34,0.1)", border: "1px solid rgba(253,3,34,0.3)", color: "#ff6b6b" }}>
          ❌ Une erreur s&apos;est produite. Réessayez ou{" "}
          <a href="https://wa.me/17828026280" target="_blank" rel="noopener noreferrer" className="underline">
            contactez-nous sur WhatsApp
          </a>.
        </div>
      )}

      {/* Nom complet */}
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#c5bcf5", marginBottom: 6, fontWeight: 600 }}>
          Nom Complet <span style={{ color: "#fd0322" }}>*</span>
        </label>
        <input type="text" name="full_name" required placeholder="Ex : Jean Dupont"
          value={form.full_name} onChange={handleChange} style={inputStyle} />
      </div>

      {/* Email */}
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#c5bcf5", marginBottom: 6, fontWeight: 600 }}>
          Adresse Email <span style={{ color: "#fd0322" }}>*</span>
        </label>
        <input type="text" name="email" required placeholder="vous@exemple.com"
          value={form.email} onChange={handleChange} style={inputStyle} />
        {emailWarning && (
          <p className="text-xs mt-1" style={{ color: "#fbbf24" }}>
            Cet email ne semble pas valide — assurez-vous qu&apos;il contient @
          </p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#c5bcf5", marginBottom: 6, fontWeight: 600 }}>
          Téléphone / WhatsApp
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginLeft: 6 }}>(optionnel)</span>
        </label>
        <div className="phone-input-wrapper">
          <PhoneInput international defaultCountry="FR" value={phone} onChange={setPhone} placeholder="+33 6 00 00 00 00" />
        </div>
      </div>

      {/* Pays */}
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#c5bcf5", marginBottom: 6, fontWeight: 600 }}>Pays</label>
        <select name="country" value={form.country} onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#3d4199", color: "#ffffff" }}>
          {countries.map((c) => (
            <option key={c} value={c} style={{ backgroundColor: "#3d4199", color: "#ffffff" }}>{c}</option>
          ))}
        </select>
      </div>

      {/* Appareil */}
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#c5bcf5", marginBottom: 6, fontWeight: 600 }}>Type d&apos;appareil</label>
        <select name="device" value={form.device} onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#3d4199", color: "#ffffff" }}>
          <option value="" style={{ backgroundColor: "#3d4199", color: "#ffffff" }}>Sélectionnez votre appareil</option>
          {deviceTypes.map((d) => (
            <option key={d} value={d} style={{ backgroundColor: "#3d4199", color: "#ffffff" }}>{d}</option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#c5bcf5", marginBottom: 6, fontWeight: 600 }}>
          Notes / Message
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginLeft: 6 }}>(optionnel)</span>
        </label>
        <textarea name="message" placeholder="Demandes particulières ?"
          value={form.message} onChange={handleChange} rows={3}
          style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      <button type="submit" disabled={status === "loading"}
        className="w-full text-white py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110 disabled:opacity-60"
        style={{ background: "#f5a623", boxShadow: "0 4px 16px rgba(245,166,35,0.4)" }}>
        {status === "loading" ? "Envoi en cours…" : "Commander →"}
      </button>

      <p style={{ textAlign: "center", color: "rgba(255,255,255,0.55)", fontSize: 12 }}>
        🔒 Sécurisé · Identifiants envoyés par email ou WhatsApp en moins de 5 minutes
      </p>
    </form>
  );
}
