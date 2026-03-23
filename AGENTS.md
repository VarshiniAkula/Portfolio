# AGENTS.md — Atlas Portfolio

## Before Modifying This Project

**Always read the version-matched documentation for the frameworks used before making changes:**
- Next.js 16 App Router: https://nextjs.org/docs
- Tailwind CSS v4: https://tailwindcss.com/docs
- Motion (framer-motion): https://motion.dev/docs
- TypeScript: https://www.typescriptlang.org/docs/

## Project Overview

This is "Atlas of an AI Engineer" — a premium portfolio for Varshini Akula. It's built with Next.js App Router, TypeScript strict, and Tailwind CSS v4. The design concept weaves travel, books, and coffee into the UX of a technical portfolio.

## Architecture

### Two Experience Modes
The site has two viewing modes controlled by `ExperienceModeProvider`:
- **Recruiter Mode**: Concise, metrics-first, fast scanning
- **Explorer Mode**: Immersive, story-rich, animated

Mode state is stored in `localStorage` and applied as `data-mode` attribute on `<html>`.

### Directory Structure
```
src/
├── app/           # Next.js App Router pages
├── components/    # React components organized by feature
│   ├── layout/    # Navbar, Footer, ModeToggle
│   ├── home/      # Landing page sections
│   ├── journey/   # Journey map components
│   ├── projects/  # Project grid and case studies
│   ├── research/  # Research page
│   ├── leadership/# Leadership page
│   ├── library/   # Book shelf
│   ├── travel/    # Travel stamps
│   ├── ai-assistant/ # Ask Varshini chat
│   └── ui/        # Shared primitives (Button, Badge, Card, Reveal, etc.)
├── content/       # All content data as TypeScript files
├── lib/           # Utilities, fonts, metadata helpers, AI search
├── hooks/         # Custom React hooks
├── providers/     # React context providers
└── types/         # TypeScript type definitions
```

### Content Model
All content lives in `src/content/*.ts` as typed TypeScript exports. Types are defined in `src/types/content.ts`. To add new content:
1. Add data to the relevant content file
2. The types enforce the structure
3. Pages read from content files directly (no CMS)

### AI Assistant
The "Ask Varshini" chat (`/api/chat`) uses two tiers:
1. **Curated responses** in `content/prompts.ts` — matched by trigger keywords
2. **Fuzzy search** via Fuse.js over all content files

To upgrade to LLM-powered responses, add `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` to `.env.local` and modify the API route to use Vercel AI SDK.

### Design Tokens
Colors, fonts, and spacing are defined in `globals.css` using `@theme inline` (Tailwind v4). Key colors:
- `espresso` (#3C2415), `cream` (#FAF6F1), `paper` (#F5F0E8)
- `copper` (#B87333), `amber` (#D4A574), `azure` (#4A90D9)
- `graphite` (#2D2D2D), `midnight` (#1A1A2E)

### Animation
All animations use `motion/react` and respect `prefers-reduced-motion`. The `<Reveal>` component handles scroll-triggered animations. Always wrap animated content in reduced-motion checks.

## Key Conventions
- Components are 'use client' only when they need interactivity
- All pages export `generateMetadata` for SEO
- Content is never hardcoded in JSX — always imported from `content/`
- Use `cn()` from `lib/utils` for conditional classNames
- Fonts: serif (Playfair Display) for headings, sans (Plus Jakarta Sans) for body, mono (JetBrains Mono) for metrics/code

## Running Locally
```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Production build
```
