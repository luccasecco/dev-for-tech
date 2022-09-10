import styled from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  margin: 2rem auto;

  img {
    border-radius: 50%;
    height: 10rem;

    border: 2px solid ${props => props.theme["yellow-500"]};
  }

  h1 {
    color: ${props => props.theme["purple-500"]}
  }

  p {
    color: ${props => props.theme["gray-100"]}
  }

  .followers {
    display: flex;
    gap: 2rem;  
    
    span {
      color: ${props => props.theme["gray-300"]}
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
        text-decoration: none;
      }

    button {
      display: flex;
      align-items: center;
      border-radius: 8px;
      padding: 1rem;
      border: 0;
      background-color: ${props => props.theme["yellow-500"]};
      color: ${props => props.theme["background-900"]};
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.theme["yellow-100"]};
        transition: background-color 0.2s
      }

      svg {
        margin-right: .5rem;
      }

    }
  }

`