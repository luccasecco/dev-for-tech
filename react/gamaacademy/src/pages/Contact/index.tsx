import { FormEvent, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../services/api";

import { Container, FormContainer } from "./styles";


interface DataProps {
  name: string;
  email: string;
}

export function Contact() {
  const [data, setData] = useState<DataProps>({} as DataProps)
  const [submit, setSubmit] = useState(false)

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    api.post('', data).then( response => {
      if(response.status === 200) {
        setSubmit(true)
      }
    })
  }, [data])

  return (
    <Container>
      <h1>Contato</h1>
      
      <NavLink to="/">
        Acessar página inicial
      </NavLink>
      { submit ? (
        <>
        <h1>Obrigado por se cadastrar</h1>
        </>
      ): (
      <FormContainer onSubmit={handleSubmit}> 
        <input 
          type="text" 
          placeholder="Nome" 
          onChange={e => setData({...data, name: e.target.value})}
        />
        <input 
          type="text" 
          placeholder="E-mail" 
          onChange={e => setData({...data, email: e.target.value })} 
        />
        {/* <input type="submit" value="cadastrar" /> */}

        <button type="submit">Enviar</button>

        
        Nome: {data?.name}
        <br />
        <br />
        Email: {data?.email}
      </FormContainer>
      )}
      
    </Container>
  )
}