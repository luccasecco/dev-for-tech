import { Container } from "./styles";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Home() {
  const [isLoad, setIsLoad] = useState(true)

  return (
    <Container>
      { isLoad ? (
        <>
        <p>Bem vindo</p>
        <button onClick={() => setIsLoad(!isLoad)}> Entrar </button>
        </>
      ) : (
        <>
          <h1>Home</h1>
             <NavLink to="/contact">
               Acessar página de contato
             </NavLink>
        </>
      )}

      
     
    </Container>
  )
}