// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeeO6O3zprROC8DxS2muhTywooX2knqAs",
    authDomain: "blabber25.firebaseapp.com",
    projectId: "blabber25",
    storageBucket: "blabber25.firebasestorage.app",
    messagingSenderId: "37212435478",
    appId: "1:37212435478:web:29aec48e69da7a83f0b137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);