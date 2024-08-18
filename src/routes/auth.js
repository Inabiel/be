// Declare a route
import UserController from '../controller/auth.js'

class UserRoutes{
    constructor(fastify){
        this.fastify = fastify
    }

    routes = async() => {
        this.fastify.register((instance, opts, next) => {
            instance.post('/signup', (req, res) => { 
              return UserController.register(req, res)
             })
          
             instance.post('/signin', (req, res) => { 
              return UserController.signIn(req, res)
             })
          
            next()
          }, { prefix: 'user' })
    }
}

export default UserRoutes;