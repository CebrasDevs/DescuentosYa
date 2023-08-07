const  {getShoppingHelper}  = require('../../helpers');


module.exports = async () => {
    const result = await getShoppingHelper();
    return (result)
};