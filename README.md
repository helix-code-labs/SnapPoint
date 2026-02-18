# SnapPoints Monorepo

Turborepo workspace for SnapPoints product surfaces:
- `apps/landing` - marketing landing page (React + Vite)
- `apps/customer-liff` - customer app on LINE LIFF (React + Vite)
- `apps/merchant-web` - merchant web app (React + Vite)
- `apps/admin-web` - admin web app (React + Vite)
- `apps/api` - backend API (Hono + Bun)

## Stack
- Monorepo: Turborepo + pnpm workspaces
- Web apps: React 19 + TypeScript + Vite
- API: Hono on Bun runtime
- Tooling: ESLint, TypeScript

## Getting Started
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Run all apps in dev mode:
   ```bash
   pnpm dev
   ```
3. Build everything:
   ```bash
   pnpm build
   ```

## Useful Commands
- Lint all workspaces:
  ```bash
  pnpm lint
  ```
- Run only landing app:
  ```bash
  pnpm --filter @snappoints/landing dev
  ```
- Run only API app:
  ```bash
  pnpm --filter @snappoints/api dev
  ```

## Deployment
- GitHub Pages deployment is configured for `apps/landing` via `.github/workflows/deploy.yml`.
- Build artifact path for landing is `apps/landing/dist`.

## Runtime Pinning
Project runtime versions are pinned in `.mise.toml`:
- Node.js `20.11.0`
- Bun `1.1.0`
