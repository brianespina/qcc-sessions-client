import { db } from "../firebase/firebase"
import { collection, query, getDocs } from "firebase/firestore";

export const getLessons = async () => {
    let result = []
    const q = query(collection(db, "lessons"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        let data = doc.data();
        result.push({
            ...data,
            id: doc.id,
        });
    });
    return result;
}

