import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const TodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const data = {
                id: state.todos.length + 1,
                text: action.payload.text,
                completed: false,
            };

            state.todos.push(data);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
    },
});
export const { addTodo, removeTodo } = TodoSlice.actions;
export const todoReducers = TodoSlice.reducer;
