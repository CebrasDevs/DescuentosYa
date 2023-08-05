const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = async (id, dataItem) => {
    
    console.log(id)
    console.log(dataItem)

    const updateData = {}

    if (dataItem.url_image) updateData.url_image = dataItem.url_image;
    if (dataItem.name) updateData.name = dataItem.name;
    if (dataItem.description) updateData.description = dataItem.description;    
    if (dataItem.categoryId) updateData.categoryId = dataItem.categoryId;
    if (dataItem.price) updateData.price = dataItem.price;
    if (dataItem.discount) updateData.discount = dataItem.discount;
    if (dataItem.id === null) updateData.id = +id;

    
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