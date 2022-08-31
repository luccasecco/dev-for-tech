import styled from "styled-components";

export const Container = styled.div`
  max-width: 75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .card {
    width: 20rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;

    background-color: ${props => props.theme["gray-300"]};
    box-shadow: 2px 2px 2px 1px ${props => props.theme["gray-900"]};

    button { 
      border: 0;
      max-width: 2rem;
      margin-left: auto;
      line-height: 0;
      font-weight: bold;
      color: ${props => props.theme["red-500"]};
      background-color: transparent;

      cursor: pointer;

      &:hover {
        color: ${props => props.theme["red-300"]};
        transition: background-color 0.2s
      }
      
    }

    .card-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      strong {
        color: ${props => props.theme["green-700"]};
      }

      p {
        background-color: ${props => props.theme["white"]};
        color: ${props => props.theme["green-700"]};  
        border-radius: 8px;
        padding: 0.5rem;

        &:last-child{
          margin-bottom: 1rem;
        }
      }

      
      
    }

    
  }
`