import React, { useState } from 'react';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <DisplayTodo todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
