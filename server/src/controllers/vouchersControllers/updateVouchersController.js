const { updateVouchersHelper } = require('../../helpers');

module.exports = async (id, data) => {
    const res = await updateVouchersHelper(id, data);
    return res;
};