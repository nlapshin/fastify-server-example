const fastify = require('fastify')
const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
