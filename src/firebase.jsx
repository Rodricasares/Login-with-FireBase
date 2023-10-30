// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnDOWZycfe4hYZ4gmzZQpxufgD3ALcGC8",
  authDomain: "fir-login-6ada9.firebaseapp.com",
  projectId: "fir-login-6ada9",
  storageBucket: "fir-login-6ada9.appspot.com",
  messagingSenderId: "545569690485",
  appId: "1:545569690485:web:90f06250561d9809caf93c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}