import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";

export function ShoppingList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    if (inputValue) {
      setTasks([...tasks, { task: inputValue, done: false }]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const completedTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
    console.log(newTasks);
  };

  const incompleteTasks = tasks.filter((task) => !task.done);

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Business To-Do</h1>
      <div className=" bg-gray-300 border rounded-md overflow-hidden">
        {tasks.length === 0 && (
          <div className="py-2 px-3 text-center  text-gray-600">
            What do you need to buy today?
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
                onClick={() => completedTask(index)}
              >
                {obj.task}
              </span>
              <div className="flex">
                <FaCheck
                  className="h-5 w-5 me-4 text-green-500"
                  onClick={() => {
                    completedTask(index);
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
            placeholder="What else do you need to buy?"
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
          <span>{incompleteTasks.length} tasks left</span>
        </div>
      </div>
    </div>
  );
}
