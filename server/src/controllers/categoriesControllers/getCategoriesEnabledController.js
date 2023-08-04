const { getCategoriesEnabledHelper } = require('../../helpers');

module.exports = async () => {
    const categories = await getCategoriesEnabledHelper();
    return categories;
};