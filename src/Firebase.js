// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnKNUj7EMJ01TtHj8ItQ96h9cnn2UO9TY",
    authDomain: "private-route-auth-14170.firebaseapp.com",
    projectId: "private-route-auth-14170",
    storageBucket: "private-route-auth-14170.firebasestorage.app",
    messagingSenderId: "500468728018",
    appId: "1:500468728018:web:f4e0f63840ca112feead0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a" reference to the service
export const auth = getAuth(app);