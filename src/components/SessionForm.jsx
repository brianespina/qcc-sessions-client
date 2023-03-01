import { useState } from "react";
import axios from "axios";

const initialSessionFormData = {
  title: "",
  date: "",
  attendees: [1, 2, 3, 4, 5],
  status: "",
  type: "",
  handler: 2,
  notes: "",
};

const SessionForm = ({ fetchSessions, isEdit }) => {
  const [sessionData, setSessionData] = useState(initialSessionFormData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setSessionData({
      ...sessionData,
      [name]: value,
    });
  };

  if (isEdit) {
    console.log("edit mode");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post(
      "http://localhost:3000/api/v1/sessions",
      sessionData
    );
    setSessionData(initialSessionFormData);
    fetchSessions();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">
          {isEdit ? "Edit Session" : "Create Session"}
        </button>
      </form>
    </>
  );
};

export default SessionForm;
