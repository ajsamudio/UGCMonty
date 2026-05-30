# UGC Travel Portfolio

A luxury-minimal portfolio site for a travel UGC creator, built to win hotel
clients and paid stays. Visitors land on a single elegant page and submit a
"Work with me" inquiry that emails you.

Built with **Next.js + Tailwind CSS**, deployed on **Vercel**, with inquiry
emails sent through **Resend**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Make the inquiry form email you

1. Create a free account at https://resend.com and make an API key.
2. Copy `.env.local.example` to `.env.local`.
3. Fill in:
   - `RESEND_API_KEY` — your Resend key
   - `INQUIRY_TO_EMAIL` — where inquiries are sent (already set to your gmail)
   - `INQUIRY_FROM_EMAIL` — leave as `onboarding@resend.dev` until you verify
     your own domain in Resend, then switch to e.g. `hello@yourdomain.com`.
4. Restart `npm run dev`. Submissions now arrive in your inbox.

Without a key the form still validates and shows a friendly error instead of sending.

## Personalize the site (no component editing needed)

- **`lib/site.config.ts`** — brand name, tagline, hero copy, contact links.
- **`lib/content.ts`** — about bio, portfolio items, stats, services, testimonials.
- **`public/images/`** — drop your own photos here and reference them as
  `/images/your-file.jpg` in the files above (replace the Unsplash placeholders).

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import it at https://vercel.com/new.
3. Add the same env vars (`RESEND_API_KEY`, `INQUIRY_TO_EMAIL`,
   `INQUIRY_FROM_EMAIL`) in the Vercel project settings.
4. Deploy, then add your custom domain.

## Structure

```
app/            layout, page, api/inquiry email route
components/      Nav, Hero, About, Gallery, Stats, Services, Testimonials, InquiryForm, Footer
lib/            site.config.ts, content.ts, inquiry-schema.ts
public/images/  your photos
```
