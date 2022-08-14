import Lottie from 'react-lottie'
import animation from '../../animations/loader.json'

import { Container } from "./styles";

export function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation
  }

  return (
    <Container>
    <h1>Aguarde...</h1>
    <Lottie 
      options={defaultOptions}
      width={200}
      height={200}
    />
    </Container>
  )
}