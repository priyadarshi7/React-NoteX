// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaTZW0Ff1ABsxXWziAVY_QyM9gJn5oVCU",
  authDomain: "react-notes-62b81.firebaseapp.com",
  projectId: "react-notes-62b81",
  storageBucket: "react-notes-62b81.appspot.com",
  messagingSenderId: "418129838060",
  appId: "1:418129838060:web:ba867419a7e36cbf5f4ac9",
  measurementId: "G-9KGM4KFQNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const notesCollection = collection(db, "notes")