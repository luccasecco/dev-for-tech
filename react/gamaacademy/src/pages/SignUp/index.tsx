import { FormEvent, useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { toast } from 'react-toastify'
import { api } from "../../services/api";
import { Card, Container, LoginContainer } from "./styles";

interface DataProps {
  name: string;
  email: string;
  password: string;
}

export function SignUp() {
  const [data, setData] = useState<DataProps>({} as DataProps)
  const [load, setLoad] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoad(true)
    toast.success('Cadastro realizado com sucesso! Você está sendo direcionado para a página de Login')
    api.post('users', data).then(response => {console.log(response.data)
    navigate('/signin')})
    .catch(error => toast.error('Ops, algo deu errado'))
  }, [data, navigate])

  if(load) {
    return <Loader />
  }

  return(
    <Container>
      <Card>
      <h1>Faça a sua inscrição</h1>
     <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Informe seu nome"
        onChange={(e) => setData({...data, name: e.target.value})} 
      />
      <input 
        type="email" 
        placeholder="Informe seu email"
        onChange={(e) => setData({...data, email: e.target.value})}  
      />    
      <input 
      type="password" 
      placeholder="Criar senha"
      onChange={(e) => setData({...data, password: e.target.value})}  
    />

      <button type="submit">Enviar</button>
     </form>
     
     <LoginContainer>
     <p>Já tem cadastro?</p>
     <NavLink to="/signin">Clique aqui para entrar</NavLink>
     </LoginContainer>

      </Card>
    </Container>
  )
}