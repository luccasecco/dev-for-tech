import styled from 'styled-components'

export const Container = styled.div`
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 5rem auto;

  .back-to-home {
    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${props => props.theme['gray-100']}
    }
  }
`

export const Content = styled.div`
  max-width: 75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 5rem auto;

  img {
    width: 5rem;
  }
`