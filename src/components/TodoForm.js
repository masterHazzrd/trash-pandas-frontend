import React, { useState } from 'react';
import './styles/form.css'; // Assuming you have styles for the form

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('short-term');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({ task, category, completed: false });
      setTask('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="short-term">Short-Term</option>
        <option value="mid-term">Mid-Term</option>
        <option value="long-term">Long-Term</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
