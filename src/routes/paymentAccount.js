// Declare a route
import PaymentAccountController from '../controller/paymentAccount.js'
import AuthMiddleware from '../middleware/auth.js'

class PaymentAccountRoutes{
    constructor(fastify){
        this.fastify = fastify
    }

    routes = async() => {
        this.fastify.register((instance, opts, next) => {

            instance.addHook('preHandler', AuthMiddleware.verifyAuth);

            instance.post('/create', (req, res) => { 
              return PaymentAccountController.createPaymentAccount(req, res)
             })
          
            next()
          }, { prefix: 'payment-account' })
    }
}

export default PaymentAccountRoutes;