const { getUsersHelper } = require('../../helpers');

module.exports = async () => {
    const allCompanies = await getUsersHelper({ role: 'COMPANY', enabled: true });
    let companies = allCompanies.map(({ id, imageUrl, name, latitude, longitude }) => {
        return { 
            id, 
            imageUrl, 
            name,
            location: {
                lat: latitude,
                lng: longitude
            }
        };
    });
    return companies;
};