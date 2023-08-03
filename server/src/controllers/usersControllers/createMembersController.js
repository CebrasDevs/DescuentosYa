const { createUserHelper } = require('../../helpers');

module.exports = async (member) => {
    const res = await createUserHelper(member);
    return res;
};