const { createVouchersHelper } = require('../../helpers');

module.exports = async (voucher) => {
    const res = await createVouchersHelper(voucher);
    return res;
};