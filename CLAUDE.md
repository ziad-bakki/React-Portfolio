# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. This must look professional. I will use implement the image assets later. My resume in both latex and pdf are in the root directory.

## Commands

- `npm run dev` — Start dev server with Turbopack
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint

## Architecture

- **Next.js App Router** (`src/app/`): Pages use the `src/app` directory convention
  - `page.tsx` — Main landing page
  - `portfolio/page.tsx` — Portfolio/projects page
  - `layout.tsx` — Root layout
  - `globals.css` — Global styles (Tailwind directives)
- **Static assets** (`public/`): SVG logos for technologies/companies, profile image
- **Styling**: Tailwind CSS with PostCSS; config in `tailwind.config.ts`
- **TypeScript**: Strict config in `tsconfig.json`
- **Linting**: ESLint 9 with flat config (`eslint.config.mjs`)

## Note

All source files were removed in commit `2d865fa`. If restoring, run `npm install` after checkout.
