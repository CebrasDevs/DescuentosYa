const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async (shopping) => {
    const res = await prisma.shopping.create({
        data: {
            userId: shopping.userId,
            pdfUrl: shopping.pdfUrl,
            wayToPay: shopping.wayToPay,
            state: shopping.state,
            // totalPrice: shopping.totalPrice
        }
    })

    await prisma.$disconnect();
    if (res) {
        return res;
    };

    throw new Error(error.message)

}