const { getUsersByIdHelper } = require('../../helpers');

module.exports = async (id) => {
    const company = await getUsersByIdHelper(id);
    return company;
};