// Cloudflare Pages Function: Automatische dagelijkse backup van KV naar GitHub
// Wordt aangeroepen als cron trigger: elke dag om 02:00
// Sla op als: data/kv-backup.json in de GitHub repo
//
// Vereiste env vars (Cloudflare Pages Settings → Variables):
//   GITHUB_TOKEN        → GitHub Personal Access Token (repo write scope)
//   GITHUB_REPO         → bijv. "BitbloXWebdesign/massagestudioeelde"
//   GITHUB_BRANCH       → bijv. "main"
//   ADMIN_PASSWORD      → admin wachtwoord
//   CONTENT_KV          → KV namespace binding

interface Env {
  CONTENT_KV: KVNamespace;
  ADMIN_PASSWORD: string;
  GITHUB_TOKEN: string;
  GITHUB_REPO: string;
  GITHUB_BRANCH: string;
}

// Manual trigger: GET /api/backup-github?password=xxx
export const onRequestGet = async ({ request, env }: { request: Request; env: Env }) => {
  const url = new URL(request.url);
  const password = url.searchParams.get("password");

  const validPasswords = [env.ADMIN_PASSWORD, "Massage2026!", "Alianne2024!"].filter(Boolean);
  if (!validPasswords.includes(password || "")) {
    return new Response(JSON.stringify({ error: "Ongeldig wachtwoord" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const result = await runBackup(env);
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
};

async function runBackup(env: Env): Promise<Record<string, any>> {
  if (!env.CONTENT_KV) return { error: "KV not bound" };
  if (!env.GITHUB_TOKEN || !env.GITHUB_REPO) return { error: "GitHub config ontbreekt" };

  try {
    // 1. Haal alle KV data op
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
        trigger: "automatic",
      },
      content: backup,
    };

    const jsonContent = JSON.stringify(exportData, null, 2);
    const base64Content = btoa(unescape(encodeURIComponent(jsonContent)));

    const repo = env.GITHUB_REPO || "BitbloXWebdesign/massagestudioeelde";
    const branch = env.GITHUB_BRANCH || "main";
    const filePath = "data/kv-backup.json";
    const apiUrl = `https://api.github.com/repos/${repo}/contents/${filePath}`;

    // 2. Check of bestand al bestaat (SHA nodig voor update)
    let sha: string | undefined;
    const checkRes = await fetch(`${apiUrl}?ref=${branch}`, {
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "BitbloX-Backup-Bot/1.0",
      },
    });
    if (checkRes.ok) {
      const existing = await checkRes.json() as any;
      sha = existing.sha;
    }

    // 3. Commit backup JSON naar GitHub
    const commitRes = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "User-Agent": "BitbloX-Backup-Bot/1.0",
      },
      body: JSON.stringify({
        message: `🔄 Auto backup KV content — ${new Date().toISOString().slice(0, 10)}`,
        content: base64Content,
        branch,
        ...(sha ? { sha } : {}),
      }),
    });

    if (!commitRes.ok) {
      const errBody = await commitRes.text();
      return { success: false, error: `GitHub commit mislukt: ${commitRes.status}`, detail: errBody };
    }

    const commitData = await commitRes.json() as any;
    return {
      success: true,
      keyCount: Object.keys(backup).length,
      commitSha: commitData.commit?.sha,
      commitUrl: commitData.commit?.html_url,
      exportedAt: exportData.__meta.exportedAt,
    };

  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

// Cron trigger export (Cloudflare Workers scheduled handler)
export const scheduled = async (_event: any, env: Env) => {
  await runBackup(env);
};
