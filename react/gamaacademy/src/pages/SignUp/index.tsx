import { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { api } from "../../services/api";
import { Card, Container } from "./styles";

interface DataProps {
  name: string;
  email: string;
  password: string;
}

export function SignUp() {
  const [data, setData] = useState<DataProps>({} as DataProps)
  const navigate = useNavigate()
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(data)
    toast.success('Cadastro realizado com sucesso!')
    api.post('users', data).then(response => {console.log(response.data)
    navigate('/signin')})
    .catch(error => toast.error('Ops, algo deu errado'))
  }, [data, navigate])

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

      </Card>
    </Container>
  )
}