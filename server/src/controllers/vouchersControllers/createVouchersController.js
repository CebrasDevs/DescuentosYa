const { createVouchersHelper, getVouchersHelper, getItemsHelper, getUsersHelper } = require('../../helpers');
const qr = require("qrcode");
const uploadCloudinary = require("../../utils/cloudinaryUtils");
const faker = require('faker');
const { registerVouchers } = require('../../utils/emailUtils');


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
        let code = faker.random.alphaNumeric(20);
        //Genera los datos de la imagen en formato base64
        const qrDataUrl = await qr.toDataURL(code, { margin: 1 });
        const url = await uploadCloudinary(qrDataUrl, `${code}`, 'png');
        voucher.code = url
        newVoucher = await createVouchersHelper(voucher);
        //envio de email
        // await registerVouchers(user.email, newVoucher.code, item);
    } else if (previousVouchers[previousVouchers.length - 1].expirationDate > new Date() &&
        previousVouchers[previousVouchers.length - 1].enabled) {

        throw new Error("voucher already exists");
    } else {
        let code = faker.random.alphaNumeric(20);
        const qrDataUrl = await qr.toDataURL(code, { margin: 1 });
        const url = await uploadCloudinary(qrDataUrl, `${code}`, 'png');
        voucher.code = url
        newVoucher = await createVouchersHelper(voucher);
        //envio de email
        // await registerVouchers(user.email, newVoucher.code, item);
    };

    let { id, userId, itemId, code, expirationDate } = newVoucher;

    return {
        id, userId, itemId, code, expirationDate
    };
} 