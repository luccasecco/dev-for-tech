import { MagnifyingGlass } from "phosphor-react";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>Consulta.<strong>CEP</strong></h1>
      <form>
        <input type="text" placeholder="Digite um CEP"/>
        <button><MagnifyingGlass size={20}/></button>
      </form>
    </Container>
  )
}