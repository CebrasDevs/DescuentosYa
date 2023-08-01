// Cuando se agregue todo en el index del handler vamos a descomentarlo

// const { getUsersHelper } = require('../../helpers');

module.exports = async () => {
    const users = await getUsersHelper();
    return users;
};