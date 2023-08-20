import getDistances from "./getDistances";


function validateCompanies(companies) {
    // formato esperado:
    // companies = [{
    //     "id": 1,
    //     "imageUrl": "https://guiatodoberazategui.com.png",
    //     "name": "McDonalds",
    //     location: {
    //         "lat": -32.890431,
    //         "lng": -68.845839
    //     }
    // }]
    if (!Array.isArray(companies)) {
        throw Error("Argument must be an array of items (at utils/getCompanyDistances)");
    };
    companies.map((company) => {
        if (!company.hasOwnProperty("location")) {
            throw Error("Companies must have valid 'location' property (at utils/getCompanyDistances)")
        };
        if (typeof(company.location.lat) !== 'number' || isNaN(company.location.lat)) {
            throw Error("Location 'lat' value is not a valid number (at utils/getCompanyDistances)");
        };
        if (typeof(company.location.lng) !== 'number' || isNaN(company.location.lng)) {
            throw Error("Location 'lng' value is not a valid number (at utils/getCompanyDistances)");
        };
    });
};


export default async function getCompanyDistances(companies) {
    validateCompanies(companies);

    const userLocation = JSON.parse(localStorage.getItem("userLocation"));

    if (!userLocation) {
        console.log("Error trying to fetch user location from local storage (at utils/getCompanyDistances)");
        return;
    };

    const companyLocations = companies.map(({ location }) => location);
    const distances = await getDistances([userLocation], companyLocations);

    const companyDistances = companies.map((company, index) => {
        return {
            companyId: company.id,
            distance: distances[index]
        };
    });
    localStorage.setItem("companyDistances", JSON.stringify(companyDistances));
}