import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import './App.css';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  // Spara till Local Storage med useEffect
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <img src="https://media.istockphoto.com/id/1319163336/sv/foto/reflektioner.jpg?s=612x612&w=0&k=20&c=TwH72s1hu_fGB1LRNA2tjgabvNQl3tEgWKpXHMI8p4A=" alt="Todo Background" className="todo-image" />

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Lägg till en ny todo"
      />
      <button onClick={addTodo}>Lägg till</button>
      <TodoList todos={todos} />
    </div>
  );
  
};

export default TodoApp;
