// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCrJFBFyJjQ3gx4hEbZe-Wvf7Iw9hceN0",
  authDomain: "hakmak-fcbcc.firebaseapp.com",
  projectId: "hakmak-fcbcc",
  storageBucket: "hakmak-fcbcc.firebasestorage.app",
  messagingSenderId: "346981281748",
  appId: "1:346981281748:web:7a1f4ccb0bfb133c51b041",
  measurementId: "G-TD7QV1XYMK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);