import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyATeqt0mhBQzxQ8I_8kT42qqmsr5ZRpZus",
    authDomain: "qcc-sessions.firebaseapp.com",
    projectId: "qcc-sessions",
    storageBucket: "qcc-sessions.appspot.com",
    messagingSenderId: "254540303370",
    appId: "1:254540303370:web:f0b3823a423f5b500363f3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);