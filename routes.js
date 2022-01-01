module.exports = (fastify) => {
  const users = {}
  
  fastify.route({
    method: 'GET',
    url: '/like/count',
    handler(request, reply) {
      const { query } = request
      const { username } = query
      const count = users[username] || 0

      reply.success({ count })
    }
  })

  fastify.route({
    method: 'POST',
    url: '/like/inc',
    handler(request, reply) {
      const { body } = request
      const { username } = body

      users[username] = users[username] ? users[username]++ : 1

      reply.success({})
    }
  })
}
