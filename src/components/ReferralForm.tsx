"use client";
import { useState } from "react";

const WA_NUMBER = "17828026280";
const WA_REFER_URL = `https://wa.me/${WA_NUMBER}?text=Bonjour%20Stream%20Bleu%2C%20je%20souhaite%20parrainer%20quelqu%27un.%20Quelle%20est%20la%20prochaine%20étape%20%3F`;

const inputStyle = {
  width: "100%",
  background: "#ffffff",
  border: "2px solid rgba(63,154,174,0.25)",
  borderRadius: 10,
  padding: "12px 16px",
  fontSize: 14,
  color: "#000000",
  outline: "none",
  boxSizing: "border-box" as const,
  fontFamily: "inherit",
};

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#000000",
  marginBottom: 6,
};

export default function ReferralForm() {
  const [yourName, setYourName] = useState("");
  const [yourWA, setYourWA] = useState("");
  const [friendName, setFriendName] = useState("");
  const [friendWA, setFriendWA] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ yourName, yourWhatsApp: yourWA, friendName, friendWhatsApp: friendWA }),
      });
      if (res.ok) {
        setStatus("success");
        setYourName(""); setYourWA(""); setFriendName(""); setFriendWA("");
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ background: "#ffffff", border: "2px solid rgba(63,154,174,0.2)", borderRadius: 20, padding: 32, boxShadow: "0 4px 24px rgba(63,154,174,0.1)" }}>

        <p style={{ fontSize: 11, color: "#F96E5B", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Vos Coordonnées</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
          <div>
            <label style={labelStyle}>Votre Prénom</label>
            <input type="text" required placeholder="Jean" value={yourName} onChange={(e) => setYourName(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Votre WhatsApp</label>
            <input type="tel" required placeholder="+33 6 00 00 00 00" value={yourWA} onChange={(e) => setYourWA(e.target.value)} style={inputStyle} />
          </div>
        </div>

        <p style={{ fontSize: 11, color: "#F96E5B", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Coordonnées de l&apos;Ami</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
          <div>
            <label style={labelStyle}>Prénom de l&apos;ami</label>
            <input type="text" required placeholder="Marie" value={friendName} onChange={(e) => setFriendName(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>WhatsApp de l&apos;ami</label>
            <input type="tel" required placeholder="+33 6 00 00 00 00" value={friendWA} onChange={(e) => setFriendWA(e.target.value)} style={inputStyle} />
          </div>
        </div>

        {status === "success" ? (
          <div style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.3)", borderRadius: 12, padding: "16px 20px", color: "#1A3D45", fontSize: 14, fontWeight: 600, textAlign: "center" }}>
            ✓ Parrainage soumis ! Nous l&apos;examinerons rapidement et vous contacterons.
          </div>
        ) : (
          <button type="submit" disabled={status === "loading"} style={{ width: "100%", background: "#F96E5B", color: "#fff", padding: "16px", borderRadius: 12, fontWeight: 700, fontSize: 16, border: "none", cursor: "pointer", opacity: status === "loading" ? 0.6 : 1, fontFamily: "inherit", boxShadow: "0 4px 16px rgba(249,110,91,0.35)" }}>
            {status === "loading" ? "Envoi en cours…" : "Soumettre le Parrainage"}
          </button>
        )}

        {status === "error" && (
          <p style={{ textAlign: "center", color: "#F96E5B", fontSize: 13, marginTop: 12 }}>
            Une erreur s&apos;est produite. Réessayez ou utilisez WhatsApp ci-dessous.
          </p>
        )}
      </form>

      <div style={{ marginTop: 24, textAlign: "center" }}>
        <p style={{ color: "#000000", fontSize: 13, marginBottom: 16 }}>Vous préférez WhatsApp ? Contactez-nous directement :</p>
        <a href={WA_REFER_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#25D366", color: "#fff", fontWeight: 700, padding: "14px 32px", borderRadius: 12, fontSize: 14, textDecoration: "none" }}>
          Parrainer via WhatsApp
        </a>
      </div>
    </div>
  );
}
