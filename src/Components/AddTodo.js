import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
