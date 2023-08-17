import { useMemo, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
// import { useSelector } from 'react-redux';
// import getCompanyDistances from '@/utils/getCompanyDistances';
// import setCompanyDistances from '@/utils/setCompanyDistances';
// import setItemDistances from '@/utils/setItemDistances';

/**
 * @PabloBestani
 * location para mostrar en el mapa, locationChange es para el formulario signup y
/* editable es para que no se mueva la marca cuando se renderiza en CompanyDetail.jsx
*/
export default function Map({ location, locationChange, editable = false }) {
    // const center = useMemo(() => (userLocation), [userLocation]);

    // const center = useMemo(() => (location), [location]);
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

    // Para probar las utils ::: descomentar las importaciones tambien
    // const {allItems, companies} = useSelector((state) => state);
    // async function getDistances() {
    //     let distances = await fetch('http://localhost:3001/companies').then(data => data.json());
    //     distances = await getCompanyDistances(distances);
    //     return distances;
    // }
    // getDistances()
    //     .then(() => {
    //         // return setItemDistances(allItems);
    //         return setCompanyDistances(companies);
    //     })
    //     .then((data) => console.log("ITEMS C DISTANCA", data));
    
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