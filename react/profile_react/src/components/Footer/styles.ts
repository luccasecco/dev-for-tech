import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme["background-700"]};
  color: ${props => props.theme["gray-100"]};
  font-size: .875rem;
  margin: auto;
  bottom: 0;
  position: fixed;
`