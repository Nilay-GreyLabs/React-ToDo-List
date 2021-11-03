// here import all the application reducers and passed them to a function named combineReducer 

// which will be passed into createStore function in index.js(main)

import { combineReducers } from "redux";
import songReducers from "./songReducers";

const allReducers = combineReducers({
    songs: songReducers,
});

export default allReducers;