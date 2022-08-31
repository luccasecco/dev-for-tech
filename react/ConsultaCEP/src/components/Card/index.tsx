import { ArchiveBox, GlobeStand, TrashSimple } from "phosphor-react";
import { api } from "../../lib/axios";
import { Container } from "./styles";
import { toast } from 'react-toastify' 

interface CardProps {
  data: {
    cep: string;
    address: string;
    district: string;
    city: string;
    state: string;
  }
  onClearPage: () => void
}

export function Card({data, onClearPage}: CardProps) {

  function handleSaveCard() {
    api.post('/cards', data)
    toast.success('Card salvo com sucesso!')
  }

  function handleDeleteCard() { 
    onClearPage()
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