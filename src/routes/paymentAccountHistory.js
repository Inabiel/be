// Declare a route
import paymentAccountHistoryController from '../controller/paymentAccountHistory.js'
import AuthMiddleware from '../middleware/auth.js'

class PaymentAccountHistoryRoutes{
    constructor(fastify){
        this.fastify = fastify
    }

    routes = async() => {
        this.fastify.register((instance, opts, next) => {

            instance.addHook('preHandler', AuthMiddleware.verifyAuth);

            instance.post('/', (req, res) => { 
              return paymentAccountHistoryController.getByUserId(req,res)
             })
          
            next()
          }, { prefix: 'payment-account-history' })
    }
}

export default PaymentAccountHistoryRoutes;