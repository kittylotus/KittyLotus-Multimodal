# Anchor Spec

Anchors are reusable visual identity blocks. They make image prompts shorter and keep the image layer from re-describing the same character from scratch every turn.

## 1. Core Anchor

Use the core Anchor variable for stable identity traits:
- age category where appropriate
- gender presentation if relevant
- body type / silhouette
- face shape or defining facial feel
- hair color / length / style
- eye shape or eye color if useful
- baseline clothing only if it is part of the character's default visual identity
- one or two posture/personality cues that visually matter

Example:

```text
{{setvar::ANCHOR_HARU::adult+man+male+japanese+korean+bodyguard+tall+lean+muscular+build+broad+shoulders+sharp+eyes+short+dark+hair+calm+expression+stoic+face+black+suit+tactical+presence+strong+jawline+protective+stance+disciplined+body+language+male+silhouette+intimidating+presence+clean+masculine+features}}
```

## 2. Gear / Outfit Variable

Keep changing wardrobe, props, uniforms, accessories, and scene-specific equipment in separate variables.

Example:

```text
{{setvar::GEAR_HARU_FORMAL::black+tie+pressed+white+shirt+earpiece+leather+gloves}}
```

This lets the model assemble:

```text
{{getvar::ANCHOR_HARU}}+{{getvar::GEAR_HARU_FORMAL}}
```

without rewriting the whole character.

## 3. Why separation matters

Do not bake every possible outfit into the main anchor. Bloated anchors waste context and collide with future scene cues. Keep the identity stable and the gear modular.

## 4. Multi-character formatting

For 2+ people, separate subject blocks using uppercase `+AND+`:

```text
two+people+{{getvar::ANCHOR_A}}+AND+{{getvar::ANCHOR_B}}
```

Do not merge two anchors into one long unseparated mass.

## 5. Good anchor hygiene

Prefer:
- stable traits
- high-signal visual tags
- clean compressed phrasing
- consistent ordering

Avoid:
- emotional state that changes scene to scene
- contradictory outfit tags
- full prose descriptions
- glowing eye tags
- huge lore paragraphs masquerading as image anchors

## 6. Style variables

Recommended separate style vars:
- `IMG_STYLE_POS`
- `IMG_STYLE_NEG`
- `IMG_STYLE_OBJ`

The prompt utility expects positive style inside the `<vision>` body. Negative style is typically applied by the regex or renderer URL.
