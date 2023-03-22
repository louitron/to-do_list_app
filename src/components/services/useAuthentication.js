import { create } from "zustand";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase";

const useAuthentication = create((set) => ({
  email: "",
  password: "",

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
}));

export default useAuthentication;
