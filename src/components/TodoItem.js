import React from 'react';
import { useDispatch } from 'react-redux';
import {toggleComplete, deleteTodo, editTodo} from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {

	const dispatch = useDispatch();
	const handleToggle = () => {
		dispatch(toggleComplete({
			id: id,
			completed: !completed,
		}));
	}

	const handleDelete = () => {
		dispatch(deleteTodo({
			id: id,
		}));
	}

	const handleEdit = () => {
		dispatch(editTodo({
			id: id,
		}));
		// console.log(id, 'todoList')
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between' >
				<span className='d-flex align-items-center' onClick={handleToggle}>
					<input type='checkbox' className='mr-3' checked={completed} onChange={handleToggle}></input>
					{title}
				</span>
				<button className='btn btn-info' onClick={handleEdit}>Edit</button>
				<button className='btn btn-outline-danger' onClick={handleDelete}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
