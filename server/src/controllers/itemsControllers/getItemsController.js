const { getItemsHelper } = require('../../helpers')

module.exports = async (name) => {
    const result = await getItemsHelper({name: {contains: name, mode:"insensitive"}});

    const itemsInfo = result.map((item) => {
        return {
            id: item.id,
            imageUrl: item.url_image,
            name: item.name,
            company: item.user.company_name,
            category: item.category.name,
            price: item.price,
            discount: item.discount
        }
    })

    return (itemsInfo);
};