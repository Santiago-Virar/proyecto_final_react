import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3mLR3H0JLtxndaBX7sgU5MMqoLDAtWog",
    authDomain: "proyecto-react-coder-2b6e1.firebaseapp.com",
    projectId: "proyecto-react-coder-2b6e1",
    storageBucket: "proyecto-react-coder-2b6e1.appspot.com",
    messagingSenderId: "228065417341",
    appId: "1:228065417341:web:7e3f9d960e38d26d817914",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


