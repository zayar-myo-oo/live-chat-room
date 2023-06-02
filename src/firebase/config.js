// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from  "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCzbAcWsWs7Jzo0GeIjyXLiwN5nXCrOgGg",
  authDomain: "live-chat-room-aa157.firebaseapp.com",
  projectId: "live-chat-room-aa157",
  storageBucket: "live-chat-room-aa157.appspot.com",
  messagingSenderId: "367046117431",
  appId: "1:367046117431:web:32cacc53d4de941fa7d7b2",
  measurementId: "G-QGHWEJZ34G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const auth = getAuth(app);
let timestamp = serverTimestamp();

export { timestamp, db , auth};