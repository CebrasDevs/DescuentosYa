import { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

export default function Map({ location, locationChange, editable = false }) {
    const [center, setCenter] = useState(location);
    const handleClick = (e) => {
        if (editable) {
            /**
             * @PabloBestani si fue llamado de detail nunca ingresa
             * setCenter cambia el puntero del mapa
             * locationChange cambia el valor en el formulario
             */
            setCenter({
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            });
            locationChange({
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            })
        }
    }
    return (
        <div>
            <GoogleMap
                zoom={11} // a charlar, a primera vista puede perder el usuario x demasiado zoom
                center={center}
                mapContainerStyle={{ width: '1400px', height: '250px' }}
                onClick={handleClick}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    )
}