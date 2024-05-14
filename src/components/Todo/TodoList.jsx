import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, onRemove, onEdit }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onEdit={(text) => {
            onEdit(todo.id, text);
          }}
          onRemove={() => {
            onRemove(todo.id);
          }}
        />
      ))}
    </ul>
  );
}
