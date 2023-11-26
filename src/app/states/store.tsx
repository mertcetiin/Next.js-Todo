import { create } from "zustand";

interface TodoState {
    inputValue: (value: string) => void;
    todoState: any;
    newTodoState: any;
    addTodo: () => void;
    deleteBtn: any;
}

export const useTodoStore = create<TodoState>()((set) => ({
    todoState: [],
    newTodoState: '',

    inputValue: (value => set({ newTodoState: value })),

    addTodo: () => set((state) => ({
        todoState: [...state.todoState, state.newTodoState],
        newTodoState: '',
    })),

    deleteBtn: () => set((state) => ({
        todoState: state.todoState.filter((id: number) => id !== id)
    })),
}));