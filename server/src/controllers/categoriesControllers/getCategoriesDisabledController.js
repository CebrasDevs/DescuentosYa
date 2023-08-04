const { getCategoriesDisabledHelper } = require('../../helpers');

module.exports = async () => {
    const categories = await getCategoriesDisabledHelper();
    return categories;
};