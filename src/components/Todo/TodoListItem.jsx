import React from "react";

export default function TodoListItem({ todo }) {
  return <li style={{ backgroundColor: todo.color }}>{todo.text}</li>;
}
