import React from 'react';
import './styles/calendar.css';

function TodoList({ todos, deleteSelectedTasks, toggleSelect }) {
  const categories = [
    { name: 'short-term', color: 'rgba(255, 103, 0, 0.3)' },
    { name: 'mid-term', color: 'rgba(255, 206, 0, 0.3)' },
    { name: 'long-term', color: 'rgba(86, 160, 211, 0.3)' },
  ];

  return (
    <div className="calendar">
      {categories.map((category) => (
        <div key={category.name} className="category-column">
          <h2 style={{ backgroundColor: category.color.replace('0.3', '1') }}>
            {category.name.replace('-', ' ')} Goals
          </h2>
          <div className="task-grid">
            {todos
              .filter((todo) => todo.category === category.name)
              .map((todo) => (
                <div
                  key={todo._id}
                  className="task-box"
                  style={{ backgroundColor: category.color }}
                >
                  <p className="task-text">{todo.task}</p>
                  <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={todo.isSelected}
                    onChange={() => toggleSelect(todo._id)}
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
      <div className="delete-button-container">
        <button onClick={deleteSelectedTasks} className="delete-button">
          Delete Selected
        </button>
      </div>
    </div>
  );
}

export default TodoList;
