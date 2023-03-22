import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import { auth } from "@/firebase";

const useToDoList = create(
  persist(
    (set, get) => ({
      tasks: [],
      inputValue: "",

      setInputValue: (value) => set({ inputValue: value }),

      addTask: () => {
        const { inputValue, tasks } = get();
        if (inputValue) {
          set({
            tasks: [...tasks, { label: inputValue, done: false }],
            inputValue: "",
          });
          get().updateDataAPI();
        }
      },

      deleteTask: (index) => {
        const { tasks } = get();
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        set({ tasks: newTasks });
        get().updateDataAPI();
      },

      completeTask: (index) => {
        const { tasks } = get();
        const newTasks = [...tasks];
        newTasks[index].done = !newTasks[index].done;
        set({ tasks: newTasks });
        get().updateDataAPI();
      },

      getIncompleteTasks: (index) => {
        const { tasks } = get();
        return tasks.filter((task) => !task.done);
      },
      clearAllTasks: () => {
        const { tasks, updateDataAPI } = get();
        const deletedTasks = [];
        set({ tasks: deletedTasks });
        get().updateDataAPI();
      },
      updateDataAPI: async () => {
        const { tasks } = get();

        if (auth.currentUser) {
          const uid = auth.currentUser.uid;
          const userDocRef = doc(getFirestore(), "users", uid);
          await setDoc(userDocRef, { tasks });
        }
      },
    }),
    {
      name: "todo-storage", // name of the item in the storage (must be unique)
    }
  )
);

export default useToDoList;
