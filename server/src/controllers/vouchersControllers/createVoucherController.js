// Cuando se agregue todo en el index del handler vamos a descomentarlo

// const { createVoucherHelper } = require('../../helpers');

module.exports = async (voucher) => {
    const res = await createVoucherHelper(voucher);
    return res;
};