import { useState } from 'react'
import WildfireMarker from './WildfireMarker'
import GoogleMapReact from 'google-map-react';
import LocationInfoBox from './LocationInfoBox'
import '../css/Map.css'

const Map = ({ events, center, zoom }) => {

    const [locationInfo, locationInfoSet] = useState(null)

    const fireMarkers =
        events.map(ev => {
            if (ev.categories[0].id === 8) {
                return (
                    <WildfireMarker
                        key={ev.id}
                        lat={ev.geometries[0].coordinates[1]}
                        lng={ev.geometries[0].coordinates[0]}
                        clicked={() => locationInfoSet({ id: ev.id, title: ev.title, date: ev.geometries[0].date })}
                    />
                );
            };
            return null;
        });

    return (
        <div className="google__map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDZZ3i4BuhsljkuCZxlNh_ZyYPQ8jGF0Jo" }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {events && events !== null ? fireMarkers : alert("Great, no fires are being reported right now!")}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    );
};


Map.defaultProps = {
    center: {
        lat: 35.709541,
        lng: -78.613922
    },
    zoom: 6
};

export default Map;