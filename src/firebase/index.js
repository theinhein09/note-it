// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_bkTMfLzW5yypcSO5DOFrUh2DNPwbjg0",
  authDomain: "note-it-b09b4.firebaseapp.com",
  projectId: "note-it-b09b4",
  storageBucket: "note-it-b09b4.appspot.com",
  messagingSenderId: "221683894210",
  appId: "1:221683894210:web:443979c7b3809dcb30f85b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
