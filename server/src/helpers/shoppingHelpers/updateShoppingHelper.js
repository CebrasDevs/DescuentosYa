const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = async (id, dataShopping) => {
    const res = await prisma.shopping.update({
        where: { id: +id},
        data: dataShopping
    })
    await prisma.$disconnect();
    if (res){
        return res;
    };

    throw new Error(error.message)
   
}