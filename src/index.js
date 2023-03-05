// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPHrk9tRvLa0QUBN9qgStp462XduK2xUQ",
  authDomain: "first-firebase-75634.firebaseapp.com",
  projectId: "first-firebase-75634",
  storageBucket: "first-firebase-75634.appspot.com",
  messagingSenderId: "971745682119",
  appId: "1:971745682119:web:5bfa473907586ecb1b94e2",
  measurementId: "G-HSX9N50J5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)