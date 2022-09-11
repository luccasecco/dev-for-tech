import { ArrowArcLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../services/api";

import { Container } from "./styles";

type Repository = {
  full_name: string;
  description: string;
  html_url: string;
}

export function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    api.get('users/luccasecco/repos')
      .then(response => setRepositories(response.data))
  }, []);

  return (
    <Container>
      <div>
        <h1>REPOSITÓRIOS - Github</h1>
        <div className="back-to-home">
          <NavLink to="/"><ArrowArcLeft size={25} />Início</NavLink>
        </div>
      </div>
      <ul>
        {repositories.map(repo => {
          return (
            <li key={repo.full_name}>
              <a target="_blank" href={repo.html_url}>{repo.full_name}</a>
              <p>{repo.description}</p>
            </li>
          )
        })}
      </ul>

    </Container>
  )
}