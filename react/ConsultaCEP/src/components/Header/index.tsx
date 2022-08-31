import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <NavLink to="/">
       <h1>Consulta.<strong>CEP</strong></h1>
      </NavLink>
    </Container>
  )
}