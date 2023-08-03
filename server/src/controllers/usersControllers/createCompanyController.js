// Cuando se agregue todo en el index del handler vamos a descomentarlo

const { createUserHelper } = require('../../helpers');

module.exports = async (company) => {
    const res = await createUserHelper(company);
    return res;
};