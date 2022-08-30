import styled from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  form {
    margin-top: -5rem;
    width: 20rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    
    input {
      border: 0;
      padding: 0.7rem;
      border-radius: 8px;
    }
    
    button {
      border: 0;
      padding: .5rem;
      border-radius: 8px;
      cursor: pointer;
      color: ${props => props.theme["white"]};
      background: ${props => props.theme["green-500"]};
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: ${props => props.theme["green-700"]}
      }
    }
  }

  .card-wrapper {
    display: flex;
    width: 100%;
    gap: .5rem;
  }
`
