import { create } from "zustand";

export const useTodoList = create((set) => ({
  task: "", //Use this in place of inputValue
  list: [], //Use this in place of tasks

  changeTask: (value) => {
    set({ task: value });
  },

  addTask: () => {
    set((store) => ({
      list: [...store.list, { task: store.task, done: false }],
      task: "",
    }));
  },

  deleteTask: (index) => {
    set((store) => {
      const newTasks = [...store.list];
      newTasks.splice(index, 1);
      list: newTasks;
    });
  },

  completeTask: (index) => {
    set((store) => {
      const newList = [...store.list];
      newList[index].done = true;
      return { list: newList };
    });
  },
}));
