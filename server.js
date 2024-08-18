// Require the framework and instantiate it
import UserController from './src/controller/auth.js'
import UserRoutes from './src/routes/auth.js'
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})
 

fastify.register(await (new UserRoutes(fastify)).routes)

// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})