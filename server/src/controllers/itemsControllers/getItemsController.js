const { getItemsHelper } = require('../../helpers')

module.exports = async (name) => {
    const result = await getItemsHelper({ name: { contains: name, mode: "insensitive" } });

    const itemsInfo = result.map((item) => {
        return {
            id: item.id,
            imageUrl: item.imageUrl,
            name: item.name,
            category: item.category.name,
            price: item.price,
            discount: item.discount,
            companyId: item.userId,
            enabled: item.enabled,
            review: item.Review,
            companyLocation: {
                lat: item.user.latitude,
                lng: item.user.longitude
            }
        }
    })

    return (itemsInfo);
};