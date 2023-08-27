const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const moment = require("moment-timezone");
const argTime = moment.tz("America/Argentina/Buenos_Aires");

module.exports = async (voucher) => {

    const res = await prisma.voucher.create({
        data: {
            itemId : voucher.itemId,
            userId : voucher.userId,
            code: voucher.code,
            expirationDate: argTime.clone().add(2,"days") // pueden ser 2 dias, horas, meses, etc
            // expirationDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // Agregar dos días en milisegundos
        }
    });
    await prisma.$disconnect();
    if (res) {
        return res;
    }
    throw new Error('Error al crear el voucher');
};