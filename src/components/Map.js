import {MapContainer, TileLayer} from 'react-leaflet'
import '../css/mapStyle.css'
import {useCallback, useEffect, useMemo, useState} from 'react'

export {markOnMap}
let center = [60.170833, 24.9375]
const zoom = 16
let refreshMap = null;

function markOnMap(xCoord, yCoord) {
    center = [xCoord, yCoord]
onClick();

}

function onClick() {
    refreshMap.setView(center, zoom)
}

const DisplayPosition = ({ map }) => {
    refreshMap = map
    const [position, setPosition] = useState(() => map.getCenter())


    const onMove = useCallback(() => {
        setPosition(map.getCenter())
    }, [map])

    useEffect(() => {
        map.on('move', onMove)
        return () => {
            map.off('move', onMove)
        }
    }, [map, onMove])
    return (
        <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
        </p>
    )
}

function Map() {
    const [map, setMap] = useState(null)

    const displayMap = useMemo(
        () => (
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                ref={setMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        ),
        [],
    )

    return (
        <div>
            {map ? <DisplayPosition map={map} /> : null}
            {displayMap}
        </div>
    )

}



export default Map