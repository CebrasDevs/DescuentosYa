const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async () => {
    const vouchers = await prisma.voucher.findMany({
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