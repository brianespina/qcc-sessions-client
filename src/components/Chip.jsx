import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

const ChipElement = styled.button`
  border-radius: 20px;
  font-size: 12px;
  border: none;
  padding-inline: 12px;
  padding-block: 4px;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export default function Chip(props) {
  const { children } = props;
  return (
    <ChipElement {...props}>
      {children} <IoIosClose></IoIosClose>
    </ChipElement>
  );
}
