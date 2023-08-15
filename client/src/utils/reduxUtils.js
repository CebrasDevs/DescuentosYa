
export function filterArray(items, filters) {
    // Codigo defensivo
    if (!items.length) {
        console.log("ERROR: no items available to filter (at utils/reduxUtils)");
        return items;
    }
    // Preparo los items a filtrar, y los criterios de filtrado
    let filtered = [...items];
    const { 
        chosenItemType, 
        chosenDiscount, 
        chosenCategory, 
        chosenSorting 
    } = filters;

    

    //FILTRO POR TIPO DE ITEM
    if (chosenItemType === 'Products') {
        filtered = filtered.filter((item) => item.price === 0);
    };
    if (chosenItemType === 'Services') {
        filtered = filtered.filter((item) => item.price > 0);
    };

    //FILTRO POR %DESC
    if (chosenDiscount !== 'All') {
        const minDiscount = Number(chosenDiscount.substring(0, 2));
        filtered = filtered.filter((item) => item.discount >= minDiscount);
    };
    //FILTRO POR CATEGORIA
    if (chosenCategory !== 'All categories') {
        filtered = filtered.filter((item) => item.category === chosenCategory);
    };
    //ORDENAMIENTOS
    switch(chosenSorting) {
        case 'Alphabetical':
            filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'Highest discount':
            filtered.sort((a, b) => b.discount - a.discount);
            break;
        case 'Closest first':
            // filtered.sort(());
            break;
        default:
            console.log('ERROR: invalid sorting method chosen (at reduxUtils)');
    };
    
    return filtered;
}