<<<<<<< HEAD
# Chezia Angelica Wullur — Portfolio

A pixel-close, production-ready recreation of the [Framer portfolio](https://cheziangelicaw.framer.website/)
built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Tech stack

- **Next.js 15** — App Router, `next/font`, `next/image`, `sitemap.ts` / `robots.ts` for SEO
- **React 19**
- **TypeScript** — strict mode, typed data models in `lib/types.ts`
- **Tailwind CSS** — custom lavender design tokens (colors, radii, shadows, gradients)
- **Framer Motion** — fade/slide/scale, stagger, scroll reveal, hover micro-interactions
- **lucide-react** — icon set

## Folder structure

```
/app                 Routes, layout, global styles, SEO files (sitemap/robots)
/components          UI building blocks, grouped by section
  /ui                Shared primitives (Button, SectionTitle, SocialLinks, SkillBadge)
  /Experience        Timeline + timeline item
  /Highlights        "Work" numbered highlight cards
  /Education         Education cards
  /Skills            Skills & tools grid
  /FAQ               Accordion
  /Contact           Form + info cards
/data                Typed content (experience, education, skills, faq, nav, contact)
/hooks               useActiveSection (nav scroll-spy), useScrollProgress
/lib                 types.ts, utils.ts (cn helper), motion.ts (reusable variants)
/public/images       Image assets (add your own — see README inside)
```

## Sections implemented

Navigation (floating icon dock + scroll progress + mobile menu) · Hero · Experience
timeline · Highlights ("Work") · Education · Skills & Tools · FAQ accordion ·
Contact (form + WhatsApp CTA + info cards) · Footer.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm run start
```

> `next/font` fetches Sora and Inter from Google Fonts at build time, so an
> internet connection is required during `npm run build`.

## Customizing content

All copy lives in `/data` as typed arrays/objects — edit those files rather than
the components:

- `data/experience.ts` — work experience timeline
- `data/highlights.ts` — the five HR-internship highlight cards
- `data/education.ts` — education timeline
- `data/skills.ts` — skill groups + badges
- `data/faq.ts` — FAQ question/answer pairs
- `data/nav.ts` — nav items, social links, resume link, WhatsApp link
- `data/contact.ts` — availability / location / response-time info cards

## Adding real images

Drop files into `public/images/` (see `public/images/README.md`), then swap the
placeholder monogram block in `components/Hero.tsx` for an `next/image`:

```tsx
import Image from "next/image";

<Image
  src="/images/portrait.jpg"
  alt="Chezia Angelica Wullur"
  fill
  className="object-cover"
  priority
/>
```

## Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are
   required for the default build.
4. Click **Deploy** — Vercel will run `npm install` and `npm run build`
   automatically.

Or, from the CLI:

```bash
npm i -g vercel
vercel
vercel --prod
```

## Performance & accessibility notes

- Fonts are loaded via `next/font/google` with `display: swap` (no layout shift, self-hosted at build time).
- All interactive elements have visible focus states (`:focus-visible` in `globals.css`).
- `prefers-reduced-motion` is respected — animations collapse to near-instant.
- Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`) and `aria-*`
  attributes are used throughout the nav, accordion, and social links.
- Scroll-triggered animations use `whileInView` with `viewport={{ once: true }}`
  so they don't re-fire and cost re-renders on every scroll.
=======
# jeryportfolio
>>>>>>> 7ec98732f11ff08559277b860fb41b79953cf480
