import 'dotenv/config'
import prisma from '../../util/prisma.js'

class PaymentAccountRepository{
    constructor(){
        this.prisma = prisma
    }

    add = async(data) =>{
        return this.prisma.paymentAccount.create({data:data})
    }

    getPaymentAccount = async(id) => {
        return this.prisma.paymentAccount.findFirst(id)
    }

    findByCondition = async(condition) => {
        return this.prisma.paymentAccount.findFirst({where:condition})
    }

}

export default new PaymentAccountRepository();