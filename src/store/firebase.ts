import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import { getStorage }from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBkei87NsWQxwD0XdXxO3NiPyk5etB3mAY",
  authDomain: "e-commenrce.firebaseapp.com",
  projectId: "e-commenrce",
  storageBucket: "e-commenrce.appspot.com",
  messagingSenderId: "30160641273",
  appId: "1:30160641273:web:1c30198de46eb3040f1628",
  measurementId: "G-TF1YRM9H3S"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage();