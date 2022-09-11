import styled from 'styled-components'

export const Container = styled.div`
  max-width: 25rem;
  margin: 3rem auto;

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

    .back-to-home{
      a {
        display: flex;
        flex-direction: column;
        margin-right: 0;
        color: ${props => props.theme['gray-100']}
      }
    }
  }
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .875rem;

  input, textarea {
    width: 25rem;
    border-radius: 8px;
    border: 0;
    padding: .875rem;
  }

  textarea {
    resize: none;
    height: 10rem;
  }

  button {
    width: 25rem;
    padding: 1rem;
    border-radius: 8px;
    border: 0;
    font-weight: bold;
    color: ${props => props.theme['background-900']};
    background: ${props => props.theme['yellow-500']};

    cursor: pointer;

    &:hover {
      background: ${props => props.theme['yellow-100']};
      transition: all 0.2s;
    }
  }
`