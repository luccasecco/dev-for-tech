import styled from 'styled-components'

export const Container = styled.div`
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 3rem auto;

  h1 {
    color: ${props => props.theme['yellow-900']}
  }
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
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