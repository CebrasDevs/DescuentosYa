const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
require("dotenv").config();
const { SALT_ROUNDS } = process.env
let salt = bcrypt.genSaltSync(+SALT_ROUNDS)

module.exports = async (id, dataUser) => {
    try {
        const res = await prisma.user.update({
            where: { id: +id },
            data: {
                dni_cuit: dataUser.dni_cuit,
                imageUrl: dataUser.imageUrl,
                email: dataUser.email,
                password: dataUser.password && bcrypt.hashSync(dataUser.password,salt),
                enabled: dataUser.enabled,
                name: dataUser.name,
                phoneNumber: dataUser.phoneNumber,
                address: dataUser.address,
                phoneNumber: dataUser.phoneNumber,
                description: dataUser.description
            },
        });
        await prisma.$disconnect();
        return res;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};
