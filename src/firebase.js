import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously as firebaseSignInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtEr7J6Z2y8qOqDw6TR_mLNacrhWUMy2o",
  authDomain: "todo-list2023.firebaseapp.com",
  projectId: "todo-list2023",
  storageBucket: "todo-list2023.appspot.com",
  messagingSenderId: "818414082246",
  appId: "1:818414082246:web:352e74669036c467c85fc7",
  measurementId: "G-9DX6FQLFPX"
};

let auth, db, analytics;

if (typeof window !== 'undefined') {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  console.log('db:', db);

  // Check if Firebase Analytics is supported in the current environment
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export async function signInAnonymously(authInstance) {
  if (authInstance) {
    await firebaseSignInAnonymously(authInstance);
  }
}

export function getDbInstance() {
  return db;
}

export { auth, analytics };