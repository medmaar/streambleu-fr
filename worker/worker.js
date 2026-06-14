/**
 * Stream Bleu — Worker d'essai gratuit automatique
 * URL : https://iptv-trial-streambleu.medmaar.workers.dev
 */

const PANEL_HTTPS  = "https://activationpanel.ru";
const PANEL_HTTP   = "http://activationpanel.ru";
const API_KEY      = "35cf68cc83a3a82e";
const RESEND_KEY   = "re_98ZyX2kU_12nnqJff4QZ28PQbD8ueCdK7";
const FROM_EMAIL   = "Stream Bleu <contact@streambleu.fr>";
const ADMIN_EMAIL  = "contact@streambleu.fr";
const PACKAGE_NAME = "France";

// ── helpers ───────────────────────────────────────────────────────────────────

function randomStr(len, pool = "abcdefghijklmnopqrstuvwxyz0123456789") {
  const buf = new Uint8Array(len);
  crypto.getRandomValues(buf);
  return Array.from(buf, b => pool[b % pool.length]).join("");
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

async function sendEmail(to, subject, html) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Resend (${res.status}): ${txt}`);
  }
}

// ── panel helpers ─────────────────────────────────────────────────────────────

async function panelFetch(path) {
  // Try HTTPS first, fall back to HTTP
  let res, lastErr;
  for (const base of [PANEL_HTTPS, PANEL_HTTP]) {
    try {
      res = await fetch(`${base}${path}`, { cf: { cacheTtl: 0 } });
      if (res.ok) return res;
      lastErr = `HTTP ${res.status} from ${base}`;
    } catch (e) {
      lastErr = `Fetch error on ${base}: ${e.message}`;
    }
  }
  throw new Error(`Panel unreachable — ${lastErr}`);
}

async function getPackages() {
  const res = await panelFetch(`/api.php?action=packages&api_key=${API_KEY}`);
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch {
    throw new Error(`Panel packages non-JSON: ${text.slice(0, 300)}`);
  }
  // Normalise: could be array, {packages:[...]}, {data:[...]}, or object map
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.packages)) return data.packages;
  if (data && Array.isArray(data.data)) return data.data;
  if (data && typeof data === "object") return Object.values(data);
  throw new Error(`Unexpected packages format: ${text.slice(0, 300)}`);
}

async function createLine(packageId, username, password) {
  const expDate = Math.floor(Date.now() / 1000) + 86400;
  const qs = new URLSearchParams({
    action: "user", sub: "create",
    api_key: API_KEY,
    username, password,
    max_connections: "1",
    exp_date: String(expDate),
    package: String(packageId),
  });
  const res = await panelFetch(`/api.php?${qs}`);
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch {
    throw new Error(`Panel create non-JSON: ${text.slice(0, 300)}`);
  }
  if (data && data.error) throw new Error(`Panel create: ${data.error}`);
  return data;
}

// ── email templates ───────────────────────────────────────────────────────────

function customerEmail(name, username, password, m3uUrl) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Votre essai gratuit Stream Bleu</title>
</head>
<body style="margin:0;padding:0;background-color:#f2f2f2;font-family:Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
       style="background-color:#f2f2f2;padding:32px 16px;">
  <tr>
    <td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
             style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;
                    box-shadow:0 2px 8px rgba(0,0,0,0.08);">

        <!-- En-tête -->
        <tr>
          <td style="background-color:#4a4fc0;padding:32px 40px;text-align:center;">
            <h1 style="margin:0;font-family:Arial,sans-serif;font-size:26px;font-weight:bold;
                       color:#ffffff;">Stream Bleu</h1>
            <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:13px;
                      color:rgba(255,255,255,0.80);">IPTV Premium · France</p>
          </td>
        </tr>

        <!-- Corps -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:15px;color:#333333;">
              Bonjour ${name},</p>
            <p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:14px;
                      line-height:1.65;color:#555555;">
              Votre essai gratuit de <strong>24 heures</strong> est maintenant actif.
              Voici vos identifiants de connexion :
            </p>

            <!-- Identifiants -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="background-color:#f5f6ff;border:1px solid #dde0f5;border-radius:6px;margin-bottom:28px;">
              <tr>
                <td style="padding:24px 28px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="padding:0 0 14px;border-bottom:1px solid #e5e7f5;">
                        <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;
                                  color:#888888;text-transform:uppercase;">Serveur</p>
                        <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;
                                  color:#333333;font-weight:bold;">${PANEL_HTTPS}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #e5e7f5;">
                        <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;
                                  color:#888888;text-transform:uppercase;">Nom d'utilisateur</p>
                        <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;
                                  color:#333333;font-weight:bold;">${username}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 0 0;">
                        <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;
                                  color:#888888;text-transform:uppercase;">Mot de passe</p>
                        <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;
                                  color:#333333;font-weight:bold;">${password}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- M3U -->
            <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:13px;
                      color:#555555;font-weight:bold;">Lien M3U :</p>
            <p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:12px;
                      color:#4a4fc0;word-break:break-all;">${m3uUrl}</p>

            <p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:14px;
                      line-height:1.65;color:#555555;">
              Si vous avez des questions ou besoin d'aide pour la configuration,
              n'hésitez pas à nous contacter par email ou sur WhatsApp.
            </p>

            <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#555555;">
              Cordialement,<br>
              <strong>L'équipe Stream Bleu</strong>
            </p>
          </td>
        </tr>

        <!-- Pied -->
        <tr>
          <td style="background-color:#f8f8f8;border-top:1px solid #eeeeee;
                     padding:18px 40px;text-align:center;">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#aaaaaa;">
              © 2025 Stream Bleu ·
              <a href="https://streambleu.fr" style="color:#4a4fc0;text-decoration:none;">streambleu.fr</a>
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function adminEmail(name, email, country, device, whatsapp, notes, username, password) {
  return `<!DOCTYPE html>
<html lang="fr"><head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;font-size:14px;color:#333;padding:20px;">
  <h2 style="color:#4a4fc0;margin-top:0;">Nouvel essai gratuit — Stream Bleu</h2>
  <table cellpadding="6" cellspacing="0" border="0">
    <tr><td style="color:#888;width:130px;">Nom</td><td><strong>${name}</strong></td></tr>
    <tr><td style="color:#888;">Email</td><td>${email}</td></tr>
    <tr><td style="color:#888;">Pays</td><td>${country || "—"}</td></tr>
    <tr><td style="color:#888;">Appareil</td><td>${device || "—"}</td></tr>
    <tr><td style="color:#888;">WhatsApp</td><td>${whatsapp || "—"}</td></tr>
    <tr><td style="color:#888;">Notes</td><td>${notes || "—"}</td></tr>
    <tr><td colspan="2"><hr style="border:none;border-top:1px solid #eee;margin:8px 0;"></td></tr>
    <tr><td style="color:#888;">Username</td><td><strong>${username}</strong></td></tr>
    <tr><td style="color:#888;">Password</td><td><strong>${password}</strong></td></tr>
  </table>
</body></html>`;
}

// ── main handler ──────────────────────────────────────────────────────────────

export default {
  async fetch(request) {

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return json({ success: false, error: "Méthode non autorisée" }, 405);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ success: false, error: "Corps JSON invalide" }, 400);
    }

    const { name, email, country, device, whatsapp, notes } = body;
    if (!name || !email) {
      return json({ success: false, error: "Nom et email requis" }, 400);
    }

    let step = "packages";
    try {

      // 1. Packages
      const packages = await getPackages();
      console.log("Packages reçus:", JSON.stringify(packages).slice(0, 500));

      let packageId = null;
      for (const pkg of packages) {
        const n = (pkg.package_name || pkg.name || "").trim().toLowerCase();
        if (n === PACKAGE_NAME.toLowerCase()) {
          packageId = pkg.id ?? pkg.package_id ?? null;
          break;
        }
      }

      if (!packageId) {
        const names = packages.map(p => p.package_name || p.name || "?").join(", ");
        throw new Error(`Package "${PACKAGE_NAME}" non trouvé. Disponibles : ${names}`);
      }

      // 2. Credentials
      step = "credentials";
      const username = "sb_" + randomStr(8);
      const password = randomStr(10);

      // 3. Create line
      step = "create_line";
      await createLine(packageId, username, password);

      // 4. M3U URL
      const m3uUrl =
        `${PANEL_HTTPS}/get.php?username=${encodeURIComponent(username)}` +
        `&password=${encodeURIComponent(password)}&type=m3u_plus&output=ts`;

      // 5. Email client
      step = "email_client";
      await sendEmail(
        email,
        "Votre accès Stream Bleu — Essai gratuit 24H activé ✓",
        customerEmail(name, username, password, m3uUrl)
      );

      // 6. Email admin
      step = "email_admin";
      await sendEmail(
        ADMIN_EMAIL,
        `[Essai] ${name} — ${email}`,
        adminEmail(name, email, country, device, whatsapp, notes, username, password)
      );

      return json({ success: true });

    } catch (err) {
      console.error(`[streambleu-trial] step=${step}`, err.message);
      return json({ success: false, error: `[${step}] ${err.message}` }, 500);
    }
  },
};
