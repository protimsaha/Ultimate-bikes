// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDa0jatRZbFZUz8-Van-rvHUVBahmdZmBs",
    authDomain: "assignment-11-eb5e6.firebaseapp.com",
    projectId: "assignment-11-eb5e6",
    storageBucket: "assignment-11-eb5e6.appspot.com",
    messagingSenderId: "546070674947",
    appId: "1:546070674947:web:c9ea2a7f8c8b43a594d836"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;