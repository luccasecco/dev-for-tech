import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

type Repository = {
  full_name: string;
  description: string;
}

export function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    api.get('users/luccasecco/repos')
      .then(response => setRepositories(response.data))
  }, []);

  return (
    <Container>
      <ul>
        {repositories.map(repo => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })}
      </ul>

    </Container>
  )
}