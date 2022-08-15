import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  width: 100%;
  background-color: #a7f3d0;

  .card {
    width: 30rem;
    
    box-shadow: 1px 1px 3px #ccc;
    background: #ffff;
    border-radius: 8px;
    padding: 1rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .wrapper {
      display: flex;
      align-items: center;

      img {
        width: 8rem;
      }
    }

    .description {
      margin-left:2rem;

      p{ 
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }

    }
  }
`