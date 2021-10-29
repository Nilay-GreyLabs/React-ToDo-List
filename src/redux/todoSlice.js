import { clippingParents } from "@popperjs/core";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoList',

    initialState: {
        list: [],
        // string: true,
        modified: [],
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
            return state.list.filter(todo => todo.id !== action.payload.id);
        },
        searchTodo: (state, action) => {
            const newList = state.list.filter(todo => todo.title.includes(action.payload.title));
            // state.modified = state.modified.concat(...newList);
            state.modified = newList;
        }

        
    }
});
 
export const {addTodo, toggleComplete, deleteTodo, searchTodo}  = todoSlice.actions;
export default todoSlice.reducer;