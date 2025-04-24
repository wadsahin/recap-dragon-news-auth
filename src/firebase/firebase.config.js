// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHIIvOiehmm2ZKLL6vNEQlmIAiPFiAGQs",
  authDomain: "react-dragon-news-auth-b535b.firebaseapp.com",
  projectId: "react-dragon-news-auth-b535b",
  storageBucket: "react-dragon-news-auth-b535b.firebasestorage.app",
  messagingSenderId: "613857185655",
  appId: "1:613857185655:web:4ed33c2481b3e220b55b72",
  measurementId: "G-FLGRRT8K29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
