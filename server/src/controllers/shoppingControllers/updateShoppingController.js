const {updateShoppingHelper} = require('../../helpers');


module.exports = async (id, dataShopping) => {
    const result = await updateShoppingHelper(id, dataShopping);
    return (result)
};