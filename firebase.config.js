import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBiQAYLDhAiyNRMIWuYUmJ6y38cVAraElk",
  authDomain: "marsha-boutique-e1846.firebaseapp.com",
  projectId: "marsha-boutique-e1846",
  storageBucket: "marsha-boutique-e1846.appspot.com",
  messagingSenderId: "632781255585",
  appId: "1:632781255585:web:966cbd17e7308dda2151e0",
  measurementId: "G-X2718S4XWS",
  storageBucket: "https://firebase.google.com/docs/firestore?authuser=0&hl=fr#implementation_path"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const analytics = getAnalytics(App);

export const auth =  getAuth(App)
export default App
export const db = getFirestore(App)
export const storage = getStorage(App)