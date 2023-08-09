const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (user) => {
    const newUser = await prisma.user.create({
        data: { ...user }
    });
    await prisma.$disconnect();
    if (newUser) {
        return newUser;
    }
    throw new Error(error.message);
};