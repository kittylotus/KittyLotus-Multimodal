# KittyLotus-v1.x-Multimodal
A modular RP / narrative engine with sliders + toggles that control darkness, villains, pacing, UI, fidelity, and model quirks—without turning your story into a different genre. HTML focused.
# Main features 
> 1) Dark System (DARK_LEVEL 0–5) A universal “how unforgiving is the world?” dial.
Doesn’t force genre shifts.
Doesn’t force gore/explicitness.
Scales consequence, luck, recovery, and how costly choices are.

> 2) Villain Archetype System Instead of “villain is evil,” you pick a behavior profile:
Strategist / Charmer / Enforcer / Predator / Zealot / Trickster / Parasite
Optional modifier:
Obsessive (adds invasive fixation mechanics)

> 3) Story Progression Throttle (anti-horny model shield) Stops models from speedrunning intimacy.
SlowBurn / Steady / Fast
Intimacy Gate (Locked/Cautious/Open)
Override mode that only allows what the user explicitly requests

> 4) Mobile-only Narrative Wraps Fancy HTML narrative wrappers (VTK) that are locked to mobile so desktop doesn’t break.
Soft (serif, elegant blocks)
Blocky (system-ui, dialogue cards)

> 5) HTML UI Engine + Customization A general UI capability pack + two style modes:
ModernUI: floating glass + negative space + grids + noir HUD + phone app UIs
FantasyDocs: scene cards + letters + decrees + journal pages

> 6) Anti Memory Leakage / Character Fidelity
No importing info from other chats
No “tropeification” (abrasive ≠ secretly soft in one scene)
Canon personality anchor for IP characters

> 7) Better NPCs
NPCs have goals/constraints/next actions
No omniscience
Canon NPCs must come from the same IP


# ⚙️ Mini Tutorials
## 1) DARK SYSTEM (quick start)
Goal: “make it darker” without changing genre.

> Use DARK_LEVEL as a dial:
- 0: gentle world, recovery is easy, coincidences allowed
- 1–2: tension + friction, mistakes cost time/trust/resources
- 3: harsh realism, consequences compound, luck decreases
- 4: severe stakes, safety is temporary, help is conditional
- 5: no safety net, major loss possible, closure not guaranteed

> How to use:
- Set DARK_LEVEL=2 for “tense but not brutal”
- Set DARK_LEVEL=4 for “everything has consequences”
- Set DARK_LEVEL=5 your actions are often unforgiven.

> It won’t auto-add gore or explicit content. That’s separate.


## 2) VILLAIN SYSTEM (quick start)
Step 1: pick an archetype
- Strategist: plans, contingencies, leverage, patience
- Charmer: social engineering, grooming, plausible lies
- Enforcer: intimidation, coercion, direct consequence
- Predator: stalking vulnerability, closing distance, pressure
- Zealot: ideology, “necessary harm,” recruitment logic
- Trickster: misdirection, traps, mask-switching
- Parasite: dependency, obligation, subtle isolation

Step 2: optional modifier
- Obsessive: fixation on the protagonist via access/control/profiling

> How to use (example combos):
Strategist + Obsessive = meticulous “I already planned your life” horror
Charmer + Obsessive = dependency cage
Predator + Obsessive = stalking + engineered proximity

## 3) Mobile-only wraps tutorial
Problem: narrative HTML wraps can break click/scroll on desktop. Fix: wraps are mobile-only.

> How it works:
- If UI_PLATFORM=Mobile → wraps allowed
- If UI_PLATFORM=Desktop → narrative is normal text (no VTK wrapper)

Wrap types:
> Soft: serif “book page” look, gentle gradients
Blocky: system UI look, dialogue card emphasis
> If you want the fancy prose look on desktop, use UI panels instead (ModernUI/FantasyDocs), not VTK wraps.

## 4) HTML customization tutorial
> There are two layers:
- Layer A: “UI Engine Pack” (capabilities)
> Defines what UIs can do:
Tabs, drawers, modals, dossier pages, feed switchers
CSS-only toggles (input/label)
Animation families by UI_LEVEL
Accessibility rules (tap targets, scrollable panels)

- Layer B: Style toggles (art direction)
> Pick one:
ModernUI: floating glass, grids, negative space, noir HUD, phone apps
FantasyDocs: scene cards, parchment letters, seals, journal pages

## 5) RPG tracker tutorial
- Plain tracker:
Enabling tracking will append a small tracker to the bottom of the narrative, and the regex will enclose it in an HTML box.
- RPG TRACKER:
Enabling tracking + RPG Tracker(+persona tracker) + RPGHUD dependency will rerout the tracker data to a Game Like, interactive, consistent RPG Tracker.
