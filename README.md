# MeetHub Solutions

Pakistan's integrated professional services firm — accounting, tax consultancy, corporate advisory, ERP solutions, training, and travel services.

## Project Overview

| Metric | Count |
|--------|-------|
| Source files | 66 |
| Pages/Routes | 24 (19 public + 2 API + 404 + sitemap + robots) |
| Components | 33 (13 UI + 11 sections + 7 shared + 7 layout) |
| npm vulnerabilities | 0 |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 + shadcn/ui (Base UI) |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod validation |
| Email | Resend (team notification + customer auto-reply) |
| Theme | next-themes (dark/light + system preference) |
| SEO | next-sitemap, JSON-LD structured data |
| Analytics | Vercel Analytics + Speed Insights + GA4 ready |
| Security | Security headers, API rate limiting, honeypot spam protection |
| Tracking | UTM parameter capture on all form submissions |

## All Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage — 12 sections (hero, trust bar, services, process, stats, travel, testimonials, case studies, FAQ, CTA) |
| `/about` | Static | Company story, mission/vision, core values, professional badges |
| `/about/team` | Static | Team member grid with qualifications |
| `/about/ceo-message` | Static | CEO letter with sticky photo sidebar |
| `/contact` | Static | Multi-step smart form, booking widget, FAQ (8 questions), WhatsApp card |
| `/services` | Static | Services hub with animated category filter tabs (All/Financial/Advisory/Assurance/Specialized) |
| `/services/accounting` | SSG | Accounting & Bookkeeping |
| `/services/outsourcing` | SSG | Department Outsourcing |
| `/services/erp-solutions` | SSG | ERP Implementation & Support |
| `/services/tax-consultancy` | SSG | Tax Consultancy & Compliance |
| `/services/data-archiving` | SSG | Data Archiving & Shredding |
| `/services/corporate-advisory` | SSG | Corporate Advisory & SECP Registration |
| `/services/training-development` | SSG | Training & Development |
| `/services/internal-audit` | SSG | Internal Audit Services |
| `/services/audit-assurance` | SSG | Audit & Assurance |
| `/services/fixed-asset-management` | SSG | Fixed Asset Management |
| `/travel` | Static | Travel hub with category filters, package grid, "Why Travel With Us" |
| `/travel/day-out-package` | SSG | Corporate Day Out — 1 day, PKR 3,500/person |
| `/travel/skardu-adventure-tour` | SSG | Skardu Adventure — 5D/4N, PKR 45,000/person |
| `/api/contact` | Dynamic | Contact form handler with Resend emails + rate limiting |
| `/api/booking` | Dynamic | Booking inquiry handler with Resend emails + rate limiting |

## Key Features

- **Dark mode** with system preference detection (competitive advantage — no Pakistani accounting firm offers this)
- **12-section homepage** with animated gradient hero, hover-reveal service cards, animated counters, testimonials, case studies
- **10 service detail pages** each with: problem statement, service items, case study snippet, FAQ, benefits, related services, personalized CTAs
- **Travel section** with itinerary accordion, includes/excludes, sticky booking sidebar, booking inquiry form
- **Multi-step contact form** (2-step with lead qualification) + honeypot anti-spam
- **Email system** via Resend: team notifications + customer auto-reply with reference numbers
- **Mobile bottom action bar** (Phone | WhatsApp | Book) — always accessible
- **WhatsApp click-to-chat** with context-specific pre-filled messages per page
- **UTM tracking** captured from URL and included in all form submissions
- **SEO optimized**: sitemap.xml, robots.txt, JSON-LD (Organization, Service, Breadcrumb), unique meta per page
- **Security**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, API rate limiting

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
# Required
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=info@meethubsolutions.com
NEXT_PUBLIC_SITE_URL=https://meethubsolutions.com
NEXT_PUBLIC_WHATSAPP_NUMBER=923XXXXXXXXX

# Optional
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
```

This runs `next build` followed by `next-sitemap` to generate sitemap.xml and robots.txt.

## Deployment

1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy — zero config needed

## Before Launch Checklist

- [ ] Replace placeholder team photos/bios in `src/data/team.ts`
- [ ] Replace placeholder testimonials in `src/data/testimonials.ts`
- [ ] Add real client logos to `public/images/clients/`
- [ ] Add real travel/service photos to `public/images/`
- [ ] Update phone number (`+92 3XX XXX XXXX`) across codebase
- [ ] Update CEO name in `/about/ceo-message`
- [ ] Update `NEXT_PUBLIC_SITE_URL` to production domain
- [ ] Verify Resend emails are being received
- [ ] Set up Google Search Console and submit sitemap
- [ ] Configure Google Analytics (set `NEXT_PUBLIC_GA_MEASUREMENT_ID`)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/              # About, Team, CEO Message
│   ├── api/                # Contact & Booking API routes
│   ├── contact/            # Contact page
│   ├── services/           # Services hub + [slug] detail pages
│   ├── travel/             # Travel hub + [slug] detail pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── not-found.tsx       # Custom 404
├── components/
│   ├── layout/             # Header, Footer, ThemeToggle, WhatsApp, MobileBar, Analytics
│   ├── sections/           # Homepage sections (Hero, Services, Stats, etc.)
│   ├── shared/             # Reusable (PageHeader, ContactForm, BookingForm, etc.)
│   └── ui/                 # shadcn/ui components
├── data/                   # Services, travel packages, navigation, team, testimonials
├── hooks/                  # useScrollAnimation, useMediaQuery, useUtmParams
└── lib/                    # Utils, schemas, email, whatsapp, rate-limit, constants
```
