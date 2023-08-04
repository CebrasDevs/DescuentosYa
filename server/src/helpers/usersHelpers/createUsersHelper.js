const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (user) => {
    const newUser = await prisma.user.create({
        data: {
            email: user.email,
            password: user.password,
            role: user.role,
            dni: user.dni,
            cuit: user.cuit,
            name: user.name,
            url_image: user.imageUrl,
            company_name: user.companyName,
            address: user.address,
            phone: user.phoneNumber,
            last_payment: user.last_payment,
            description: user.description,
        }
    });
    await prisma.$disconnect();
    if (newUser) {
        return newUser;
    }
    throw new Error(error.message);
};