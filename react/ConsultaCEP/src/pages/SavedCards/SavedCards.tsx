import { TrashSimple } from "phosphor-react";
import { useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { Container } from "./styles";

interface CepCardProps {
  id: string;
  cep: string;
  address: string;
  district: string;
  city: string;
  state: string;
}

export function SavedCards() {
  const [cepCard, setCepCard] = useState<CepCardProps[]>([])

  useEffect(() =>{
    api.get('/cards').then(response => setCepCard(response.data));
  },[])

  function handleDeleteCard() {
    console.log('deletar')
   
  }


  return (
    <Container>
   
    {cepCard.map(item => (
      <div key={item.id}>
        <div className="card">
          <button onClick={handleDeleteCard}><TrashSimple size={25} /></button>
          <div className="card-content">
            <strong>CEP:</strong><p> {item.cep}</p>
            <strong>Rua:</strong><p> {item.address}</p>
            <strong>Bairro:</strong><p> {item.district}</p>
            <strong>Cidade/UF:</strong><p> {item.city} / {item.state}</p>
          </div>
        </div>

      </div>
    ))}
    </Container>
  )
}

/*

*/