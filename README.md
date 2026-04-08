# Atlas - Varshini Akula's Portfolio

A premium AI engineer portfolio built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Quick Start

```bash
npm install
npm run dev
```

Open www.varshiniakula.com

## Stack

- **Next.js 16** App Router with TypeScript strict mode
- **Tailwind CSS v4** with custom design tokens
- **Motion** (framer-motion) for animations
- **Fuse.js** for AI assistant local search

## Features

- **Two experience modes**: Recruiter (fast, metrics-first) and Explorer (immersive, story-rich)
- **AI Assistant**: "Ask Varshini" chatbot grounded in real profile content
- **Interactive journey map**: Milestones as passport stamps
- **Premium case studies**: 5 projects with detailed architecture and metrics
- **Book library**: Interactive bookshelf with reading insights
- **Travel stamps**: Cities and memories connected to growth
- **SEO**: JSON-LD, sitemap, OG metadata on every route
- **Accessible**: Keyboard nav, screen reader friendly, reduced motion support

## Project Structure

```
src/
├── app/          # Pages and API routes
├── components/   # UI components by feature
├── content/      # All content as typed TypeScript
├── lib/          # Utilities and helpers
├── hooks/        # Custom React hooks
├── providers/    # Context providers
└── types/        # TypeScript definitions
```

## AI Assistant

The "Ask Varshini" chat uses curated responses + fuzzy search. To upgrade to LLM-powered responses, add an API key to `.env.local`:

```
OPENAI_API_KEY=your_key_here
```

