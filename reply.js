const fp = require('fastify-plugin')

async function replyPlugin(fastify) {
  fastify.decorateReply('success', function(data) {
    return this.send({ success: true, data })
  })
}

module.exports = fp(replyPlugin)
