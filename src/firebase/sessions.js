import { db } from "../firebase/firebase"
import { collection, query, getDocs, doc, getDoc, collectionGroup } from "firebase/firestore";

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

export const getSessionLesson = async (lessonID) => {

    const lessonRef = doc(db, "lessons", lessonID);
    let lesson = await getDoc(lessonRef);

    return lesson.data()
}

export const getSessionAttendees = async (refs) => {
    const memPromises = refs.map(ref => {
        const docref = doc(db, "members", ref);
        return (getDoc(docref));
    })

    let allPromise = Promise.all(memPromises);

    let result = [];

    try {
        const values = await allPromise;
        values.forEach(val => {
            let data = val.data();
            result.push({
                ...data,
                id: val.id
            });
        })
    } catch (error) {
        console.log(error);
    }
    return result;
}