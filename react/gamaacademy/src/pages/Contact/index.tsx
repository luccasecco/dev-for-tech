import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, FormContainer } from "./styles";

interface DataProps {
  name: string;
  email: string;
  fone: string;
}

export function Contact() {
  const [data, setData] = useState<DataProps>({} as DataProps)

  return (
    <Container>
      <h1>Contact</h1>
      
      <NavLink to="/">
        Acessar página inicial
      </NavLink>

      <FormContainer onSubmit={() => {}}>
        <input 
          type="text" 
          placeholder="Nome" 
          onChange={e => setData({...data, name: e.target.value})}
        />
        <input type="text" placeholder="E-mail" onChange={e => setData({...data, email: e.target.value })} />
        <input type="text" placeholder="Telefone" onChange={e => setData({...data, fone: e.target.value})} />

        <button type="submit">Enviar</button>
        Nome: {data?.name}
        <br />
        <br />
        Email: {data?.email}
        <br />
        <br />
        Telefone: {data?.fone}
      </FormContainer>
    </Container>
  )
}