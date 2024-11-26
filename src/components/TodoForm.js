import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('short-term');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({ task, category, completed: false });
      setTask('');
      setCategory('short-term');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="short-term">Short-term</option>
        <option value="mid-term">Mid-term</option>
        <option value="long-term">Long-term</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
