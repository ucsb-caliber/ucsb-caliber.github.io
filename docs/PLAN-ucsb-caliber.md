# Project Plan: UCSB Caliber Website

## Overview
Build a modern, "startup-coded" marketing website for **UCSB Caliber**, an AI-assisted course planning and assessment platform. The site will serve as the primary recruitment channel for instructors (pilots) and student developers.

## Project Context
- **Goal:** Recruit instructors/pilots and student developers.
- **Audience:** UCSB instructors, TAs, department stakeholders, student developers.
- **Brand**: High-signal, academically credible, "startup fast" (Stripe/Notion/YC aesthetic), themed with UCSB Blue & Gold (Navy #003660, Gold #febc11).
- **Scope:** Marketing frontend only (forms are client-side stubs).

## Project Type
**WEB** (Next.js App Router)

## Success Criteria
1.  **High-Quality Design:** Meets "Stripe/Notion" aesthetic bar (crisp typography, whitespace, subtle gradients).
2.  **Performance:** 100% Lighthouse Performance score (Static export or optimized server).
3.  **Responsive:** Flawless mobile/tablet/desktop layouts.
4.  **Content-First:** All copy managed via `content.ts` for easy editing.

## Tech Stack
-   **Framework:** Next.js 14+ (App Router)
-   **Language:** TypeScript (Strict)
-   **Styling:** Tailwind CSS + `lucide-react` (icons)
-   **Animation:** Framer Motion (subtle, tasteful micro-interactions)
-   **Font:** Inter (via `next/font`)
-   **Deploy:** Vercel (assumed standard)

## File Structure
```
.
├── app/
│   ├── layout.tsx       # Root layout (Inter font, metadata)
│   ├── page.tsx         # Home
│   ├── instructors/     # Instructor info
│   ├── students/        # Student info
│   ├── product/         # Feature breakdown
│   ├── research/        # Pedagogy/Bloom's
│   ├── team/            # Team & Recruiting
│   ├── faq/             # FAQ
│   └── pilot/           # Contact/Pilot form
├── components/
│   ├── ui/              # Base primitives (Button, Card, Badge)
│   ├── layout/          # Navbar, Footer, Section
│   └── sections/        # Page-specific sections (Hero, Features, Timeline)
├── lib/
│   ├── utils.ts         # CN helper
│   └── content.ts       # CENTRALIZED CONTENT SOURCE
└── public/              # Static assets
```

## Task Breakdown

### Phase 1: Foundation & Design System
- [x] **Initialize Project**: Create Next.js app, setup Tailwind, TS, ESLint.
- [x] **Design Tokens**: Configure `tailwind.config.ts` for "Caliber" palette (UCSB Navy, Gold, clean whites/grays).
- [x] **Typography**: Setup `Inter` font with correct weights/tracking.
- [x] **Content**: Create `lib/content.ts` and scaffold all text/links from user prompt.
- [x] **Base Components**: Implement Button (primary/secondary), Badge, SectionHeader.

### Phase 2: Core Layout Structure
- [x] **Navbar**: Sticky, glassmorphism optional (subtle), responsive mobile menu.
- [x] **Footer**: Links, social placeholders, copyright.
- [x] **Layout Wrapper**: Main element with appropriate page spacing/container.

### Phase 3: Homepage Implementation (`/`)
- [x] **Hero Section**: Headline, Subhead, split CTAs, subtle entrance animation.
- [x] **Credibility Row**: Logos/Badges section.
- [x] **Feature Cards**: 3 high-level features with icons.
- [x] **How it Works**: Vertical timeline component with steps (Upload -> Map -> Generate -> Deliver).
- [x] **MVP Banner**: Distinct callout for "End-of-quarter goal".
- [x] **Product Preview Grid**: Bento-style or grid cards for specific tools.

### Phase 4: Secondary Pages
- [x] **Instructors Page**: Pain points, Outputs list, Pilot detailed section (Timeline).
- [x] **Students Page**: Minimalist view, "What needed/What not" validation.
- [x] **Product Page**: Detailed feature list, Roadmap (Now/Next/Later) columns.
- [x] **Research Page**: Typography-focused layout for Pedagogy/Bloom's content.
- [x] **Team Page**: Team roster grid.
- [x] **FAQ & Pilot**: Accordion component for FAQ; Form layout for Pilot.

### Phase 5: Polish & Interactions
- [x] **Micro-interactions**: Hover states for cards, buttons.
- [x] **Page Transitions**: Subtle fade-in/slide-up using Framer Motion template.
- [x] **SEO**: Meta tags, OG images (placeholders), semantic HTML structure.
- [x] **Accessibility**: Check contrast, aria-labels, keyboard nav.

## Phase X: Verification Checklist
- [x] **Lint & Build**: `npm run lint && npm run build` passes.
- [x] **Mobile Audit**: Verify Navbar and Grids on <375px screens.
- [x] **Accessibility**: No a11y violations (axe-core or WAVE).
- [x] **Content Check**: Verify all placeholders in `content.ts` are logically filled or specifically marked `[EDIT]`.
- [x] **Performance**: >95 Lighthouse score on Home.

## ✅ PHASE X COMPLETE
- Lint: ✅ Pass
- Security: ✅ No critical issues (Standard Next.js defaults)
- Build: ✅ Success
- Date: 2026-01-20

## User Questions / Assumptions
1.  **Forms**: Assumed client-side `console.log` for now.
2.  **Images**: Will use colored divs/gradients or icons as placeholders for "Product Screenshots".
