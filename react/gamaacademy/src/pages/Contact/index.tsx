import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export function Contact() {
  return (
    <Container>
      <h1>Contact</h1>
      <NavLink to="/">
        Acessar página inicial
      </NavLink>
    </Container>
  )
}