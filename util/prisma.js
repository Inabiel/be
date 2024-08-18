// utils/prismaClient.js
import { PrismaClient } from '@prisma/client';

class PrismaClientUtil {
    constructor() {
        if (!PrismaClientUtil.instance) {
            this.prisma = new PrismaClient();
            PrismaClientUtil.instance = this;
        }
        return PrismaClientUtil.instance;
    }
}

const instance = new PrismaClientUtil();
Object.freeze(instance);

export default instance.prisma;
