import React from 'react';

const DeleteTodo = ({ deleteTodo, index }) => {
  const handleDeleteTodo = () => {
    deleteTodo(index);
  };

  return <button onClick={handleDeleteTodo}>Delete</button>;
};

export default DeleteTodo;
