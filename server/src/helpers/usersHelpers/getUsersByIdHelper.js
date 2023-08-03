const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (id) => {
    const res = await prisma.user.findUnique({
        where: { id: +id }
    });
    await prisma.$disconnect();
    if (res) {
        return res;
    }
    throw new Error(error.message);
};