import getDistances from "./getDistances";
import getUserLocation from "./getUserLocation";


function validateItems(items) {
    //formato esperado:
    // items = [{
    //         ...otros atributos,
    //         companyLocation: {
    //             lat: -30.894868, 
    //             lng: -68.831799
    //         }
    // }]
    if (!Array.isArray(items)) {
        throw Error("Argument must be an array of items (at utils/sortItemsByDistance)");
    }
    items.map((item) => {
        if (!item.hasOwnProperty("companyLocation")) {
            throw Error("Items must have valid 'location property (at utils/sortItemsByDistance)")
        };
        if (typeof(item.companyLocation.lat) !== 'number' || isNaN(item.companyLocation.lat)) {
            throw Error("Location 'lat' value is not a valid number (at utils/sortItemsByDistance)");
        };
        if (typeof(item.companyLocation.lng) !== 'number' || isNaN(item.companyLocation.lng)) {
            throw Error("Location 'lng' value is not a valid number (at utils/sortItemsByDistance)");
        };
    });
}


export default async function sortItemsByDistance(items) {
    validateItems(items);

    // Consigo la ubicacion del usuario y de todos los locales
    const companyLocations = items.map((item) => item.companyLocation);
    const userLocation = await getUserLocation();

    // Creo un array con la distancia hasta cada local
    const distances = (await getDistances([userLocation], companyLocations)).map(({value}) => value);

    // Ordeno el array original segun la distancia que se calculo
    const auxArray = items.map((item, index) => {
        return {
            item,
            distance: distances[index]
        };
    });
    auxArray.sort((a, b) => a.distance - b.distance);
    const sortedItems = auxArray.map(({ item }) => item);

    // Devuelvo los items ordenados
    return sortedItems;
}