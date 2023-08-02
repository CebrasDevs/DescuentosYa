const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = async (id, dataItem) => {
    const res = await prisma.item.update({
        where: { id: +id},
        data: dataItem
    })
    await prisma.$disconnect();
    if (res){
        return res;
    };

    throw new Error(error.message)
   
}