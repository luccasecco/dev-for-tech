import { ArchiveBox, GlobeStand, TrashSimple } from "phosphor-react";
import { api } from "../../lib/axios";
import { Container } from "./styles";

interface CardProps {
  data: {
    cep: string;
    address: string;
    district: string;
    city: string;
    state: string;
  }
}

export function Card({data}: CardProps) {

  function handleSaveCard() {
    api.post('/cards', data)
  }

  function handleDeleteCard() { 
    api.delete(`/cards/1`)
  }

  return (
    <Container>
      <header>
      <GlobeStand size={40}/>
      <div className="button-wrapper">
      <button onClick={handleSaveCard}><ArchiveBox size={25} color="green"/></button>
      <button onClick={handleDeleteCard}><TrashSimple size={25}/></button>
      </div>
      </header>
       <div className="content">
          <strong>CEP:</strong> <p>{data.cep}</p>
          <strong>RUA:</strong><p>{data.address}</p>
          <strong>Bairro:</strong><p>{data.district}</p>
          <strong>Cidade/UF:</strong><p>{data.city}/{data.state}</p> 
      </div> 
      </Container>
  )
}