import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Simulating fetching tasks from a backend
    const fetchTodos = async () => {
      const mockTodos = [
        { _id: '1', task: 'Buy groceries', category: 'short-term', completed: false },
        { _id: '2', task: 'Plan vacation', category: 'mid-term', completed: false },
        { _id: '3', task: 'Learn React', category: 'long-term', completed: false },
      ];
      setTodos(mockTodos);
    };

    fetchTodos();
  }, []);

  const addTodo = (newTask) => {
    setTodos([...todos, { _id: Date.now().toString(), ...newTask }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      <Footer />
    </div>
  );
}

export default App;
