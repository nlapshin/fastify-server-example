const fastify = require('fastify')

const reply = require('./reply')
const routes = require('./routes')

const PORT = process.env.PORT || 5000

const server = fastify({ logger: true })
server.register(reply)
routes(server)

const start = async () => {
  try {
    await server.listen(PORT)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
