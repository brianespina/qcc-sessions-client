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
import { useQuery, gql, useLazyQuery } from "@apollo/client";

const Sessions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const GET_SESSIONS = gql`
  query GetSessions($status: String) {
    sessions(status: $status) {
      date
      id
      notes
      status
      title
      type
      attendees {
        members {
          id
          first_name
        }
      }
    }
  }
`;

export default function SessionGrid({
  showControl = true,
  display = "active",
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { loading, error, data, refetch } = useQuery(GET_SESSIONS, {
    variables: {
      status: display,
    },
  });

  useEffect(() => {
    refetch();
  });

  if (loading) return <>Loading</>;
  if (error) {
    console.log(error);
    return <>error</>;
  }
  const { sessions } = data;
  return (
    <Container>
      <Sessions>
        {sessions?.map((session, i) => {
          return <Session key={i} {...session} refetch={refetch} />;
        })}
      </Sessions>

      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyles}
      >
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </Container>
  );
}
