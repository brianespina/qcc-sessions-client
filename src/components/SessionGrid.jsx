import styled from "styled-components";
import Session from "./Session";

const Sessions = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
`;

export default function SessionGrid({ sessions }) {
  return (
    <>
      <Sessions>
        {sessions &&
          sessions.map((session, i) => {
            if (i === 0) {
              return (
                <UpcomingSession
                  key={i}
                  {...session}
                  deleteSession={deleteSession}
                  editSession={editSession}
                />
              );
            }
            return (
              <Session
                key={i}
                {...session}
                deleteSession={deleteSession}
                editSession={editSession}
              />
            );
          })}
        <div className="card add-button">
          <AddButton
            onClick={() => {
              setIsAddMode(true);
            }}
          >
            <HiPlus size={100} color="#EEEEEE" />
          </AddButton>
        </div>
      </Sessions>
    </>
  );
}
