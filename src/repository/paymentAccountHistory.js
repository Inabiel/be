import 'dotenv/config'
import prisma from '../../util/prisma'

class PaymentAccountHistoryRepository{
    constructor(){
        this.prisma = prisma
    }

    findByUserId = async(id) => {
        return this.prisma.paymentAccountHistory.findFirst(id)
    }

}

export default new PaymentAccountHistoryRepository();