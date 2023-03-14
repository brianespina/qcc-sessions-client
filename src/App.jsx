import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Session from "./components/Session";
import SessionForm from "./components/SessionForm";
import Container from "./components/Container";
import { HiPlus } from "react-icons/hi";
import UpcomingSession from "./components/UpcomingSession";
import Modal from "react-modal";

const AddButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [sessions, setSessions] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

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
    const response = await axios.put(
      `http://localhost:3000/api/v1/sessions/${sessionData.id}`,
      sessionData
    );
    fetchSessions();
  };

  const addSession = async (e, sessionData) => {
    e.preventDefault();
    let response = await axios.post(
      "http://localhost:3000/api/v1/sessions",
      sessionData
    );
    setIsAddMode(false);
    fetchSessions();
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <Container>
      <div>Dashboard</div>
      <Modal
        appElement={document.getElementById("root")}
        isOpen={isAddMode}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={() => setIsAddMode(false)}
      >
        <SessionForm handleSubmit={addSession} />
        <button onClick={() => setIsAddMode(false)}>Close</button>
      </Modal>
    </Container>
  );
}

export default App;
