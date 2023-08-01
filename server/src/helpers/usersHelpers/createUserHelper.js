const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (user) => {
    const res = await prisma.user.create({
        data: {
            email: user.email,
            password: user.password,
            role: user.role,
            enabled: false,
            dni: user.dni,
            cuit: user.cuit,
            name: user.name,
            company_name: user.company_name,
            address: user.address,
            phone: user.phone,
            last_payment: user.last_payment,
            description: user.description,
            discount: user.discount
        }
    });
    await prisma.$disconnect();
    if (res) {
        return res;
    }
    throw new Error(error.message);
};