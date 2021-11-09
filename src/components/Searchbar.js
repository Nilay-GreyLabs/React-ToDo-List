import React, {useState} from "react";
import { useDispatch} from "react-redux";
import {searchTodo} from "../redux/todoSlice";

const Searchbar = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    const handleSearch = () =>{
        dispatch(searchTodo({
            title : value,
        }));

        // console.log(value);
    }

    return (
        <>
            <div className='form-inline d-flex justify-content-center mt-3 mb-3'>
                <input
                    onKeyUp={handleSearch}
                    type='text'
                    className='form-control mb-2 mr-sm-2'
                    placeholder='search todo...'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                ></input>
            </div>
        </>
    )
}

export default Searchbar;