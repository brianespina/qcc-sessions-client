import { useState, useEffect } from "react";

const initialSessionFormData = {
  title: "",
  date: "",
  attendees: [1, 2, 3, 4, 5],
  status: "",
  type: "",
  handler: 2,
  notes: "",
};

const SessionForm = ({ data = initialSessionFormData, handleSubmit }) => {
  const [sessionData, setSessionData] = useState(data);

  useEffect(() => {
    setSessionData(data);
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
        <input
          type="text"
          name="title"
          id="title"
          value={sessionData.title}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="date"
          id="date"
          value={sessionData.date}
          onChange={handleChange}
        />
        <select
          name="status"
          id="status"
          value={sessionData.status}
          onChange={handleChange}
        >
          <option value="Canceled">Canceled</option>
          <option value="Active">Active</option>
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

        <button type="submit">Create Section</button>
      </form>
    </>
  );
};

export default SessionForm;
