// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyUwdPfBm4MmnzwCfn5tr_dgILmZlc8SY",
  authDomain: "pann-kaansadich.firebaseapp.com",
  databaseURL:
    "https://pann-kaansadich-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pann-kaansadich",
  storageBucket: "pann-kaansadich.appspot.com",
  messagingSenderId: "649746446428",
  appId: "1:649746446428:web:7b31e88d67d1a560ae8e99",
  measurementId: "G-6J79QYQ96D",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export const db = getFirestore();