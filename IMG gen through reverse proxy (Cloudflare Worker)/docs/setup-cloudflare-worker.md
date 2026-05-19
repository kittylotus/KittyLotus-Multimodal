# Setup Guide: Make Your Own Cloudflare Worker

This part is **mandatory**. The image artifact utility will not work just by importing the prompt and regex files. Every user needs their own Worker endpoint.

## Why each user needs their own Worker

The Worker is the image bridge. It receives the prompt from the rendered `<img>` URL, calls the image provider with the user's private API key, and returns image bytes that the browser can display.

A repo cannot safely ship one shared Worker URL for strangers. A sample URL is not a public service. Make your own.

## Free setup path

1. Create or log in to a Cloudflare account.
2. Open Workers & Pages.
3. Create a new Worker.
4. Replace the starter code with `workers/nano-gpt-worker.js` from this repo.
5. Save and deploy once.
6. Open the Worker's Settings.
7. Under Variables and Secrets, add a **Secret** named:
   `NANO_GPT_KEY`
8. Paste your Nano-GPT API key as its value.
9. Deploy again if Cloudflare requests it.
10. Copy your personal Worker URL, which will look like:
    `https://your-worker-name.your-account.workers.dev`
11. Open your chosen regex JSON file and replace:
    `https://YOUR-WORKER-SUBDOMAIN.workers.dev`
    with your actual Worker URL.
12. Import the edited regex file into Lumiverse.

## Absolutely do not do this

Do **not** paste your provider key into:
- the regex JSON
- the utility prompt
- the image URL
- the lorebook
- the Worker source code itself

The key belongs in Cloudflare's Worker Secret storage as `NANO_GPT_KEY`.

## Quick smoke test

After deployment, you can test your Worker with a harmless manual URL in a browser using a very tiny prompt. Replace the domain with your own Worker URL:

```text
https://YOUR-WORKER-SUBDOMAIN.workers.dev/?prompt=small+glass+lotus+figurine&model=z-image-turbo&size=1024x1024&seed=9999&negative_prompt=text+watermark+lowres
```

Expected behavior:
- the browser eventually displays an image, or
- the page shows a readable Worker/provider error explaining what failed.

## Common setup mistakes

- Leaving the placeholder Worker URL unchanged.
- Creating the Worker but forgetting the `NANO_GPT_KEY` secret.
- Adding the key as a plain environment variable instead of a secret.
- Importing the regex before editing the Worker URL.
- Editing the disabled regex pack but forgetting to enable the scripts.
- Assuming someone else's sample Worker link is a shared backend.

## If you want another provider

Keep the prompt and regex protocol. Edit only the Worker adapter:
- provider endpoint URL
- auth header format
- request body fields
- response parsing

The rest of the system can stay the same.
