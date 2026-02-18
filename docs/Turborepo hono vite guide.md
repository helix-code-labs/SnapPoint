# Stack Guide: Turborepo + Hono (Bun) + React Vite (Node)

> เอกสารนี้สรุป stack ที่เลือกใช้ รวมถึงเหตุผล การเปรียบเทียบ และขั้นตอน setup ตั้งแต่ต้นจนพร้อม develop

---

## 1. ทำไมถึงเลือก Stack นี้

### เปรียบเทียบ Node.js Framework

ก่อนตัดสินใจ มีตัวเลือกหลักสามตัว

| | Express | Fastify | **Hono** |
|---|---|---|---|
| Runtime | Node only | Node only | **Node, Bun, Deno, CF Workers, Edge** |
| Req/sec (Node) | ~15,000 | ~77,000 | ~65,000 |
| Req/sec (Bun) | — | — | **~200,000+** |
| Bundle size | ~500KB | ~500KB | **~15KB** |
| TypeScript | ต้องลง `@types` | Built-in | **Built-in** |
| Validation | ต้องลง library | JSON Schema built-in | Zod built-in |
| OpenAPI/Swagger | ต้องลง plugin | `@fastify/swagger` | Auto-gen จาก schema |
| Built-in middleware | ❌ | บางส่วน | **CORS, JWT, Logger, Rate-limit ฯลฯ** |
| RPC (type-safe client) | ❌ | ❌ | **✅ hono/client** |

**Express** เหมาะกับ MVP หรือทีมที่คุ้น Node ecosystem เดิม

**Fastify** เหมาะกับ high-throughput API บน dedicated Node server ที่ต้องการ schema validation เป็น contract

**Hono** เหมาะกับ TypeScript-first project, Edge/Serverless deployment, และทีมที่ต้องการ type-safe client-server communication

---

### ทำไมถึงเลือก Hono

Hono มี feature ที่ชี้ขาดการตัดสินใจสองอย่าง

**1. RPC — Type-safe client อัตโนมัติ**

```ts
// server กำหนด route
const app = new Hono()
  .get('/users', (c) => c.json({ users: [] }))
  .post('/users', zValidator('json', schema), (c) => c.json({ created: true }))

export type AppType = typeof app

// client ใช้ type จาก server โดยตรง ไม่ต้อง generate code เพิ่ม
const client = hc<AppType>('http://localhost:3001')
const res = await client.users.$get()   // TypeScript รู้ response type ทันที
```

**2. Deploy ได้ทุก runtime โดยไม่แก้โค้ด**

```ts
export default app          // Cloudflare Workers
Bun.serve({ fetch: app.fetch })   // Bun
serve(app)                  // Node.js via @hono/node-server
Deno.serve(app.fetch)       // Deno
```

---

### Runtime: Bun สำหรับ API, Node สำหรับ Vite

Hono รันได้เร็วที่สุดบน Bun (~200k req/sec) แต่ Vite ใช้ Node เป็นหลัก

Turborepo แต่ละ app รัน runtime แยก process กัน ทั้งสองจึงอยู่ร่วมกันได้โดยไม่ conflict

```
apps/api/  → Bun runtime   (Hono, fast JSON, native performance)
apps/web/  → Node runtime  (Vite, React, ecosystem เต็ม)

ทั้งสอง communicate ผ่าน HTTP proxy เท่านั้น
```

---

## 2. Environment Setup ด้วย mise

mise คือ runtime version manager ที่จัดการ Node และ Bun ได้ในที่เดียว และกำหนด version ระดับ project ได้

### ติดตั้ง mise

```bash
# macOS
brew install mise

# Linux
curl https://mise.run | sh
```

### กำหนด version ระดับ project

สร้างไฟล์ `.mise.toml` ที่ root ของ project

```toml
# .mise.toml
[tools]
node = "20.11.0"
bun  = "1.1.0"
```

```bash
mise install    # ติดตั้ง version ตามไฟล์
```

mise อ่าน `.mise.toml` จาก directory อัตโนมัติทุกครั้งที่ `cd` เข้า project

```bash
cd my-app
node --version   # → v20.11.0
bun --version    # → 1.1.0

cd ~/other-project
node --version   # → v18.x.x  ← version ของ project นั้น ไม่กระทบกัน
```

Commit ไฟล์นี้เข้า git เพื่อให้ทีมทุกคนได้ environment เดียวกัน

```bash
git add .mise.toml
git commit -m "chore: pin runtime versions"
```

---

## 3. Project Structure

```
my-app/
├── apps/
│   ├── api/                   ← Hono + Bun
│   │   └── src/
│   │       ├── index.ts       ← entry point + export AppType
│   │       └── routes/
│   │           ├── users.ts
│   │           └── posts.ts
│   └── web/                   ← React + Vite + Node
│       └── src/
│           ├── lib/
│           │   └── api.ts     ← hono/client พร้อม type จาก api
│           └── App.tsx
├── packages/
│   └── types/                 ← Shared TypeScript interfaces
├── .mise.toml                 ← pin Node + Bun version
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

---

## 4. Setup ทีละขั้น

### ขั้นที่ 1 — Init Turborepo

```bash
npx create-turbo@latest my-app
cd my-app
```

เลือก `pnpm` เป็น package manager

### ขั้นที่ 2 — กำหนด runtime version

```bash
# สร้าง .mise.toml ที่ root
cat > .mise.toml << EOF
[tools]
node = "20.11.0"
bun  = "1.1.0"
EOF

mise install
```

### ขั้นที่ 3 — สร้าง Hono API (Bun)

```bash
mkdir -p apps/api/src
cd apps/api
bun init -y
bun add hono
```

```ts
// apps/api/src/index.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors({ origin: 'http://localhost:5173' }))

app.get('/health', (c) => c.json({ ok: true }))

// Export type สำหรับใช้กับ hono/client ฝั่ง web
export type AppType = typeof app

export default {
  port: 3001,
  fetch: app.fetch   // Bun native server ไม่ต้อง adapter เพิ่ม
}
```

```json
// apps/api/package.json
{
  "name": "@my-app/api",
  "scripts": {
    "dev": "bun --watch src/index.ts",
    "build": "bun build src/index.ts --outdir dist --target bun"
  }
}
```

### ขั้นที่ 4 — สร้าง React Vite (Node)

```bash
cd apps
pnpm create vite web --template react-ts
cd web
pnpm add hono   # ใช้แค่ hono/client
```

```ts
// apps/web/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
```

Proxy ทำให้ฝั่ง web เรียก `/api/users` แทน `http://localhost:3001/users` ตอน dev และหลีกเลี่ยงปัญหา CORS ได้ทั้งหมด

```ts
// apps/web/src/lib/api.ts
import { hc } from 'hono/client'
import type { AppType } from '@my-app/api/src/index'

export const api = hc<AppType>('/api')
```

### ขั้นที่ 5 — Config Turborepo

```json
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "dev": {
      "persistent": true,
      "cache": false
    },
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
  }
}
```

```json
// package.json (root)
{
  "name": "my-app",
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build"
  },
  "devDependencies": {
    "turbo": "latest"
  }
}
```

```yaml
# pnpm-workspace.yaml
packages:
  - "apps/*"
  - "packages/*"
```

### ขั้นที่ 6 — รัน

```bash
pnpm dev
```

```
[web]  VITE v5.x  ready at http://localhost:5173
[api]  Bun server running at http://localhost:3001
```

---

## 5. การใช้งาน RPC

หัวใจของ stack นี้คือ type ไหลจาก server ไป client อัตโนมัติ

```tsx
// apps/web/src/App.tsx
import { api } from './lib/api'

function App() {
  const check = async () => {
    const res = await api.health.$get()
    const data = await res.json()
    // data.ok → TypeScript รู้ว่าเป็น boolean โดยไม่ต้องเขียน type เอง
    console.log(data.ok)
  }

  return <button onClick={check}>Check API</button>
}
```

---

## 6. การจัด Route ให้ Scale ได้

แทนที่จะเขียน route ทุกอย่างใน `index.ts` ให้แยก file

```ts
// apps/api/src/routes/users.ts
import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

const users = new Hono()

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1)
})

users.get('/', (c) => c.json({ users: [] }))

users.post('/', zValidator('json', createUserSchema), async (c) => {
  const body = c.req.valid('json')  // type-safe, ไม่ต้อง cast
  return c.json({ created: true })
})

export default users
```

```ts
// apps/api/src/index.ts
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import users from './routes/users'
import posts from './routes/posts'

const app = new Hono()
  .use('*', cors({ origin: 'http://localhost:5173' }))
  .route('/users', users)
  .route('/posts', posts)

export type AppType = typeof app   // type ครอบคลุมทุก route อัตโนมัติ

export default { port: 3001, fetch: app.fetch }
```

---

## 7. Built-in Middleware ที่ใช้บ่อย

Hono มี middleware พร้อมใช้ ไม่ต้องลง package เพิ่ม

```ts
import { cors }       from 'hono/cors'
import { logger }     from 'hono/logger'
import { bearerAuth } from 'hono/bearer-auth'
import { rateLimiter } from 'hono/rate-limiter'

app.use('*', logger())
app.use('*', cors())
app.use('/admin/*', bearerAuth({ token: process.env.ADMIN_TOKEN }))
```

---

## 8. Error Handling

```ts
// apps/api/src/index.ts
app.onError((err, c) => {
  console.error(err)
  return c.json({ error: err.message }, 500)
})

app.notFound((c) => {
  return c.json({ error: 'Not found' }, 404)
})
```

---

## 9. สรุปเหตุผลการเลือกแต่ละ tool

| Tool | เหตุผล |
|---|---|
| **Turborepo** | จัดการ monorepo, share type ข้าม app, รัน parallel dev server |
| **Hono** | TypeScript-first, RPC type-safe, deploy ได้ทุก runtime, built-in middleware ครบ |
| **Bun** (API runtime) | เร็วกว่า Node ~3x, native Hono support, built-in TypeScript |
| **Vite + React** (Web) | ecosystem เต็ม, HMR เร็ว, stable กว่า Bun สำหรับ frontend tooling |
| **pnpm** | workspace support, เร็วกว่า npm, disk efficient |
| **mise** | จัดการ Node + Bun version ระดับ project, ทีมได้ environment เดียวกัน |

---

## 10. คำสั่งที่ใช้บ่อย

```bash
# Development
pnpm dev               # รัน web + api พร้อมกัน

# เพิ่ม package
pnpm add zod --filter @my-app/api       # เพิ่มเฉพาะ api
pnpm add react-query --filter @my-app/web  # เพิ่มเฉพาะ web

# Build
pnpm build             # build ทุก app

# Runtime management
mise install           # sync version ตาม .mise.toml
bun upgrade            # อัพ Bun เป็น latest
```