function validateCompanies(companies) {
    // formato esperado:
    // companies = [{
    //     ...,
    //     id: 3,
    // }]
    if (!Array.isArray(companies)) {
        throw Error("Argument must be an array of companies (at utils/setCompanyDistances)");
    };
    companies.forEach((company) => {
        if (typeof company.id !== 'number' || isNaN(company.id)) {
            throw Error(`Company ${company.name} has no valid property 'id' (at utils/setCompanyDistances)`);
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
};


export default function setCompanyDistances(companies) {

    const distances = JSON.parse(localStorage.getItem("companyDistances"));
    if (!distances) {
        console.log("Error trying to fetch distances from local storage (at utils/setCompanyDistances)");
        return;
    };
    validateCompanies(companies);
    validateDistances(distances);

    const companiesWithDistance = companies.map((company) => {
        const companyIndex = company.id - 1;
        return {
            ...company,
            distance: distances[companyIndex].distance
        };
    });
    return companiesWithDistance;
}