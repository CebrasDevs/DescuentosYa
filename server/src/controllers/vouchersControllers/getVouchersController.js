const { getVouchersHelper } = require('../../helpers');

module.exports = async () => {
    const vouchers = await getVouchersHelper();
    return vouchers;
};