import DatePicker from "react-datepicker";
import EditFieldButton from "./EditFieldButton";
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
    transform: translateX(-30px);
    text-decoration: underline;
  }
`;

const DateStyle = styled.div`
  & input {
    ${inputReset}
  }
`;

export default function EditableContentDateTime(props) {
  return (
    <FormControl>
      <EditFieldButton />
      <DateStyle>
        <DatePicker
          {...props}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          readOnly={true}
        />
      </DateStyle>
    </FormControl>
  );
}
