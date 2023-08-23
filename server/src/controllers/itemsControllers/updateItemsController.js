const {updateItemsHelper, getCategoriesHelper} = require('../../helpers')

module.exports = async (dataItem) => {
    if (
        (dataItem.id === undefined || isNaN(dataItem.id)) || // No tiene id numérico
        (
            (!dataItem.imageUrl || typeof dataItem.imageUrl !== 'string') &&
            (!dataItem.name || typeof dataItem.name !== 'string') &&
            (!dataItem.description || typeof dataItem.description !== 'string') &&
            (!dataItem.price || isNaN(dataItem.price)) &&
            (!dataItem.discount || isNaN(dataItem.discount))
        )
    ) {
        throw new Error('Incomplete data or incorrect');
    }
    let category = (await getCategoriesHelper({name: dataItem.categoryId}))[0]
    let idItem  = dataItem.id;
    dataItem.categoryId = category.id
    dataItem.id = null;
    const result = await updateItemsHelper(idItem, dataItem);
    let { id, imageUrl, name, description, categoryId, price, discount, enabled } = result
    return { id, imageUrl, name, description, categoryId, price, discount, enabled };
}