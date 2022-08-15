// import { useSelector } from 'react-redux'
// import { IGlobalState } from '../../store/modules/user/types';

import { Container } from "./styles";

export function Footer() {
  // const state = useSelector((state:IGlobalState ) => state.users)

  return (
    <Container>
      <p>Gama Academy</p>
      <br/>
      <br/>
      {/* <p>Temos {state.length} usuários cadastrados</p> */}
    </Container>
  )
}