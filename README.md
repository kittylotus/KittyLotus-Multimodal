<p align="center">
  <img src="https://raw.githubusercontent.com/kittylotus/-KittyLotus-extras/refs/heads/main/Expressions/gabi_analyzing.png" width="190" alt="Gabrielle analyzing">
</p>

<h1 align="center">⋆｡‧₊ °♱ ༺ 𓆩𖤍𓆪 KittyLotus Multimodal</h1>

<p align="center">
  <b>A modular narrative preset for Lumiverse / SillyTavern.</b><br>
  Prose control, character fidelity, story pressure, state tracking, interactive HTML, social formats, campaign tools, and one extremely opinionated engine operator.
</p>

<p align="center">
  <a href="https://multimodalkl.carrd.co/">Carrd</a> •
  <a href="https://github.com/kittylotus/KittyLotus-Multimodal/wiki/Engine-Quickstart-Guide">Quickstart Wiki</a> •
  <a href="https://illarin.com/a/9998b495-1a9a-4e57-822f-3853f0b32380/kittylotus">Latest preset on Illarin</a> •
  <a href="https://illarin.com/a/dd8c3b6b-e335-4259-b744-ccf25543f289/gabrielle-debug-ic-alt-fields">Gabrielle's card</a>
</p>

---

## ✦ What is this thing?

<img align="right" src="https://raw.githubusercontent.com/kittylotus/-KittyLotus-extras/refs/heads/main/Expressions/gabi_debugging.png" width="175" alt="Gabrielle debugging">

KittyLotus Multimodal is a **modular roleplay and narrative control preset** built around Gabrielle — Gabi — as its engine operator and commentary layer.

It is less “one giant prose prompt” and more **a pile of systems you can mix and match**: POV and agency rules, pacing, prose shaping, character fidelity, story progression, world pressure, antagonists, trackers, psychological state, CYOA controls, social formats, HTML interfaces, image hooks, campaign tooling, model adapters, and randomized scene pressure.

You do **not** need to enable everything. The preset is meant to scale from plain prose with a few guardrails to an aggressively instrumented little narrative machine.

<br clear="right">

### Quick links

- **Lost in the toggles?** Read the [Engine Quickstart Guide](https://github.com/kittylotus/KittyLotus-Multimodal/wiki/Engine-Quickstart-Guide).
- **Using Lumiverse?** Grab the [latest KittyLotus preset on Illarin](https://illarin.com/a/9998b495-1a9a-4e57-822f-3853f0b32380/kittylotus).
- **Want Gabi as a card?** [Gabrielle is here](https://illarin.com/a/dd8c3b6b-e335-4259-b744-ccf25543f289/gabrielle-debug-ic-alt-fields) in CCv2, CCv3, and `.CharX` formats.

---

# ╰❛*ੈ✩ Main systems ‧₊˚ೃ .

## *ૢ✧ Gabrielle — commentary, monitoring, and Live Feed

<img align="left" src="https://raw.githubusercontent.com/kittylotus/-KittyLotus-extras/refs/heads/main/Expressions/gabi_smug.png" width="155" alt="Gabrielle smug">

Gabi can stay out of the way, leave ordinary commentary cards, run the full monitor + telemetry layer, or appear only periodically.

His controls include an opening tutorial, configurable spacing between Gabiboxes, telemetry focus, short **Live Feed** comments, personality intensity, relationship influence, placement before or after prose, and optional recency-bias countermeasures.

The campaign DM is a **separate system**, so you can use regular Gabi, Dungeon Master Gabi, both, or neither.

<br clear="left">

## *ૢ✧ Narrative control without stealing the wheel

Choose whether the model may write your character’s voluntary actions and dialogue, then set POV independently for your character and the main character.

Narrative Mode supports:

- **Roleplay** — writes the scene, then hands control back to you.
- **Continuous scene** — keeps narrating instead of stopping at every handoff.
- **Alternating viewpoints** — writes both sides when that format suits the scene.

Pacing can stay adaptive, hold close to the current moment, or dwell longer before moving time forward. **Scene Initiative** lets the world and NPCs create motion without automatically taking control of your character.

## *ૢ✧ Output shape and prose control

Reply length, custom word targets, tolerance, narration density, dialogue share, and dialogue-exchange limits are controlled separately instead of being mashed into one vague “be detailed” instruction.

Style controls include:

- **Base Style** for sentence and paragraph movement.
- **Author Style** as an additional rhythm/habit layer.
- **Prose Level** for vocabulary and sentence difficulty.
- **Interiority** for how private thoughts appear in prose.
- **Narrative Conventions** to keep rhetorical devices purposeful and reduce repetitive stock phrasing.

## *ૢ✧ Character fidelity, knowledge boundaries, and NPC agency

The preset is built to resist trope flattening and convenience rewrites. Abrasive characters do not become secretly soft because the scene wants a shortcut; competent characters do not become incompetent just to manufacture drama.

NPCs are expected to maintain their own goals, constraints, knowledge, and next actions. They should not know things they have not seen, learned, inferred, or been told.

## *ૢ✧ Story progression and continuity

<img align="right" src="https://raw.githubusercontent.com/kittylotus/-KittyLotus-extras/refs/heads/main/Expressions/gabi_thinking.png" width="160" alt="Gabrielle thinking">

Story controls are split from moment-to-moment scene pacing.

**Story Direction** determines the kind of movement the narrative should favor. **Character & Relationship Progress** controls how quickly lasting changes develop. **Story Tracking** can maintain ongoing arc pressure, while the current arc can be reset without throwing away the rest of the preset.

A private **Continuity Summary** can periodically compress recent turns, with configurable summary frequency and message depth. Extra scene checks can add a small control pass for scene pressure, priorities, and likely costs.

<br clear="right">

## *ૢ✧ World pressure, failure, and antagonists

The old single “DARK_LEVEL” idea has grown into a broader consequence system.

**AutoWorld** can infer world pressure from the scene, or you can switch to manual controls for:

- **Darkness Level 0–5** — how harsh and lasting consequences may become.
- **Everyday Hostility** — prejudice, petty cruelty, and unfair treatment where appropriate to the setting.
- **World Law** — how much room the setting allows for exceptions.
- **Reveal Cadence** — how quickly earned information is revealed.
- **Failure Consequences** — what follows an actual failed attempt; it does not make attempts fail by itself.
- **Graphic Injuries** — a separate detail toggle rather than something darkness silently forces on.

Antagonists can use fixed or gradually escalating stages, an active antagonist name/group, a chosen villain archetype, configurable turns per stage, optional fixation, and optional links between antagonist pressure and world darkness.

## *ૢ✧ Intimacy progression

Intimacy is its own control surface instead of being welded to general story speed.

Adult content can be disabled entirely. When enabled, an **Intimacy Gate** controls how readily intimacy may develop, with separate style and multi-turn controls. Character behavior and established relationship context are still supposed to matter; the point is to prevent the model from speedrunning a relationship because two people made eye contact once.

---

# ✦ Text, interfaces, and multimodal nonsense

<img align="left" src="https://raw.githubusercontent.com/kittylotus/-KittyLotus-extras/refs/heads/main/Expressions/gabi_mischievous.png" width="170" alt="Gabrielle mischievous">

The preset can stay plain-text, but it also knows how to produce and coordinate richer output surfaces.

- **Next-Action Choices / CYOA** with bundled styled regex modes.
- **Chapter and weather headers.**
- **Social formats** plus optional full phone/feed framing and quick actions.
- **Dialogue colors**, written-text effects, emotional text effects, and dialogue-volume effects.
- **Native-language thoughts** with translation when appropriate.
- **Marginal footnotes** for lore, memories, translations, terms, and asides.
- **Automatic Thoughts** as separate click-to-reveal NPC thought cutaways.
- **Interactive Interfaces** with selectable complexity and UI style.
- **Realistic Object Sizes**, stricter HTML compatibility, and optional mobile narrative wrapping.
- **Swarm Studio hooks** and separate **API Image Generation** support when the required image tooling is installed and configured.

<br clear="left">

## Scene Trace

Scene Trace is a streaming modular inspection console for scene facts, inspectable signals, social geometry, and knowledge boundaries. It is meant for people who look at a perfectly functional roleplay and think, *okay, but what if it had diagnostics?*

---

# ✦ Records, trackers, and state

The tracker layer is no longer just one state card.

**Tracker Engine** chooses the tracking backend. The native tracker can maintain selected state categories and powers the richer ledgers:

- **Motive Ledger** — goals, motives, pressures, thoughts, and trace information.
- **Psychological State Ledger** — continuity for up to three NPC psychological states.
- **Tracker Display** — controls how the built-in state is surfaced.
- **What to Track** — determines which information categories the tracker maintains.

### Main State Tracker
<img width="792" alt="State tracker" src="https://github.com/user-attachments/assets/98421cf5-a687-4317-9503-52ff53d2cf51" />

### Aux Tracker
<img width="798" alt="Aux tracker" src="https://github.com/user-attachments/assets/98d090b9-46e7-4bd9-b76c-30721881af5d" />

### Motive Ledger
<img width="796" alt="Motive ledger" src="https://github.com/user-attachments/assets/cf0b616f-7b84-4a6d-8de3-1a19c6bb74a6" />

---

# ✦ Campaign mode

<img align="right" src="https://raw.githubusercontent.com/kittylotus/-KittyLotus-extras/refs/heads/main/Expressions/gabi_playful.png" width="165" alt="Gabrielle playful">

**Gabi as Dungeon Master** is an independent campaign console layered on top of the normal narrative engine.

It supports a large portrait or compact DM panel, an optional character-sheet button, pre-rolled relevant checks with click-to-reveal results, staged DM action choices, and an opening stat builder with six points and a baseline of 10.

The campaign choices yield to the main CYOA system when both are enabled, so the UI does not start fistfighting itself.

<br clear="right">

---

# ✦ Model routing and private control passes

The preset can automatically detect supported models and apply an adapter, with a manual model choice as fallback.

Private-control tooling includes configurable reasoning wrappers, Control Pass depth, Control-Pass placement, continuity summaries, and extra scene checks. These systems are meant to coordinate the response before visible prose rather than leak a giant debug monologue into the story.

---

# ✦ Roll engines

<img align="left" src="https://raw.githubusercontent.com/kittylotus/-KittyLotus-extras/refs/heads/main/Expressions/gabi_wary.png" width="155" alt="Gabrielle wary">

Optional roll systems can introduce controlled variance without turning the story into random-number soup:

- **Prose Variation Rolls** for subtle pattern variation.
- **Random Event Rolls** for small events or larger complications.
- **Event Frequency** and a **Chaos Harm Filter** to control how disruptive those events may become.
- **Slowburn Signal Rolls** for gentler or harsher emotional reads.
- **Emotional Impact Checks** with optional story-context influence.
- Optional visible event / emotional result records.
- **Wildcards**, for occasional brief absurdity before the narrative returns to business.

<br clear="left">

---

# ✦ Regexes and visual surfaces

## Gabrielle's Debug Card
<img width="455" alt="Gabrielle debug card" src="https://github.com/user-attachments/assets/24a73d61-e163-4239-98bc-8a29d3eccea5" />

## Decor

### Weather Header
<img width="1000" alt="Weather header" src="https://github.com/user-attachments/assets/ed1198fb-e928-4a44-89c7-de1c5f3487b5" />

### Discord Channel Messages
<img width="760" alt="Discord channel messages" src="https://github.com/user-attachments/assets/afb7549f-cd3d-49e9-ba84-f03b8730aafd" />

### ANTISLOPINATOR 3000
<img width="382" alt="Antislopinator" src="https://github.com/user-attachments/assets/d71200d2-25ee-4a22-9a33-532a1981fad9" />

### Slowburn plus pro MAXX
<img width="482" alt="Slowburn plus pro MAXX" src="https://github.com/user-attachments/assets/ea2e4c6d-3420-482e-aaf9-e010f2ba9348" />

### Chance Encounters
<img width="388" alt="Chance encounters" src="https://github.com/user-attachments/assets/29392201-6d10-4caf-968c-71e5ca6d73c4" />

---

# ✦ Sensible starter configurations

You absolutely do not need to understand every toggle before using the preset.

- **Straight prose:** keep optional visible surfaces off; set agency/POV, Base/Author style, reply length, and pacing.
- **Character interiority:** choose an Interiority mode; enable Automatic Thoughts only if you also want hidden NPC-thought cutaways.
- **Psychological continuity:** use the native tracker with Psychological State Ledger. Automatic Thoughts can stay off.
- **Campaign:** enable Gabi as Dungeon Master, choose Hero or Compact, then turn on sheet/dice/paths as desired. Start a new chat to exercise opening character setup.
- **Social friction:** use Everyday Hostility for supported local tensions; use Darkness to change cost and persistence.

---

<p align="center">
  <img src="https://raw.githubusercontent.com/kittylotus/-KittyLotus-extras/refs/heads/main/Expressions/gabi_yapping.png" width="170" alt="Gabrielle yapping">
</p>

<p align="center">
  <b>There are a lot of controls because apparently “just one more toggle” is a lifestyle.</b><br>
  If something looks cursed, check the Wiki first. If it still looks cursed, congratulations: you found a bug.
</p>
