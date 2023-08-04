const { getItemsHelper } = require('../../helpers')

module.exports = async () => {
    const result = await getItemsHelper();

    const itemsInfo = result.map((item) => {
        return {
            url_image: item.url_image,
            name: item.name,
            company: item.user.company_name,
            category: item.category.name,
            price: item.price,
            discount: item.discount
        }
    })

    return (itemsInfo);
};