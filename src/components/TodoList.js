import React, { useState } from 'react';
import './TodoList.css'; // Updated CSS file

function TodoList({ todos, deleteSelected }) {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const toggleSelect = (id) => {
    setSelectedTasks((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((taskId) => taskId !== id)
        : [...prevSelected, id]
    );
  };

  const categories = [
    { name: 'short-term', color: '#ff6700' },
    { name: 'mid-term', color: '#ffce00' },
    { name: 'long-term', color: '#56a0d3' },
  ];

  return (
    <div className="todo-list">
      {categories.map((category) => (
        <div key={category.name} className="category">
          <h2 style={{ backgroundColor: category.color }}>
            {category.name.replace('-', ' ')} Goals
          </h2>
          <div className="task-grid">
            {todos
              .filter((todo) => todo.category === category.name)
              .map((todo) => (
                <div
                  key={todo._id}
                  className="task-card"
                  style={{
                    backgroundColor: `${category.color}30`,
                    borderLeft: `5px solid ${category.color}`,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedTasks.includes(todo._id)}
                    onChange={() => toggleSelect(todo._id)}
                  />
                  <p>{todo.task}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
      <button onClick={() => deleteSelected(selectedTasks)}>Delete Selected</button>
    </div>
  );
}

export default TodoList;
