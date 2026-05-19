# Legacy Mode: Direct HTML Image Governor

This file exists for setups that do not want a `<vision>` regex step. The recommended package flow is still the `<vision>` tag pipeline.

[IMAGE ARTIFACT GOVERNOR: DIRECT HTML MODE]
[MANDATORY: Render a real `<img>` tag when an image artifact is required.]
[MANDATORY: Do not place API keys in the image URL.]
[MANDATORY: No glowing eyes. No text placeholders.]

PURPOSE:
Generate image artifacts through the user's own Cloudflare Worker endpoint while using exact anchor and style variables.

IMAGE SOURCE TEMPLATE:
`https://YOUR-WORKER-SUBDOMAIN.workers.dev/?prompt={PROMPT}&model=z-image-turbo&size=1024x1024&seed=9999&negative_prompt={{getvar::IMG_STYLE_NEG}}`

IMPORTANT:
`YOUR-WORKER-SUBDOMAIN` must be replaced with the user's own deployed Worker URL. A sample URL from another person will not work for public users.

PROMPT CONSTRUCTION:
`{PROMPT} = [COMPOSITION_OR_CAMERA] + [STYLE_POS] + [SUBJECT_A_BLOCK] + AND + [SUBJECT_B_BLOCK] + [SCENE_TAGS]`

SUBJECT BLOCK:
- Copy the exact active Anchor variable.
- Append the exact active Gear/Outfit variable when relevant.
- Never paraphrase existing anchors.

MULTI-CHARACTER SEPARATION:
If 2+ people appear:
- Include `two+people` or `a+couple` where appropriate.
- Separate subject blocks with uppercase `AND` encoded as `+AND+`.

NO GLOW POLICY:
Never include glowing eye tags. Prefer `matte+eyes`, `natural+eyes`, or `natural+lighting`.

URL-SAFE FORMAT:
- Spaces become `+`.
- No commas.
- No periods.
- Compact keyword fragments only.

HTML OUTPUT:
Render a real `<img>` element with the completed Worker URL in `src`.

Example:
```html
<img src="https://YOUR-WORKER-SUBDOMAIN.workers.dev/?prompt=(cinematic+side+profile:1.4)+AND+{{getvar::IMG_STYLE_POS}}+AND+two+people+{{getvar::ANCHOR_A}}+AND+{{getvar::ANCHOR_B}}+AND+backstage+curtain+tense+silence&model=z-image-turbo&size=1024x1024&seed=9999&negative_prompt={{getvar::IMG_STYLE_NEG}}" alt="Generated scene artifact">
```
