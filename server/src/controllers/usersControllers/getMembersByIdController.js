const { getUsersByIdHelper } = require('../../helpers');

module.exports = async (id) => {
    const member = await getUsersByIdHelper(id);
    return member;
};