const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (voucher) => {
    const res = await prisma.voucher.create({
        data: {
            itemId : voucher.itemId,
            userId : voucher.userId,
            code: Math.random()
        }
    });
    await prisma.$disconnect();
    if (res) {
        return res;
    }
    throw new Error(error.message);
};