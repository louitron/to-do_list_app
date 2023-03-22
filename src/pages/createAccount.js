import React from "react";
import { SignUp } from "@/components/auth/SignUp";


export default function CreateUser() {
  return (
    <div>
      <div className="flex flex-col overflow-auto w-screen  h-screen bg-gradient-to-t from-black to-slate-800">
        <SignUp />
      </div>
    </div>
  );
}
