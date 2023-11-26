import { create } from "zustand";

interface TodoState {
    inputValue: (value: string) => void;
    todoState: any;
    newTodoState: any;
    addTodo: () => void;
    deleteBtn: (id: number) => void;
}

export const useTodoStore = create<TodoState>()((set) => ({
    todoState: [],
    newTodoState: '',

    inputValue: (value => set({ newTodoState: value })),

    addTodo: () => set((state) => ({
        todoState: [...state.todoState, state.newTodoState],
        newTodoState: '',
    })),

    deleteBtn: (id) => set((state) => ({
        todoState: state.todoState.filter((item: string, index: number) => index !== id),
    })),
}));