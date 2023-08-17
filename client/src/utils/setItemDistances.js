
function validateItems(items) {
    //formato esperado:
    // items = [{
    //     ...,
    //     companyId: 3,
    // }]
    if (!Array.isArray(items)) {
        throw Error("Argument must be an array of items (at utils/setItemDistances)");
    };
    items.forEach((item) => {
        if (typeof item.companyId !== 'number' || isNaN(item.companyId)) {
            throw Error(`Item ${item.name} has no valid property 'companyId' (at utils/setItemDistances)`);
        };
    });
};

function validateDistances(distances) {
    //formato esperado:
    // distances = [{
    //     companyId: 3,
    //     distance: {
    //         text: "874 km",
    //         value: 874307
    //     }
    // }]
    if (!Array.isArray(distances)) {
        throw Error("Argument must be an array of distances (at utils/setItemDistances)");
    };
    distances.forEach((company, index) => {
        const { companyId, distance } = company;
        if (typeof companyId !== 'number' || isNaN(companyId)) {
            throw Error(`Company at index ${index} has no valid property 'companyId' (at utils/setItemDistances)`);
        };
        if (distance === undefined || distance === null) {
            throw Error(`Company at index ${index} has no valid property 'distance' (at utils/setItemDistances)`);
        };
        if (typeof distance.text !== 'string') {
            throw Error(`Company at index ${index} has no valid string property 'distance.text' (at utils/setItemDistances)`);
        };
        if (typeof distance.value !== 'number' || isNaN(distance.value)) {
            throw Error(`Company at index ${index} has no valid number property 'distance.value' (at utils/setItemDistances)`);
        };
    });
}



export default function setItemDistances(items) {
    const companyDistances = JSON.parse(localStorage.getItem("companyDistances"))
    if (!companyDistances) {
        console.log("Error trying to fetch distances from local storage (at utils/setItemDistances)");
        return;
    };
    validateItems(items);
    validateDistances(companyDistances);

    const itemsWithDistance = items.map((item) => {
        const companyIndex = item.companyId - 1;
        return {
            ...item,
            distance: companyDistances[companyIndex].distance
        };
    });
    return itemsWithDistance;
}