import 'dotenv/config'
import prisma from '../../util/prisma.js'

class PaymentAccountRepository{
    constructor(){
        this.prisma = prisma
    }

    add = async(data) =>{
        return this.prisma.paymentAccount.create({data:data})
    }

    findByCondition = async(condition) => {
        return this.prisma.paymentAccount.findFirst({where:condition})
    }

    findManyByCondition = async(condition) => {
        return this.prisma.paymentAccount.findMany({where:condition})
    }

}

export default new PaymentAccountRepository();