const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async () => {
    const shopping = await prisma.shopping.findMany({
        include: {
            user: true,
            Item_Shopping: true,
        }
    })

    console.log(shopping)
    await prisma.$disconnect();
    if (shopping) {
        return shopping;
    };

    throw new Error(error.message)
}