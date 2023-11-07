// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtvQ17Z0AjviUjdE7aF0pigvkVNemjPQ8",
  authDomain: "kelas-kelas-xi-tjkt.firebaseapp.com",
  projectId: "kelas-kelas-xi-tjkt",
  storageBucket: "kelas-kelas-xi-tjkt.appspot.com",
  messagingSenderId: "470457315614",
  appId: "1:470457315614:web:68f31fc8839e527d9f590f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();