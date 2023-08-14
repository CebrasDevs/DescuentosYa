const {createItemsHelper} = require('../../helpers')

module.exports = async (dataItem) => {

    if (
        (isNaN(dataItem.userId)) ||
        (typeof dataItem.name !== "string") ||
        (isNaN(dataItem.categoryId)) ||
        (typeof dataItem.description !== "string") ||
        isNaN(dataItem.price) ||
        (typeof dataItem.imageUrl !== "string") ||
        (isNaN(dataItem.discount)) 
    )  throw new Error("Incomplete data or incorrect");

    const newItem = await createItemsHelper(dataItem);
    let {
        id,
        userId,
        name,
        categoryId,
        description,
        price,
        imageUrl,
        discount
    } = newItem;

    return {
        id,
        userId,
        name,
        categoryId,
        description,
        price,
        imageUrl,
        discount
    };
}