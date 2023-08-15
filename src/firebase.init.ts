import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB2zBGTGKwsUuKnuhvTxYAwo46_IK-ev7Y",
  authDomain: "care-home-dea47.firebaseapp.com",
  projectId: "care-home-dea47",
  storageBucket: "care-home-dea47.appspot.com",
  messagingSenderId: "199588323473",
  appId: "1:199588323473:web:25514031c8cee5e28d5f30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
