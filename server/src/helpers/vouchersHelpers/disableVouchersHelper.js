const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (id) => {
    const res = await prisma.voucher.update({
        where: { id: +id },
        data: { enabled: false }
    });
    await prisma.$disconnect();
    if (res) {
        return res;
    }
    throw new Error(error.message);
};