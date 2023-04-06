import { useState, useRef } from "react";
import styled from "styled-components";
import { RiEdit2Line } from "react-icons/ri";

const inputReset = `
  border: none;
  transition: all 0.2s ease;
  &[readonly]:focus{
    border: none;
    outline: none;
  }
  &:not([readonly]){
    border: none;
    outline: none;
    transform: translateX(-30px);
  }
`;

const FormControl = styled.div`
  display: flex;
`;

const CustomInput = styled.input`
  min-width: 130px;
  width: ${(props) => props.value.length}ch;
  ${inputReset};
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  transition: all 0.2s ease;
  &.hide {
    transform: translateX(-10px);
    opacity: 0;
  }
`;

export default function EditableContentInput(props) {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const ref = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    ref.current.focus();
    setIsReadOnly(false);
  };

  const exitAndSave = () => {
    setIsReadOnly(true);
  };

  const handleExit = (event) => {
    if (event.type === "blur") {
      exitAndSave();
    }
    if (event.key === "Enter") {
      event.preventDefault();
      exitAndSave();
    }
  };

  return (
    <>
      <FormControl>
        <EditButton onClick={handleClick} className={!isReadOnly && "hide"}>
          <RiEdit2Line />
        </EditButton>
        <CustomInput
          {...props}
          readOnly={isReadOnly}
          onBlur={handleExit}
          onKeyDown={handleExit}
          ref={ref}
        />
      </FormControl>
    </>
  );
}
