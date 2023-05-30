import React from 'react';
import DeleteTodo from './DeleteTodo';

const DisplayTodo = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <DeleteTodo deleteTodo={deleteTodo} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default DisplayTodo;
