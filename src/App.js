import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import axios from 'axios';

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

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const todo = todos.find((t) => t._id === id);
      const updatedTodo = { ...todo, completed: !todo.completed };
      await axios.put(`http://localhost:5000/tasks/${id}`, updatedTodo);
      setTodos(todos.map((t) => (t._id === id ? updatedTodo : t)));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h1>Trasha Pandas</h1>
      <h2>Todo Garbage List</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      <Footer />
    </div>
  );
}

export default App;
