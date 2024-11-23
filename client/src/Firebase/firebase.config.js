// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlWmwIfcMLyirAfMTnw4LLEErWRx38SrU",
    authDomain: "grh-management.firebaseapp.com",
    projectId: "grh-management",
    storageBucket: "grh-management.firebasestorage.app",
    messagingSenderId: "579742684946",
    appId: "1:579742684946:web:26c2cb39430cd7108a45cb",
    measurementId: "G-8G35EH69JW"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;