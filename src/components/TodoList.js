import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todoList.list);
  const searched = useSelector(state => state.todoList.modified);

  // console.log(searched.length);
  // const todos = [
  // 	{ id: 1, title: 'todo1', completed: false },
  // 	{ id: 2, title: 'todo2', completed: false },
  // 	{ id: 3, title: 'todo3', completed: true },
  // ];

  return (
    <ul className="list-group">
       {searched.length !== 0
        ? searched.map((todo, index) => <TodoItem key={index} id={todo.id} title={todo.title} completed={todo.completed} />)
        : todos.map((todo, index) => <TodoItem key={index} id={todo.id} title={todo.title} completed={todo.completed} />)}
      
      {/* {
      Object.keys(searched).length === 0
      ?
      Object.keys(todos).map((objIndex, index) => <TodoItem key={index} id={todos[objIndex].id} title={todos[objIndex].title} completed={todos[objIndex].completed} />)
      :
      Object.keys(searched).map((objIndex, index) => <TodoItem key={index} id={searched[objIndex].id} title={searched[objIndex].title} completed={searched[objIndex].completed} />)} */}
    </ul>
  );
};

export default TodoList;
