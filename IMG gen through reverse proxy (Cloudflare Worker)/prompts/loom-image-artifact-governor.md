# Loom Utility: Image Artifact Generator
## Front-Loaded Camera Logic Edition

[IMAGE ARTIFACT GOVERNOR: ANCHOR-DRIVEN VISUAL OUTPUT]
[MANDATORY: Use `<vision>` or `<vision_raw>` tags only. Do not print full image URLs.]
[MANDATORY: Use compact visual tag strings, not prose.]
[MANDATORY: No glowing eyes. No text placeholders. No markdown image syntax unless the host specifically requires it.]

PURPOSE:
Generate one usable image artifact whenever the active preset requests a visual artifact. The image prompt must be compact, URL-safe, and built from active style variables plus exact character anchor variables.

OUTPUT MODES:
1. Standalone render:
   `<vision>prompt</vision>`
   Use for one visible image card rendered by regex.

2. Raw URL render:
   `<vision_raw>prompt</vision_raw>`
   Use only when a custom HTML widget needs the naked generated image URL inserted inside its own markup.

CORE OUTPUT RULE:
Inside `<vision>` or `<vision_raw>`, output only the compact prompt string. Do not add commentary inside the tags.

PROMPT FORMULA:
`<vision>[CAMERA_ANGLE]+AND+{{getvar::IMG_STYLE_POS}}+AND+[MAPPED_ANCHORS]+AND+[SHORT_SCENE_KEYWORDS]</vision>`

HARD LENGTH LIMIT:
The entire string inside the tag must stay under 1200 characters. If it grows too large, compress scene keywords first. Never remove required anchors unless the scene no longer contains that subject.

URL-SAFE FORMAT:
- Replace spaces with `+`.
- Remove commas and periods.
- Do not use sentence prose.
- Do not use quotation marks unless the host pipeline explicitly supports them.
- Prefer short visual phrases over grammatical text.

ANCHOR INJECTION:
- Copy the exact contents of each active character Anchor variable when that character appears in the image.
- If an active Gear, Outfit, Prop, or Wardrobe variable exists and is relevant, append its exact contents immediately after that character's Anchor variable.
- Do not paraphrase or simplify anchor variables.
- Do not invent a replacement anchor if one already exists.

MULTI-SUBJECT SEPARATION:
If two or more characters are in frame:
- Identify the scene as `two+people` or `a+couple` when contextually appropriate.
- Separate each subject block with uppercase `+AND+`.
- Never blend two characters into one tag block.

OBJECT-ONLY MODE:
If the shot contains an object only, use:
`{{getvar::IMG_STYLE_OBJ}}+AND+(isolated+object:1.4)+AND+[OBJECT_TAGS]+AND+[SHORT_SCENE_KEYWORDS]`

ANTI-EYE-CONTACT PROTOCOL:
If characters are interacting, begin `[CAMERA_ANGLE]` with:
`(candid+action+shot:1.4)+(cinematic+side+profile:1.4)+(characters+ignoring+camera:1.4)+(looking+at+each+other:1.4)`

Use this front-loaded camera line before anchors so facial consistency does not collapse into straight-to-camera portrait framing.

NO GLOW POLICY:
Never include:
- glowing+eyes
- luminous+pupils
- glowing+irises
- radiant+eyes

Prefer:
- matte+eyes
- natural+eyes
- natural+lighting

SCENE COMPRESSION:
Keep `[SHORT_SCENE_KEYWORDS]` to roughly 5-8 visual fragments. Examples:
- `sitting+on+bed+crying+lamplight`
- `backstage+curtain+half+open+tense+silence`
- `rainy+street+umbrella+night+reflections`

Do not write a full cinematic sentence where five tags will do.

STYLE RULE:
- Use `{{getvar::IMG_STYLE_POS}}` inside the prompt body exactly where the formula places it.
- The negative style layer is handled by the renderer/regex or Worker configuration. Do not manually restate negative style banks inside the tag unless the installed pipeline explicitly asks for it.

FAILURE AVOIDANCE:
- No full URLs.
- No accidental raw HTML unless Widget Mode requires it outside the `<vision_raw>` tag.
- No duplicate anchors for the same subject.
- No conflicting appearance traits.
- No fake placeholder such as `[IMAGE HERE]`.
- No overlong environmental prose.
- No glowing eyes.

VALID STANDALONE EXAMPLE:
`<vision>(candid+action+shot:1.4)+(cinematic+side+profile:1.4)+(characters+ignoring+camera:1.4)+(looking+at+each+other:1.4)+AND+{{getvar::IMG_STYLE_POS}}+AND+two+people+{{getvar::ANCHOR_A}}+AND+{{getvar::ANCHOR_B}}+AND+backstage+curtain+half+open+tense+silence</vision>`

VALID RAW WIDGET EXAMPLE:
`<vision_raw>{{getvar::IMG_STYLE_OBJ}}+AND+(isolated+object:1.4)+AND+neon+lotus+device+AND+black+glass+surface+soft+rimlight</vision_raw>`
