import { clippingParents } from "@popperjs/core";
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoList',

    initialState: {
        list: [],
        modified: [],
        isEdit: false,
        todoID: 0,
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
        updateTodo: (state, action) => {
            const id  = action.payload.id;
            const value = action.payload.title;
            // state.list.map(itm => {
            //     if (itm.id === id){
            //         itm.title = value;
            //     }
            //     // return [...state.list, itm];
            //     return itm;
            // });
            const index = state.list.findIndex(itm => itm.id === id);
            state.list[index].title = value;

            state.isEdit = false;
            state.list.forEach(itm => console.log(itm.id));
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
            state.todoID = id;
            state.isEdit = true;
        },
        searchTodo: (state, action) => {
            const newList = state.list.filter(todo => todo.title.includes(action.payload.title));
            // state.modified = state.modified.concat(...newList);
            state.modified = newList;
        }

        
    }
});
 
export const {addTodo, toggleComplete, deleteTodo, searchTodo, editTodo, updateTodo}  = todoSlice.actions;
export default todoSlice.reducer;