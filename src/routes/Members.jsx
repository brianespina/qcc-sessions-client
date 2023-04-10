import { useQuery, gql } from "@apollo/client";
import Member from "../components/Member";

const GET_MEMBERS = gql`
  query Members {
    members {
      id
      name
      status
      attended {
        title
        id
      }
    }
  }
`;
export default function Members() {
  const { data, loading, error } = useQuery(GET_MEMBERS);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }

  const { members } = data;
  return (
    <div>
      {members.map((member) => (
        <Member {...member} />
      ))}
    </div>
  );
}
