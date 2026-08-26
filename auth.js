// OGR Trading Academy – Firebase Authentication

const firebaseConfig = {
  apiKey: "YOUR_EXISTING_API_KEY",
  authDomain: "dozo-dinho-academy.firebaseapp.com",
  projectId: "dozo-dinho-academy",
  storageBucket: "dozo-dinho-academy.appspot.com"
};

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
