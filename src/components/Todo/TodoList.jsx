import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </ul>
  );
}
