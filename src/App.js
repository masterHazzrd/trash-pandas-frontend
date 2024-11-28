import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        setTodos(response.data.map((todo) => ({ ...todo, isSelected: false })));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (newTask) => {
    try {
      const response = await axios.post('http://localhost:5000/tasks', newTask);
      setTodos([...todos, { ...response.data, isSelected: false }]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleSelect = (id) => {
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, isSelected: !todo.isSelected } : todo
      )
    );
  };

  const deleteSelectedTasks = async () => {
    try {
      const selectedTasks = todos.filter((todo) => todo.isSelected);
      const idsToDelete = selectedTasks.map((task) => task._id);

      if (idsToDelete.length === 0) {
        console.log('No tasks selected for deletion.');
        return; // Do nothing if no tasks are selected
      }

      // Delete selected tasks
      await Promise.all(
        idsToDelete.map((id) => axios.delete(`http://localhost:5000/tasks/${id}`))
      );

      // Update state to remove deleted tasks
      setTodos(todos.filter((todo) => !todo.isSelected));
    } catch (error) {
      console.error('Error deleting selected tasks:', error);
    }
  };

  return (
    <div>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteSelectedTasks={deleteSelectedTasks}
        toggleSelect={toggleSelect}
      />
      <Footer />
    </div>
  );
}

export default App;
