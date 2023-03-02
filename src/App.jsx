import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Session from "./components/Session";
import SessionForm from "./components/SessionForm";

const Sessions = styled.div`
  display: flex;
  gap: 1em;
  margin-block: 20px;
  justify-content: space-between;
  overflow: hidden;
  padding: 20px;
  flex-wrap: wrap;
`;

const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  margin-inline: auto;
  padding-inline: 15px;
`;

function App() {
  const [sessions, setSessions] = useState([]);
  const [mode, setMode] = useState("");
  const [toEdit, setToEdit] = useState({});

  const fetchSessions = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/sessions");
    setSessions(response.data);
  };

  const deleteSession = async (id) => {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/sessions/${id}`
    );
    fetchSessions();
  };

  const editSession = async (e, sessionData) => {
    e.preventDefault();
    console.log(sessionData);
    // const response = await axios.put(
    //   `http://localhost:3000/api/v1/sessions/${id}`,
    //   data
    // );
  };

  const addSession = async (e, sessionData) => {
    e.preventDefault();
    let response = await axios.post(
      "http://localhost:3000/api/v1/sessions",
      sessionData
    );
    setMode("");
    fetchSessions();
  };

  const openEditForm = (data) => {
    setMode("edit");
    console.log(data);
    setToEdit(data);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <Container>
      <h1 className="text-3xl font-bold">Sessions</h1>
      <Sessions>
        {sessions &&
          sessions.map((session, i) => (
            <Session
              key={i}
              {...session}
              deleteSession={deleteSession}
              openEditForm={openEditForm}
            />
          ))}
      </Sessions>
      {mode === "add" && <SessionForm handleSubmit={addSession} />}
      {mode === "edit" && (
        <SessionForm handleSubmit={editSession} data={toEdit} />
      )}

      <button
        onClick={() => {
          setMode("add");
        }}
      >
        Add Session +
      </button>
    </Container>
  );
}

export default App;
