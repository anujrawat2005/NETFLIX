// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnNMbfcL0skzUbAX65y9Sq6o_Ydw3Cq20",
  authDomain: "anuj-70dfe.firebaseapp.com",
  projectId: "anuj-70dfe",
  storageBucket: "anuj-70dfe.appspot.com",
  messagingSenderId: "671916253305",
  appId: "1:671916253305:web:236a3c8465a0e5ccf474a8",
  measurementId: "G-JYZB2XVLPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); 