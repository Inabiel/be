import 'dotenv/config'
import prisma from '../../util/prisma'

class PaymentAccountHistoryRepository{
    constructor(){
        this.prisma = prisma
    }

    findByUserId = async(condition) => {
        return this.prisma.paymentAccountHistory.findFirst({where:condition})
    }

}

export default new PaymentAccountHistoryRepository();