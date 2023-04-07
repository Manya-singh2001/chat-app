// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi9_YPxkYKaSMHPTSz0aCt4nUZX85mB8U",
  authDomain: "chat-app-9d27e.firebaseapp.com",
  projectId: "chat-app-9d27e",
  storageBucket: "chat-app-9d27e.appspot.com",
  messagingSenderId: "572556326046",
  appId: "1:572556326046:web:a16f77ef218bafea2ff78f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)