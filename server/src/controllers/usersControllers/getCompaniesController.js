// Cuando se agregue todo en el index del handler vamos a descomentarlo

const { getUsersHelper } = require('../../helpers');

module.exports = async () => {
    const companies = await getUsersHelper({ role: 'COMPANY' });
    return companies;
};