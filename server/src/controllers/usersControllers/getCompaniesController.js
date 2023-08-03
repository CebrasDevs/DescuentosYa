const { getUsersHelper } = require('../../helpers');

module.exports = async () => {
    const companies = await getUsersHelper({ role: 'COMPANY' });
    return companies;
};