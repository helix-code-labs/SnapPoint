import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import adminRoutes from './routes/admin'
import liffRoutes from './routes/liff'
import merchantRoutes from './routes/merchant'

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175',
  'http://localhost:5176',
]

const app = new Hono()

app.use('*', logger())
app.use(
  '*',
  cors({
    origin: (origin) => {
      if (!origin) {
        return '*'
      }
      return allowedOrigins.includes(origin) ? origin : allowedOrigins[0]
    },
  }),
)

app.get('/health', (c) => {
  return c.json({ ok: true, service: 'api' })
})

app.route('/liff', liffRoutes)
app.route('/merchant', merchantRoutes)
app.route('/admin', adminRoutes)

app.notFound((c) => c.json({ error: 'Not found' }, 404))
app.onError((err, c) => {
  console.error(err)
  return c.json({ error: 'Internal server error' }, 500)
})

export type AppType = typeof app

export default {
  port: 3001,
  fetch: app.fetch,
}
