"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactEmailForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("KfpszCeX5M5itfdsO");
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send("service_wqw39vi", "template_3jpw5qp", {
        plan:      "Demande de contact",
        full_name: form.name,
        email:     form.email,
        phone:     "—",
        country:   "—",
        device:    "—",
        message:   form.message,
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
      <div style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 20px rgba(90,95,207,0.07)", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: "#5a5fcf", marginBottom: 8 }}>Message envoyé !</h3>
        <p style={{ color: "#555", fontSize: 14 }}>Merci <strong>{form.name}</strong>. Nous vous répondrons à <strong>{form.email}</strong> dans les plus brefs délais.</p>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", borderRadius: 20, padding: "28px", border: "1px solid rgba(90,95,207,0.12)", boxShadow: "0 4px 20px rgba(90,95,207,0.07)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1a1a4e", margin: 0 }}>✉️ E-mail</h2>
        <p style={{ color: "#555", fontSize: 14, margin: 0, lineHeight: 1.6 }}>Pour les demandes détaillées, questions de facturation ou avis DMCA.</p>
        <p style={{ color: "#5a5fcf", fontSize: 13, fontWeight: 600, margin: 0 }}>contact@streambleu.fr</p>
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input type="text" name="name" required placeholder="Votre nom" value={form.name} onChange={handleChange}
          style={{ width: "100%", border: "1px solid #e5e7eb", borderRadius: 10, padding: "10px 14px", fontSize: 14, outline: "none", color: "#1a1a4e" }} />
        <input type="email" name="email" required placeholder="Votre e-mail" value={form.email} onChange={handleChange}
          style={{ width: "100%", border: "1px solid #e5e7eb", borderRadius: 10, padding: "10px 14px", fontSize: 14, outline: "none", color: "#1a1a4e" }} />
        <textarea name="message" required placeholder="Votre message" rows={4} value={form.message} onChange={handleChange}
          style={{ width: "100%", border: "1px solid #e5e7eb", borderRadius: 10, padding: "10px 14px", fontSize: 14, outline: "none", color: "#1a1a4e", resize: "vertical" }} />
        <button type="submit" disabled={loading}
          style={{ background: "#F5C518", color: "#111", fontWeight: 700, padding: "12px 28px", borderRadius: 12, fontSize: 14, border: "none", cursor: "pointer", opacity: loading ? 0.6 : 1 }}>
          {loading ? "Envoi..." : "Envoyer le message"}
        </button>
      </form>
    </div>
  );
}
