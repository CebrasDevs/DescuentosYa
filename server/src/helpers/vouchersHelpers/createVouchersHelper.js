const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (voucher) => {


    const res = await prisma.voucher.create({
        data: {
            itemId : voucher.itemId,
            userId : voucher.userId,
            code: (Math.random() * 1000).toString(),
            expirationDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // Agregar dos días en milisegundos
        }
    });
    await prisma.$disconnect();
    if (res) {
        return res;
    }
    throw new Error(error.message);
};