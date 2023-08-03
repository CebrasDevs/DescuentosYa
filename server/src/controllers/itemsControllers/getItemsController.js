const {getItemsHelper} = require('../../helpers')

module.exports = async () => {
    const result = await getItemsHelper();
    return (result);
}