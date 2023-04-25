import SessionGrid from "../components/SessionGrid";
import { addDoc, collection } from "@firebase/firestore"
import { db } from "../firebase/firebase"

export function title() {
  return "Dashboard";
}

export default function Dashboard() {


  return (
    <>

      <SessionGrid  showControl={false} display="archive" />
    </>
  );
}
