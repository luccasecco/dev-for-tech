import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface CardProps {
  data: {
    lat: number;
    lng: number;
  }
}

export function Map({data}: CardProps) {
  
  const lat = data.lat
  const lng = data.lng


  if(!data){
    return <h1>Obtendo localização</h1>
  }

  const center = {
    lat: lat,
    lng: lng
  } as LatLngExpression


  return (
    <MapContainer
                center={center} 
                zoom={10} 
                style={ {width:'100%' , height:'50vh'} }
              >
      
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
         
              <Marker position={center}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
             
            </MapContainer>
  )
}