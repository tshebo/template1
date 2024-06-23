// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN2RcQoeJrOQ3Dc6UJiH0DmPD2oOZSX-4",
  authDomain: "template-4ad5f.firebaseapp.com",
  projectId: "template-4ad5f",
  storageBucket: "template-4ad5f.appspot.com",
  messagingSenderId: "923453155627",
  appId: "1:923453155627:web:29c9354f182e7293d2fd6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);