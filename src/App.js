import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (newTask) => {
    try {
      const response = await axios.post('http://localhost:5000/tasks', newTask);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteSelected = async (selectedIds) => {
    try {
      await Promise.all(
        selectedIds.map((id) => axios.delete(`http://localhost:5000/tasks/${id}`))
      );
      setTodos(todos.filter((todo) => !selectedIds.includes(todo._id)));
    } catch (error) {
      console.error('Error deleting tasks:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteSelected={deleteSelected} />
      <Footer />
    </div>
  );
}

export default App;
