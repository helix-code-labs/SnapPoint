# Repository Guidelines

Use `.codex/MEMORY.md` as the project memory source of truth. Update it alongside meaningful implementation changes (decisions, current state, and next steps).

## Custom Codex Commands
- `/memory-update [context]`: Runs the strict project memory workflow via `.codex/prompts/memory-update.md`.
- Command behavior is backed by `.codex/skills/memory-updater/SKILL.md`.
- Use this command after meaningful implementation tasks to keep `.codex/MEMORY.md` aligned with current project state.

## Project Structure & Module Organization
This repository contains a React + Vite landing page.
- `src/main.tsx` boots the app and mounts `App.tsx`.
- `src/components/sections/` holds page sections (for example `Hero.tsx`, `Pricing.tsx`, `FAQ.tsx`).
- `src/components/layout/` contains shared shell components (`Navbar.tsx`, `Footer.tsx`).
- `src/components/demo/` contains interactive demo UI.
- `src/constants/` stores reusable copy/config values.
- `public/` stores static assets served directly.
- `legacy_backup/` keeps old static HTML for reference only; do not add new feature work there.

## Build, Test, and Development Commands
Use `pnpm` for all tasks.
- `pnpm install`: install dependencies.
- `pnpm dev`: start local Vite dev server with HMR (`http://localhost:5173`).
- `pnpm build`: run TypeScript project build (`tsc -b`) and create production bundle.
- `pnpm preview`: serve the built app locally for final verification.
- `pnpm lint`: run ESLint on the codebase.

## Coding Style & Naming Conventions
- Language: TypeScript + TSX, React function components.
- Indentation: 2 spaces; keep imports grouped and unused code removed.
- Component files use PascalCase (`ReadyToStart.tsx`), utility/constants files use lower camel or `index.ts` barrel style.
- Prefer Tailwind utility classes in JSX; keep shared values in `src/constants/index.ts`.
- Follow the ESLint flat config in `eslint.config.js` (TypeScript, React Hooks, React Refresh rules).

## Testing Guidelines
A formal test runner is not configured yet. Treat the minimum quality gate as:
1. `pnpm lint` passes.
2. `pnpm build` passes.
3. Manual verification in `pnpm dev` and `pnpm preview` for responsive layout and demo interactions.

When adding tests, place them next to source files as `*.test.ts(x)` and prioritize section-level behavior.

## Commit & Pull Request Guidelines
Commit messages follow Conventional Commits seen in history, e.g. `feat: ...`, `fix(vite): ...`, `docs: ...`.
- Keep subject lines imperative and concise.
- Use scopes when useful (`feat(demo):`, `ci(landing):`).

PRs should include:
- Clear summary of user-facing and technical changes.
- Linked issue/task reference.
- Screenshots or short recordings for UI changes.
- Confirmation that `pnpm lint` and `pnpm build` were run.

## Security & Configuration Tips
- Never commit secrets; this app is static and should rely on build-time public config only.
- Review `vite.config.ts` base path changes carefully because deployment targets GitHub Pages.
