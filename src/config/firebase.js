// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9TmdrGkdJS0fnpmLAAWO9inr3Y1OddS0",
  authDomain: "hopon-2b85f.firebaseapp.com",
  projectId: "hopon-2b85f",
  storageBucket: "hopon-2b85f.appspot.com",
  messagingSenderId: "1001224456717",
  appId: "1:1001224456717:web:f013eee6a2eaaf7c932344",
  measurementId: "G-DQ466D864E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googlerProvider = new GoogleAuthProvider();
export const db = getFirestore(app);