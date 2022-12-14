 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAyUwdPfBm4MmnzwCfn5tr_dgILmZlc8SY",
    authDomain: "pann-kaansadich.firebaseapp.com",
    databaseURL: "https://pann-kaansadich-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pann-kaansadich",
    storageBucket: "pann-kaansadich.appspot.com",
    messagingSenderId: "649746446428",
    appId: "1:649746446428:web:3adbe9ebcce6d8cfae8e99",
    measurementId: "G-457KHVTDFV"
 };
 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 // Export firestore database
 // It will be imported into your react app whenever it is needed
 export const db = getFirestore(app);