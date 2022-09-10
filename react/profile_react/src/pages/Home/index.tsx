import useSWR from "swr";
import { api } from "../../services/api";

import { Container } from "./styles";

interface User {
  login: string
  name: string
  location: string
  avatar_url: string
  followers: number
  following: number
  html_url: string
  bio: string
}

async function fetchUser(): Promise<User> {
  const { data } = await api.get<User>('/users/luccasecco')

  return {
    login: data.login,
    name: data.name,
    location: data.location,
    avatar_url: data.avatar_url,
    followers: data.followers,
    following: data.following,
    html_url: data.html_url,
    bio: data.bio,
  }
}

export function Home() {
  const { data: user } = useSWR('user', fetchUser)

  return (
    <Container>
      <img src={user?.avatar_url} alt="" />
      <h1>{user?.name}</h1>
      <p>{user?.bio}</p>
      <div className="followers">
        <p>{user?.location}</p>
        <span>Seguidores: {user?.followers}</span>
        <span>Seguindo: {user?.following}</span>
      </div>

      <div className="buttons">
        <button>Projetos</button>
        <button>Redes Sociais</button>
        <button>Contato</button>
      </div>

    </Container>
  )
}