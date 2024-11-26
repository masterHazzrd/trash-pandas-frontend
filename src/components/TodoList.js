import React from 'react';

function TodoList({ todos, deleteTodo, toggleComplete }) {
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
          <ul>
            {todos
              .filter((todo) => todo.category === category.name)
              .map((todo) => (
                <li
                  key={todo._id}
                  style={{
                    backgroundColor: `${category.color}30`, // 30% lighter
                  }}
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
