import { Icon } from '@iconify/react';
import FireIcon from '@iconify/icons-mdi/fire-alert'
import '../css/Marker.css'

const WildfireMarker = ({ lat, long, clicked }) => {
    return (
        <div className="wildfire__marker" onClick={clicked} >
            <div className="location__marker" >
                <Icon icon={FireIcon} className="location__icon" />
            </div>
        </div>
    );
};

export default WildfireMarker
