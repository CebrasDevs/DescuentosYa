const { createVouchersHelper, getVouchersHelper } = require('../../helpers');

module.exports = async (voucher) => {
    if (
        isNaN(voucher.itemId) ||
        isNaN(voucher.userId)

    ) throw new Error("Incomplete data or incorrect");



    const previousVouchers = await getVouchersHelper({ userId: + voucher.userId, itemId: + voucher.itemId });

    if (previousVouchers.length === 0) {

        const newVoucher = await createVouchersHelper(voucher);

        let { id, userId, itemId, code, expirationDate } = newVoucher;

        return {
            id, userId, itemId, code, expirationDate
        };
    };

    if (previousVouchers[previousVouchers.length - 1].expirationDate > new Date() &&
        previousVouchers[previousVouchers.length - 1].enabled) {

        throw new Error("voucher already exists");

    }

    const res = await createVouchersHelper(voucher);

    let { id, userId, itemId, code, expirationDate } = res;

    return {
        id, userId, itemId, code, expirationDate
    };

} 