import { useEffect, useState } from "react";
import styled from "styled-components";
import Session from "./Session";
import SessionForm from "./SessionForm";
import Container from "./Container";
import { HiPlus } from "react-icons/hi";
import BasicButton from "./BasicButton";
import Modal from "react-modal";
import ButtonRow from "./ButtonRow";
import Chip from "./Chip";
import {db} from "../firebase/firebase"
import { collection, query, getDocs  } from "firebase/firestore";

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


export default function SessionGrid({
  showControl = true,
  display = "active",
}) {

  let [sessions, setSessions] = useState([])

  async function  getSessions(){
    let result = []
    const q = query(collection(db, "sessions"));
    const querySnapshot = await getDocs(q);
 
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      result.push({
        ...data,
        id: doc.id,
        date: data.date.toDate()
      });
    });
    setSessions(result)
  }
  
  useEffect(()=>{
    getSessions();
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Container>
      <Sessions>
        {sessions?.map((session, i) => {
          return <Session key={i} {...session} />;
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
