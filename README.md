# hrishi-site

Personal portfolio site for Hrishikesh Tavar — Product Owner · AI/ML Engineer · Data Analyst · Mentor.
Live at [hrishi.co.uk](https://www.hrishi.co.uk).

Ships a hero, stats, field-proof photo strip, a Projects section (11 curated
projects pulled from GitHub), and a contact form. Role-based filtering and a
mentorship section are still to come — see the status banner on the site.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- next/font (Bricolage Grotesque, Inter, JetBrains Mono)
- Resend (contact form email relay)

## Project structure

```
app/
  layout.tsx              Root layout — fonts, page metadata
  page.tsx                Home page — composes the sections below
  globals.css             Design tokens (colours, fonts) + utility classes
  api/contact/route.ts    Contact form submit handler (Resend)

components/
  sections/                One file per page section, each self-contained
    hero-section.tsx
    stats-section.tsx
    field-proof-section.tsx
    status-banner.tsx
    projects-section.tsx
    contact-section.tsx
    site-footer.tsx
  ui/                       Small reusable pieces shared across sections
    words-pull-up.tsx       Word-by-word reveal animation used in the hero

lib/
  site-content.ts          Copy/data for the hero, stats, and contact cards
  projects.ts              Project content for the Projects section
  motion.ts                Shared framer-motion fade-up variants
```

The rule of thumb: **content lives in `lib/`, layout lives in
`components/sections/`.** Adding or editing a project is a data change in
`lib/projects.ts`, not a JSX change — same for the hero pillars, stats, and
contact links in `lib/site-content.ts`.

## Before you deploy

- Fonts are loaded via `next/font/google`, which needs network access at
  build time. This works automatically on Vercel — no setup needed.
- The contact form needs `RESEND_API_KEY` set (see `.env.example`) or it'll
  return a 500 with "Email service is not configured yet."

## Local development

```bash
npm install
npm run dev
```

## Deploy

1. Push this repo to GitHub.
2. Import it into Vercel (auto-detects Next.js, no config needed).
3. Add your custom domain under Project Settings → Domains once deployed.
