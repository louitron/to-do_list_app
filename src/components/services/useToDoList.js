import { create } from "zustand";

const useToDoList = create((set, get) => ({
  tasks: [],
  inputValue: '',

  setInputValue: (value) => set({ inputValue: value }),

  addTask: () => {
    const { inputValue, tasks } = get();
    if (inputValue) {
      set({
        tasks: [...tasks, { task: inputValue, done: false }],
        inputValue: '',
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

  getIncompleteTasks: () => {
    const { tasks } = get();
    return tasks.filter((task) => !task.done);
  },
  clearAllItems: () => {
    const { tasks } = get();
    const deletedTasks = [];
    set({ tasks: deletedTasks });
  },
  clearAllTasks: () => {
    const { tasks } = get();
    const deletedTasks = [];
    set({ tasks: deletedTasks });
  },
}));

export default useToDoList;
