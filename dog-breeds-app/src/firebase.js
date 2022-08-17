// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMSyairq57Kj_rrgxEcFoIN0e2IdcJs8o",
  authDomain: "dog-breeds-app-e9e3b.firebaseapp.com",
  projectId: "dog-breeds-app-e9e3b",
  storageBucket: "dog-breeds-app-e9e3b.appspot.com",
  messagingSenderId: "203830785483",
  appId: "1:203830785483:web:519a19c2c41ccf11feb24e",
  measurementId: "G-M3VT588MSL",
};

// const auth = firebase.auth();
// const firestore = firebase.firestore();

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
