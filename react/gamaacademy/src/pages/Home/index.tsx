import { Container } from "./styles";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <NavLink to="/contact">
        Acessar página de contato
      </NavLink>
    </Container>
  )
}