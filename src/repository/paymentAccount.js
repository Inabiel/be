import 'dotenv/config'
import prisma from '../../util/prisma'

class PaymentAccountRepository{
    constructor(){
        this.prisma = prisma
    }

    add = async(data) =>{
        return this.prisma.paymentAccount.create(data)
    }

    getPaymentAccount = async(id) => {
        return this.prisma.paymentAccount.findFirst(id)
    }

}

export default new PaymentAccountRepository();