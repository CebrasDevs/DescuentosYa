function validateItems(items) {
    //formato esperado:
    // items = [{
    //     ...,
    //     companyId: 3,
    //     distance: {
    //         ...,
    //         value: 23423
    //     }
    // }]
    if (!Array.isArray(items)) {
        throw Error("Argument must be an array of items (at utils/sortItemsCarousel)");
    };
    items.forEach((item) => {
        if (typeof item.companyId !== 'number' || isNaN(item.companyId)) {
            throw Error(`Item ${item.name} has no valid property 'companyId' (at utils/sortItemsCarousel)`);
        };
        if (typeof item.distance.value !== 'number' || isNaN(item.distance.value)) {
            throw Error(`Item ${item.name} has no valid property 'distance.value' (at utils/sortItemsCarousel)`);
        };
    });
};

export default function sortItemsCarousel(items) {
    validateItems(items);
    
    const companyCounts = {};
    const maxInstances = 2; 
    const sortedAndFilteredItems = items
        .sort((a, b) => a.distance.value - b.distance.value)
        .filter((item) => {
        if (!companyCounts[item.companyId]) {
          companyCounts[item.companyId] = 1;
          return true;
        } else if (companyCounts[item.companyId] < maxInstances) {
          companyCounts[item.companyId]++;
          return true;
        }
        return false;
    });
    
    return sortedAndFilteredItems;
}
