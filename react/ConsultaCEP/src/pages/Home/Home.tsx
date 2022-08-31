import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../../components/Card";
import { EmptyPage } from "../../components/EmptyPage";
import { Header } from "../../components/Header";
import { Map } from "../../components/Map";
import { Container, Content, SearchBox } from "./styles";

export function Home() {
  const {register} = useForm()
  const [cepValue, setCepValue] = useState('')


  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '')
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
    .then(response => response.json())
    .then(data => setCepValue(data))
    .catch(error => console.error(error))
  }
 

  return(
    <Container>
  
        <SearchBox>
          <label htmlFor="cep">
              <input 
                type="text"
                list="cep-sugestions"
                id="cep"
                placeholder="Digite um CEP"
                {...register('cep')}  
                onBlur={checkCep}
              />
              <button><MagnifyingGlass size={20}/></button>
            </label>
        </SearchBox>


      {!cepValue ? <EmptyPage /> : (
        
        <Content>
            <div className="card-wrapper">
              <Card data={cepValue}/>
            </div>

            <Map data={cepValue}/>
        </Content>
        
      )}
    </Container>
  )
}