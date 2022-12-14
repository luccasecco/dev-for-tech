import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 4rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 4rem;
  background-color: ${props => props.theme["gray-900"]};

  a{
    text-decoration: none;
    color: ${props => props.theme["gray-100"]};
  }

  strong {
    color: ${props => props.theme["green-300"]}
  }
`