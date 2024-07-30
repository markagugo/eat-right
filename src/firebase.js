import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS_rF73vloLkG3y6NT_TUz3pgSbs3ZRog",
  authDomain: "eatrightblog.firebaseapp.com",
  projectId: "eatrightblog",
  storageBucket: "eatrightblog.appspot.com",
  messagingSenderId: "948020401001",
  appId: "1:948020401001:web:f7b2acd5e23382181aa3f8",
  measurementId: "G-ZWKM2S2FX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
