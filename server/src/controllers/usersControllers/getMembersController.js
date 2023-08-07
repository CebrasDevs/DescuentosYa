const { getUsersHelper } = require('../../helpers');

module.exports = async () => {
    const members = await getUsersHelper({ role: 'MEMBER' });
    return members;
};