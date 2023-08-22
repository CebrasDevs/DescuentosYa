const { getUsersHelper } = require('../../helpers');

module.exports = async (name) => {
    const users = await getUsersHelper({name: {contains: name, mode:"insensitive"}});
    return users;
};