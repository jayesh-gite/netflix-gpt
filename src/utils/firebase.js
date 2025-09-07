// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwd1ONLJ36zqouOkGrK4yWwDJUYU_Bcfk",
  authDomain: "netflixgpt-c59b2.firebaseapp.com",
  projectId: "netflixgpt-c59b2",
  storageBucket: "netflixgpt-c59b2.firebasestorage.app",
  messagingSenderId: "469821349143",
  appId: "1:469821349143:web:40775e40ae838e5410ab52",
  measurementId: "G-X52FD620Z3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
