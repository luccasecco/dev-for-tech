import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #876654;

  h1 {
    background: transparent;
    font-size: 5rem;
  }

  a {
    width: 15rem;
    border-radius: 8px;
    padding: 1rem;
    background-color: #446573;
    text-decoration: none;
    font-size: 1rem;
    text-align: center;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9)
    }
  }
`