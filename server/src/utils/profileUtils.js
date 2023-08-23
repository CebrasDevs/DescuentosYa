
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
        Shopping,
        Review
    } = user;

    const structuredVouchers = Voucher.map((voucher) => {
        const { item } = voucher;
        const structuredItem = {
            id: item.id,
            name: item.name,
            category: item.category.name,
            price: item.price,
            discount: item.discount,
            imageUrl: item.imageUrl,
            // enabled: item.enabled,
            // description: item.description,
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
            expirationDate: voucher.expirationDate.toLocaleString(),
            item: structuredItem,
            company: structuredUser
        };
    })

    // Mapeo todos los registros de compra de servicios
    const structuredShoppings = Shopping.map((shopping) => {

        // Mapeo la tabla intermedia Item_Shopping para acceder al resto de datos
        const structuredItems = shopping.Item_Shopping.map((databaseRecord) => {

            // Destructuro el servicio, la cantidad y la compañia que lo vendia
            const { item, quantityItem } = databaseRecord;
            const { user } = item;

            // Retorno los datos resumidos de esa compra de servicio
            return {
                id: item.id,
                quantity: quantityItem,
                name: item.name,
                category: item.category.name,
                price: item.price,
                discount: item.discount,
                imageUrl: item.imageUrl,
                // enabled: item.enabled,
                // description: item.description,
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
        lastPayment: lastPayment.toLocaleString(),
        imageUrl,
        vouchers: structuredVouchers,
        shoppings: structuredShoppings,
        Review
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
        const {
            id,
            name,
            price,
            discount,
            enabled,
            imageUrl
        } = item;
        const category = item.category.name;
        return {
            id,
            name,
            category,
            price,
            discount,
            enabled,
            imageUrl
        };
    })


    return {
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
};

function structureVouchers(vouchers) {
    const structuredVouchers = vouchers.map((voucher) => {
        const {
            id,
            code,
            enabled,
            expirationDate,
            item,
            user
        } = voucher;
        return {
            id,
            code,
            enabled,
            expirationDate,
            user: {
                id: user.id,
                name: user.name
            },
            item: {
                id: item.id,
                name: item.name,
                category: item.category.name,
                price: item.price,
                discount: item.discount,
                imageUrl: item.imageUrl
            }
        };
    });
    return structuredVouchers;
}

function structureShoppings(shoppings) {

    const structuredShoppings = shoppings.map((shopping) => {
        const {
            id,
            pdfUrl,
            wayToPay,
            state,
            user,
            Item_Shopping
        } = shopping;

        const structuredItems = Item_Shopping.map((databaseRecord) => {
            const {
                quantityItem,
                item
            } = databaseRecord;

            return {
                id: item.id,
                quantity: quantityItem,
                name: item.name,
                category: item.category.name,
                price: item.price,
                discount: item.discount,
                imageUrl: item.imageUrl
            };
        });

        return {
            id,
            pdfUrl,
            wayToPay,
            state,
            user: {
                id: user.id,
                name: user.name
            },
            items: structuredItems
        };
    });

    return structuredShoppings;
}

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
    structureAdmin,
    structureVouchers,
    structureShoppings
};