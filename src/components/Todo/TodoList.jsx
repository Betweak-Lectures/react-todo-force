import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, onRemove }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo, idx) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={() => {
            onRemove(todo.id);
          }}
        />
      ))}
    </ul>
  );
}
