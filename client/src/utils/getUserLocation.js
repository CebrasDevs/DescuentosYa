
export default async function getUserLocation() {
    // Consigue la ubicacion actual del navegador del usuario
    return new Promise((resolve, reject) => {

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve([ coords.longitude, coords.latitude ])
            },
            (error) => {
                alert("Could not get geolocation");
                console.log(error);
                reject();
            }
        )
    })
    .then((coords) => {
        return {
            lat: coords[1],
            lng: coords[0]
        }
    });
};