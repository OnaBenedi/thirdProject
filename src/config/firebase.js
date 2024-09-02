import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9TmdrGkdJS0fnpmLAAWO9inr3Y1OddS0",
  authDomain: "hopon-2b85f.firebaseapp.com",
  projectId: "hopon-2b85f",
  storageBucket: "hopon-2b85f.appspot.com",
  messagingSenderId: "1001224456717",
  appId: "1:1001224456717:web:f013eee6a2eaaf7c932344",
  measurementId: "G-DQ466D864E"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
