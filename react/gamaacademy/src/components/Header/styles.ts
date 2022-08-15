import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 2rem auto;

  img {
    max-width: 20rem;
  }

  .nav-links {
    
    a {
     color: #000;
     text-decoration: none;
     margin-left: 1rem;
     font-size: 1.5rem;

     transition: color 0.2s;

     &:hover{
      color: #676666;
     }
  
    }
  }
`