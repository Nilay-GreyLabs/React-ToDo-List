import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {

	const todos = useSelector(state => state.todoList.list);
	// console.log(todos, "13213213");

	const completed = useSelector(state => state.todoList.list.filter(todo => todo.completed === true))
	const total = todos.length;

	return <h4 className='mt-3'>Total Complete Items: {completed.length}/{total}</h4>;
};

export default TotalCompleteItems;
