// Cuando se agregue todo en el index del handler vamos a descomentarlo

// const { getVouchersHelper } = require('../../helpers');

module.exports = async () => {
    const vouchers = await getVouchersHelper();
    return vouchers;
};