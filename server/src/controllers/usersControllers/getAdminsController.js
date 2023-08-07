const { getUsersHelper } = require('../../helpers');

module.exports = async () => {
    const admins = await getUsersHelper({ role: "ADMIN" });
    return admins;
};