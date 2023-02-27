import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Session from "./components/Session";

const Sessions = styled.div`
  display: flex;
  gap: 1em;
  margin-block: 20px;
  flex-wrap: no-wrap;
  justify-content: space-between;
  overflow: hidden;
  padding: 20px;
`;

const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  margin-inline: auto;
  padding-inline: 15px;
`;

function App() {
  const [sessions, setSessions] = useState([]);

  const fetchSessions = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/sessions");
    setSessions(response.data);
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <Container>
      <h1 className="text-3xl font-bold">Sessions</h1>
      <Sessions>
        {sessions &&
          sessions.map((session, i) => <Session key={i} {...session} />)}
      </Sessions>
    </Container>
  );
}

export default App;
