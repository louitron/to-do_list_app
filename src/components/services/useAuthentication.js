import { create } from "zustand";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut, signInAnonymously,
} from "firebase/auth";
import { auth } from "@/firebase";

const useAuthentication = create((set) => ({
  email: "",
  password: "",
  isSignedIn:"",

  setIsSignedIn: ((isSignedIn) => set({ isSignedIn })),

  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),

  signIn: (e) => {
    e.preventDefault();
    const { email, password } = get();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  signUp: (e) => {
    e.preventDefault();
    const { email, password } = get();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  signOut: () => {
    signOut(auth)
        .then(() => {
            console.log('user signed out successfully');
        }).catch((error) => {
            console.log(error);
        });
  },
  anonymousSignIn: () => {
    signInAnonymously(auth)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User data:", user);
        }).catch((error) => {
            console.log("Error signing in anonymously", error);
        })
  }
}));

export default useAuthentication;
