import styled from "styled-components";

export const Container = styled.div`
  width: 22rem;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: 1rem;
  color: ${props => props.theme["green-700"]};
  font-size: 1.25rem;
  font-weight: bold;
  background-color: ${props => props.theme["gray-300"]};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    svg {
      color: ${props => props.theme["green-500"]};  
    }

    .button-wrapper{
      display: flex;
      gap: .2rem;

      button {
        border: 0;
        cursor: pointer;
        background-color: transparent;
    
        svg {
          color: ${props => props.theme["red-500"]};
        }

        &:hover {
          filter: brightness(1.5);
          transition: filter 0.2s;
        }
      }
    }
  }

  .content {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    strong {
      gap: .2rem;
      font-size: 1rem;
    }

    p {
      border: 0;
      border-radius: 8px;
      padding: 0.5rem;
      background-color: ${props => props.theme["white"]};

      color: ${props => props.theme["gray-800"]};
      font-weight: bold;
    }

   
  }
`
