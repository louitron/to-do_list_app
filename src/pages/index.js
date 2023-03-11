import React from "react";
import { TabbedNav } from "@/components/TabbedNav";

export default function Home() {
  return (
    <div className="flex w-screen justify-center pt-10 h-screen bg-gradient-to-b from-black to-slate-800">
      <TabbedNav />;
    </div>
  );
}
