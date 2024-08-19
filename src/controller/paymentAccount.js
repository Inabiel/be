import ResponseUtil from "../../util/response.js";
import CreatePaymentAccountService from '../service/paymentAccount/CreatePaymentAcccountService.js'

class PaymentAccountController{
    createPaymentAccount = async(request, reply) =>{
        try {
            const createPayment = await (new CreatePaymentAccountService(request)).call()
            console.log(createPayment)
        } catch (error) {
            console.log('err ->', error)
            ResponseUtil.error(reply, error.code, error.message, null);
        }
    }
}

export default new PaymentAccountController();