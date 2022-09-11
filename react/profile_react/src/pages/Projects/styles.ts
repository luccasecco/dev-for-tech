import styled from 'styled-components'

export const Container = styled.div`
  margin: 2rem auto;
  max-width: 75rem;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    
    h1 {
      color: ${props => props.theme['yellow-900']};
      margin-bottom: 2rem;
      text-align: center;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 0;
      color: ${props => props.theme['gray-100']}
    }
  }


  ul {
  
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  li {
    list-style: none;
    padding: 1rem;
    border-radius: 8px;
    background-color: ${props => props.theme['gray-300']};
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.5);
    color: ${props => props.theme['gray-100']};
    
    a {
      color: ${props => props.theme['purple-900']};
      font-weight: bold;
    }

    p {
      color: ${props => props.theme['gray-400']}
    }

  }
}
`
