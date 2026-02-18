---
name: memory-updater
description: Maintain and strictly update project memory in .codex/MEMORY.md after implementation changes. Use when users ask to update project memory, sync decisions and next steps, or run memory maintenance via slash command like /memory-update.
---

# Memory Updater

Execute this workflow whenever project memory must be updated.

## Required workflow
1. Read `.codex/MEMORY.md` fully.
2. Inspect current work context (changed files, key decisions, constraints, and unfinished work).
3. Update `.codex/MEMORY.md` in the same change set using the rules below.

## Strict rules
- Treat `.codex/MEMORY.md` as the source of truth for implementation memory.
- Keep existing section headings intact.
- Update these sections as needed:
  - `## Change Log`
  - `## Current State`
  - `## Next Steps`
  - `## Decisions` (when a real decision is made)
- If no memory update is needed, append `No memory impact` to the latest change-log item.
- Use absolute dates in `YYYY-MM-DD` format.
- Be factual; do not invent unknown details.
- If required context is missing, stop and ask for the missing information instead of guessing.

## Update content guidance
- `Change Log`: append newest entry first with date and concise summary.
- `Current State`: reflect durable repository truth only (stack, tooling, workflow).
- `Decisions`: record only stable decisions and include brief rationale.
- `Next Steps`: keep a short, prioritized list of actionable items.

## Output expectations
- Keep edits minimal and targeted.
- Preserve Markdown readability.
- Avoid duplicate or conflicting entries.
