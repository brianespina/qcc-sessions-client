import moment from "moment";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getSessionLesson } from '../firebase/sessions';

const SessionDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function SessionDetails({ data }) {


  let [lesson, setLesson] = useState({});
  let [isLoading, setIsLoading] = useState(true)


  async function fetchSessions(id) {
    setIsLoading(true);
    try {
      let data = await getSessionLesson(id);
      setLesson(data)
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchSessions(data.lesson);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // handle error checking

  return (
    <SessionDetailsWrap>
      <div>
        <h2>
          {data.title}
        </h2>
      </div>
      <div>
        {moment(data.date).format("MMMM D, yyyy")}
        <br />
        {moment(data.date).format("h:mm a")}
      </div>
      <div>{data.status}</div>
      <div>{data.type}</div>
      <div>{data.notes}</div>
      <div>Lesson: </div>
      <div>{lesson?.title}</div>
      <div>{lesson?.content?.map(row => <p>{row}</p>)}</div>
    </SessionDetailsWrap>
  );

}
