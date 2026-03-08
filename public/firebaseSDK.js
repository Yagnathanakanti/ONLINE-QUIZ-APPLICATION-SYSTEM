// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// import {
//   getMessaging,
//   getToken,
// } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdXaQjQcujU9KLKnfXMBzH5aWwvg7N3Jg",
  authDomain: "online-quiz-application-6ba6d.firebaseapp.com",
  projectId: "online-quiz-application-6ba6d",
  storageBucket: "online-quiz-application-6ba6d.firebasestorage.app",
  messagingSenderId: "122258409829",
  appId: "1:122258409829:web:2787d4cf8ae7c4ac60f98c",
  measurementId: "G-HG73BRENPK",
  databaseURL:
    "https://online-quiz-application-6ba6d-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase initialized");
const analytics = getAnalytics(app);
const auth = getAuth(app);
console.log("Auth initialized:", auth);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
// const messaging = getMessaging(app);
// const vapidPublicKey =
//   "BHn7TMIxMBU7RuL6O0h_tPe5ovZpSDkQODxI6BfEldChw9cfp3gWi57egYRF_ujcHdA9eVu1RSmrohW_gpksj2Y";

export { auth, provider, analytics, database };
