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
- Stack: React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion.
- Package manager: `pnpm`.
- Key scripts: `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm preview`.
- Codex custom slash command: `/memory-update` defined in `.codex/prompts/memory-update.md`.
- Project focus: marketing landing page for SnapPoint.
- No formal automated test runner configured yet.

## Decisions
- `2026-02-18`: Implement `/memory-update` with strict fail-on-missing behavior backed by local `memory-updater` skill files.
- `2026-02-18`: Use `AGENTS.md` as contributor guide and `.codex/MEMORY.md` as implementation memory source of truth.

## Change Log
- `2026-02-18`: Ran memory maintenance sync. No memory impact.
- `2026-02-18`: Moved project memory file from `MEMORY.md` to `.codex/MEMORY.md` and updated references.
- `2026-02-18`: Added local Codex custom slash command `/memory-update` and backing `memory-updater` skill; updated contributor guide with command usage.
- `2026-02-18`: Created `MEMORY.md` with update protocol, current state snapshot, and tracking sections.

## Known Constraints
- Deployment target includes GitHub Pages; base path changes in `vite.config.ts` must be reviewed carefully.
- Legacy reference exists in `legacy_backup/` and should not receive new feature work.

## Next Steps
- Add testing framework (Vitest + React Testing Library) and define baseline coverage expectations.
- Start logging feature-level implementation notes and tradeoffs in this file as work proceeds.
