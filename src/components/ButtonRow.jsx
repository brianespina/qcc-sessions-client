import styled from "styled-components";

const ButtonRowContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default function ButtonRow({ children }) {
  return <ButtonRowContainer>{children}</ButtonRowContainer>;
}
