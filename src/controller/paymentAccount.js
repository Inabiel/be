import ResponseUtil from "../../util/response.js";
import GetPaymentAccountByUserIdService from "../service/paymentAccount/GetPaymentAccountByUserIdService.js";

class PaymentAccountController{
    createPaymentAccount = async(request, reply) =>{
        try {
            const createPayment = await (new CreatePaymentAccountService(request)).call()
            ResponseUtil.success(reply, 200, createPayment, 'succeeded creating payment account');
        } catch (error) {
            ResponseUtil.error(reply, error.code, error.message, null);
        }
    }

    getPaymentAccount = async(request, reply) =>{
        try {
            const createPayment = await (new GetPaymentAccountByUserIdService(request)).call()
            ResponseUtil.success(reply, 200, createPayment, 'succeeded getting payment account');
        } catch (error) {
            ResponseUtil.error(reply, error.code, error.message, null);
        }
    }
}

export default new PaymentAccountController();