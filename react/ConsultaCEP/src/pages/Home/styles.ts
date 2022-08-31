import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
`

export const Content = styled.div`
  max-width: 55rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10rem auto;
 

  .card-wrapper {
    display: flex;
    width: 100%;
    gap: .5rem;
  }
`



export const SearchBox = styled.div`
  
    margin: -5rem;
    width: 100%;
    display: flex;
    gap: .5rem;
    padding: 0 2%;
    align-items: center;
    justify-content: center;
    
    label {
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
