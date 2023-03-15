import React from "react";
import { HiTrash } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import useToDoList from "./services/useToDoList";

export function ToDo() {
  const {
    tasks,
    inputValue,
    setInputValue,
    addTask,
    deleteTask,
    completeTask,
    getIncompleteTasks,
  } = useToDoList();

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const incompleteTasks = getIncompleteTasks();
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl text-white font-bold mb-6">To-Do List</h1>
      <div className=" bg-gray-600 border rounded-md overflow-hidden">
        {tasks.length === 0 && (
          <div className="py-2 px-1 text-center  text-white">
            What needs to get done today?
          </div>
        )}
        <ul className="pl-0">
          {tasks.map((obj, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-3 py-2 border-b hover:bg-blue-600 cursor-pointer"
            >
              <span
                className={
                  obj.done
                    ? "line-through mr-2 overflow-auto"
                    : "mr-2 overflow-auto"
                }
                onClick={() => completeTask(index)}
              >
                {obj.task}
              </span>
              <div className="flex">
                <FaCheck
                  className="h-5 w-5 me-4 text-green-500"
                  onClick={() => {
                    completeTask(index);
                  }}
                />
                <HiTrash
                  className="h-5 w-5 text-gray-400 hover:text-red-500"
                  onClick={() => deleteTask(index)}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-gray-600 px-3 py-2 flex flex-col justify-center items-center">
          <input
            type="text"
            className="w-full text-center flex-grow border rounded-md py-1 px-2 mr-2"
            placeholder="Enter Task Here"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <button
            onClick={addTask}
            class="relative overflow-hidden rounded-lg mt-2 bg-black px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2"
          >
            <span class="absolute inset-px z-10 grid place-items-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-400">
              Add
            </span>
            <span
              aria-hidden
              class="absolute p inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-button-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
            />
          </button>
          <span className="text-white">
            {incompleteTasks.length} tasks left
          </span>
        </div>
      </div>
    </div>
  );
}
