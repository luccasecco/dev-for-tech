import { ArchiveBox, GlobeStand, TrashSimple } from "phosphor-react";
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

  return (
    <Container>
      <header>
      <GlobeStand size={40}/>
      <div className="button-wrapper">
      <button><ArchiveBox size={25} color="green"/></button>
      <button type="button">
        <TrashSimple size={25}/>
      </button>
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