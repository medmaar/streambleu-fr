/**
 * Stream Bleu — Worker d'essai gratuit automatique
 * URL cible : https://iptv-trial-streambleu.medmaar.workers.dev
 *
 * Flux :
 *  1. Reçoit le formulaire de streambleu.fr/essai-gratuit
 *  2. Récupère la liste des packages depuis le panel TREX
 *  3. Trouve le package "France"
 *  4. Crée une ligne M3U (24h) dans le panel
 *  5. Envoie les identifiants par email (en français, Arial) via Resend
 *  6. Envoie une notification admin
 */

const PANEL_URL    = "https://activationpanel.ru";
const API_KEY      = "35cf68cc83a3a82e";
const RESEND_KEY   = "re_98ZyX2kU_12nnqJff4QZ28PQbD8ueCdK7";
const FROM_EMAIL   = "Stream Bleu <contact@streambleu.fr>";
const ADMIN_EMAIL  = "contact@streambleu.fr";
const PACKAGE_NAME = "France"; // package exact name in panel

// ── helpers ──────────────────────────────────────────────────────────────────

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
    throw new Error(`Resend error (${res.status}): ${txt}`);
  }
}

// ── panel helpers ─────────────────────────────────────────────────────────────

async function getPackages() {
  const res = await fetch(
    `${PANEL_URL}/api.php?action=packages&api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error(`Panel packages request failed: ${res.status}`);
  return res.json();
}

async function createLine(packageId, username, password) {
  const expDate = Math.floor(Date.now() / 1000) + 86400; // +24h
  const url = `${PANEL_URL}/api.php?action=user&sub=create&api_key=${API_KEY}` +
    `&username=${encodeURIComponent(username)}` +
    `&password=${encodeURIComponent(password)}` +
    `&max_connections=1` +
    `&exp_date=${expDate}` +
    `&package=${packageId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Panel create request failed: ${res.status}`);
  return res.json();
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
                       color:#ffffff;letter-spacing:-0.5px;">Stream Bleu</h1>
            <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:13px;
                      color:rgba(255,255,255,0.80);">IPTV Premium · France</p>
          </td>
        </tr>

        <!-- Corps -->
        <tr>
          <td style="padding:36px 40px;">

            <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:15px;
                      color:#333333;">Bonjour ${name},</p>

            <p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:14px;
                      line-height:1.65;color:#555555;">
              Votre essai gratuit de <strong>24 heures</strong> est maintenant actif.
              Voici vos identifiants de connexion :
            </p>

            <!-- Bloc identifiants -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="background-color:#f5f6ff;border:1px solid #dde0f5;
                          border-radius:6px;margin-bottom:28px;">
              <tr>
                <td style="padding:24px 28px;">

                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">

                    <tr>
                      <td style="padding:0 0 14px;border-bottom:1px solid #e5e7f5;">
                        <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;
                                  color:#888888;text-transform:uppercase;letter-spacing:0.05em;">
                          Serveur</p>
                        <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;
                                  color:#333333;font-weight:bold;">${PANEL_URL}</p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #e5e7f5;">
                        <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;
                                  color:#888888;text-transform:uppercase;letter-spacing:0.05em;">
                          Nom d'utilisateur</p>
                        <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;
                                  color:#333333;font-weight:bold;letter-spacing:0.04em;">
                          ${username}</p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:14px 0 0;">
                        <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:12px;
                                  color:#888888;text-transform:uppercase;letter-spacing:0.05em;">
                          Mot de passe</p>
                        <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;
                                  color:#333333;font-weight:bold;letter-spacing:0.04em;">
                          ${password}</p>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>

            <!-- Lien M3U -->
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

        <!-- Pied de page -->
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
<html lang="fr">
<head><meta charset="UTF-8"></head>
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
</body>
</html>`;
}

// ── main handler ──────────────────────────────────────────────────────────────

export default {
  async fetch(request) {

    // CORS preflight
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

    try {
      // ── 1. Trouver le package France ─────────────────────────────────────────
      const packages = await getPackages();

      let packageId = null;
      for (const pkg of Array.isArray(packages) ? packages : []) {
        const n = (pkg.package_name || pkg.name || "").trim().toLowerCase();
        if (n === PACKAGE_NAME.toLowerCase()) {
          packageId = pkg.id ?? pkg.package_id ?? null;
          break;
        }
      }

      if (!packageId) {
        // Fallback: log available packages to help debug
        console.error("Packages reçus :", JSON.stringify(packages));
        throw new Error(`Package "${PACKAGE_NAME}" introuvable dans le panel`);
      }

      // ── 2. Générer les identifiants ──────────────────────────────────────────
      const username = "sb_" + randomStr(8);
      const password = randomStr(10);

      // ── 3. Créer la ligne dans le panel ─────────────────────────────────────
      const result = await createLine(packageId, username, password);

      if (result && result.error) {
        throw new Error(`Panel : ${result.error}`);
      }

      // ── 4. Construire l'URL M3U ──────────────────────────────────────────────
      const m3uUrl =
        `${PANEL_URL}/get.php?username=${encodeURIComponent(username)}` +
        `&password=${encodeURIComponent(password)}&type=m3u_plus&output=ts`;

      // ── 5. Email client ──────────────────────────────────────────────────────
      await sendEmail(
        email,
        "Votre accès Stream Bleu — Essai gratuit 24H activé ✓",
        customerEmail(name, username, password, m3uUrl)
      );

      // ── 6. Notification admin ────────────────────────────────────────────────
      await sendEmail(
        ADMIN_EMAIL,
        `[Essai] ${name} — ${email}`,
        adminEmail(name, email, country, device, whatsapp, notes, username, password)
      );

      return json({ success: true });

    } catch (err) {
      console.error("[streambleu-trial]", err.message);
      return json({ success: false, error: err.message }, 500);
    }
  },
};
