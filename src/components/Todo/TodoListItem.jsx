import React from "react";

export default function TodoListItem({ todo, onRemove }) {
  return (
    <li
      style={{
        backgroundColor: todo.color,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>{todo.text}</div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <button
            onClick={(e) => {
              onRemove();
            }}
          >
            삭제
          </button>
        </li>
      </ul>
    </li>
  );
}
