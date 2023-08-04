const { createUserHelper } = require('../../helpers');

module.exports = async (admin) => {
    const res = await createUserHelper(admin);
    return res;
};