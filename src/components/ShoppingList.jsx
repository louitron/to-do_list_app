import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import useShoppingList from "./services/useShoppingList";

export function ShoppingList() {
  const {
    items,
    inputValue,
    setInputValue,
    deleteItem,
    completedPurchase,
    getIncompletePurchase,
    addItem,
  } = useShoppingList();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const incompletePurchase = getIncompletePurchase();

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl text-white font-bold mb-6">Shopping List</h1>
      <div className=" bg-gray-600 border rounded-md overflow-hidden">
        {items.length === 0 && (
          <div className="py-2 px-3 text-center  text-white">
            What do you need to buy?
          </div>
        )}
        <ul>
          {items.map((obj, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-3 py-2 border-b hover:bg-gray-100 cursor-pointer"
            >
              <span
                className={obj.done ? "line-through mr-2" : "mr-2"}
                onClick={() => completedPurchase(index)}
              >
                {obj.task}
              </span>
              <div className="flex">
                <FaCheck
                  className="h-5 w-5 me-4 text-green-500"
                  onClick={() => {
                    completedPurchase(index);
                  }}
                />
                <HiTrash
                  className="h-5 w-5 text-gray-400 hover:text-red-500"
                  onClick={() => deleteItem(index)}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-gray-600 px-3 py-2 flex flex-col justify-center items-center">
          <input
            type="text"
            className="w-full text-center flex-grow border rounded-md py-1 px-2 mr-2"
            placeholder="Enter item here"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
            onClick={addItem}
          >
            Add
          </button>
          <span className="text-white">
            {incompletePurchase.length} Items left to purchase
          </span>
        </div>
      </div>
    </div>
  );
}
