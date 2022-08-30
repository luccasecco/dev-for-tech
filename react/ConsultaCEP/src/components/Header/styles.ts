import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 4rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4rem;
  background-color: ${props => props.theme["gray-900"]};

  strong {
    color: ${props => props.theme["green-300"]}
  }

  form {
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
`