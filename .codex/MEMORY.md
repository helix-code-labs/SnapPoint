# Project Memory

This file is the running memory for this repository. It should be updated continuously during implementation to preserve decisions, context, and next actions.

## Auto-Update Protocol (Required)
For every meaningful implementation task, update this file in the same change set:
1. Add or update an entry in `## Change Log`.
2. Update `## Current State` if architecture, tooling, or workflows changed.
3. Refresh `## Next Steps` to reflect latest priorities.
4. If a decision was made, record it in `## Decisions` with rationale.

If no memory updates are needed, explicitly add a `No memory impact` line in the latest log entry.

## Current State
- Stack: Turborepo monorepo with React 19 + TypeScript + Vite apps and Hono API on Bun.
- Package manager: `pnpm` workspaces.
- Runtime management: `.mise.toml` uses rolling channels (`node = lts`, `bun = latest`).
- Apps: `apps/landing`, `apps/customer-liff`, `apps/merchant-web`, `apps/admin-web`, `apps/api`.
- Key scripts: root `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm preview` via turbo.
- Codex custom slash command: `/memory-update` defined in `.codex/prompts/memory-update.md`.
- Project focus: multi-surface SnapPoints platform (landing + customer LIFF + merchant/admin web + API).
- No formal automated test runner configured yet.

## Decisions
- `2026-02-18`: Implement `/memory-update` with strict fail-on-missing behavior backed by local `memory-updater` skill files.
- `2026-02-18`: Use `AGENTS.md` as contributor guide and `.codex/MEMORY.md` as implementation memory source of truth.
- `2026-02-18`: Migrate from single Vite app to Turborepo in one pass (big bang) with 5 app layout under `apps/*`.
- `2026-02-18`: Keep all frontend apps on React + Vite, and use role-separated surfaces (`customer-liff`, `merchant-web`, `admin-web`).
- `2026-02-18`: Implement API as Hono on Bun (`apps/api`) with initial route groups `/liff`, `/merchant`, `/admin`.
- `2026-02-18`: Defer shared workspace packages (`packages/*`) to a later phase; prioritize app scaffolding and CI/build stability first.
- `2026-02-18`: Track runtime versions via rolling channels in mise (`node = lts`, `bun = latest`) to reduce manual version bump overhead.

## Change Log
- `2026-02-18`: Ran memory maintenance sync. No memory impact.
- `2026-02-18`: Updated `.mise.toml` runtime strategy from fixed versions (`node 20.11.0`, `bun 1.1.0`) to rolling channels (`node = lts`, `bun = latest`) to stay on current stable tracks.
- `2026-02-18`: Completed monorepo migration: moved landing app to `apps/landing`, added `customer-liff`, `merchant-web`, `admin-web`, and `api` apps, configured workspace (`pnpm-workspace.yaml`), turbo tasks (`turbo.json`), runtime pins (`.mise.toml`), and CI/deploy workflow updates; validated with `pnpm lint` and `pnpm build`.
- `2026-02-18`: Ran memory maintenance sync. No memory impact.
- `2026-02-18`: Moved project memory file from `MEMORY.md` to `.codex/MEMORY.md` and updated references.
- `2026-02-18`: Added local Codex custom slash command `/memory-update` and backing `memory-updater` skill; updated contributor guide with command usage.
- `2026-02-18`: Created `MEMORY.md` with update protocol, current state snapshot, and tracking sections.

## Known Constraints
- Deployment target includes GitHub Pages for `apps/landing`; base path `/SnapPoint/` in `apps/landing/vite.config.ts` must be preserved unless deployment routing changes.
- Legacy reference exists in `legacy_backup/` and should not receive new feature work.
- Shared package layer is intentionally not created yet; cross-app reuse is still minimal and duplicated in places.

## Next Steps
- Add shared workspace packages (`packages/types`, `packages/api-client`, optional `packages/ui`) and migrate duplicated API helper logic.
- Implement role-based auth flows end-to-end: LIFF auth for `customer-liff`, web auth for merchant/admin, and route guards in `apps/api`.
- Add test strategy per app (Vitest + RTL for web apps, endpoint tests for API) and wire into turbo pipeline.
