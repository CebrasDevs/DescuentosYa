const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

module.exports = async ( condition = {} ) => {
    const items = await prisma.item.findMany({
        where: condition || true,
        include: {
            user: true,
            category: true,
            Voucher: true,
            Item_Shopping: true
        }
    })
    await prisma.$disconnect();
    if (items){
        return items;
    };

    throw new Error(error.message)
   
}