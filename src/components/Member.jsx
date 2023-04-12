export default function Member(props) {
  const { name, id, status, attended } = props;
  return (
    <div style={{ marginBottom: "30px" }}>
      <p>
        {name} id:{id}
      </p>
      <p>{status}</p>
      {attended &&
        attended.map((session) => (
          <p key={session.id}>
            {session.title} id:{session.id}
          </p>
        ))}
    </div>
  );
}
