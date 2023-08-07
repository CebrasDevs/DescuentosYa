const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async (item) => {
    const res = await prisma.item.create({
        data: {
            userId: + item.userId,
            categoryId: + item.category,
            description: item.description,
            name: item.name,
            price: + item.price,
            url_image: item.imageUrl,
            discount: + item.discount
        }
    });
    await prisma.$disconnect();
    if (res){
        return res;
    };

    throw new Error(error.message)
   
};