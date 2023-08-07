const {createShoppingHelper} = require('../../helpers');

module.exports = async (shopping) => {
    const result = await createShoppingHelper(shopping);
    return (result)
};