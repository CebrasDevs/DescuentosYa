import { useMemo } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

export default function Map({ location }) {
    // const center = useMemo(() => (location), [location]);
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