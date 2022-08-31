import styled from "styled-components";

export const Container = styled.div`
  max-width: 55rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
 

  .card-wrapper {
    display: flex;
    width: 100%;
    gap: .5rem;
  }
`

export const SearchBox = styled.div`
  
    margin: -5rem auto 2rem;
    width: 20rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    
    label {
      width: 60rem;
      display: flex;
      gap: 0.5rem;

      input {
        border: 0;
        padding: 0.7rem;
        border-radius: 8px;
      }
      
      button {
        border: 0;
        padding: .8rem;
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
