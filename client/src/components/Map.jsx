import { useEffect, useMemo, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import getUserLocation from '@/utils/getUserLocation';

export default function Map({ location }) {
    // Codigo para obtener y renderizar la ubicacion del usuario
    // const [userLocation, setUserLocation] = useState({});
    // useEffect(() => {
    //     getUserLocation()
    //         .then((coords) => setUserLocation({
    //             lat: coords[1],
    //             lng: coords[0]
    //         })
    //         )
    // }, []);
    // const center = useMemo(() => (userLocation), [userLocation]);


    // const center = useMemo(() => (location), [location]);
    
    // Ubicacion de prueba (provisoria)
    const center = useMemo(() => ({ lat: -32.894868, lng: -68.831799 }), []);
    return (
        <div>
            <GoogleMap
                zoom={14}
                center={center}
                mapContainerStyle={{ width: '400px', height: '400px' }}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    )
}