import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import '../css/mapStyle.css'

const Map = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    Testi sijainti
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map