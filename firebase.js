// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4CCkjr19VIIcjyr53Fi3o5Gx3abHCr0k",
  authDomain: "headstarterpantryproject.firebaseapp.com",
  projectId: "headstarterpantryproject",
  storageBucket: "headstarterpantryproject.appspot.com",
  messagingSenderId: "127751747207",
  appId: "1:127751747207:web:24f2d32bb9e55e829b6a22",
  measurementId: "G-1QNW50LX7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}