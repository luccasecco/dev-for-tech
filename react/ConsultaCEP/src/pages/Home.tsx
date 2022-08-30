import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { useGeoLocation } from "../hooks/useGeoLocation";
import { Container } from "./styles";


export function Home() {
  const { coords } = useGeoLocation()
  const [cepValue, setCepValue] = useState('')
  const url = `https://cep.awesomeapi.com.br/json/88103110`
  
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCepValue(data))
  }, []) 

  console.log(cepValue)

  if(!coords){
    return <h1>Obtendo localização</h1>
  }
  

  const position = {
    lat: coords[0],
    lng: coords[1]
  } as LatLngExpression
  
  return(
    <>
      <Header />
     
      <Container>
  
          <div className="card-wrapper">
             <Card data={cepValue}/>

            
          </div>
             <MapContainer
                center={position} 
                zoom={13} 
                style={ {width:'80%' , height:'50vh'} }
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
      </Container>
    </>
  )
}