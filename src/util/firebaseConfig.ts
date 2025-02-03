// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv0OrWwqpEgyOBP9SAsqsyAn-GRJku-kA",
  authDomain: "hsmarket-aaf40.firebaseapp.com",
  projectId: "hsmarket-aaf40",
  storageBucket: "hsmarket-aaf40.firebasestorage.app",
  messagingSenderId: "1012965266871",
  appId: "1:1012965266871:web:e757a005931dc7580fc432",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
