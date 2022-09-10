import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme["background-700"]}
`