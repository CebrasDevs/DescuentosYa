const {updateItemsHelper} = require('../../helpers')

module.exports = async (id, dataItem) => {
    const result = await updateItemsHelper(id, dataItem);
    return (result);
}