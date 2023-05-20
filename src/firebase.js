// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {initializeApp} from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKN3iuuF9Ptsdj9fZS5WZLJvQe906qmUk",
  authDomain: "ecommerce-82b46.firebaseapp.com",
  projectId: "ecommerce-82b46",
  storageBucket: "ecommerce-82b46.appspot.com",
  messagingSenderId: "409925658055",
  appId: "1:409925658055:web:f454a20c0fa809459325e2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();
  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

  export default auth;
 


