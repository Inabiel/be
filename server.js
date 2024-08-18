// Require the framework and instantiate it
import UserController from './src/controller/auth.js'
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})
 
// Declare a route
fastify.register((instance, opts, next) => {

  instance.get('/', (req, res) => { res.send(req.raw.method) })
  instance.post('/', (req, res) => { 
    return UserController.register(req, res)
   })
  instance.put('/', (req, res) => { res.send(req.raw.method) })
  instance.patch('/', (req, res) => { res.send(req.raw.method) })

  instance.get('/other', (req, res) => { res.send('other code') })

  next()
}, { prefix: 'user' })
// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})