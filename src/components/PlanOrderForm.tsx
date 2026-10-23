"use client";
import { useState, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";

const COUNTRIES = [
  "France","Belgique","Suisse","Pays-Bas","Allemagne","Espagne","Italie",
  "Portugal","Suède","Norvège","Danemark","Finlande","Irlande","Royaume-Uni",
  "États-Unis","Canada","Australie","Nouvelle-Zélande","UAE","Qatar","Koweït",
  "Arabie Saoudite","Maroc","Algérie","Tunisie","Sénégal","Cameroun","Ivory Coast",
  "Liban","Jordanie","Turkey","Brésil","Mexique","Colombie","Argentine","Autre",
];

interface Props {
  planLabel: string;
  price: number;
  whatsappNumber: string;
  emailAddress: string;
}

export default function PlanOrderForm({ planLabel, price }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("KfpszCeX5M5itfdsO");
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send("service_wqw39vi", "template_3jpw5qp", {
        plan:      `${planLabel} — ${price}€`,
        full_name: name,
        email:     email,
        phone:     phone || "—",
        country:   country,
        device:    "—",
        message:   "—",
        reply_to:  email,
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
      <div className="text-center py-6">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-bold text-gray-800 text-lg">Commande reçue !</p>
        <p className="text-gray-500 text-sm mt-1">
          Merci <span className="font-semibold text-gray-700">{name}</span>. Nous vous contacterons par e-mail dans quelques minutes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Prénom</label>
        <input
          type="text"
          required
          placeholder="Ex. Jean"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Adresse e-mail</label>
        <input
          type="email"
          required
          placeholder="Ex. jean@exemple.fr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Pays</label>
        <select
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
        >
          <option value="">Sélectionnez votre pays</option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp (optionnel)</label>
        <input
          type="tel"
          placeholder="Ex. +33 6 00 00 00 00"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#e11d2e] hover:brightness-95 active:scale-[.99] text-white font-bold text-base rounded-xl py-4 shadow-lg shadow-red-200 transition disabled:opacity-60"
      >
        {loading ? "Envoi en cours…" : "Commander maintenant →"}
      </button>
      <p className="text-center text-gray-400 text-xs">
        Sécurisé · Confirmation par e-mail en quelques minutes.
      </p>
    </form>
  );
}
