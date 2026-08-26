// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtEe61VFzO6yymnRDIY6VUZaJv7Z2UrJE",
  authDomain: "dozo-dinho-academy.firebaseapp.com",
  projectId: "dozo-dinho-academy",
  storageBucket: "dozo-dinho-academy.firebasestorage.app",
  messagingSenderId: "643133250547",
  appId: "1:643133250547:web:242e6b96c48b4b49e15086",
  measurementId: "G-TYXP65ZJG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
