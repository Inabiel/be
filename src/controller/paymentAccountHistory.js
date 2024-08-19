import ResponseUtil from "../../util/response.js";
import GetPaymentAccountHistoryByUserIdService from "../service/paymentAccountHistory/getPaymentAccountHistoryByUserId.js";

class PaymentAccountHistoryController{
    getByUserId = async(request, reply) =>{
        try {
            const getPaymentAccountHistory = await (new GetPaymentAccountHistoryByUserIdService(request)).call()
            ResponseUtil.success(reply, 200, getPaymentAccountHistory, 'succeeded getting payment account history');
        } catch (error) {
            ResponseUtil.error(reply, error.code, error.message, null);
        }
    }
}

export default new PaymentAccountHistoryController();