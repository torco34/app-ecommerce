import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC8TNzc-DeoZDCie8Ialla7Mq4-USf8xEY",
  authDomain: "ecommerce-react-e7a99.firebaseapp.com",
  projectId: "ecommerce-react-e7a99",
  storageBucket: "ecommerce-react-e7a99.appspot.com",
  messagingSenderId: "979133463283",
  appId: "1:979133463283:web:0745f22d87a65123885586",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
