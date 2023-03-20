// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtEr7J6Z2y8qOqDw6TR_mLNacrhWUMy2o",
  authDomain: "todo-list2023.firebaseapp.com",
  projectId: "todo-list2023",
  storageBucket: "todo-list2023.appspot.com",
  messagingSenderId: "818414082246",
  appId: "1:818414082246:web:352e74669036c467c85fc7",
  measurementId: "G-9DX6FQLFPX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  const { getAnalytics } = require("firebase/analytics");
  getAnalytics(app);
}

export const auth = getAuth(app);
