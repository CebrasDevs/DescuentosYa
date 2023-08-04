const { getUsersHelper } = require('../../helpers');

module.exports = async () => {
    const allCompanies = await getUsersHelper({ role: 'COMPANY', enabled: true });
    let companies = allCompanies.map(({ id, url_image, company_name }) => (
        { id, imageUrl: url_image, companyName: company_name }
    ));
    return companies;
};