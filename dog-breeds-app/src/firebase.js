import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-IhzpeNqOiolOw8swBmID4SL3apCuVBw",
  authDomain: "dog-breeds-app-e529d.firebaseapp.com",
  projectId: "dog-breeds-app-e529d",
  storageBucket: "dog-breeds-app-e529d.appspot.com",
  messagingSenderId: "977695752817",
  appId: "1:977695752817:web:8b75b5a854e12f373511d0",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
