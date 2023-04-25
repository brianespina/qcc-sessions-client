import {db} from "../firebase/firebase"
import { collection, query, getDocs  } from "firebase/firestore";

export const getSessions = async () => {
    let result = []
    const q = query(collection(db, "sessions"));
    const querySnapshot = await getDocs(q);
 
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      result.push({
        ...data,
        id: doc.id,
        date: data.date.toDate()
      });
    });
    return result;
  }