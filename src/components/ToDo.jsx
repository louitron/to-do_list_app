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
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      <div className=" bg-gray-300 border rounded-md overflow-hidden">
        {tasks.length === 0 && (
          <div className="py-2 px-3 text-center  text-gray-600">
            What do you need to get done today?
          </div>
        )}
        <ul>
          {tasks.map((obj, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-3 py-2 border-b hover:bg-gray-100 cursor-pointer"
            >
              <span
                className={obj.done ? "line-through mr-2" : "mr-2"}
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
        <div className="bg-gray-300 px-3 py-2 flex flex-col justify-center items-center">
          <input
            type="text"
            className="w-full text-center flex-grow border rounded-md py-1 px-2 mr-2"
            placeholder="Enter Task Here"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
            onClick={addTask}
          >
            Add
          </button>
          <span>{incompleteTasks.length} tasks left</span>
        </div>
      </div>
    </div>
  );
}
