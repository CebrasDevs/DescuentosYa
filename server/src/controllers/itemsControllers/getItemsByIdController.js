const { getItemsHelper } = require('../../helpers')

module.exports = async (id) => {
    const result = await getItemsHelper( {id: +id} );

    const itemsInfo = result.map((item) => {
        return {
            id:+item.id,
            url_image: item.url_image,
            name: item.name,
            description: item.description,
            company: item.user.company_name,
            category: item.category.name,
            price: item.price,
            discount: item.discount
        }
    })

    return (itemsInfo[0]);
};