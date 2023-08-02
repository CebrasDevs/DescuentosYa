const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async (body) => {
    const res = await prisma.item.create({
        data: {
            userId: body.userId,
            description: body.description,
            name: body.name,
            price: body.price,
            url_image: body.url_image
        }
    });
    await prisma.$disconnect();
    if (res){
        return res;
    };

    throw new Error(error.message)
   
};