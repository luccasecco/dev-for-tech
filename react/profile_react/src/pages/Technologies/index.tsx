import { ArrowArcLeft } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Container, Content } from "./styles";

export function Technologies() {
  return (
    <Container>
      <Content>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="REACT" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" alt="TYPESCRIPT" />
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JAVASCRIPT" />
      </Content>

      <div className="back-to-home">
        <NavLink to="/"><ArrowArcLeft size={25} />Início</NavLink>
      </div>

    </Container>
  )
}