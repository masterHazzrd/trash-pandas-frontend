import React from 'react';
import './styles/calendar.css';

function TodoList({ todos, deleteTodo, toggleComplete }) {
  const categories = [
    { name: 'short-term', color: '#ff6700' },
    { name: 'mid-term', color: '#ffce00' },
    { name: 'long-term', color: '#56a0d3' },
  ];

  return (
    <div className="calendar">
      {categories.map((category) => (
        <div key={category.name} className="category-column">
          <h2 style={{ backgroundColor: category.color }}>
            {category.name.replace('-', ' ')} Goals
          </h2>
          <ul>
            {todos
              .filter((todo) => todo.category === category.name)
              .map((todo) => (
                <li key={todo._id} className="task-item">
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
