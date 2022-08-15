import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5rem;
  }

  a {
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

export const FormContainer = styled.form`
  margin-top: 1rem; 
  display: grid;
  
  input {
    width: 12rem;
    padding: 1rem;
    margin-bottom: .5rem;
    border-radius: 8px;
    color: black
  }

  button {
    width: 10rem;
    border: 0;
    border-radius: 8px;
    padding: .5rem;
    background-color: #16a34a;
    text-decoration: none;
    font-size: 1rem;
    text-align: center;

    align-items: center;
    justify-content: center;

    margin: 1rem auto;
    cursor: pointer;
  }
`