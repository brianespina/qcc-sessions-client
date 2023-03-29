import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Session from "./Session";
import SessionForm from "./SessionForm";
import Container from "./Container";
import { HiPlus } from "react-icons/hi";
import BasicButton from "./BasicButton";
import Modal from "react-modal";
import ButtonRow from "./ButtonRow";
import Chip from "./Chip";

const Sessions = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  margin-top: 20px;
`;

const Filters = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 10px;
  div {
    display: flex;
    gap: 8px;
  }
`;

const modalStyles = {
  content: {
    top: "0",
    bottom: "0",
    right: "0",
    left: "auto",
  },
  overlay: {
    background: "transparent",
  },
};
export default function SessionGrid({ showControl = true }) {
  const [sessions, setSessions] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const fetchSessions = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/v1/sessions-current"
    );
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
      {showControl && (
        <ButtonRow>
          <BasicButton
            onClick={() => {
              setIsAddMode(true);
            }}
            iconPre={<HiPlus />}
          >
            Create Session
          </BasicButton>
          <BasicButton>Bulk Action</BasicButton>
        </ButtonRow>
      )}
      <Filters>
        Filter:
        <div>
          <Chip>Training</Chip>
          <Chip>General Assembly</Chip>
        </div>
      </Filters>
      <Sessions>
        {sessions &&
          sessions.map((session, i) => {
            return (
              <Session
                key={i}
                {...session}
                deleteSession={deleteSession}
                editSession={editSession}
              />
            );
          })}
      </Sessions>

      <Modal
        appElement={document.getElementById("root")}
        isOpen={isAddMode}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={() => setIsAddMode(false)}
        style={modalStyles}
      >
        <SessionForm handleSubmit={addSession} />
        <button onClick={() => setIsAddMode(false)}>Close</button>
      </Modal>
    </Container>
  );
}
