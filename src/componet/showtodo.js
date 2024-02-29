import React from "react";
import { useSelector } from "react-redux";

export default function Showtodo() {
  // Fetch todos from the Redux store using useSelector
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="container">
      {/* Iterate over todos and display each todo */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
