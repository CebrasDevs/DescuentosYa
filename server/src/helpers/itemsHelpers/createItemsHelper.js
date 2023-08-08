const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async (item) => {
    const res = await prisma.item.create({
        data: {
            userId: + item.userId,
            categoryId: + item.categoryId,
            description: item.description,
            name: item.name,
            price: + item.price,
            discount: + item.discount,
            url_image: item.imageUrl
            
        }
    });
    await prisma.$disconnect();
    if (res){
        return res;
    };

    throw new Error(error.message)
   
};
