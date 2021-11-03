// we set our initial state and pass it in our reducer function 

import { bindActionCreators } from "redux"
import { defaultEqualityCheck } from "reselect"
import {ADD_SONG, CANCEL_EDIT, EDIT_SONG, REMOVE_SONG, UPDATE_SONG, COPY_CONTENT} from "../actions/types";
// in the switch statement we will listen for an action

const initialState = {
    songs: [
        {
            title: "123",
            editing: false,
        },
        {
            title: "React-Redux",
            editing: false,
        },
        {
            title: "class based components",
            editing: false,
        },
    ],
}

export default (state = initialState, action) => {
    switch (action.type){
        case ADD_SONG:
            const obj = action.payload;
            obj.editing = false;
            return{
                songs: [obj, ...state.songs]
            }
        case REMOVE_SONG:
            const i = action.payload;
            const newSongs = state.songs.filter((song, index) => {
                return action.payload !== index
            });
            return{
                songs: newSongs
            }
        case EDIT_SONG:
            // console.log(action.payload);
            const j = action.payload;
            console.log(state.songs[j]);
            return{
                songs: state.songs.map((song, index) => j === index ? { ...song, editing: true} : {...song, editing: false}),
            }
        case UPDATE_SONG:
            // j is declared above for editing ele.
            const k = action.payload.index;
            const title = action.payload.title;
            return{
                songs: state.songs.map((song, index) =>  index === k ? {...song, title: title, editing: false} : song),
            }
        
        case CANCEL_EDIT:
            const l = action.payload;
            return{
                songs: state.songs.map((song, i) => i === l ? {...song, editing: false} : song),
            }
        case COPY_CONTENT:
            const theClipboard = window.navigator.clipboard;
            const copied = theClipboard.writeText(action.title)
            .then(alert(`copied! ${action.title}`));
            // .then is not mandatory

            return{
                songs: state.songs,
            }
        default:
            return state;
    }
}