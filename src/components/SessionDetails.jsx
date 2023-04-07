import moment from "moment";

export default function SessionDetails({ data }) {
  return (
    <div>
      <div>
        <h2>{data.title}</h2>
      </div>
      <div>
        {moment(data.date).format("MMMM d, yyyy")}
        <br />
        {moment(data.date).format("h:mm a")}
      </div>
      <div>{data.status}</div>
      <div>{data.type}</div>
      <div>{data.notes}</div>
    </div>
  );
}
