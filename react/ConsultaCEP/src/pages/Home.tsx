import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Map } from "../components/Map";
import { Container, SearchBox } from "./styles";

export function Home() {
  const {register} = useForm()
  const [cepValue, setCepValue] = useState('')


  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '')
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
    .then(response => response.json())
    .then(data => setCepValue(data))
  }
 

  return(
    <>
      <Header />
      <SearchBox>
        <label htmlFor="cep">
            <input 
              type="text"
              list="cep-sugestions"
              id="cep"
              {...register('cep', { valueAsNumber: false})}  
              onBlur={checkCep}
            />
            <button>Pesquisar</button>
          </label>
      </SearchBox>

      <Container>
          <div className="card-wrapper">
             <Card data={cepValue}/>
          </div>

      

          <Map />
      </Container>
    </>
  )
}