const {updateItemsHelper} = require('../../helpers')

module.exports = async (dataItem) => {
    if (
        (dataItem.id === undefined || isNaN(dataItem.id)) || // No tiene id numérico
        (
            (!dataItem.url_image || typeof dataItem.url_image !== 'string') &&
            (!dataItem.name || typeof dataItem.name !== 'string') &&
            (!dataItem.description || typeof dataItem.description !== 'string') &&
            (!dataItem.categoryId || isNaN(dataItem.categoryId)) &&
            (!dataItem.price || isNaN(dataItem.price)) &&
            (!dataItem.discount || isNaN(dataItem.discount))
        )
    ) {
        throw new Error('Incomplete data or incorrect');
    }
    let idItem  = dataItem.id;
    dataItem.id = null;
    const result = await updateItemsHelper(idItem, dataItem);
    let { id, url_image, name, description, categoryId, price, discount } = result
    return { id, imageUrl: url_image, name, description, categoryId, price, discount };
}