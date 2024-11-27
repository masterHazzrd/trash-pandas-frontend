import React from 'react';
import './styles/calendar.css';

function TodoList({ todos, deleteTodo, toggleComplete }) {
  const categories = [
    { name: 'short-term', color: 'rgba(255, 103, 0, 0.3)' }, // 30% opacity
    { name: 'mid-term', color: 'rgba(255, 206, 0, 0.3)' }, // 30% opacity
    { name: 'long-term', color: 'rgba(86, 160, 211, 0.3)' }, // 30% opacity
  ];

  return (
    <div className="calendar">
      {categories.map((category) => (
        <div key={category.name} className="category-column">
          <h2 style={{ backgroundColor: category.color.replace('0.3', '1') }}>
            {category.name.replace('-', ' ')} Goals
          </h2>
          <ul>
            {todos
              .filter((todo) => todo.category === category.name)
              .map((todo) => (
                <li
                  key={todo._id}
                  className="task-item"
                  style={{ backgroundColor: category.color }}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo._id)}
                  />
                  {todo.task}
                  <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
