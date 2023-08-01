const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async () => {
    const users = await prisma.user.findMany({
        include: {
            Item: true,
            Voucher: true,
            Shopping: true
        }
    });
    await prisma.$disconnect();
    if (users) {
        return users;
    };
    throw new Error(error.message);
};