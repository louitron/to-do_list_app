import React from "react";
import { ToDo } from "./ToDo";
import { SignInButton } from "./SignInButton";
export const TabbedNav = () => {
  return (
    <>
      <div className=" flex w-full flex-wrap">
        <div className="w-full">
          <div className="my-10 relative mx-auto grid  w-80 max-w-lg place-items-center bg-[linear-gradient(var(--rotate),var(--tw-gradient-from)_33%,rgb(0_0_255)_66%,var(--tw-gradient-to))] from-blue-600 via-blue-600 to-blue-700 animate-rotate  shadow-sm ring-1 ring-gray-900/5 sm:mx-auto  rounded-lg p-2 before:absolute before:inset-0 before:bg-[linear-gradient(var(--rotate),var(--tw-gradient-from)_33%,rgb(0_0_255)_66%,var(--tw-gradient-to))] before:from-blue-500 before:via-blue-700 before:to-blue-900 before:z-0 before:blur-2xl before:hover:blur-3xl before:hover:scale-90 before:transition-all before:animate-rotate  before:w-full before:h-full ">
            <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded ">
              <div className="px-4 py-5 flex-auto">
                <ToDo />
                <SignInButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
