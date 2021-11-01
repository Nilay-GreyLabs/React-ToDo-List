import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../redux/todoSlice';

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const todoID = useSelector(state => state.todoList.todoID);
  const id = (todoID === undefined || '' || null )? 123 : todoID;
  const isEditable = useSelector(state => state.todoList.isEdit);
	//   console.log(isEditable);

  let todoObject = useSelector(state => state.todoList.list.find(todo => todo.id === id));
  if (todoObject) {
	//   setValue(todoObject.title);
  }
//   setvalue error - during update, it submits as well

  const onSubmit = event => {
	console.log("submitted......");
    event.preventDefault();
    // console.log('user entered: ' + value);
    if(!value){
		alert('empty input');
	}else{
		dispatch(
			addTodo({
			  title: value,
			})
		  );
	}
    setValue('');
  };

  const handleUpdate = () => {
    dispatch(
      updateTodo({
        id: id,
		title: value,
      }),
    );
	todoObject = null;
};

// console.log(isEditable, "is editable");
  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
		autoFocus={isEditable}
        onChange={event => setValue(event.target.value)}
      ></input>

      {isEditable ? (
        <button type="button" onClick={handleUpdate} className="btn btn-success mb-2">
          Update
        </button>
      ) : (
        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      )}
    </form>
  );
};

export default AddTodoForm;
