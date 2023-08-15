
export default async function getUserLocation() {
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
    });
};