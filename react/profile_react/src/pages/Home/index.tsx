import { ComputerTower, Database, GithubLogo, LinkedinLogo, TelegramLogo } from "phosphor-react";
import { NavLink } from "react-router-dom";
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
      <span>{user?.location}</span>

      <p>{user?.bio}</p>

      <div className="buttons">
        <NavLink to="/projetos"><button><Database size={18} />Projetos</button></NavLink>
        <NavLink to="/midias"><button><ComputerTower size={18} />Tecnologias</button></NavLink>
        <NavLink to="/contato"><button><TelegramLogo size={18} />Contato</button></NavLink>
      </div>

      <div className="media-container">
        <a target="_blank" href="https://www.github.com/luccasecco">
          <GithubLogo size={50} />
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/luccaseccodev/">
          <LinkedinLogo size={50} />
        </a>
      </div>

    </Container>
  )
}