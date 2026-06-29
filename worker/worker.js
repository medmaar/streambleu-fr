/**
 * Stream Bleu — Worker d'essai gratuit
 * - Crée la ligne IPTV via Activation Panel
 * - Envoie l'email de bienvenue
 * - Stocke le trial dans KV
 * - Cron toutes les heures :
 *     T-4h  → email de rappel (expiration proche)
 *     T=0   → email de suivi (trial expiré)
 */

const API_BASE    = "https://activationpanel.ru/api/api.php";
const API_KEY     = "35cf68cc83a3a82e1a0ac5361c7b6105";
const HOST        = "http://terry.thecontentnest.com";
const RESEND_KEY  = "re_98ZyX2kU_12nnqJff4QZ28PQbD8ueCdK7";
const FROM_EMAIL  = "Stream Bleu <contact@streambleu.fr>";
const ADMIN_EMAIL = "contact@streambleu.fr";
const SITE_URL    = "https://streambleu.fr";

// ── helpers ───────────────────────────────────────────────────────────────────

function jsonRes(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

async function apiGet(params) {
  const qs = new URLSearchParams({ ...params, api_key: API_KEY });
  const res = await fetch(`${API_BASE}?${qs}`);
  const text = await res.text();
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

// ── email templates ───────────────────────────────────────────────────────────

function emailWrap(content) {
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
      <tr><td style="padding:36px 40px;">${content}</td></tr>
      <tr><td style="background-color:#f8f8f8;border-top:1px solid #eeeeee;padding:18px 40px;text-align:center;">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#aaaaaa;">
          © 2026 Stream Bleu · <a href="${SITE_URL}" style="color:#4a4fc0;text-decoration:none;">streambleu.fr</a>
        </p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

function credBox(username, password, m3uUrl) {
  const server = (() => { try { return new URL(m3uUrl).origin; } catch { return HOST; } })();
  return `
  <!-- Xtream Codes box -->
  <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:#333333;">Xtream Codes</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:#f5f6ff;border:1px solid #dde0f5;border-radius:6px;margin-bottom:20px;">
    <tr><td style="padding:20px 24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr><td style="padding:0 0 12px;border-bottom:1px solid #e5e7f5;">
          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;">Serveur</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#333333;font-weight:bold;">${server}</p>
        </td></tr>
        <tr><td style="padding:12px 0;border-bottom:1px solid #e5e7f5;">
          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;">Nom d'utilisateur</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#333333;font-weight:bold;">${username}</p>
        </td></tr>
        <tr><td style="padding:12px 0 0;">
          <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;">Mot de passe</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#333333;font-weight:bold;">${password}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
  <!-- Lien M3U box -->
  <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:#333333;">Lien M3U</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:#f5f6ff;border:1px solid #dde0f5;border-radius:6px;margin-bottom:28px;">
    <tr><td style="padding:16px 24px;">
      <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#4a4fc0;word-break:break-all;">${m3uUrl}</p>
    </td></tr>
  </table>`;
}

function welcomeEmail(name, username, password, m3uUrl) {
  const firstName = name.split(" ")[0];
  return emailWrap(`
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
    ${credBox(username, password, m3uUrl)}
    <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Besoin d'aide pour l'installation ? Veuillez nous contacter sur WhatsApp au
      <a href="https://wa.me/17828026280" style="color:#4a4fc0;text-decoration:none;font-weight:bold;">+17828026280</a>
    </p>
    <p style="margin:24px 0 0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Cordialement,<br><strong>L'équipe Stream Bleu</strong></p>
  `);
}

function reminderEmail(name, username, password, m3uUrl) {
  const firstName = name.split(" ")[0];
  return emailWrap(`
    <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">Bonjour ${firstName},</p>
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Votre essai gratuit <strong>expire dans 4 heures</strong> ⏳
    </p>
    <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Vous avez encore un peu de temps pour profiter de votre accès complet à +50.000 chaînes, beIN Sports, Canal+, TF1 et +300.000 films en 4K.
    </p>
    <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Vos identifiants actifs :
    </p>
    ${credBox(username, password, m3uUrl)}
    <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Pour continuer sans interruption, choisissez votre abonnement dès maintenant :
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
      <tr><td style="background-color:#4a4fc0;border-radius:8px;padding:14px 32px;text-align:center;">
        <a href="${SITE_URL}/tarifs" style="font-family:Arial,sans-serif;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;">
          Voir nos offres →
        </a>
      </td></tr>
    </table>
    <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Des questions ? Contactez-nous sur WhatsApp au
      <a href="https://wa.me/17828026280" style="color:#4a4fc0;text-decoration:none;font-weight:bold;">+17828026280</a>
    </p>
    <p style="margin:24px 0 0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Cordialement,<br><strong>L'équipe Stream Bleu</strong></p>
  `);
}

function followupEmail(name) {
  const firstName = name.split(" ")[0];
  return emailWrap(`
    <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">Bonjour ${firstName},</p>
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Votre essai gratuit Stream Bleu est maintenant <strong>terminé</strong>.
    </p>
    <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Nous espérons que vous avez apprécié la qualité de notre service — +50.000 chaînes, beIN Sports, Canal+, TF1 et +300.000 films en 4K, sans coupure.
    </p>
    <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Continuez à profiter de Stream Bleu en choisissant l'abonnement qui vous convient :
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
      <tr><td style="background-color:#4a4fc0;border-radius:8px;padding:14px 32px;text-align:center;">
        <a href="${SITE_URL}/tarifs" style="font-family:Arial,sans-serif;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;">
          Choisir mon abonnement →
        </a>
      </td></tr>
    </table>
    <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:14px;line-height:1.65;color:#555555;">
      Pour toute question ou pour commander, contactez-nous directement sur WhatsApp au
      <a href="https://wa.me/17828026280" style="color:#4a4fc0;text-decoration:none;font-weight:bold;">+17828026280</a>
    </p>
    <p style="margin:24px 0 0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">Cordialement,<br><strong>L'équipe Stream Bleu</strong></p>
  `);
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

// ── fetch handler ─────────────────────────────────────────────────────────────

async function handleFetch(request, env) {

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    }});
  }

  if (request.method === "GET") {
    const u = new URL(request.url);
    if (u.searchParams.has("debug")) {
      const bq = await apiGet({ action: "bouquet" });
      const ri = await apiGet({ action: "reseller_info" });
      // Zero list ops: read __keys__ index instead of kv.list()
      const _kr = await env.TRIALS.get('__keys__') || '[]';
      const _ke = JSON.parse(_kr);
      const trials = { keys: _ke.map(e => ({ name: 'trial:' + e })) };
      return jsonRes({ bouquet: bq.text.slice(0,300), reseller: ri.text.slice(0,300), kv_keys: trials.keys.length });
    }
    return new Response("Stream Bleu Trial Worker — OK", { status: 200 });
  }

  if (request.method !== "POST") return jsonRes({ success: false, error: "POST only" }, 405);

  let body;
  try { body = await request.json(); }
  catch { return jsonRes({ success: false, error: "Invalid JSON" }, 400); }

  const { name, email, country, device, whatsapp, notes } = body;
  if (!name || !email) return jsonRes({ success: false, error: "Nom et email requis" }, 400);

  let step = "bouquet";
  try {
    // 1. Get France package ID
    const bqRes = await apiGet({ action: "bouquet" });
    let packId = "all";
    if (bqRes.text.trim().startsWith("[") || bqRes.text.trim().startsWith("{")) {
      const list = JSON.parse(bqRes.text);
      const arr = Array.isArray(list) ? list : Object.values(list);
      const fr = arr.find(b => (b.name || "").trim().toLowerCase() === "france");
      if (fr) packId = fr.id;
    }

    // 2. Create demo M3U
    step = "create_demo";
    const crRes = await apiGet({
      action: "new", type: "m3u", sub: "99", pack: packId,
      note: `Trial / streambleu.fr / ${email} | ${whatsapp || ""}`,
    });
    if (!crRes.text.trim().startsWith("[") && !crRes.text.trim().startsWith("{")) {
      throw new Error(`Panel non-JSON: ${crRes.text.slice(0, 200)}`);
    }
    const crData = JSON.parse(crRes.text);
    const item = Array.isArray(crData) ? crData[0] : crData;
    if (!item || String(item.status) !== "true") {
      throw new Error(`Panel: ${item?.message || JSON.stringify(item)}`);
    }

    // 3. Build credentials
    step = "extract";
    const rawUrl = item.url || "";
    let username = "", password = "";
    try { const u = new URL(rawUrl); username = u.searchParams.get("username") || ""; password = u.searchParams.get("password") || ""; } catch {}
    const m3uUrl = `${HOST}/get.php?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&type=m3u_plus&output=ts`;

    // 4. Welcome email
    step = "email_client";
    await sendEmail(email, "Votre accès Stream Bleu — Essai gratuit 24H activé ✓", welcomeEmail(name, username, password, m3uUrl));

    // 5. Admin email
    step = "email_admin";
    await sendEmail(ADMIN_EMAIL, `Automation / streambleu.fr / trial / ${name} / ${email}`, adminEmail(name, email, country, device, whatsapp, notes, username, password, m3uUrl));

    // 6. Store trial in KV (TTL 4 days auto-cleanup)
    step = "kv_store";
    const expiry = Date.now() + 24 * 60 * 60 * 1000; // 24h from now
    const trialData = {
      name, email, country, device, whatsapp,
      username, password, m3uUrl,
      expiry,
      reminder_sent: false,
      followup_sent: false,
      created_at: Date.now(),
    };
    await env.TRIALS.put(
      `trial:${email}`,
      JSON.stringify(trialData),
      { expirationTtl: 30 * 24 * 60 * 60 } // auto-delete after 4 days
    );
    // Update __keys__ index (read op, not list op — keeps KV list quota safe)
    try {
      const _existingKeys = JSON.parse(await env.TRIALS.get('__keys__') || '[]');
      if (!_existingKeys.includes(email)) {
        _existingKeys.push(email);
        await env.TRIALS.put('__keys__', JSON.stringify(_existingKeys), { expirationTtl: 90 * 24 * 60 * 60 });
      }
    } catch(_) {}
    // Notify central KV reader
    const _kvBody = JSON.stringify({ name, email, whatsapp, site: 'streambleu.fr', phone: whatsapp, created_at: Date.now() });
    const _kvPost = () => fetch('https://iptv-kv-reader.medmaar.workers.dev/add',
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: _kvBody });
    try { await _kvPost(); }
    catch(_) { try { await new Promise(r => setTimeout(r, 1500)); await _kvPost(); } catch(__) {} }

    return jsonRes({ success: true });

  } catch (err) {
    console.error(`[step=${step}]`, err.message);
    return jsonRes({ success: false, error: `[${step}] ${err.message}` }, 500);
  }
}

// ── cron handler (runs every hour) ───────────────────────────────────────────

async function handleScheduled(env) {
  const now = Date.now();
  const FOUR_HOURS = 4 * 60 * 60 * 1000;

  // List all trial keys
  const _keysRaw = await env.TRIALS.get('__keys__') || '[]';
  const _keyEmails = JSON.parse(_keysRaw);
  const keys = _keyEmails.map(e => ({ name: `trial:${e}` }));
  console.log(`[cron] Checking ${keys.length} trials`);

  for (const { name: key } of keys) {
    let trial;
    try {
      const raw = await env.TRIALS.get(key);
      if (!raw) continue;
      trial = JSON.parse(raw);
    } catch { continue; }

    const { name, email, username, password, m3uUrl, expiry, reminder_sent, followup_sent } = trial;

    // T-4h: send reminder if within 4h of expiry and not yet sent
    if (!reminder_sent && now >= expiry - FOUR_HOURS && now < expiry) {
      try {
        await sendEmail(
          email,
          "⏳ Votre essai Stream Bleu expire dans 4 heures",
          reminderEmail(name, username, password, m3uUrl)
        );
        trial.reminder_sent = true;
        await env.TRIALS.put(key, JSON.stringify(trial), { expirationTtl: 30 * 24 * 60 * 60 });
        console.log(`[cron] Reminder sent to ${email}`);
      } catch (e) {
        console.error(`[cron] Reminder failed for ${email}:`, e.message);
      }
    }

    // T=0: send follow-up exactly when trial expires (cron runs hourly so within 1h window)
    if (!followup_sent && now >= expiry) {
      try {
        await sendEmail(
          email,
          "Votre essai Stream Bleu est terminé — Continuez dès maintenant 🎬",
          followupEmail(name)
        );
        trial.followup_sent = true;
        await env.TRIALS.put(key, JSON.stringify(trial), { expirationTtl: 30 * 24 * 60 * 60 });
        console.log(`[cron] Follow-up sent to ${email}`);
      } catch (e) {
        console.error(`[cron] Follow-up failed for ${email}:`, e.message);
      }
    }
  }
}

// ── export ────────────────────────────────────────────────────────────────────

export default {
  async fetch(request, env) {
    return handleFetch(request, env);
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(handleScheduled(env));
  },
};
