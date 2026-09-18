// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webifyai-5f8e8.firebaseapp.com",
  projectId: "webifyai-5f8e8",
  storageBucket: "webifyai-5f8e8.firebasestorage.app",
  messagingSenderId: "175313518960",
  appId: "1:175313518960:web:02c80d58864d4061d38fb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}