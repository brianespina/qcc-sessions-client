import styled from "styled-components";

const ContainerElement = styled.section`
  max-width: 1024px;
  width: 100%;
  margin-inline: auto;
  padding-inline: 15px;
`;

export default function Container({ children }) {
  return <ContainerElement>{children}</ContainerElement>;
}
