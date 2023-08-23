const { getItemsHelper } = require('../../helpers')

module.exports = async (id) => {
    const result = await getItemsHelper( {id: +id} );

    const itemsInfo = result.map((item) => {
        return {
            id:+item.id,
            imageUrl: item.imageUrl,
            name: item.name,
            description: item.description,
            category: item.category.name,
            price: item.price,
            discount: item.discount,
            companyId: item.userId,
            companyName: item.user.company_name,
            review: item.Review,
            companyLocation:{
                lat: item.user.latitude,
                lng: item.user.longitude
            },
            enabled: item.enabled
        }
    })

    return (itemsInfo[0]);
};