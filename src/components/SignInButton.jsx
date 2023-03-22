import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import useAuthentication from "./services/useAuthentication";
import Link from "next/link";

export const SignInButton = () => {
  const { isSignedIn, setIsSignedIn } = useAuthentication();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center bg-black">
      {!isSignedIn ? (
        <Link href="/signIn">
          <button className="text-white relative overflow-hidden rounded-lg bg-black px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2">
            Sign In
          </button>
        </Link>
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
