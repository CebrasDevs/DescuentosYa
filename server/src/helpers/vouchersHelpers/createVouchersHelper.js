const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const faker = require('faker');

module.exports = async (voucher) => {

    const res = await prisma.voucher.create({
        data: {
            itemId : voucher.itemId,
            userId : voucher.userId,
            code: voucher.code,
            expirationDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // Agregar dos días en milisegundos
        }
    });
    await prisma.$disconnect();
    if (res) {
        return res;
    }
    throw new Error('Error al crear el voucher');
};