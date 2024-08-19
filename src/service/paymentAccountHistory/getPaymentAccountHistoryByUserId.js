import PaymentAccountHistoryRepository from "../../repository/paymentAccountHistory.js";

class GetPaymentAccountHistoryByUserIdService{
    constructor(request){
        this.request = request;
    }

    call = async() =>{
        try{
            const {user_id} = this.request.body
            const getByUserId = await PaymentAccountHistoryRepository.findByCondition({userId:user_id})
            return getByUserId
        } catch(err){
            throw err
        }
    }
}

export default GetPaymentAccountHistoryByUserIdService