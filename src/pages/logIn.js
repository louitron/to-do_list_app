import React from "react";
import { SignIn } from "@/components/auth/SignIn";


export default function AuthUser() {
  return (
    <div>
      <div className="flex flex-col overflow-auto w-screen  h-screen bg-gradient-to-t from-black to-slate-800">
        <SignIn />
      </div>
    </div>
  );
}
