# hrishi-site

Personal portfolio site for Hrishikesh Tavar — Product Owner · AI/ML Engineer · Data Analyst · Mentor.

This is currently a **placeholder landing page** standing in while the full site (project write-ups, role-based filtering, mentorship section) is built out.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- next/font (Bricolage Grotesque, Inter, JetBrains Mono)

## Before you deploy

- `app/page.tsx` — the LinkedIn and GitHub links are placeholders (`href="#"`). Search for `TODO` and add your real URLs.
- Fonts are loaded via `next/font/google`, which needs network access at build time. This works automatically on Vercel — no setup needed.

## Local development

```bash
npm install
npm run dev
```

## Deploy

1. Push this repo to GitHub.
2. Import it into Vercel (auto-detects Next.js, no config needed).
3. Add your custom domain under Project Settings → Domains once deployed.
