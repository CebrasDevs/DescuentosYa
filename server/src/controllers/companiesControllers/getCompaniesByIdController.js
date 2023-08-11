const { getUsersHelper } = require('../../helpers');

module.exports = async (id) => {
    if (isNaN(id)) throw new Error('Invalid ID');
    const company = (await getUsersHelper({ id: +id }))[0];
    const {
        email,
        enabled,
        role,
        dni_cuit,
        name,
        imageUrl,
        address,
        phoneNumber,
        description,
        Item
    } = company;

    const structuredItems = Item.map((item) => {
        return {
            id: item.id,
            name: item.name,
            category: item.category.name,
            price: item.price,
            discount: item.discount,
            imageUrl: item.imageUrl
        };
    });


    return {
        id: +id,
        email,
        enabled,
        role,
        cuit: dni_cuit,
        name,
        imageUrl,
        address,
        phoneNumber,
        description,
        items: structuredItems
    };

};