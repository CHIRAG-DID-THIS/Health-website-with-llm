// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr4ykd8ZfYmFtJtFXYaxQwTRos1RHUeAk",
  authDomain: "therapy-fc975.firebaseapp.com",
  databaseURL: "https://therapy-fc975-default-rtdb.firebaseio.com",
  projectId: "therapy-fc975",
  storageBucket: "therapy-fc975.appspot.com",
  messagingSenderId: "761053931587",
  appId: "1:761053931587:web:e0bb1f63d0cef566290cf6",
  measurementId: "G-QJDHDB457H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };