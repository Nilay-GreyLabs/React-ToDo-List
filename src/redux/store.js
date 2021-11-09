import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice';

export default configureStore({
    reducer: {

        // when fetching data from state e.g. useSelector(state => state.toList)
        // the name of reducer should be same
        todoList: todoReducer,
    },
});