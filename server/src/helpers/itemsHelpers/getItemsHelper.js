const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = async () => {
    const items = await prisma.item.findMany({
        include: {
            user: true,
            category: true,
            Voucher: true,
            Item_Shopping: true
        }
    })
    console.log(items)
    await prisma.$disconnect();
    if (items){
        return items;
    };

    throw new Error(error.message)
   
}