const { getUsersHelper } = require('../../helpers');

module.exports = async () => {
    const allCompanies = await getUsersHelper({ role: 'COMPANY', enabled: true });
    let companies = allCompanies.map(({ id, imageUrl, name }) => (
        { id, imageUrl, name }
    ));
    return companies;
};