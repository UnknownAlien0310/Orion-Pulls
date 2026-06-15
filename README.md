# Orion Pulls — v30 recovered from uploaded files

Recovered React/Vite version using the uploaded Orion Pulls files.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Vercel / Stripe

The Stripe API route is in `api/create-checkout-session.js`.
Set `STRIPE_SECRET_KEY` in Vercel Environment Variables.
This project should stay in Stripe test mode until the legal/KVK/guardian setup is ready.


## v31 update
- Moved each booster pack price next to the Add to Cart button on the Booster Packs page.
- Kept Stripe test route and pack prices unchanged.
