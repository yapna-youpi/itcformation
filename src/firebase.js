// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVFXvN8rQnD9ozRwEBsnPQcUkFgcYch7o",
  authDomain: "itcformation-b1a72.firebaseapp.com",
  projectId: "itcformation-b1a72",
  storageBucket: "itcformation-b1a72.firebasestorage.app",
  messagingSenderId: "331060175331",
  appId: "1:331060175331:web:b64a2187f78570d91fc0d6",
  measurementId: "G-94M2M8HBW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);