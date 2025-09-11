// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBikT-Z2AiX8ApWeKTiIk6ydGn-UsPVYnA",
  authDomain: "netflixgpt-6220f.firebaseapp.com",
  projectId: "netflixgpt-6220f",
  storageBucket: "netflixgpt-6220f.firebasestorage.app",
  messagingSenderId: "520796779866",
  appId: "1:520796779866:web:e55f28a9537b1fd9c6af63",
  measurementId: "G-SX3FD6YNK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

