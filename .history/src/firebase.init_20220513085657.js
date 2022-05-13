// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGGq64cQfxtOjEeC9dWoXtgo8wN0BrZ6A",
  authDomain: "doctor-portal-64aa6.firebaseapp.com",
  projectId: "doctor-portal-64aa6",
  storageBucket: "doctor-portal-64aa6.appspot.com",
  messagingSenderId: "1016341337636",
  appId: "1:1016341337636:web:81546a21ddb047ec752ab1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;