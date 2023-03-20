import React, { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  signOut,
} from "firebase/auth"; // Update imports
import { auth } from "@/firebase";

export const SignInButton = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Use onAuthStateChanged from firebase/auth
      setIsSignedIn(!!user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignIn = () => {
    signInAnonymously(auth)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log("User data:", user);
      })
      .catch((error) => {
        console.error("Error signing in anonymously:", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        console.log("User signed out successfully");
      })
      .catch((error) => {
        // An error occurred during sign-out
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="flex w-full flex-col items-center justify-center bg-black">
      {!isSignedIn ? (
        <button
          onClick={handleSignIn}
          className="text-white relative overflow-hidden rounded-lg bg-black px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2"
        >
          Sign In
        </button>
      ) : (
        <button
          onClick={handleSignOut}
          className="text-white relative overflow-hidden rounded-lg bg-black px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};
