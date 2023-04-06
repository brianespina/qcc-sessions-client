import { useState, useRef } from "react";
import styled from "styled-components";
import EditFieldButton from "./EditFieldButton";
import FormControl from "./FormControl";

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
    text-decoration: underline;
  }
`;

const CustomInput = styled.input`
  font-weight: 600;
  font-size: 20px;
  min-width: 130px;
  width: ${(props) => props.value.length}ch;
  ${inputReset};
`;

export default function EditableContentTitle(props) {
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
        <EditFieldButton
          onClick={handleClick}
          className={!isReadOnly && "hide"}
        />
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
