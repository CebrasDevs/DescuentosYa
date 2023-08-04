const { getUsersHelper } = require('../../helpers');

module.exports = async (id) => {
    const admin = await getUsersHelper({ id: +id });
    return admin;
};