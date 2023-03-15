import React, { useState } from "react";
import { ToDo } from "./ToDo";
import { BusinessToDo } from "./BusinessToDo";
import { ShoppingList } from "./ShoppingList";
export const TabbedNav = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className=" flex flex-wrap">
        <div className="w-full">
          <ul
            className=" ps-0 flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className=" last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-slate-900"
                    : "text-slate-500 bg-black")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Personal
              </a>
            </li>
            <li className=" flex-auto text-center me-0">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-slate-900"
                    : "text-slate-500 bg-black")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Coding
              </a>
            </li>
            <li className="last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-slate-900"
                    : "text-slate-500 bg-black")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Shopping
              </a>
            </li>
          </ul>
          <div className="my-10 relative mx-auto grid  w-80 max-w-lg place-items-center bg-[linear-gradient(var(--rotate),var(--tw-gradient-from)_33%,rgb(0_0_255)_66%,var(--tw-gradient-to))] from-blue-600 via-blue-600 to-blue-700 animate-rotate  shadow-sm ring-1 ring-gray-900/5 sm:mx-auto  rounded-lg p-2 before:absolute before:inset-0 before:bg-[linear-gradient(var(--rotate),var(--tw-gradient-from)_33%,rgb(0_0_255)_66%,var(--tw-gradient-to))] before:from-blue-500 before:via-blue-700 before:to-blue-900 before:z-0 before:blur-2xl before:hover:blur-3xl before:hover:scale-90 before:transition-all before:animate-rotate  before:w-full before:h-full ">
            <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded ">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <ToDo />
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <BusinessToDo />
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <ShoppingList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
