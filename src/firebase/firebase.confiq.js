// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQRZXcOTkffP4DK4UylIL57LL-C_cDf6E",
  authDomain: "coffee-store-b44d9.firebaseapp.com",
  projectId: "coffee-store-b44d9",
  storageBucket: "coffee-store-b44d9.appspot.com",
  messagingSenderId: "721877551865",
  appId: "1:721877551865:web:312c26df0ef4c366eab028",
  measurementId: "G-NM44TDRX99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;