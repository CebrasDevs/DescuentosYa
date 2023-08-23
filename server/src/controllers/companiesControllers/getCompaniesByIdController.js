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
        latitude, //extraemos de la consulta de la base de datos
        longitude,
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
            imageUrl: item.imageUrl,
            enabled: item.enabled
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
        location: { lat: latitude, lng: longitude }, // y retornamos con el formato ya esperado en el front
        phoneNumber,
        description,
        items: structuredItems
    };

};