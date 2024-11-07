// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvEZSUhXU5WAVoiSSHZQV37OBlX_YdjDQ",
  authDomain: "our-writing-class.firebaseapp.com",
  projectId: "our-writing-class",
  storageBucket: "our-writing-class.firebasestorage.app",
  messagingSenderId: "890902172266",
  appId: "1:890902172266:web:84805634b0cf904b7f3013",
  measurementId: "G-9V6PZNHMJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
