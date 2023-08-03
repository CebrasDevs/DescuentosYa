const { createUserHelper } = require('../../helpers');

module.exports = async (company) => {
    const res = await createUserHelper(company);
    return res;
};