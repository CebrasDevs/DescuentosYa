const { createUserHelper } = require('../../helpers');

module.exports = async (user) => {
    const res = await createUserHelper(user);
    return res;
};