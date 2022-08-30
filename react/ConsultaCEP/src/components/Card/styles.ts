import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  height: 25rem;
  border-radius: 8px;
  padding: 1rem;
  color: ${props => props.theme["green-700"]};
  font-size: 1.25rem;
  font-weight: bold;
  background-color: ${props => props.theme["gray-300"]}
`