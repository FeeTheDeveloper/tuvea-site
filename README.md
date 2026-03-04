# TUVEA — Transforming Urban & Vulnerable Environments through Advocacy

Public website for **TUVEA** (United Veterans Empowerment Association), a veteran-focused community organization delivering housing navigation, benefits guidance, workforce development, mental health resources, and family support across Texas and beyond.

Built with [Next.js 14](https://nextjs.org/) (App Router), [Tailwind CSS 4](https://tailwindcss.com/), and TypeScript.

---

## Quick Start (Fresh Deploy)

```bash
# 1. Clone the repository
git clone https://github.com/FeeTheDeveloper/tuvea-site.git
cd tuvea-site

# 2. Install dependencies
npm install

# 3. Start development server (http://localhost:3000)
npm run dev
```

### Production Build

```bash
npm run build   # Generates .next/ output
npm start       # Starts production server on port 3000
```

### All Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve production build (port 3000) |
| `npm run lint` | Run Next.js ESLint checks |
| `npm run check:links` | Validate all external URLs in the codebase |

---

## Deployment

### Vercel (recommended)

1. Connect the GitHub repository at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Next.js** (auto-detected)
3. Build command: `npm run build` (default)
4. Output directory: `.next` (default)
5. Node.js version: **20.x** (set in Project Settings → General → Node.js Version)
6. No environment variables required
7. Deploy

Vercel will auto-deploy on every push to `main`.

> **Image optimization:** All images use `next/image`, which Vercel optimizes automatically at the edge (WebP/AVIF, responsive sizes). No additional configuration is needed — the default `next.config.js` handles local images from `public/`.

### Netlify / Render / Railway

Use the same build command (`npm run build`) and start command (`npm start`). The `/api/support-request` route requires a **Node.js runtime** — it will not work on static-only hosts.

### Docker / Self-Hosted

```bash
npm install
npm run build
PORT=3000 npm start
```

Node.js 18+ required.

---

## Project Structure

```
app/
├── layout.tsx                 # Root layout — CrisisBanner, Navbar, Footer, ConciergeWidget
├── page.tsx                   # Home — mission, how-it-works, community impact
├── about/page.tsx             # About TUVEA
├── contact/page.tsx           # Contact information
├── get-help/page.tsx          # Crisis support, support request form, what-to-expect, external links
├── partner/page.tsx           # Partnership channels, partner benefits, donate/volunteer/hire
├── programs/
│   ├── page.tsx               # Programs overview grid
│   ├── benefits/page.tsx      # Benefits & Claims Navigation
│   ├── education/page.tsx     # Education & Credentials
│   ├── employment/page.tsx    # Employment Readiness
│   ├── entrepreneurship/      # Entrepreneurship & Business Formation
│   ├── family-support/        # Family & Survivor Support
│   └── mental-health/         # Mental Health & Recovery Support
├── resources/
│   ├── page.tsx               # Resources overview
│   └── housing/page.tsx       # Housing & Stability — full resource directory
└── api/
    └── support-request/route.ts  # POST handler (placeholder — logs & returns 200)

components/
├── ConciergeWidget.tsx        # Floating bottom-right concierge panel (crisis, help, housing, GPT link)
├── CrisisBanner.tsx           # Sticky top banner — 988 hotline, text 838255
├── Footer.tsx                 # Site footer with emblem, links, copyright
├── Hero.tsx                   # Full-screen hero with background image
├── Navbar.tsx                 # Sticky nav with emblem + responsive mobile menu
├── ProgramCard.tsx
├── ResourceGrid.tsx
├── ResourceSection.tsx
├── Section.tsx                # Reusable section wrapper (gold headings, black/charcoal bg)
└── SupportRequestForm.tsx     # Client-side form with validation → /api/support-request

public/
├── brand/
│   ├── uvea-emblem.png        # TUVEA emblem (used in Navbar + Footer)
│   └── uvea-star.png          # Star mark (available for additional use)
├── hero/
│   └── hero-bg.png            # Legacy hero background
└── images/tuvea/              # Veteran diversity imagery (PNG, used via next/image)
    ├── hero-veterans.png
    ├── counseling-support.png
    ├── workforce-training.png
    ├── veteran-housing.png
    ├── community-event.png
    └── female-veteran-leader.png

src/data/resources/
└── housing.ts                 # Structured housing resource data (DFW, statewide, national)

scripts/
└── check-links.mjs            # External URL health checker with retry logic

styles/
└── globals.css                # Tailwind theme — UVEA brand palette, typography
```

---

## Brand Assets

| File | Location | Used In |
|------|----------|---------|
| `uvea-emblem.png` | `public/brand/` | Navbar, Footer |
| `uvea-star.png` | `public/brand/` | Available (not yet placed) |
| `hero-bg.png` | `public/hero/` | Legacy hero background (replaced by veteran imagery) |

### Veteran Imagery (`public/images/tuvea/`)

All images use `next/image` with responsive `sizes`, lazy loading (hero uses `priority`), `rounded-xl shadow-lg`, and descriptive alt text.

| File | Used In | Alt Text |
|------|---------|----------|
| `hero-veterans.png` | Hero section (homepage) | Diverse group of American military veterans standing together representing unity and resilience |
| `counseling-support.png` | Mental Health program page | Veterans participating in a supportive counseling session |
| `workforce-training.png` | Employment program page | Diverse veterans participating in job training and career development |
| `veteran-housing.png` | Housing resource page | Veteran family celebrating moving into a new home |
| `community-event.png` | Homepage — Community Impact | Veterans and families gathering at a community support event |
| `female-veteran-leader.png` | About — Leadership & Representation | Confident female military veteran representing leadership and resilience |

All assets in `public/` are served at the root path (e.g., `/brand/uvea-emblem.png`, `/images/tuvea/hero-veterans.png`).

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `uvea-black` | `#0B0B0D` | Primary background |
| `uvea-charcoal` | `#121216` | Alternating section background |
| `uvea-gold` | `#C5A255` | Headings, accents, CTAs |
| `uvea-white` | `#F7F7F8` | Body text |
| `uvea-gray` | `#A8A8B3` | Secondary text |
| `uvea-navy` | `#0B1E3B` | Crisis banner background |
| `uvea-red` | `#B22234` | Reserved (alerts) |

**Fonts:** Cinzel (display / headings), Inter (body)

Defined in [`styles/globals.css`](styles/globals.css) and [`tailwind.config.ts`](tailwind.config.ts).

---

## Environment Variables

None required for the current build. Future integrations:

| Variable | Purpose |
|----------|---------|
| `SUPPORT_REQUEST_ENDPOINT` | Backend URL for the support request form |

---

## Post-Deploy Checklist

- [ ] Verify all pages load (`/`, `/get-help`, `/programs/*`, `/resources/housing`, `/partner`)
- [ ] Confirm brand images render in Navbar and Footer
- [ ] Confirm hero veteran image loads on home page (priority, no layout shift)
- [ ] Verify veteran imagery loads on Mental Health, Employment, Housing, About, and Homepage sections
- [ ] Confirm TVC Entrepreneur VVL sign-up link works on `/programs/entrepreneurship`
- [ ] Test support request form submission (`/get-help`)
- [ ] Run `npm run check:links` to validate external URLs
- [ ] Verify CrisisBanner 988 tel: link works on mobile
- [ ] Check floating ConciergeWidget opens/closes on mobile and desktop
- [ ] Confirm images are responsive and lazy-loaded on mobile

---

## License

Private — all rights reserved.