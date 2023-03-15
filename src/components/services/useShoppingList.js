import { create} from "zustand";

const useShoppingList = create((set, get) => ({
    items: [],
    inputValue: "",

    setInputValue: (value) => set({inputValue: value}),

    addItem: () => {
       const {inputValue, items} = get();
       set({items: [...items, {task: inputValue, done: false}],
       inputValue: ""})
    },

    deleteItem: (index) => {
        const { items } = get();
        const newItems = [...items];
        newItems.splice(index, 1);
        set({items: newItems});
    },

    completedPurchase: (index) => {
        const { items } = get();
        const newItems = [...items];
        newItems[index].done = !newItems[index].done
        set({ items: newItems });
    },

    getIncompletePurchase: () => {
        const { items } = get();
        return items.filter((item) => !item.done);
    },


}));

export default useShoppingList;