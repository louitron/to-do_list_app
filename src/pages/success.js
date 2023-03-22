import React, { useEffect } from "react";
import { Success } from "@/components/Success";

export default function Redirect() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 3500);
  }, []);

  return (
    <div>
      <div className="flex flex-col overflow-auto w-screen  h-screen bg-gradient-to-t from-black to-slate-800">
        <Success />
      </div>
    </div>
  );
}
