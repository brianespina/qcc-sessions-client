import { useState, useEffect } from "react";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import styled from "styled-components";

const initialSessionFormData = {
  title: "",
  date: Date.now(),
  status: "active",
  type: "training",
  handler: null,
  notes: "",
};

const FormWrap = styled.div`
  & form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & input,
  & select {
    padding-block: 5px;
    padding-inline: 10px;
    height: 40px;
    width: 100%;
  }
  & textarea {
    padding: 10px;
  }
`;


const SessionForm = ({
  data = initialSessionFormData,
  mode = "add",
  refetch,
}) => {
  const [sessionData, setSessionData] = useState(data);

  useEffect(() => {
    setSessionData({
      ...data,
      date: moment(data.date).format(),
    });
  }, [data]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSessionData({
      ...sessionData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      ...sessionData,
      handler: 1,
    };

    await updateSessionFN({
      variables: {
        type: "SessionInput",
        session: formData,
      },
    });
    refetch();
  };

  return (
    <FormWrap>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={sessionData.title}
          onChange={handleChange}
        />

        <DatePicker
          selected={new Date(sessionData.date)}
          onChange={(date) => {
            setSessionData({
              ...sessionData,
              date: moment(date).format(),
            });
          }}
          showTimeSelect
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm a"
        />

        <select
          name="status"
          id="status"
          value={sessionData.status}
          onChange={handleChange}
        >
          <option value="active">Active</option>
          <option value="archive">Archive</option>
        </select>
        <select
          name="type"
          id="type"
          value={sessionData.type}
          onChange={handleChange}
        >
          <option value="Meeting">Meeting</option>
          <option value="Training">Training</option>
          <option value="General Assembly">General Assembly</option>
        </select>

        <textarea
          name="notes"
          id="notes"
          cols="30"
          rows="10"
          value={sessionData.notes}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </FormWrap>
  );
};

export default SessionForm;
