import PaymentAccountRepository from '../../repository/paymentAccount.js'

class GetPaymentAccountByUserIdService{
    constructor(request){
        this.request = request;
    }

    call = async() =>{
        try{
            const {user_id} = this.request.body
            const getPaymentAccount = await PaymentAccountRepository.findManyByCondition({userId:user_id})
            return getPaymentAccount
        } catch(err){
            throw err
        }
    }
}

export default GetPaymentAccountByUserIdService