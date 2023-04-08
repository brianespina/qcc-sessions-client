import moment from "moment";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const SessionDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function SessionDetails({ data }) {
  const [attendees, setAttendees] = useState([]);

  const fetchAttendees = async () => {
    const response = await axios
      .get(`http://localhost:3000/api/v1/attendees/${data.id}`)
      .catch((error) => {
        console.log(error.toJSON());
      });
    setAttendees(response?.data);
  };
  useEffect(() => {
    fetchAttendees();
  });
  return (
    <SessionDetailsWrap>
      <div>
        <h2>
          {data.title} id:{data.id}
        </h2>
      </div>
      <div>
        {moment(data.date).format("MMMM D, yyyy")}
        <br />
        {moment(data.date).format("h:mm a")}
      </div>
      <div>
        {attendees.map((member, index) => (
          <span key={index}>{member.first_name} </span>
        ))}
      </div>
      <div>{data.status}</div>
      <div>{data.type}</div>
      <div>{data.notes}</div>
    </SessionDetailsWrap>
  );
}
