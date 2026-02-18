import { Hono } from 'hono'

const merchantRoutes = new Hono()

merchantRoutes.get('/ping', (c) => {
  return c.json({ channel: 'merchant', ok: true })
})

export default merchantRoutes
