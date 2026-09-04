# Rudrani Wedding Planner

## Project Overview

This repository contains a bilingual Hindi-English promotional website for Rudrani Wedding Planner. It presents the company’s wedding services and gives visitors direct call and WhatsApp contact actions.

## Architecture

- `src/routes/__root.tsx` defines the document shell, global metadata, language, and favicon.
- `src/routes/index.tsx` contains the complete single-page marketing experience and its content data.
- `src/styles.css` contains the design tokens, responsive layouts, animation, and component styling.
- `public/` contains static assets such as the custom SVG favicon.
- `netlify.toml` and `vite.config.ts` configure TanStack Start for Netlify deployment.

## Technology

- TanStack Start with file-based routing
- React 19 and TypeScript
- Vite and Tailwind CSS 4
- Lucide React icons
- Netlify deployment adapter

## Conventions

- Keep customer-facing content bilingual where it improves clarity.
- Keep contact information and WhatsApp links centralized near the top of `src/routes/index.tsx`.
- Use semantic HTML and preserve visible focus, reduced-motion, and mobile behavior.
- Use CSS custom properties in `src/styles.css` for brand colors and shared visual values.
- Use PascalCase for React components and camelCase for local constants.
- Avoid adding a component abstraction unless an element is reused or has meaningful behavior.

## Design Decisions

The visual language uses royal maroon, antique gold, ivory, editorial typography, and botanical line art to evoke a premium Indian wedding invitation. Photography is loaded from Unsplash, while branding details such as the monogram and floral illustration remain code-native.

## Development

- `pnpm dev` starts the local Vite development server.
- `pnpm build` creates the production build used by Netlify.
