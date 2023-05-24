import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import "firebase/compat/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA9z4li4Hn5HsX2JHit0ZZAePYnqfXkXM",
  authDomain: "ecommersproject-5b8a7.firebaseapp.com",
  projectId: "ecommersproject-5b8a7",
  storageBucket: "ecommersproject-5b8a7.appspot.com",
  messagingSenderId: "537583138772",
  appId: "1:537583138772:web:094a5c0eb43b0072f30841"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth =firebase.auth();
const fs= firebase.firestore();
const storage=firebase.storage();

export {auth, fs, storage};