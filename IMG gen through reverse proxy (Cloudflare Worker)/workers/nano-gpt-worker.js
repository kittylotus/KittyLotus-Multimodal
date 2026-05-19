/**
 * Loom Image Artifact Worker — Nano-GPT adapter
 *
 * BEFORE DEPLOYING:
 * 1) Create your own Cloudflare Worker.
 * 2) Paste this file into it.
 * 3) Add a Worker Secret named NANO_GPT_KEY.
 * 4) Deploy and copy your own *.workers.dev URL into your regex JSON.
 *
 * Do NOT hardcode your API key here.
 * Do NOT pass the API key in the image URL.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { searchParams } = url;

    const prompt = searchParams.get("prompt");
    const model = searchParams.get("model") || "z-image-turbo";
    const size = searchParams.get("size") || "1024x1024";
    const negativePrompt = searchParams.get("negative_prompt") || "";
    const seedParam = searchParams.get("seed");

    if (!prompt) {
      return new Response("Error: Missing prompt", {
        status: 400,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }

    if (!env.NANO_GPT_KEY) {
      return new Response("Worker configuration error: missing NANO_GPT_KEY secret", {
        status: 500,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }

    const requestBody = {
      prompt,
      model,
      size,
      negative_prompt: negativePrompt,
      response_format: "b64_json"
    };

    if (seedParam !== null && seedParam !== "") {
      const parsedSeed = Number(seedParam);
      if (Number.isFinite(parsedSeed)) {
        requestBody.seed = Math.trunc(parsedSeed);
      }
    }

    try {
      const providerResponse = await fetch("https://nano-gpt.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${env.NANO_GPT_KEY}`
        },
        body: JSON.stringify(requestBody)
      });

      const rawText = await providerResponse.text();
      let data;

      try {
        data = JSON.parse(rawText);
      } catch {
        return new Response(
          `Provider returned non-JSON response (HTTP ${providerResponse.status}): ${rawText}`,
          {
            status: 502,
            headers: { "Content-Type": "text/plain; charset=utf-8" }
          }
        );
      }

      if (!providerResponse.ok) {
        return new Response(
          `Provider error (HTTP ${providerResponse.status}): ${JSON.stringify(data)}`,
          {
            status: 502,
            headers: { "Content-Type": "text/plain; charset=utf-8" }
          }
        );
      }

      const first = data?.data?.[0];

      if (first?.b64_json) {
        const binary = Uint8Array.from(atob(first.b64_json), char => char.charCodeAt(0));

        return new Response(binary.buffer, {
          status: 200,
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=31536000, immutable"
          }
        });
      }

      if (first?.url) {
        return Response.redirect(first.url, 302);
      }

      return new Response(
        `Provider returned no usable image payload: ${JSON.stringify(data)}`,
        {
          status: 502,
          headers: { "Content-Type": "text/plain; charset=utf-8" }
        }
      );
    } catch (error) {
      return new Response(`Worker error: ${error.message}`, {
        status: 500,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }
  }
};
