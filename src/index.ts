import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Cloudflare workers!')
})

app.get('/home', (c)=> {
  return c.html(`<html>
    
    <body>

    <h1>Muutokset Pipelinen kautta.</h1>

    </body>

    </html>`)
})

export default app
