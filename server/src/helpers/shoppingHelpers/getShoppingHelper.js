const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async ( condition = {} ) => {
    const shoppings = await prisma.shopping.findMany({
        where: condition,
        include: {
            user: true,
            Item_Shopping: {
                include: {
                    item: {
                        include: {
                            category: true,
                        }
                    }
                }
            }
        }
    })

    await prisma.$disconnect();
    if (shoppings) {
        return shoppings;
    };

    throw new Error(error.message)
}