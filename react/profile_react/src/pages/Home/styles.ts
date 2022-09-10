import styled from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 2rem auto 1rem;
  padding: 0 2%;

  img {
    border-radius: 50%;
    height: 10rem;

    border: 2px solid ${props => props.theme["yellow-500"]};
  }

  h1 {
    color: ${props => props.theme["purple-500"]}
  }

  p, span {
    color: ${props => props.theme["gray-100"]}
  }

  span {
    font-size: .875rem;
    margin-bottom: 1rem;
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
      width: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      padding: .8rem;
      border: 0;
      background-color: ${props => props.theme["yellow-500"]};
      color: ${props => props.theme["background-900"]};
      font-weight: bold;
      cursor: pointer;
      margin: 2rem auto;

      &:hover {
        background-color: ${props => props.theme["yellow-100"]};
        transition: background-color 0.2s
      }

      svg {
        margin-right: .5rem;
      }

    }
  }
  
  .media-container {
    display: flex;
    align-items: center;
    justify-Content: center;
    gap: 3rem;
    margin-top: 2rem;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      line-height: 0;
      gap: 1rem;
      transition: all 0.2s;

      &:hover{
        transform: translateY(-1rem);
      }
    }

    svg {
      color: ${props => props.theme['yellow-900']};
      text-align: left;
    }

  }

`