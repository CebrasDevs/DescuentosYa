// Cuando se agregue todo en el index del handler vamos a descomentarlo

const { createUserHelper } = require('../../helpers');

module.exports = async (member) => {
    const res = await createUserHelper(member);
    return res;
};