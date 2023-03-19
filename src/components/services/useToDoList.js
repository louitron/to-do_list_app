import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { auth, db } from "@/firebase";

console.log('db in useToDoList:', db); 


const useToDoList = create(
  persist(
    (set, get) => ({
      tasks: [],
      inputValue: "",

      setInputValue: (value) => set({ inputValue: value }),

      addTask: () => {
        const { inputValue, tasks, updateDataAPI } = get();
        if (inputValue) {
          set({
            tasks: [...tasks, { label: inputValue, done: false }],
            inputValue: "",
          });
          updateDataAPI();
        }
      },

      deleteTask: (index) => {
        const { tasks, updateDataAPI } = get();
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        set({ tasks: newTasks });
        updateDataAPI();
      },

      completeTask: (index) => {
        const { tasks, updateDataAPI } = get();
        const newTasks = [...tasks];
        newTasks[index].done = !newTasks[index].done;
        set({ tasks: newTasks });
        updateDataAPI();
      },

      getIncompleteTasks: (index) => {
        const { tasks } = get();
        return tasks.filter((task) => !task.done);
      },
      clearAllTasks: () => {
        const { tasks, updateDataAPI } = get();
        const deletedTasks = [];
        set({ tasks: deletedTasks });
        updateDataAPI();
      },
      getTodosFromAPI: () => {
        if (typeof window !== "undefined" && auth.currentUser && db) {
          const todoRef = db.collection("todos").doc(auth.currentUser.uid);
          todoRef.get().then((doc) => {
            if (doc.exists) {
              set({ tasks: doc.data().tasks });
            } else {
              todoRef.set({ tasks: [] });
            }
          });
        }
      },

      updateDataAPI: () => {
        if (typeof window !== "undefined" && auth.currentUser && db) {
          const todoRef = db.collection("todos").doc(auth.currentUser.uid);
          const { tasks } = get();
          todoRef.set({ tasks: tasks });
        }
      },
    }),
    {
      name: "todo-storage", // name of the item in the storage (must be unique)
    }
  )
);

export default useToDoList;
