import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = () => {
    if (inputText.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputText }]);
      setInputText('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      
      <div className="add-todo">
        <input 
          type="text" 
          value={inputText} 
          onChange={handleInputChange} 
          placeholder="Add a new task" 
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      {/* Conditional rendering for empty list */}
      {todos.length === 0 ? (
        <p className="empty-message">No tasks in the list!</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;