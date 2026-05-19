# Anchor-Driven Image Artifact Generator

A reusable image artifact pipeline for Lumiverse-style chat presets. The model emits compact `<vision>` or `<vision_raw>` tags, regex turns them into image renders, and a Cloudflare Worker proxies the image provider so the chat receives a real image response instead of a temporary provider URL.

## Stop. You must make your own Cloudflare Worker.

This package **does not ship a working public image endpoint**.

The example Worker URL in the regex files is a placeholder. It will not work for you. You must:

1. Create your own free Cloudflare Worker.
2. Paste in the Worker code from `workers/nano-gpt-worker.js`.
3. Add your own image provider API key as a Worker secret named `NANO_GPT_KEY`.
4. Deploy the Worker.
5. Copy your personal `*.workers.dev` URL into the regex file before importing it.

If you skip this, the image artifact system will fail. This is not optional. The regex cannot magically use someone else's Worker.

## What this utility does

This utility gives a preset a stable visual output protocol:

```text
LLM output -> <vision>prompt fragments</vision>
Regex -> <img src="YOUR_WORKER_URL/?prompt=...">
Worker -> image provider API request
Worker response -> browser receives a real PNG/WebP image
```

The prompt layer stays tidy and portable. Provider-specific variables live in the Worker.

## Included files

- `prompts/loom-image-artifact-governor.md` — the recommended utility prompt.
- `prompts/direct-html-governor-legacy.md` — older direct `<img>` mode for people who do not want regex tags.
- `workers/nano-gpt-worker.js` — Cloudflare Worker for Nano-GPT's OpenAI-compatible image generation endpoint.
- `regex/lumiverse-vision-regex-fixed-neg.json` — stable regex pack using a fixed negative prompt.
- `regex/lumiverse-vision-regex-style-neg-var.json` — advanced regex pack that expects `{{getvar::IMG_STYLE_NEG}}` to resolve in the replacement string.
- `lorebook/kitty-anchor-lorebook-example.json` — anchor var example.
- `lorebook/style-toggle-lorebook-example.json` — positive and negative style var example.
- `docs/setup-cloudflare-worker.md` — the very explicit Worker setup guide.
- `docs/anchor-spec.md` — how to write anchors and gear vars.
- `docs/troubleshooting.md` — common failure cases.
- `examples/sample-vision-outputs.md` — valid sample tags.

## Recommended mode

Use the `<vision>` + regex pipeline unless you have a very specific reason not to. It is cleaner, easier to audit, and makes the preset output less brittle than asking the model to handcraft full URLs or raw HTML every turn.

## Installation order

1. Follow `docs/setup-cloudflare-worker.md` first.
2. Replace the placeholder Worker URL in one regex JSON file.
3. Import that regex pack into Lumiverse.
4. Add `prompts/loom-image-artifact-governor.md` to your preset.
5. Add your own anchor lorebook entries or start from the example files.
6. Test with one tiny prompt before turning on mandatory artifact generation.

## Why the Worker matters

The Worker does three jobs:

- It hides your provider API key so it never appears inside a generated image URL.
- It normalizes base64 image responses into an image file the browser can render.
- It lets the same prompt/regex approach survive future provider swaps.

## Provider note

This repo ships a Nano-GPT Worker because it matches the current tested pattern: OpenAI-compatible image generation, `b64_json` support, and image bytes that can be returned directly to the browser. Other providers can work too, but their request body and response parsing may need adapter edits in the Worker.

## Minimum working prompt grammar

Recommended inner prompt shape:

```text
[CAMERA]+AND+{{getvar::IMG_STYLE_POS}}+AND+[ANCHOR_A]+AND+[ANCHOR_B]+AND+[SHORT_SCENE_KEYWORDS]
```

For interacting characters, front-load the camera logic so face anchors do not make everyone stare directly at the viewer.

## Absolute public-release warnings

- Do **not** put API keys in regex JSON.
- Do **not** put API keys in generated `<img>` URLs.
- Do **not** publish a Worker that contains a hardcoded private key.
- Do **not** forget to replace the Worker URL placeholder.
- Do **not** assume a sample `workers.dev` URL is a shared free backend. It is not.

## Credits / terminology

“Anchor” here means a reusable visual identity tag block stored in variables or lorebook content. “Gear” means optional outfit, prop, or scene-specific visual add-ons stored separately from the core anchor.
