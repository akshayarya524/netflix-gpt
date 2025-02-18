// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtUHu8ti38t1i70GCCQV7A8T_LSUqmeUU",
  authDomain: "netflix-gpt-36be4.firebaseapp.com",
  projectId: "netflix-gpt-36be4",
  storageBucket: "netflix-gpt-36be4.firebasestorage.app",
  messagingSenderId: "436160839435",
  appId: "1:436160839435:web:0ef25d2c1310b8b3702c0e",
  measurementId: "G-227LT2TL0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();