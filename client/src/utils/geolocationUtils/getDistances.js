
function validateLocations(locations) {
    // Formato esperado:
    // origins = [
    //     {
    //         lat: -30.894868, 
    //         lng: -68.831799
    //     },
    //     {
    //         lat: -35.894868, 
    //         lng: -68.831799
    //     },
    // ]
    if (!Array.isArray(locations)) {
        throw Error("Both arguments must be arrays (at utils/getDistance");
    };
    locations.map((location) => {
        if (typeof(location.lat) !== 'number' || isNaN(location.lat)) {
            throw Error("Location 'lat' value is not a valid number (at utils/getDistance)");
        };
        if (typeof(location.lng) !== 'number' || isNaN(location.lng)) {
            throw Error("Location 'lng' value is not a valid number (at utils/getDistance)");
        };
    });
};



export default async function getDistances(origins, destinations) {

    validateLocations(origins);
    validateLocations(destinations);

    const service = new google.maps.DistanceMatrixService();

    // Pido a la API que calcule la distancia y la devuelva
    let distances =  await service.getDistanceMatrix({
            origins,
            destinations,
            travelMode: 'DRIVING'
        },
        function(response, status) {
            if (status !== 'OK') {
                console.log("Error: ", status);
                return;
            };
        }
    )
    .then((data) => data.rows[0].elements.map((element) => element.distance))

    return distances;
};