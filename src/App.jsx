import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Session from "./components/Session";

const Sessions = styled.div`
  display: flex;
  gap: 1em;
  margin-block: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
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
    <div className="w-screen h-screen">
      <div className="container mx-auto p-3">
        <h1 className="text-3xl font-bold">Sessions</h1>
        <Sessions>
          {sessions &&
            sessions.map((session, i) => <Session key={i} {...session} />)}
        </Sessions>
      </div>
    </div>
  );
}

export default App;
