import { clippingParents } from "@popperjs/core";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const todoSlice = createSlice({
    name: 'todoList',

    initialState: {
        list: [],
        modified: [],
        isEdit: false,
        editId: 0,
    },
    // initialState: [],
    reducers: {
        addTodo: (state, action)=>{
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            };
            // state.push(newTodo);
            state.list.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.list.findIndex(
                todo => todo.id === action.payload.id
            )

            state.list[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
          const newList = state.list.filter(todo => todo.id !== action.payload.id);
          state.list = newList;
        },
        editTodo : (state, action) => {
            const id = action.payload.id;
            state.editId = id;
            state.isEdit = !state.isEdit;
        },
        changeEdit : (state, action) => {
            state.isEdit = !state.isEdit;
        },
        searchTodo: (state, action) => {
            const newList = state.list.filter(todo => todo.title.includes(action.payload.title));
            // state.modified = state.modified.concat(...newList);
            state.modified = newList;
        }

        
    }
});
 
export const {addTodo, toggleComplete, deleteTodo, searchTodo, editTodo, changeEdit}  = todoSlice.actions;
export default todoSlice.reducer;