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
            <li className="-mb-px mr-2 last:mr-0 w-1/3 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blue-600"
                    : "text-slate-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Personal To-Do
              </a>
            </li>
            <li className="-mb-px mr-2 w-1/3 last:mr-0 flex-auto text-center me-0">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-600"
                    : "text-slate-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Business To-Do
              </a>
            </li>
            <li className="-mb-px mr-2 mt-2 w-1/3 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blue-600"
                    : "text-slate-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Shopping List
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ToDo />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <BusinessToDo />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <ShoppingList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
