import styled from "styled-components";
const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const SessionCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  flex: auto;
  flex-basis: 350px;
  min-width: 350px;
  width: 100%;
`;

export const Session = ({
  id,
  title,
  date,
  attendees,
  status,
  type,
  handler,
  notes,
}) => {
  return (
    <SessionCard>
      <p>{id}</p>
      <Title>{title}</Title>
      <p>{date}</p>
      <p>{status}</p>
      <p>{type}</p>
      <p>{notes}</p>
    </SessionCard>
  );
};

export default Session;
