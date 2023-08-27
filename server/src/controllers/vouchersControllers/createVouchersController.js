const { createVouchersHelper, getVouchersHelper, getItemsHelper, getUsersHelper } = require('../../helpers');
const qr = require("qrcode");
const uploadCloudinary = require("../../utils/cloudinaryUtils");
const faker = require('faker');
const { registerVouchers } = require('../../utils/emailUtils');
const moment = require("moment-timezone");
const argTime = moment.tz("America/Argentina/Buenos_Aires");

module.exports = async (voucher) => {
    if (
        isNaN(voucher.itemId) ||
        isNaN(voucher.userId)

    ) throw new Error("Incomplete data or incorrect");

    const previousVouchers = await getVouchersHelper({ userId: + voucher.userId, itemId: + voucher.itemId });

    let newVoucher = null;

    const item = (await getItemsHelper({ id: +voucher.itemId }))[0];
    const user = (await getUsersHelper({ id: +voucher.userId }))[0];
    if (previousVouchers.length === 0) {
        let code = faker.random.alphaNumeric(50);
        // // Genera los datos de la imagen en formato base64
        const qrDataUrl = await qr.toDataURL(code, { margin: 1 });
        const url = await uploadCloudinary(qrDataUrl, `${code}`, 'png');
        voucher.code = url; //"https://res.cloudinary.com/dwndzlcxp/image/upload/v1692830635/ubgb31uo59a6by0va4o8.png"
        newVoucher = await createVouchersHelper(voucher);
        // envio de email
        await registerVouchers(user.email, newVoucher.code, item);
    } 
    else if (moment.tz(previousVouchers[previousVouchers.length - 1].expirationDate,"America/Argentina/Buenos_Aires").isAfter(argTime) &&
        previousVouchers[previousVouchers.length - 1].enabled) {

        throw new Error("voucher already exists");
    } else {
        let code = faker.random.alphaNumeric(50);
        const qrDataUrl = await qr.toDataURL(code, { margin: 1 });
        const url = await uploadCloudinary(qrDataUrl, `${code}`, 'png');
        voucher.code = url; //"https://res.cloudinary.com/dwndzlcxp/image/upload/v1692830635/ubgb31uo59a6by0va4o8.png"
        newVoucher = await createVouchersHelper(voucher);
        //envio de email
        await registerVouchers(user.email, newVoucher.code, item);
    };

    let { id, userId, itemId, code, expirationDate } = newVoucher;

    return {
        id, userId, itemId, code, expirationDate
    };
} 
