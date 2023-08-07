const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (id, dataUser) => {
    const res = await prisma.user.update({
        where: { id: +id },
        data: dataUser
    });
    await prisma.$disconnect();
    if (res) {
        return res;
    }
    throw new Error(error.message);
};