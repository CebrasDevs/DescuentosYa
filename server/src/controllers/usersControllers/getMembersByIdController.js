const { getUsersHelper } = require('../../helpers');

module.exports = async (id) => {
    const member = await getUsersHelper({ id: +id });
    return member;
};