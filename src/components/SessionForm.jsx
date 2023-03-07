import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const initialSessionFormData = {
  title: "",
  date: Date.now(),
  attendees: [1, 2, 3, 4, 5],
  status: "",
  type: "",
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
      {/* <Formik initialValues={initialSessionFormData} onSubmit={}></Formik> */}
      <form
        onSubmit={(e) => {
          handleSubmit(e, sessionData);
          console.log(sessionData.date);
        }}
      >
        <DatePicker
          selected={new Date(sessionData.date)}
          onChange={(date) =>
            setSessionData({
              ...sessionData,
              date: moment(date).format("YYYY-MM-DD HH:mm:ss"),
            })
          }
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <input
          type="text"
          name="title"
          id="title"
          value={sessionData.title}
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
          {mode === "edit" ? "Edit Session" : "Create Session"}
        </button>
      </form>
    </>
  );
};

export default SessionForm;
