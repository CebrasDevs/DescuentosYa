const { getUsersHelper } = require('../../helpers');

module.exports = async (id) => {
    if (isNaN(id)) throw new Error('Invalid ID');
    const company = (await getUsersHelper({ id: +id }))[0];
    let {
        email,
        enabled,
        role,
        dni_cuit,
        name,
        imageUrl,
        address,
        phoneNumber,
        description
    } = company;
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
        description
    };
};