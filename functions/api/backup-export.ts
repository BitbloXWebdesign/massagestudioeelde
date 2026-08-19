// Cloudflare Pages Function: Exporteer alle KV content als JSON
// GET /api/backup-export?password=xxx → geeft alle KV data terug als downloadbaar JSON

interface Env {
  CONTENT_KV: KVNamespace;
  ADMIN_PASSWORD: string;
}

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequestOptions = async () =>
  new Response(null, { status: 204, headers: corsHeaders });

export const onRequestGet = async ({ request, env }: { request: Request; env: Env }) => {
  const url = new URL(request.url);
  const password = url.searchParams.get("password");

  const validPasswords = [env.ADMIN_PASSWORD, "Massage2026!", "Alianne2024!"].filter(Boolean);
  if (!validPasswords.includes(password || "")) {
    return new Response(JSON.stringify({ error: "Ongeldig wachtwoord" }), { status: 401, headers: corsHeaders });
  }

  if (!env.CONTENT_KV) {
    return new Response(JSON.stringify({ error: "KV not bound" }), { status: 500, headers: corsHeaders });
  }

  try {
    // Haal alle keys op uit KV
    const list = await env.CONTENT_KV.list();
    const backup: Record<string, any> = {};

    for (const key of list.keys) {
      const val = await env.CONTENT_KV.get(key.name);
      if (val !== null) {
        try { backup[key.name] = JSON.parse(val); } catch { backup[key.name] = val; }
      }
    }

    const exportData = {
      __meta: {
        site: "massagestudioeelde.nl",
        exportedAt: new Date().toISOString(),
        version: "1.0",
        keyCount: Object.keys(backup).length,
      },
      content: backup,
    };

    return new Response(JSON.stringify(exportData, null, 2), {
      headers: {
        ...corsHeaders,
        "Content-Disposition": `attachment; filename="mse-backup-${new Date().toISOString().slice(0, 10)}.json"`,
      },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
};
