import ResponseUtil from "../../util/response.js";
import CreatePaymentAccountService from '../service/paymentAccount/CreatePaymentAcccountService.js'

class PaymentAccountController{
    createPaymentAccount = async(request, reply) =>{
        try {
            const createPayment = await (new CreatePaymentAccountService(request)).call()
            ResponseUtil.success(reply, 200, createPayment, 'succeeded creating payment account');
        } catch (error) {
            ResponseUtil.error(reply, error.code, error.message, null);
        }
    }
}

export default new PaymentAccountController();