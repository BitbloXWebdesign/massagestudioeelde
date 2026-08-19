// Cloudflare Pages Function: Importeer een JSON backup terug naar KV
// POST /api/backup-import { password, backup: { content: { key: value, ... } } }

interface Env {
  CONTENT_KV: KVNamespace;
  ADMIN_PASSWORD: string;
}

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequestOptions = async () =>
  new Response(null, { status: 204, headers: corsHeaders });

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  const adminPass = env.ADMIN_PASSWORD || "mse2024admin";

  if (!env.CONTENT_KV) {
    return new Response(JSON.stringify({ error: "KV not bound" }), { status: 500, headers: corsHeaders });
  }

  try {
    const body = await request.json() as any;
    const { password, backup } = body;

    if (password !== adminPass) {
      return new Response(JSON.stringify({ error: "Ongeldig wachtwoord" }), { status: 401, headers: corsHeaders });
    }

    if (!backup?.content || typeof backup.content !== "object") {
      return new Response(JSON.stringify({ error: "Ongeldig backup formaat" }), { status: 400, headers: corsHeaders });
    }

    // Schrijf alle keys terug naar KV
    let restored = 0;
    for (const [key, value] of Object.entries(backup.content)) {
      const storeVal = typeof value === "string" ? value : JSON.stringify(value);
      await env.CONTENT_KV.put(key, storeVal);
      restored++;
    }

    return new Response(JSON.stringify({
      success: true,
      restored,
      message: `${restored} onderdelen succesvol hersteld uit backup van ${backup.__meta?.exportedAt || 'onbekende datum'}`,
    }), { headers: corsHeaders });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
};
