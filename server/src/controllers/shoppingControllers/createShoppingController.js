const { createShoppingHelper, createItemShoppingHelper, getItemsHelper, getUsersHelper } = require('../../helpers');
const { registerShoppingPDF } = require('../../utils/pdfUtils');

module.exports = async (data) => {
    const {
        userId,
        wayToPay,
        state,
        totalPrice,
        items
    } = data;
    const shopper = (await getUsersHelper({ id: +userId }))[0];
    //obtenemos todos los ID de los items comprados
    const itemsIds = items.map(({ id }) => id);
    //obtenemos toda la info de cada item comprado
    const itemsDB = await getItemsHelper({ id: { in: itemsIds } });
    const itemsWithQuantities = items.map((itemShop) => {
        // le agregamos a cada item, la cantidad que se compro para detallar el PDF
        const item = (itemsDB.find((itemDB) => itemDB.id === itemShop.id ))
        return {
            ...item,
            quantity: itemShop.quantity
        }
    });
    const pdfUrl = await registerShoppingPDF(shopper.name, itemsWithQuantities, totalPrice, wayToPay, state, shopper.email);
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