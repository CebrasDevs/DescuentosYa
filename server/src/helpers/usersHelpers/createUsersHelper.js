const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
require("dotenv").config();
const { SALT_ROUNDS } = process.env

module.exports = async (user) => {
    const salt =  bcrypt.genSaltSync(+SALT_ROUNDS)
    const hashedPassword = bcrypt.hashSync(user.password, salt)
    const newUser = await prisma.user.create({
        data: { ...user, password: hashedPassword }
    });
    await prisma.$disconnect();
    if (newUser) {
        return newUser;
    }
    throw new Error(error.message);
};