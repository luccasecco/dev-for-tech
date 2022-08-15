import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";
import { api } from "../../services/api";
import { Container } from "./styles";

interface ICollaborator {
  id: number;
  name: string;
  email: string;
  // avatar: {
  //   path: string;
  // }
}


export function Dashboard() {
  const [data, setData] = useState<ICollaborator[]>([])
  const [isLoad, setIsLoad] = useState(false)
  const token = localStorage.getItem('@gamaServiceToken')

  useEffect(() => {
    api.get('users'
      // headers: {
      //   Authorization: 'Barer' + token
      // }
    ).then( response => {
      setIsLoad(true)
      setData(response.data)
    }).finally(() => setIsLoad(false))
  }, [token, isLoad])

  if(isLoad) {
    return <Loader />
  }

  return (
    <Container>
      <h1>Dashboard</h1>
      <> 
        {data?.map( element => (
          <div className="card" key={element.id}>
            <div className="wrapper">
            <img src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-9.jpg" alt="" />
              <div className="description">
                <p>{element.name}</p>
                <p>{element.email}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    </Container>
  )
}