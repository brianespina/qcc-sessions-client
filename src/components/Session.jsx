import styled from "styled-components";
const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
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
    <div className="shadow p-4 flex-auto rounded">
      <p>{id}</p>
      <Title>{title}</Title>
      <p>{date}</p>
      <p>{status}</p>
      <p>{type}</p>
      <p>{notes}</p>
    </div>
  );
};

export default Session;
