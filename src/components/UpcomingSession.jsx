import moment from "moment";

export default function UpcomingSession({ title, date }) {
  return (
    <div>
      {title}
      {moment(date).calendar()}
    </div>
  );
}
