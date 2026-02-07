# TUVEA — Transforming Urban & Vulnerable Environments through Advocacy

Public website for **TUVEA**, a veteran-focused community organization delivering housing navigation, benefits guidance, workforce development, mental health resources, and family support across Texas and beyond.

Built with [Next.js 14](https://nextjs.org/) (App Router), [Tailwind CSS 4](https://tailwindcss.com/), and TypeScript.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Serve production build
npm start
```

### Other Scripts

| Script | Description |
|--------|-------------|
| `npm run lint` | Run Next.js ESLint checks |
| `npm run check:links` | Validate all external URLs in the codebase (housing resources + help links) |

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
├── Footer.tsx
├── Hero.tsx
├── Navbar.tsx
├── ProgramCard.tsx
├── ResourceGrid.tsx
├── ResourceSection.tsx
├── Section.tsx                # Reusable section wrapper (gold headings, black/charcoal bg)
└── SupportRequestForm.tsx     # Client-side form with validation → /api/support-request

src/data/resources/
└── housing.ts                 # Structured housing resource data (DFW, statewide, national)

scripts/
└── check-links.mjs            # External URL health checker with retry logic

styles/
└── globals.css                # Tailwind theme — UVEA brand palette, typography
```

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

**Fonts:** Cinzel (display/headings), Inter (body)

---

## Deployment

The site is a standard Next.js application and can be deployed to any platform that supports Node.js or static export.

### Vercel (recommended)

1. Connect the GitHub repository at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Next.js** (auto-detected)
3. No environment variables are required for the current build
4. Deploy

### Other platforms

```bash
npm run build   # Generates .next/ output
npm start       # Starts production server on port 3000
```

The `/api/support-request` route requires a Node.js runtime. If deploying as a static export, replace it with an external form handler.

---

## Environment Variables

None required at this time. When a real form backend is wired up, add:

| Variable | Purpose |
|----------|---------|
| `SUPPORT_REQUEST_ENDPOINT` | Backend URL for the support request form (future) |

---

## License

Private — all rights reserved.