import 'dotenv/config'
import prisma from '../../util/prisma.js'

class PaymentAccountHistoryRepository{
    constructor(){
        this.prisma = prisma
    }

    findByCondition = async(condition) => {
        return this.prisma.paymentAccountHistory.findMany({where:condition})
    }

}

export default new PaymentAccountHistoryRepository();