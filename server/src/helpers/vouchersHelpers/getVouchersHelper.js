const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// condition = {userId: + voucher.userId, itemId: + voucher.itemId}
module.exports = async (condition = {}) => {
    const vouchers = await prisma.voucher.findMany({
        where: condition || true,
        include: {
            item: true,
            user: true
        }
    });
    await prisma.$disconnect();
    if (vouchers) {
        return vouchers;
    };
    throw new Error(error.message);
};