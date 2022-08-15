import { Container } from "./styles";
import logoImg from '../../assets/images/logo-gama.png'
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="Logo da Gama Academy" />

      <div className="nav-links">
        <NavLink to="/">Quem somos</NavLink>
        <NavLink to="/courses">Cursos</NavLink>
        <NavLink to="/signup">Cadastre-se</NavLink>
        <NavLink to="/signin">Login</NavLink>
      </div>
    </Container>
  )
}