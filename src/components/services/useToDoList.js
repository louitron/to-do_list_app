import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
            tasks: [...tasks, { task: inputValue, done: false }],
            inputValue: "",
          });
        }
      },

      deleteTask: (index) => {
        const { tasks } = get();
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        set({ tasks: newTasks });
      },

      completeTask: (index) => {
        const { tasks } = get();
        const newTasks = [...tasks];
        newTasks[index].done = !newTasks[index].done;
        set({ tasks: newTasks });
      },

      getIncompleteTasks: (index) => {
        const { tasks } = get();
        return tasks.filter((task) => !task.done);
      },
      clearAllTasks: () => {
        const { tasks } = get();
        const deletedTasks = [];
        set({ tasks: deletedTasks });
      },
    }),
    {
      name: "todo-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage2), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useToDoList;
