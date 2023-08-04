const { createUsersHelper } = require('../../helpers');

module.exports = async (dataCompany) => {
    if (typeof dataCompany.email !== "string" ||
        typeof dataCompany.password !== "string" ||
        !dataCompany.cuit ||
        isNaN(dataCompany.cuit) ||
        typeof dataCompany.companyName !== "string" ||
        typeof dataCompany.address !== "string") throw new Error('Incomplete data or incorrect');
    dataCompany.role = "COMPANY";
    const newCompany = await createUsersHelper(dataCompany);
    let { id, email, enabled, role, cuit, company_name: companyName, url_image: imageUrl, address, phone: phoneNumber, description } = newCompany;
    return { id, email, enabled, role, cuit, companyName, imageUrl, address, phoneNumber, description };
};