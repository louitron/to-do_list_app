import { create } from "zustand";

export const useTodoList = create((set) => ({
  task: "",
  list: [],

  changeTask: (value) => {
    set({ task: value });
  },

  clearTask: () => {
    set({ task: "" });
  },

  addTask: (task) => {
    set((store) => ({ list: [...store.list, { task, done: false }] }));
  },

  completeTask: (index) => {
    set((store) => {
      const newList = [...store.list];
      newList[index].done = true;
      return { list: newList };
    });
  },
}));