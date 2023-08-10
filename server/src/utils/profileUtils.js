
function structureMember(user) {
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
        lastPayment,
        Voucher,
        Shopping
    } = user;

    const structuredVouchers = Voucher.map((voucher) => {
        const { item } = voucher;
        const structuredItem = {
            id: item.id,
            name: item.name,
            category: item.category.name,
            price: item.price,
            discount: item.discount,
            // enabled: item.enabled,
            // description: item.description,
            // imageUrl: item.imageUrl,
        };
        const { user } = item;
        const structuredUser = {
            id: user.id,
            name: user.name,
            // imageUrl: user.imageUrl,
        };
        return {
            id: voucher.id,
            code: voucher.code,
            enabled: voucher.enabled,
            expirationDate: voucher.expirationDate,
            item: structuredItem,
            company: structuredUser
        };
    })

    // Mapeo todos los registros de compra de servicios
    const structuredShoppings = Shopping.map((shopping) => {

        // Mapeo la tabla intermedia Item_Shopping para acceder al resto de datos
        const structuredItems = shopping.Item_Shopping.map((databaseRecord) => {

            // Destructuro el servicio, la cantidad y la compañia que lo vendia
            const { item, quantity } = databaseRecord;
            const { user } = item;

            // Retorno los datos resumidos de esa compra de servicio
            return {
                id: item.id,
                quantity: quantity,
                name: item.name,
                category: item.category.name,
                price: item.price,
                discount: item.discount,
                // enabled: item.enabled,
                // description: item.description,
                // imageUrl: item.imageUrl,
                company: {
                    id: user.id,
                    name: user.name,
                    // imageUrl: user.imageUrl,
                }
            };
        });

        return {
            id: shopping.id,
            pdfUrl: shopping.pdfUrl,
            wayToPay: shopping.wayToPay,
            state: shopping.state,
            items: structuredItems,
        }
    });

    const structuredMember = {
        id,
        name,
        email,
        role,
        dni: dni_cuit,
        address,
        phoneNumber,
        enabled,
        lastPayment,
        imageUrl,
        vouchers: structuredVouchers,
        shoppings: structuredShoppings
    };
    return structuredMember;
};

function structureCompany(user) {
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
            const { user } = voucher;
            return {
                id: voucher.id,
                code: voucher.code,
                enabled: voucher.enabled,
                expirationDate: voucher.expirationDate,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name  
                }
            };
        })

        const structuredShoppings = item.Item_Shopping.map((item_shopping) => {
            const { shopping } = item_shopping;
            const { user } = shopping;
            return {
                id: shopping.id,
                quantity: item_shopping.quantityItem,
                pdfUrl: shopping.pdfUrl,
                wayToPay: shopping.wayToPay,
                state: shopping.state,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name
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

function structureAdmin(user) {
    const {
        id,
        email,
        enabled,
        role,
        name,
        phoneNumber,
        imageUrl,
    } = user;
    return {
        id,
        name,
        email,
        role,
        phoneNumber,
        enabled,
        imageUrl
    };
};



module.exports = {
    structureMember,
    structureCompany,
    structureAdmin
};