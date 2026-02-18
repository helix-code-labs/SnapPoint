import { Hono } from 'hono'

const adminRoutes = new Hono()

adminRoutes.get('/ping', (c) => {
  return c.json({ channel: 'admin', ok: true })
})

export default adminRoutes
