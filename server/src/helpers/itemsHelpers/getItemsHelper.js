const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = async () => {
    const items = await prisma.item.findMany({
        include: {
            user: true,
            Voucher: false,
            Item_Shopping: false
        }
    })
    console.log(items)
    await prisma.$disconnect();
    if (items){
        return items;
    };

    throw new Error(error.message)
   
}