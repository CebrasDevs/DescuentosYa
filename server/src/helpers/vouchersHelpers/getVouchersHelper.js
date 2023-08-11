const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (condition = {}) => {
    const vouchers = await prisma.voucher.findMany({
        where: condition,
        include: {
            item: {
                include: {
                    category: true
                }
            },
            user: true
        }
    });
    await prisma.$disconnect();
    if (vouchers) {
        return vouchers;
    };
    throw new Error(error.message);
};