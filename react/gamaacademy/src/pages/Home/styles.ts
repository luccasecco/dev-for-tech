import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  /* background: #8c52e5; */

  h1, p {
    background: transparent;
    font-size: 5rem;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  a, button {
    color: #ffff;
    width: 15rem;
    border-radius: 8px;
    padding: 1rem;
    background-color: #16a34a;
    text-decoration: none;
    font-size: 1rem;
    text-align: center;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9)
    }
  }
`