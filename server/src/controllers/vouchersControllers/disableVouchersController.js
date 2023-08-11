const { disableVouchersHelper } = require('../../helpers');

module.exports = async (id) => {
    const res = await disableVouchersHelper(id);
    return res;
};