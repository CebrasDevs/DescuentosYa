// Cuando se agregue todo en el index del handler vamos a descomentarlo

const { updateUserHelper } = require('../../helpers');

module.exports = async (id, data) => {
    const res = await updateUserHelper(id, data);
    return res;
};