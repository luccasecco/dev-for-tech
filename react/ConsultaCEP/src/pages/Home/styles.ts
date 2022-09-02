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
  margin: 7rem auto 2rem;


  .card-wrapper {
    display: flex;
    width: 100%;
    gap: .5rem;
  }


`

export const ArchivedCards = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    margin: 0 auto 5rem;
    color: ${props => props.theme["gray-100"]};

    svg {
      color: ${props => props.theme["green-500"]}
    }

    a {
      display: flex;
      align-items: center;
      gap: .5rem;
      text-decoration: none;
      color: ${props => props.theme["gray-100"]};
      
      &:hover {
        svg {
          color: ${props => props.theme["green-300"]};
          transition: color 0.2s
        }
      }
    }
  
`


export const SearchBox = styled.div`
    margin-top: -5.5rem;
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
