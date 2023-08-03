const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async (shopping) => {
    const res = await prisma.shopping.create({
        data: {
            userId: shopping.user_id,
            url_PDF: shopping.url_PDF,
            way_to_pay: shopping.way_to_pay,
            state: shopping.state
        }
    })

    await prisma.$disconnect();
    if (res) {
        return res;
    };

    throw new Error(error.message)

}