import PaymentAccountRepository from '../../repository/paymentAccount.js'

class CreatePaymentAccountService{
    constructor(request){
        this.request = request;
    }

    call = async() =>{
        try{
            const {user_id, account_type} = this.request.body
            const getPaymentAccount = await PaymentAccountRepository.findByCondition({userId:user_id, accountType:account_type})
            if(getPaymentAccount){
                const err = new Error("payment account already exists")
                err.code = 409
                throw err;
            }

            let data = {
                userId:user_id,
                accountType:account_type,
                balance:0
            }

            const insertPaymentAccount = await PaymentAccountRepository.add(data)
            if(!insertPaymentAccount){
                const err = new Error("error creating new payment account")
                err.code = 409
                throw err;
            }
        } catch(err){
            throw err
        }
    }
}

export default CreatePaymentAccountService