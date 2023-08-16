import { useMemo, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
// import sortItemsByDistance from '@/utils/sortItemsByDistance';

/**
 * @PabloBestani
 * location para mostrar en el mapa, locationChange es para el formulario signup y
/* editable es para que no se mueva la marca cuando se renderiza en CompanyDetail.jsx
*/
export default function Map({ location, locationChange, editable = false }) {
    // const center = useMemo(() => (userLocation), [userLocation]);

    // const center = useMemo(() => (location), [location]);
    
    // Ubicacion de prueba (provisoria)
    // const center = useMemo(() => ({ lat: -32.894868, lng: -68.831799 }), []);
    //Ubicacion recibida desde la base de datos
    // const center = useMemo(() => ({ lat: location.lat, lng: location.lng }), []);
    /** 
     * @PabloBestani
     * cambios para reutilizar el componente tambien en el formulario
     * por eso dejo comentado useMemo
     */
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

    
    //* Items provisorios para probar el ordenamiento segun distancia
    // const testItems = [
    //     {
    //         deberiaQuedarEnLugar: 1,
    //         name: 'Piercing en la nariz',
    //         companyLocation: {
    //             lat: -30.894868, 
    //             lng: -68.831799
    //         }
    //     },
    //     {
    //         deberiaQuedarEnLugar: 2,
    //         name: 'Entradas al parque de diversiones',
    //         companyLocation: {
    //             lat: -32.893868, 
    //             lng: -63.831799
    //         }
    //     },
    //     {
    //         deberiaQuedarEnLugar: 0,
    //         name: 'Salidita con tu ex',
    //         companyLocation: {
                // lat: -32.894868, 
                // lng: -68.831799
    //         }
    //     },
    // ]
    // sortItemsByDistance(testItems)
    //     .then(data => console.log("ITEMS ORDENADOS", data));


    
    return (
        <div>
            <GoogleMap
                zoom={6} // a charlar, a primera vista puede perder el usuario x demasiado zoom
                center={center}
                mapContainerStyle={{ width: '400px', height: '400px' }}
                onClick={handleClick}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    )
}