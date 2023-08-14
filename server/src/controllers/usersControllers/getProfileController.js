const { getUsersHelper, getVouchersHelper, getShoppingHelper } = require('../../helpers');
const {
    structureMember,
    structureCompany,
    structureAdmin,
    structureVouchers,
    structureShoppings
} = require("../../utils/profileUtils");

module.exports = async (id) => {
    // Con este booleano recibo info mas detallada (usar con cautela)
    const fullDetail = true;
    const user = (await getUsersHelper({id: + id}, fullDetail))[0];

    if (user.role === 'MEMBER') {
        return structureMember(user);

    } else if (user.role === 'COMPANY') {
        const company = structureCompany(user);
        const itemIds = company.items.map(({ id }) => id);
        let shoppingIds = [];

        user.Item.map((item) => {
            item.Item_Shopping.map((record) => {
                shoppingIds.push(record.shoppingId);
            });
        });

        let vouchers = await getVouchersHelper({itemId: {in: itemIds}});
        vouchers = structureVouchers(vouchers);

        let shoppings = await getShoppingHelper({id: {in: shoppingIds}});
        shoppings = structureShoppings(shoppings);
        
        return {
            ...company,
            sales: shoppings,
            vouchers,
        };
        
    } else if (user.role === 'ADMIN') {
        return structureAdmin(user);

    } else if (!user.role) {
        throw Error("User fetched from database has 'undefined' or 'null' role field");

    } else throw Error("User fetched from database has invalid role value");
};
