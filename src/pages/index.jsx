import React from "react";
import { TabbedNav } from "@/components/TabbedNav";
import { SignUp } from "@/components/auth/SignUp";
import { SignIn } from "@/components/auth/SignIn";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col overflow-auto w-screen  h-screen bg-gradient-to-t from-black to-slate-800">
        <TabbedNav />
        {/* <SignUp /> */}
        <SignIn />
      </div>
    </div>
  );
}
