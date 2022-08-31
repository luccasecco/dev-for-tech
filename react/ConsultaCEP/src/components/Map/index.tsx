import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useGeoLocation } from "../../hooks/useGeoLocation";

export function Map() {
  const { coords } = useGeoLocation()

  if(!coords){
    return <h1>Obtendo localização</h1>
  }

  const position = {
    lat: coords[0],
    lng: coords[1]
  } as LatLngExpression

  return (
    <MapContainer
                center={position} 
                zoom={13} 
                style={ {width:'100%' , height:'58vh'} }
               
              >
      
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
         
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
             
            </MapContainer>
  )
}