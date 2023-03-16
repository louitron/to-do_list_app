import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useShoppingList = create(
  persist(
    (set, get) => ({
      items: [],
      inputValue: "",

      setInputValue: (value) => set({ inputValue: value }),

      addItem: () => {
        const { inputValue, items } = get();
        set({
          items: [...items, { task: inputValue, done: false }],
          inputValue: "",
        });
      },

      deleteItem: (index) => {
        const { items } = get();
        const newItems = [...items];
        newItems.splice(index, 1);
        set({ items: newItems });
      },

      completedPurchase: (index) => {
        const { items } = get();
        const newItems = [...items];
        newItems[index].done = !newItems[index].done;
        set({ items: newItems });
      },

      getIncompletePurchase: () => {
        const { items } = get();
        return items.filter((item) => !item.done);
      },

      clearAllItems: () => {
        const { items } = get();
        const deletedItems = [];
        set({ items: deletedItems });
      },
    }),
    {
      name: "shopping-list-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage1), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useShoppingList;
