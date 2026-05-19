# Troubleshooting

## The image area shows a broken image icon

Most likely causes:
1. You did not replace `YOUR-WORKER-SUBDOMAIN` in the regex JSON.
2. The Worker is not deployed.
3. The Worker URL is wrong.
4. The provider key secret is missing.
5. The image request failed upstream.

Open the generated image URL in a new browser tab if your UI allows it. The Worker returns readable text errors when possible.

## The browser says the Worker is missing `NANO_GPT_KEY`

Add a Worker Secret called exactly:

```text
NANO_GPT_KEY
```

Then redeploy or save the Worker settings as required.

## The generated prompt is too long

The utility prompt is designed for a sub-1200-character inner prompt. Compress scene keywords first. Keep anchors tight. Do not write prose inside `<vision>`.

## Character faces keep staring at the camera

Use the anti-eye-contact camera preamble for interacting characters:

```text
(candid+action+shot:1.4)+(cinematic+side+profile:1.4)+(characters+ignoring+camera:1.4)+(looking+at+each+other:1.4)
```

Place it before style and anchors.

## Two people fuse into one mutant goblin

Confirm all of the following:
- The prompt says `two+people` or `a+couple` when appropriate.
- Subject blocks are separated with `+AND+`.
- Anchors are not accidentally concatenated without a separator.
- Your negative prompt includes anti-merge cleanup such as `fused+characters`, `clones`, or `duplicate+face` if your provider responds well to those terms.

## Every redraw looks the same

The sample regex uses `seed=9999`. That makes repeat generation more stable. Change the seed in the regex URL when you want different results for otherwise identical prompts.

## Portrait and square modes look identical

The Worker honors the incoming `size` query parameter. If you use multiple aspect ratios, confirm your regex URL sends different `size=` values and that the chosen provider/model supports them.

## The style negative variable does not resolve

Use the fixed-negative regex pack first. The `IMG_STYLE_NEG` variant assumes your regex/macro environment resolves that variable inside replacement strings. If it does not, stick to the fixed file or adapt it for your frontend's macro substitution order.
