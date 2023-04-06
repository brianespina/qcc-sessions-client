import { RiEdit2Line } from "react-icons/ri";
import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  transition: all 0.2s ease;
  &.hide {
    transform: translateX(-10px);
    opacity: 0;
  }
`;
export default function EditFieldButton(props) {
  return (
    <>
      <Button {...props}>
        <RiEdit2Line />
      </Button>
    </>
  );
}
