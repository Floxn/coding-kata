
// create a Todo store
// use the todoTypes as types
import {create} from "zustand";
import {TodoState} from "../types/todoTypes";
import {uid} from "react-uid";

const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    addTodo: (text) => set((state: TodoState) => ({
        todos: [
            ...state.todos,
            {
                text: text,
                id: uid(`${text}-${state.todos.length}`),
                isCompleted: false
            }
        ]
    })),
    deleteTodo: (id) => {},
    completeTodo: (id) => {},
}))
export {useTodoStore}