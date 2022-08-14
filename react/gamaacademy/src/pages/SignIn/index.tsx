import { FormEvent, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../../components/Loader";
import { api } from "../../services/api";
import { Card, Container, RegistrationContainer } from "./styles";

interface DataProps {
  email: string;
  password: string;
}

export function SignIn() {
  const [data, setData] = useState<DataProps>({} as DataProps)
  const [load, setLoad] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoad(true)
    toast.success('Cadastro realizado com sucesso!')
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
      <h1>Login</h1>
     <form onSubmit={handleSubmit}>
      
      <input 
        type="email" 
        placeholder="E-mail"
        onChange={(e) => setData({...data, email: e.target.value})}  
      />    
      <input 
      type="password" 
      placeholder="Senha"
      onChange={(e) => setData({...data, password: e.target.value})}  
    />

      <button type="submit">Entrar</button>
     </form>

     <RegistrationContainer>
     <p>Ainda não tem cadastro?</p>
     <NavLink to="/signup">Clique aqui para se cadastrar</NavLink>

     </RegistrationContainer>

      </Card>
    </Container>
  )
}