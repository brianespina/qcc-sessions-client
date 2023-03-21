import styled from "styled-components";
import { useState } from "react";
import SessionForm from "./SessionForm";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import moment from "moment";
import Modal from "react-modal";

//Styled Components
const Title = styled.h2`
  font-size: 20px;
  font-weight: 900;
`;

const SessionCard = styled.div``;
const StatusChip = styled.span`
  background: #1dd1a1;
  color: #fff;
  font-weight: normal;
  display: inline-block;
  font-size: var(--font-sm);
  padding-inline: 6px;
  border-radius: 10px;
  margin-left: 5px;
`;

const DateTime = styled.p`
  font-size: var(--font-sm);
`;

const Button = styled.button`
  outline: none;
  background: none;
  border: none;
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

export const Session = (props) => {
  const {
    id,
    title,
    date,
    attendees,
    status,
    type,
    handler,
    notes,
    deleteSession,
    editSession,
  } = props;

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditSubmit = (e, sessionData) => {
    editSession(e, sessionData);
    setIsEditMode(false);
  };

  return (
    <>
      <Modal
        appElement={document.getElementById("root")}
        isOpen={isEditMode}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={() => setIsEditMode(false)}
        style={modalStyles}
      >
        <SessionForm
          data={{ id, title, date, attendees, status, type, handler, notes }}
          handleSubmit={handleEditSubmit}
          mode="edit"
        />
        <button onClick={() => setIsEditMode(false)}>Close</button>
      </Modal>

      <SessionCard className="card">
        <Title>
          {title.trim()}
          <StatusChip>{status.toLowerCase()}</StatusChip>
        </Title>
        <DateTime>{moment(date).format("MMMM D, yyyy hh:mm a")}</DateTime>
        <p>{type}</p>
        <p>{notes}</p>
        <Button
          onClick={() => {
            deleteSession(id);
          }}
        >
          <RiDeleteBin6Line color="#333" />
        </Button>
        <Button
          onClick={() => {
            setIsEditMode(true);
          }}
        >
          <RiEdit2Line color="#333" />
        </Button>
      </SessionCard>
    </>
  );
};

export default Session;
