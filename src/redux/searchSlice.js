import { clippingParents } from '@popperjs/core';
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchList',

  initialState: ['123', '456'],
  reducers: {
    searchTodo: (state, action) => {
      return state.filter(todo => todo.title.includes(action.payload.title));
    },
  },
});

export const {searchTodo} = searchSlice.actions;
export default searchSlice.reducer;