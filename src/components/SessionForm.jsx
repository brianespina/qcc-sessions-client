import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import EditableContentInput from "./EditableContentInput";

const initialSessionFormData = {
  title: "",
  date: Date.now(),
  attendees: [1, 2, 3, 4, 5],
  status: "active",
  type: "training",
  handler: 2,
  notes: "",
};

const SessionForm = ({
  data = initialSessionFormData,
  handleSubmit,
  mode = "add",
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

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e, sessionData);
        }}
      >
        <EditableContentInput
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
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
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
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SessionForm;
