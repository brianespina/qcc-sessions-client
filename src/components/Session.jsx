import styled from "styled-components";
import { useState } from "react";
import SessionForm from "./SessionForm";
import axios from "axios";

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const SessionCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  flex: auto;
`;

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
    <SessionCard>
      {isEditMode ? (
        <SessionForm
          data={{ id, title, date, attendees, status, type, handler, notes }}
          handleSubmit={handleEditSubmit}
          mode="edit"
        />
      ) : (
        <>
          <p>{id}</p>
          <Title>{title}</Title>
          <p>{date}</p>
          <p>{status}</p>
          <p>{type}</p>
          <p>{notes}</p>
          <button
            onClick={() => {
              deleteSession(id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setIsEditMode(true);
            }}
          >
            Edit
          </button>
        </>
      )}
    </SessionCard>
  );
};

export default Session;
