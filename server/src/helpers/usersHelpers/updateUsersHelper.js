const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (id, dataUser) => {
    const res = await prisma.user.update({
        where: { id: +id },
        data: {
            email: dataUser.email,
            name: dataUser.name,
            enabled: dataUser.enabled,
            dni_cuit: dataUser.dni_cuit,
            imageUrl: dataUser.imageUrl,
            address: dataUser.address,
            phoneNumber: dataUser.phoneNumber,
            lastPayment: dataUser.lastPayment,
            description: dataUser.description
        }
    });
    await prisma.$disconnect();
    if (res) {
        return res;
    }
    throw new Error(error.message);
};