// Cuando se agregue todo en el index del handler vamos a descomentarlo

// const { createUserHelper } = require('../../helpers');

module.exports = async (user) => {
    const res = await createUserHelper(user);
    return res;
};