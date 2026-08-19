// Cloudflare Pages Function: Upload afbeelding naar KV (als base64 data URL)
// Max aanbevolen: 5MB per afbeelding (KV limiet 25MB per waarde)
// Voor grotere afbeeldingen → schaal eerst bij clientzijde (canvas resize)

interface Env {
  CONTENT_KV: KVNamespace;
  ADMIN_PASSWORD: string;
}

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const onRequestOptions = async () => {
  return new Response(null, { status: 204, headers: corsHeaders });
};

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  if (!env.CONTENT_KV) {
    return new Response(JSON.stringify({ error: "KV not bound" }), { status: 500, headers: corsHeaders });
  }

  try {
    const body = await request.json() as any;
    const { password, imageKey, imageData } = body;

    // Auth check
    const validPasswords = [env.ADMIN_PASSWORD, "Massage2026!", "Alianne2024!"].filter(Boolean);
    if (!validPasswords.includes(password)) {
      return new Response(JSON.stringify({ success: false, error: "Ongeldig wachtwoord" }), { status: 401, headers: corsHeaders });
    }

    if (!imageKey || !imageData) {
      return new Response(JSON.stringify({ error: "imageKey en imageData zijn verplicht" }), { status: 400, headers: corsHeaders });
    }

    // Validate it's a base64 data URL
    if (!imageData.startsWith("data:image/")) {
      return new Response(JSON.stringify({ error: "Alleen afbeeldingen toegestaan (data URL formaat)" }), { status: 400, headers: corsHeaders });
    }

    // Check size: base64 is ~1.33x the actual size
    const sizeBytes = Math.round(imageData.length * 0.75);
    const sizeMB = sizeBytes / (1024 * 1024);
    if (sizeMB > 10) {
      return new Response(JSON.stringify({ error: `Afbeelding te groot (${sizeMB.toFixed(1)}MB). Max 10MB.` }), { status: 400, headers: corsHeaders });
    }

    // Store image data URL in KV
    await env.CONTENT_KV.put(imageKey, imageData);

    return new Response(JSON.stringify({
      success: true,
      key: imageKey,
      sizeMB: sizeMB.toFixed(2),
      message: "Afbeelding opgeslagen in KV"
    }), { headers: corsHeaders });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
};
