const {createShoppingHelper, createItemShoppingHelper} = require('../../helpers');

module.exports = async (data) => {
    // Modelo input ideal
    // const data = {
    //     userId,
    //     wayToPay,
    //     state,
    //     totalPrice,
    //     items: [{
    //         id,
    //         quantity
    //     }],
    // }
    const {
        userId,
        wayToPay,
        state,
        totalPrice,
        items
    } = data;

    // Reemplazar por la url del PDF generado
    const pdfUrl = '';
    const shopping = {
        userId,
        pdfUrl,
        wayToPay,
        state,
        totalPrice
    };
    const shoppingResponse = await createShoppingHelper(shopping);

    const ItemShoppingPromises = items.map((item) => {
        return createItemShoppingHelper({
            itemId: item.id,
            shoppingId: shoppingResponse.id,
            quantityItem: item.quantity
        });
    });

    return {
        shopping: shoppingResponse,
        Item_Shopping: await Promise.all(ItemShoppingPromises)
    };
};