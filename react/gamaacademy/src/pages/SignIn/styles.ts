import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  gap: 2rem;
  
`

export const Card = styled.div`
  background-color: #8c52e5;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 35rem;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 1px 1px 0 2px #323232;

  h1 {
    color: #262626;
    font-size: 2.5rem;
    margin-top: 1rem;
  }

  form {
    display: grid;
    gap: 1rem;
    margin: 4rem auto;
    
    input {
      box-shadow: 1px 1px 0 2px #323232;
      background: #f9f9f9;
      width: 25rem;
      padding: 1.5rem;
      border: 0;
      border-radius: 8px;
      color: black;
      font-size: 1.5rem;

      &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px #10b981
      }
    }

    button { 
      box-shadow: 1px 1px 0 2px #323232;
      border-radius: 8px;
      padding: 1rem;
      width: 15rem;
      margin: 1rem auto;
      border: 0;
      background: #16a34a;
      transition: background-color 0.2s;
      font-size: 1.25rem;
      
      font-weight: bold;

      cursor: pointer;

      &:hover {
        background-color: #166534;
      }
    }
  }

`

export const RegistrationContainer = styled.div`
  text-align: center;

  p {
    margin-bottom: .5rem;
  }

  a{ 
    text-decoration: none;
    color: #ffff;
    font-size: 1.2rem;
  }
`