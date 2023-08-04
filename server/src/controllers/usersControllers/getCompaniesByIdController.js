const { getUsersHelper } = require('../../helpers');

module.exports = async (id) => {
    const company = await getUsersHelper({ id: +id });
    return company;
};