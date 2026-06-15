/**
 * Stream Bleu — Worker d'essai gratuit
 * DEBUG version: probes multiple API endpoint formats
 */

const PANEL      = "https://activationpanel.ru";
const API_KEY    = "35cf68cc83a3a82e";
const RESEND_KEY = "re_98ZyX2kU_12nnqJff4QZ28PQbD8ueCdK7";
const FROM_EMAIL = "Stream Bleu <contact@streambleu.fr>";
const ADMIN_EMAIL= "contact@streambleu.fr";

function randomStr(len, pool="abcdefghijklmnopqrstuvwxyz0123456789") {
  const buf = new Uint8Array(len);
  crypto.getRandomValues(buf);
  return Array.from(buf, b => pool[b % pool.length]).join("");
}
function json(data, status=200) {
  return new Response(JSON.stringify(data, null, 2), {
    status, headers: {"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}
  });
}
async function probe(url, opts={}) {
  try {
    const r = await fetch(url, opts);
    const txt = await r.text();
    const isJson = txt.trim().startsWith("{") || txt.trim().startsWith("[");
    return { status: r.status, isJson, preview: txt.slice(0,200) };
  } catch(e) { return { error: e.message }; }
}
async function sendEmail(to, subject, html) {
  const r = await fetch("https://api.resend.com/emails", {
    method:"POST",
    headers:{Authorization:`Bearer ${RESEND_KEY}`,"Content-Type":"application/json"},
    body: JSON.stringify({from:FROM_EMAIL, to, subject, html})
  });
  if (!r.ok) throw new Error(`Resend(${r.status}): ${await r.text()}`);
}

export default {
  async fetch(request) {

    // ── DEBUG: GET /?debug ────────────────────────────────────────────────────
    if (request.method==="GET") {
      const u = new URL(request.url);
      if (!u.searchParams.has("debug")) return new Response("POST only", {status:200});

      const key = API_KEY;
      const results = {};

      // Try every plausible API format
      const tests = [
        // Standard XC formats
        ["xc_get_packages",   `${PANEL}/api.php?action=packages&api_key=${key}`, {}],
        ["xc_get_packages_k", `${PANEL}/api.php?action=packages&key=${key}`, {}],
        // POST with JSON
        ["post_json_packages", `${PANEL}/api.php`, {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({action:"packages",api_key:key})
        }],
        // POST with form
        ["post_form_packages", `${PANEL}/api.php`, {
          method:"POST",
          headers:{"Content-Type":"application/x-www-form-urlencoded"},
          body:`action=packages&api_key=${key}`
        }],
        // Try /api/ path
        ["api_slash",         `${PANEL}/api/?action=packages&api_key=${key}`, {}],
        ["api_v1",            `${PANEL}/api/v1/packages?api_key=${key}`, {}],
        // Try with header
        ["header_auth",       `${PANEL}/api.php?action=packages`, {
          headers:{"X-API-Key":key,"Authorization":`Bearer ${key}`}
        }],
        // TVPLUS specific guesses
        ["tvplus_lines",      `${PANEL}/api.php?action=get_lines&api_key=${key}`, {}],
        ["tvplus_create",     `${PANEL}/api.php?action=create_line&api_key=${key}&type=trial`, {}],
        ["tvplus_packages",   `${PANEL}/api.php?action=get_packages&api_key=${key}`, {}],
        // Try demo endpoint
        ["demo_create",       `${PANEL}/api.php?action=demo&api_key=${key}`, {}],
        ["demo_post",         `${PANEL}/api.php`, {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({action:"create_demo",api_key:key})
        }],
        // Try profile endpoint to see if key works at all
        ["profile",           `${PANEL}/api.php?action=get_profile&api_key=${key}`, {}],
        ["server_info",       `${PANEL}/api.php?action=server_info&api_key=${key}`, {}],
      ];

      for (const [name, url, opts] of tests) {
        results[name] = await probe(url, opts);
      }

      // Mark which ones returned JSON (not HTML login page)
      const jsonOnes = Object.entries(results)
        .filter(([,v]) => v.isJson)
        .map(([k]) => k);
      results._json_responses = jsonOnes.length ? jsonOnes : ["NONE — all returned HTML login page"];

      return json(results);
    }

    // ── CORS ──────────────────────────────────────────────────────────────────
    if (request.method==="OPTIONS") return new Response(null, { headers:{
      "Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,OPTIONS",
      "Access-Control-Allow-Headers":"Content-Type"
    }});
    if (request.method!=="POST") return json({success:false,error:"POST only"},405);

    let body;
    try { body = await request.json(); }
    catch { return json({success:false,error:"Invalid JSON"},400); }

    const {name, email, country, device, whatsapp, notes} = body;
    if (!name||!email) return json({success:false,error:"Nom et email requis"},400);

    return json({success:false,error:"Panel API format unknown — visit /?debug to diagnose"},503);
  }
};
