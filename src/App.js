import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);

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
      {/* Header */}
      <Header />

      {/* Todo Form */}
      <TodoForm addTodo={addTodo} />

      {/* Todo List */}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
