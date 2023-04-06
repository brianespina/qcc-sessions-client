import styled from "styled-components";
const FormControlWrap = styled.div`
  display: flex;
`;
export default function FormControl({ children }) {
  return <FormControlWrap>{children}</FormControlWrap>;
}
