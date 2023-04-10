import styled from "styled-components";
import { useState } from "react";
import SessionForm from "./SessionForm";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import moment from "moment";
import Modal from "react-modal";
import SessionDetails from "./SessionDetails";
import { useMutation, gql } from "@apollo/client";

//Styled Components
const Title = styled.h2`
  font-size: 20px;
  font-weight: 900;
`;

const SessionCard = styled.div`
  cursor: pointer;
`;
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

const ControlBar = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
`;

const ShowHide = styled.div`
  opacity: 0;
  transform: translate(100%);
  transition: all 0.2s ease;
  position: absolute;
  padding-right: 30px;
  padding-top: 45px;
  width: 390px;
  &.active {
    opacity: 1;
    transform: translate(0);
  }
`;

const modalStyles = {
  content: {
    top: "0",
    bottom: "0",
    right: "0",
    left: "auto",
    width: "400px",
  },
  overlay: {
    background: "transparent",
  },
};

const DELETE_SESSION = gql`
  mutation Session($deleteSessionId: ID!) {
    deleteSession(id: $deleteSessionId)
  }
`;

export const Session = (props) => {
  const { id, title, date, attendees, status, type, handler, notes, refetch } =
    props;

  const [deleteSession] = useMutation(DELETE_SESSION);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditSubmit = (e, sessionData) => {
    editSession(e, sessionData);
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsEdit(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <SessionCard className="card">
        <Title>
          {title.trim()} id:{id}
          <StatusChip>{status.toLowerCase()}</StatusChip>
        </Title>
        <DateTime>{moment(date).format("MMMM D, yyyy hh:mm a")}</DateTime>
        <p>Attending: {attendees ? attendees.length : 0}</p>
        <p>{type}</p>
        <Button
          onClick={() => {
            deleteSession({ variables: { deleteSessionId: id } });
            refetch();
          }}
        >
          <RiDeleteBin6Line color="#333" />
        </Button>
      </SessionCard>
    </>
  );
};

export default Session;
