const { updateUserHelper } = require('../../helpers');

module.exports = async (id, data) => {
    const res = await updateUserHelper(id, data);
    return res;
};