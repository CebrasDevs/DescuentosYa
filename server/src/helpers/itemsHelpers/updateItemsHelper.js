const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = async (id, dataItem) => {
    const updateData = {
        ...dataItem,
        id: dataItem.id === null ? +id : dataItem.id,
        };

    
    const res = await prisma.item.update({
        where: { id: +id},
        data:  updateData 
    })
    await prisma.$disconnect();
    if (res){
        return res;
    };

    throw new Error(error.message)
   
}
