import { useState } from "react";
import styled from "styled-components";
import { RiEdit2Line } from "react-icons/ri";

const inputReset = `
  border: none;
  &[readonly]:focus{
    border: none;
    outline: none;
  }
  &:not([readonly]){
    border: none;
    border-bottom: solid thin #000;
    outline: none;
  }
`;

const FormControl = styled.div`
  display: flex;
`;

const CustomInput = styled.input`
  font-size: 20px;
  font-weight: 900;
  width: ${(props) => props.value.length}ch;
  ${inputReset};
`;

export const EditButton = styled.button`
  background: none;
  border: none;
`;

export default function EditableContentInput(props) {
  const [isReadOnly, setIsReadOnly] = useState(true);

  const handleChange = (event) => {
    event.preventDefault();
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
        <CustomInput
          {...props}
          readOnly={isReadOnly}
          onBlur={handleExit}
          onKeyDown={handleExit}
        />
        <EditButton onClick={handleChange}>
          <RiEdit2Line />
        </EditButton>
      </FormControl>
    </>
  );
}
