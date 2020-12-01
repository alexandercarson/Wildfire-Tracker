import moment from 'moment'
import '../css/LocationInfo.css'
const LocationInfoBox = ({ info }) => {
    return (
        <div className="location__info">
            <h2>Event Location Info</h2>

            <ul>
                <li>Event Id: <strong>{info.id}</strong></li>
                <li>Event Title: <strong>{info.title}</strong></li>
                <li>Last Reported: <strong>{moment(info.date).format("LLL")}</strong></li>
            </ul>

        </div>
    )
}

export default LocationInfoBox
