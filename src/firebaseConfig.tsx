

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCGyVWjCZ5fsJKBsRryed_RjC6JVKF-RdI",
  authDomain: "clinicproject-e92fa.firebaseapp.com",
  projectId: "clinicproject-e92fa",
  storageBucket: "clinicproject-e92fa.appspot.com",
  messagingSenderId: "1009997971130",
  appId: "1:1009997971130:web:51d43c4cb6ce4faf8c8c83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth}
export{db}