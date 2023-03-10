import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";

export function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    if (inputValue) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      <div className="border rounded-md overflow-hidden">
        {tasks.length === 0 && (
          <div className="py-2 px-3 text-gray-600">No tasks, You are all caught up!</div>
        )}
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-3 py-2 border-b hover:bg-gray-100 cursor-pointer"
            >
              <span>{task}</span>
              <HiTrash
                className="h-5 w-5 text-gray-400 hover:text-red-500"
                onClick={() => deleteTask(index)}
              />
            </li>
          ))}
        </ul>
        <div className="px-3 py-2 flex items-center">
          <input
            type="text"
            className="flex-grow border rounded-md py-1 px-2 mr-2"
            placeholder="Add a task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleInputKeyDown}
          />
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
