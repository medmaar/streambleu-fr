/**
 * Stream Bleu — Worker d'essai gratuit
 * Based on working maplehd / maplestreamtv pattern
 * API: activationpanel.ru/api/api.php  sub=99=demo  pack=France ID or "all"
 */

const API_BASE    = "https://activationpanel.ru/api/api.php";
const HOST        = "http://terry.thecontentnest.com";
const API_KEY     = "35cf68cc83a3a82e1a0ac5361c7b6105";
const RESEND_KEY  = "re_98ZyX2kU_12nnqJff4QZ28PQbD8ueCdK7";
const FROM_EMAIL  = "Stream Bleu <contact@streambleu.fr>";
const ADMIN_EMAIL = "contact@streambleu.fr";

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

async function apiGet(params) {
  const qs = new URLSearchParams({ ...params, api_key: API_KEY });
  const url = `${API_BASE}?${qs}`;
  const res = await fetch(url);
  const text = await res.text();
  // Return raw text for debug, parse for actual use
  return { status: res.status, text };
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

function customerEmail(name, username, password, m3uUrl) {
  const firstName = name.split(" ")[0];
  const server = (() => { try { return new URL(m3uUrl).origin; } catch { return "—"; } })();
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f2f2f2;font-family:Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f2f2f2;padding:32px 16px;">
  <tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
           style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
      <tr><td style="background-color:#4a4fc0;padding:32px 40px;text-align:center;">
        <h1 style="margin:0;font-family:Arial,sans-serif;font-size:26px;font-weight:bold;color:#ffffff;">Stream Bleu</h1>
        <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.80);">IPTV Premium · France</p>
      </td></tr>
      <tr><td style="padding:36px 40px;">
        <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">Bonjour ${firstName},</p>
        <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
          Votre essai gratuit est prêt !
        </p>
        <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
          Nous avons débloqué tous les pays et toutes les langues afin que vous puissiez tester pleinement notre service.
        </p>
        <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:13px;line-height:1.65;color:#777777;font-style:italic;">
          Note : Ne vous inquiétez pas si la liste vous semble trop longue — par la suite, vous pourrez nous demander de masquer les régions ou catégories dont vous n'avez pas besoin !
        </p>
        <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
          Voici vos identifiants de connexion :
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
               style="background-color:#f5f6ff;border:1px solid #dde0f5;border-radius:6px;margin-bottom:28px;">
          <tr><td style="padding:24px 28px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr><td style="padding:0 0 14px;border-bottom:1px solid #e5e7f5;">
                <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;color:#888888;text-transform:uppercase;">Serveur</p>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#333333;font-weight:bold;">${server}</p>
              </td></tr>
              <tr><td style="padding:14px 0;border-bottom:1px solid #e5e7f5;">
                <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;color:#888888;text-transform:uppercase;">Nom d'utilisateur</p>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;color:#333333;font-weight:bold;">${username}</p>
              </td></tr>
              <tr><td style="padding:14px 0 0;">
                <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;color:#888888;text-transform:uppercase;">Mot de passe</p>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;color:#333333;font-weight:bold;">${password}</p>
              </td></tr>
            </table>
          </td></tr>
        </table>
        <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:13px;color:#555555;font-weight:bold;">Lien M3U :</p>
        <p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:12px;color:#4a4fc0;word-break:break-all;">${m3uUrl}</p>
        <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
          Besoin d'aide pour l'installation ? Veuillez nous contacter sur WhatsApp au
          <a href="https://wa.me/17828026280" style="color:#4a4fc0;text-decoration:none;font-weight:bold;">+17828026280</a>
        </p>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Cordialement,<br><strong>L'équipe Stream Bleu</strong></p>
      </td></tr>
      <tr><td style="background-color:#f8f8f8;border-top:1px solid #eeeeee;padding:18px 40px;text-align:center;">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#aaaaaa;">
          © 2025 Stream Bleu · <a href="https://streambleu.fr" style="color:#4a4fc0;text-decoration:none;">streambleu.fr</a>
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
    <tr><td style="color:#888;">M3U</td><td style="word-break:break-all;font-size:12px;">${m3uUrl}</td></tr>
  </table>
</body></html>`;
}

export default {
  async fetch(request) {

    // ── CORS ──────────────────────────────────────────────────────────────────
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      }});
    }

    // ── DEBUG: GET /?debug ────────────────────────────────────────────────────
    if (request.method === "GET") {
      const u = new URL(request.url);
      if (!u.searchParams.has("debug")) return new Response("OK", { status: 200 });

      const results = {};

      // Test bouquet list
      const bq = await apiGet({ action: "bouquet" });
      results.bouquet = { status: bq.status, isJson: bq.text.trim().startsWith("[") || bq.text.trim().startsWith("{"), preview: bq.text.slice(0, 500) };

      // Test reseller info
      const ri = await apiGet({ action: "reseller_info" });
      results.reseller_info = { status: ri.status, isJson: ri.text.trim().startsWith("[") || ri.text.trim().startsWith("{"), preview: ri.text.slice(0, 500) };

      // Test create demo with pack=all (safe test - sub=99 uses demo ticket)
      // Uncomment only to test a real create:
      // const cr = await apiGet({ action: "new", type: "m3u", sub: "99", pack: "all", note: "debug-test" });
      // results.create_test = { status: cr.status, preview: cr.text.slice(0, 500) };

      return json(results);
    }

    if (request.method !== "POST") return json({ success: false, error: "POST only" }, 405);

    let body;
    try { body = await request.json(); }
    catch { return json({ success: false, error: "Invalid JSON" }, 400); }

    const { name, email, country, device, whatsapp, notes } = body;
    if (!name || !email) return json({ success: false, error: "Nom et email requis" }, 400);

    let step = "bouquet";
    try {
      // 1. Get France package ID
      const bqRes = await apiGet({ action: "bouquet" });
      let packId = "all"; // fallback: all bouquets

      if (bqRes.text.trim().startsWith("[") || bqRes.text.trim().startsWith("{")) {
        const bouquets = JSON.parse(bqRes.text);
        const list = Array.isArray(bouquets) ? bouquets : Object.values(bouquets);
        const france = list.find(b => (b.name || "").trim().toLowerCase() === "france");
        if (france) {
          packId = france.id;
          console.log("Found France pack:", packId);
        } else {
          console.log("France not found, using pack=all. Available:", list.map(b=>b.name).join(", "));
        }
      } else {
        console.log("Bouquet API returned non-JSON, using pack=all. Preview:", bqRes.text.slice(0, 200));
      }

      // 2. Create demo M3U (sub=99 = 1 demo ticket, 24h)
      step = "create_demo";
      const crRes = await apiGet({
        action: "new",
        type:   "m3u",
        sub:    "99",
        pack:   packId,
        note:   `Trial / streambleu.fr / ${email} | ${whatsapp || ""}`,
      });

      console.log("Create response:", crRes.text.slice(0, 300));

      if (!crRes.text.trim().startsWith("[") && !crRes.text.trim().startsWith("{")) {
        throw new Error(`Panel returned non-JSON: ${crRes.text.slice(0, 200)}`);
      }

      const crData = JSON.parse(crRes.text);
      const item = Array.isArray(crData) ? crData[0] : crData;

      if (!item || String(item.status) !== "true") {
        throw new Error(`Panel create failed: ${item?.message || JSON.stringify(item)}`);
      }

      // 3. Extract credentials from panel URL, build M3U from our host
      step = "extract";
      const rawUrl = item.url || "";
      let username = "", password = "";
      try {
        const u = new URL(rawUrl);
        username = u.searchParams.get("username") || "";
        password = u.searchParams.get("password") || "";
      } catch {}
      const m3uUrl = `${HOST}/get.php?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&type=m3u_plus&output=ts`;

      // 4. Send customer email (French)
      step = "email_client";
      await sendEmail(
        email,
        "Votre accès Stream Bleu — Essai gratuit 24H activé ✓",
        customerEmail(name, username, password, m3uUrl)
      );

      // 5. Send admin notification
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
