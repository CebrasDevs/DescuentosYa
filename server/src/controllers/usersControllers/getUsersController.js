const { getUsersHelper } = require('../../helpers');

module.exports = async () => {
    const users = await getUsersHelper();
    return users;
};