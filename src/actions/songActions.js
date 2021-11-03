import { 
    ADD_SONG, 
    REMOVE_SONG, 
    UPDATE_SONG, 
    EDIT_SONG,
    CANCEL_EDIT,
} from './types';

export const addSong = song => {
  return {
    type: ADD_SONG,
    payload: song,
  };
};

export const removeSong = index => {
    return {
        type: REMOVE_SONG,
        payload: index,
    }
}
export const updateSong = (index, title) => {
    return {
        type: UPDATE_SONG,
        payload: {
            index,
            title,
        },
    }
}
export const editSong = (index)=> {
    return {
        type: EDIT_SONG,
        payload: index,
    }
}
export const cancelEdit = (index) => {
    return {
        type: CANCEL_EDIT,
        payload: index,
    }
}