import UserRoutes from './src/routes/auth.js'
import PaymentAccountRoutes from './src/routes/paymentAccount.js'
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})
 

fastify.register(await (new UserRoutes(fastify)).routes)
fastify.register(await (new PaymentAccountRoutes(fastify)).routes)


// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})