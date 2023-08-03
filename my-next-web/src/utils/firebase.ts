import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
