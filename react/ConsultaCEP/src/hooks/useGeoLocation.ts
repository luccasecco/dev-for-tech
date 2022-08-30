import { useEffect, useState } from "react";


export function useGeoLocation() {
  const [coords, setCoords] = useState<number[] | null>(null)
  const defaultCoords = [-27.61459, -48.63137]

  function onSuccsess(position: GeolocationPosition) {
    setCoords([position.coords.latitude, position.coords.longitude])
  }
  function onError() {
    console.log('error get location')
    setCoords(defaultCoords)
  }
  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition(onSuccsess, onError)
    }catch(error){
      setCoords(defaultCoords)
    }
  },[])

  return {coords}
}