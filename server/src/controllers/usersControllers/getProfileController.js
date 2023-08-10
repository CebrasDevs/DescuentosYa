const { getUsersHelper } = require('../../helpers');


module.exports = async (id) => {
    // Con el booleano fullDetail me aseguro de recibir la cascada completa de informacion
    // Recibo el combo completo de informacion de usuario (usar con cautela)
    const fullDetail = true;
    const user = (await getUsersHelper({id: + id}, fullDetail))[0];

    if (user.role === 'MEMBER') {
        
    } else if (user.role === 'COMPANY') {
        const {
            id,
            email,
            enabled,
            role,
            dni_cuit,
            name,
            imageUrl,
            address,
            phoneNumber,
            description,
            Item,
        } = user;

        const structuredItems = Item.map((item) => {
            const structuredVouchers = item.Voucher.map((voucher) => {
                return {
                    id: voucher.id,
                    code: voucher.code,
                    enabled: voucher.enabled,
                    expirationDate: voucher.expirationDate,
                    user: {
                        id: voucher.user.id,
                        email: voucher.user.email,
                        name: voucher.user.name  
                    }
                };
            })

            const structuredShoppings = item.Item_Shopping.map((item_shopping) => {
                return {
                    id: item_shopping.shopping.id,
                    quantity: item_shopping.quantityItem,
                    pdfUrl: item_shopping.shopping.pdfUrl,
                    wayToPay: item_shopping.shopping.wayToPay,
                    state: item_shopping.shopping.state,
                    user: {
                        id: item_shopping.shopping.user.id,
                        email: item_shopping.shopping.user.email,
                        name: item_shopping.shopping.user.name
                    }
                };
            });

            return {
                id: item.id,
                name: item.name,
                category: item.category.name,
                price: item.price,
                discount: item.discount,
                enabled: item.enabled,
                imageUrl: item.imageUrl,
                vouchers: structuredVouchers,
                shoppings: structuredShoppings
            };
        })


        const structuredCompany = {
            id,
            name,
            email,
            role,
            cuit: dni_cuit,
            enabled,
            address,
            phoneNumber,
            description,
            imageUrl,
            items: structuredItems,
        };
        return structuredCompany;
    };
    
}