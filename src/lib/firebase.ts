import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Konfigurasi dari project Firebase milikmu
const firebaseConfig = {
    apiKey: "AIzaSyAuAthxvXqr1PieDIW0eogruYxoUrPzjzQ",
    authDomain: "invitenow-3ab68.firebaseapp.com",
    projectId: "invitenow-3ab68",
    storageBucket: "invitenow-3ab68.firebasestorage.app",
    messagingSenderId: "883702014601",
    appId: "1:883702014601:web:a9c5a2cf5326029281dc58",
    measurementId: "G-4X2VL1Q1D3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);