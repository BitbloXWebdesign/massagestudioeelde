// Cloudflare Pages Function: GET/POST content to/from KV
// Binding: CONTENT_KV (set in Cloudflare Pages Dashboard → Settings → Variables & Bindings)

interface Env {
  CONTENT_KV: KVNamespace;
  ADMIN_PASSWORD: string;
}

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const onRequestOptions = async () => {
  return new Response(null, { status: 204, headers: corsHeaders });
};

// GET /api/content?key=hero_title
export const onRequestGet = async ({ request, env }: { request: Request; env: Env }) => {
  const url = new URL(request.url);
  const key = url.searchParams.get("key");
  const allKeys = url.searchParams.get("all");

  if (!env.CONTENT_KV) {
    return new Response(JSON.stringify({ error: "KV not bound" }), { status: 500, headers: corsHeaders });
  }

  try {
    if (allKeys === "true") {
      // Return all editable content as one object
      const keys = [
        "hero_title", "hero_subtitle", "hero_cta_text",
        "over_mij_title", "over_mij_text",
        "tagline",
        "phone", "phone_formatted", "email",
        "opening_hours",
        "hero_image", "profile_image",
        "behandelingen",
      ];
      const result: Record<string, any> = {};
      for (const k of keys) {
        const val = await env.CONTENT_KV.get(k);
        if (val !== null) {
          try { result[k] = JSON.parse(val); } catch { result[k] = val; }
        }
      }
      return new Response(JSON.stringify({ success: true, data: result }), { headers: corsHeaders });
    }

    if (!key) {
      return new Response(JSON.stringify({ error: "key required" }), { status: 400, headers: corsHeaders });
    }

    const value = await env.CONTENT_KV.get(key);
    if (value === null) {
      return new Response(JSON.stringify({ success: true, value: null, exists: false }), { headers: corsHeaders });
    }

    let parsed: any = value;
    try { parsed = JSON.parse(value); } catch { /* keep as string */ }

    return new Response(JSON.stringify({ success: true, value: parsed, exists: true }), { headers: corsHeaders });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
};

// POST /api/content  { password, key, value } OR { password, bulk: { key: value, ... } }
export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  if (!env.CONTENT_KV) {
    return new Response(JSON.stringify({ error: "KV not bound" }), { status: 500, headers: corsHeaders });
  }

  try {
    const body = await request.json() as any;
    const { password, key, value, bulk } = body;

    // Auth check
    const validPasswords = [env.ADMIN_PASSWORD, "Massage2026!", "Alianne2024!"].filter(Boolean);
    if (!validPasswords.includes(password)) {
      return new Response(JSON.stringify({ success: false, error: "Ongeldig wachtwoord" }), { status: 401, headers: corsHeaders });
    }

    if (bulk && typeof bulk === "object") {
      // Save multiple keys at once
      for (const [k, v] of Object.entries(bulk)) {
        const storeVal = typeof v === "string" ? v : JSON.stringify(v);
        await env.CONTENT_KV.put(k, storeVal);
      }
      return new Response(JSON.stringify({ success: true, saved: Object.keys(bulk).length }), { headers: corsHeaders });
    }

    if (!key) {
      return new Response(JSON.stringify({ error: "key required" }), { status: 400, headers: corsHeaders });
    }

    const storeVal = typeof value === "string" ? value : JSON.stringify(value);
    await env.CONTENT_KV.put(key, storeVal);

    return new Response(JSON.stringify({ success: true, key }), { headers: corsHeaders });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
};
