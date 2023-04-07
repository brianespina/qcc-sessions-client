import FormControl from "./FormControl";
import styled from "styled-components";

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
    text-decoration: underline;
  }
`;

const Textarea = styled.textarea`
  ${inputReset}
`;

export default function EditableTextarea(props) {
  return (
    <FormControl>
      <Textarea {...props} readOnly={true} />
    </FormControl>
  );
}
