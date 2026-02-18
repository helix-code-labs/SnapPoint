import { Hono } from 'hono'

const liffRoutes = new Hono()

liffRoutes.get('/ping', (c) => {
  return c.json({ channel: 'liff', ok: true })
})

export default liffRoutes
