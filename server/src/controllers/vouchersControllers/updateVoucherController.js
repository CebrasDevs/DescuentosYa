// Cuando se agregue todo en el index del handler vamos a descomentarlo

// const { updateVoucherHelper } = require('../../helpers');

module.exports = async (id, data) => {
    const res = await updateVoucherHelper(id, data);
    return res;
};