const {createItemsHelper} = require('../../helpers')

module.exports = async (item) => {
    const result = await createItemsHelper(item);
    return (result);
}