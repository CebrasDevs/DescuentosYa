const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async (Item_Shopping) => {
    const res = await prisma.Item_Shopping.create({
        data: {
            itemId: Item_Shopping.itemId,
            shoppingId: Item_Shopping.shoppingId,
            quantityItem: Item_Shopping.quantityItem
        }
    })

    await prisma.$disconnect();
    if (res) {
        return res;
    };

    throw new Error(error.message)

}