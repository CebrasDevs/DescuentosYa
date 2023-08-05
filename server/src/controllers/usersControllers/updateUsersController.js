const { updateUsersHelper } = require('../../helpers');

module.exports = async (id, data) => {
    const res = await updateUsersHelper(id, data);
    return res;
};