/**
 * Stream Bleu — Worker d'essai gratuit automatique
 * API: https://activationpanel.net/api/api.php
 * sub=99 → demo ticket (24h), action=bouquet → package list
 */

const API_BASE   = "https://activationpanel.net/api/api.php";
const API_KEY    = "35cf68cc83a3a82e";
const RESEND_KEY = "re_98ZyX2kU_12nnqJff4QZ28PQbD8ueCdK7";
const FROM_EMAIL = "Stream Bleu <contact@streambleu.fr>";
const ADMIN_EMAIL= "contact@streambleu.fr";
const PACK_NAME  = "France"; // exact name in bouquet list (case-insensitive)

// ── helpers ───────────────────────────────────────────────────────────────────

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

async function apiGet(params) {
  const qs = new URLSearchParams({ ...params, api_key: API_KEY });
  const res = await fetch(`${API_BASE}?${qs}`);
  if (!res.ok) throw new Error(`API HTTP ${res.status}`);
  const text = await res.text();
  try { return JSON.parse(text); }
  catch { throw new Error(`API non-JSON: ${text.slice(0, 300)}`); }
}

async function sendEmail(to, subject, html) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Resend (${res.status}): ${t}`);
  }
}

// ── email templates ───────────────────────────────────────────────────────────

function customerEmail(name, username, password, m3uUrl) {
  const server = m3uUrl ? new URL(m3uUrl).origin : "—";
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f2f2f2;font-family:Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
       style="background-color:#f2f2f2;padding:32px 16px;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
           style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;
                  box-shadow:0 2px 8px rgba(0,0,0,0.08);">

      <!-- Header -->
      <tr><td style="background-color:#4a4fc0;padding:32px 40px;text-align:center;">
        <h1 style="margin:0;font-family:Arial,sans-serif;font-size:26px;font-weight:bold;color:#ffffff;">
          Stream Bleu</h1>
        <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.80);">
          IPTV Premium · France</p>
      </td></tr>

      <!-- Body -->
      <tr><td style="padding:36px 40px;">
        <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">
          Bonjour ${name},</p>
        <p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
          Votre essai gratuit de <strong>24 heures</strong> est maintenant actif.
          Voici vos identifiants de connexion :
        </p>

        <!-- Credentials box -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
               style="background-color:#f5f6ff;border:1px solid #dde0f5;border-radius:6px;margin-bottom:28px;">
          <tr><td style="padding:24px 28px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr><td style="padding:0 0 14px;border-bottom:1px solid #e5e7f5;">
                <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;color:#888888;
                           text-transform:uppercase;">Serveur</p>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#333333;
                           font-weight:bold;">${server}</p>
              </td></tr>
              <tr><td style="padding:14px 0;border-bottom:1px solid #e5e7f5;">
                <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;color:#888888;
                           text-transform:uppercase;">Nom d'utilisateur</p>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;color:#333333;
                           font-weight:bold;">${username}</p>
              </td></tr>
              <tr><td style="padding:14px 0 0;">
                <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;color:#888888;
                           text-transform:uppercase;">Mot de passe</p>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;color:#333333;
                           font-weight:bold;">${password}</p>
              </td></tr>
            </table>
          </td></tr>
        </table>

        <!-- M3U link -->
        <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:13px;color:#555555;font-weight:bold;">
          Lien M3U :</p>
        <p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:12px;color:#4a4fc0;
                   word-break:break-all;">${m3uUrl}</p>

        <p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
          Si vous avez des questions ou besoin d'aide pour la configuration,
          n'hésitez pas à nous contacter par email ou sur WhatsApp.
        </p>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">
          Cordialement,<br><strong>L'équipe Stream Bleu</strong></p>
      </td></tr>

      <!-- Footer -->
      <tr><td style="background-color:#f8f8f8;border-top:1px solid #eeeeee;
                     padding:18px 40px;text-align:center;">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#aaaaaa;">
          © 2025 Stream Bleu ·
          <a href="https://streambleu.fr" style="color:#4a4fc0;text-decoration:none;">streambleu.fr</a>
        </p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body></html>`;
}

function adminEmail(name, email, country, device, whatsapp, notes, username, password, m3uUrl) {
  return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;font-size:14px;color:#333;padding:20px;">
  <h2 style="color:#4a4fc0;margin-top:0;">Nouvel essai gratuit — Stream Bleu</h2>
  <table cellpadding="6" cellspacing="0" border="0">
    <tr><td style="color:#888;width:130px;">Nom</td><td><strong>${name}</strong></td></tr>
    <tr><td style="color:#888;">Email</td><td>${email}</td></tr>
    <tr><td style="color:#888;">Pays</td><td>${country||"—"}</td></tr>
    <tr><td style="color:#888;">Appareil</td><td>${device||"—"}</td></tr>
    <tr><td style="color:#888;">WhatsApp</td><td>${whatsapp||"—"}</td></tr>
    <tr><td style="color:#888;">Notes</td><td>${notes||"—"}</td></tr>
    <tr><td colspan="2"><hr style="border:none;border-top:1px solid #eee;margin:8px 0;"></td></tr>
    <tr><td style="color:#888;">Username</td><td><strong>${username}</strong></td></tr>
    <tr><td style="color:#888;">Password</td><td><strong>${password}</strong></td></tr>
    <tr><td style="color:#888;">M3U URL</td><td style="word-break:break-all;font-size:12px;">${m3uUrl}</td></tr>
  </table>
</body></html>`;
}

// ── main handler ──────────────────────────────────────────────────────────────

export default {
  async fetch(request) {

    // CORS
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      }});
    }

    // Quick self-test: GET /?debug
    if (request.method === "GET") {
      const u = new URL(request.url);
      if (u.searchParams.has("debug")) {
        try {
          const bouquets = await apiGet({ action: "bouquet" });
          const resellerInfo = await apiGet({ action: "reseller_info" });
          return json({ bouquets, resellerInfo });
        } catch (e) {
          return json({ error: e.message });
        }
      }
      return new Response("Stream Bleu Trial Worker — OK", { status: 200 });
    }

    if (request.method !== "POST") return json({ success: false, error: "POST only" }, 405);

    let body;
    try { body = await request.json(); }
    catch { return json({ success: false, error: "Invalid JSON" }, 400); }

    const { name, email, country, device, whatsapp, notes } = body;
    if (!name || !email) return json({ success: false, error: "Nom et email requis" }, 400);

    let step = "bouquets";
    try {

      // 1. Get bouquet list → find France
      const bouquets = await apiGet({ action: "bouquet" });
      console.log("Bouquets:", JSON.stringify(bouquets).slice(0, 400));

      let packId = null;
      for (const b of Array.isArray(bouquets) ? bouquets : []) {
        if ((b.name || "").trim().toLowerCase() === PACK_NAME.toLowerCase()) {
          packId = b.id;
          break;
        }
      }
      if (!packId) {
        const names = (Array.isArray(bouquets) ? bouquets : []).map(b => b.name).join(", ");
        throw new Error(`Package "${PACK_NAME}" non trouvé. Disponibles : ${names}`);
      }

      // 2. Create demo M3U (sub=99 = demo ticket, 24h)
      step = "create_demo";
      const result = await apiGet({
        action: "new",
        type:   "m3u",
        sub:    "99",       // demo ticket
        pack:   packId,
        note:   `${name} | ${email} | ${whatsapp || ""} | StreamBleu trial`,
      });
      console.log("Create result:", JSON.stringify(result).slice(0, 400));

      if (!result || (Array.isArray(result) && result[0]?.status !== "true") ||
          (result.status && result.status !== "true")) {
        const msg = (Array.isArray(result) ? result[0]?.message : result?.message) || JSON.stringify(result);
        throw new Error(`Panel: ${msg}`);
      }

      // 3. Extract credentials from returned M3U URL
      step = "extract_creds";
      const data    = Array.isArray(result) ? result[0] : result;
      const m3uUrl  = data.url || "";
      let username  = "", password = "";
      if (m3uUrl) {
        const u = new URL(m3uUrl);
        username = u.searchParams.get("username") || "";
        password = u.searchParams.get("password") || "";
      }

      // 4. Email client
      step = "email_client";
      await sendEmail(
        email,
        "Votre accès Stream Bleu — Essai gratuit 24H activé ✓",
        customerEmail(name, username, password, m3uUrl)
      );

      // 5. Email admin
      step = "email_admin";
      await sendEmail(
        ADMIN_EMAIL,
        `[Essai] ${name} — ${email}`,
        adminEmail(name, email, country, device, whatsapp, notes, username, password, m3uUrl)
      );

      return json({ success: true });

    } catch (err) {
      console.error(`[step=${step}]`, err.message);
      return json({ success: false, error: `[${step}] ${err.message}` }, 500);
    }
  },
};
