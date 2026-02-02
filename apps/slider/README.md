# MonaKit

Multi-format content platform built with Astro, featuring knowledge cards, articles, presentations, and announcements.

## Features

- **Knowledge Cards** - Research summaries with customizable themes
- **Articles** - Long-form blog content
- **Slide Presentations** - Interactive reveal.js presentations
- **Doodles** - Release logs and announcements (Mona Pulse)
- **Search** - Full-text search with Pagefind
- **Promotion** - Product and link showcase

## Tech Stack

- Astro 5 (SSR)
- React 19
- TailwindCSS 4
- Reveal.js
- Pagefind

## Quick Start

```bash
npm create astro@latest my-astro-project -- --template monakit/monakit
```

## Development

```bash
pnpm install
cp .env.example .env
pnpm migrate
pnpm dev
```

### Available Scripts

```bash
pnpm dev                # Start dev server
pnpm build              # Production build (auto-builds search index)
pnpm build:search-index # Build search index manually
pnpm check              # Type check and lint
pnpm fix                # Auto-fix issues
```

## Content Structure

```
src/content/
├── cards/    # Knowledge cards (Markdown)
├── blogs/    # Blog articles (Markdown)
├── slides/   # Presentations (Markdown)
└── doodles/  # Announcements (Markdown)
```

Content organized by year/month subdirectories.

## Product Data

All products data is defined in `src/assets/creations.json`.
