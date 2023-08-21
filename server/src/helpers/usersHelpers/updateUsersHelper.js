const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (id, dataUser) => {
    try {
        const res = await prisma.user.update({
            where: { id: +id },
            data: {
                enabled: dataUser.enabled,
            },
        });
        await prisma.$disconnect();
        return res;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};
