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
Each web app deploys to Cloudflare Workers with app-owned config in `apps/*/wrangler.toml`.

1. Authenticate once:
   ```bash
   pnpm wrangler login
   ```
2. Dry-run deploy per app:
   ```bash
   pnpm deploy:landing:dry
   pnpm deploy:customer:dry
   pnpm deploy:merchant:dry
   pnpm deploy:admin:dry
   ```
3. Deploy preview env:
   ```bash
   pnpm deploy:landing:preview
   pnpm deploy:customer:preview
   pnpm deploy:merchant:preview
   pnpm deploy:admin:preview
   ```
4. Deploy production:
   ```bash
   pnpm deploy:landing
   pnpm deploy:customer
   pnpm deploy:merchant
   pnpm deploy:admin
   ```

Deploy is manual via `pnpm deploy:*` scripts (no GitHub Actions workflow in repo).

## Runtime Pinning
Project runtime versions are pinned in `.mise.toml`:
- Node.js `lts`
- Bun `latest`
